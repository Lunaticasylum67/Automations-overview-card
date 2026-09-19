const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
process.env.TZ='UTC';
let Card;
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'..','automations-overview-card.js'),'utf8'),{
  HTMLElement:class{},window:{},console,
  customElements:{get:()=>false,define:(_,value)=>{Card=value;}}
});
const reference=JSON.parse(fs.readFileSync(path.join(__dirname,'astral-dusk-reference.json'),'utf8'));
const day=new Date('2026-09-19T00:00:00Z');
const automation={entity_id:'automation.dusk',attributes:{friendly_name:'Evening'}};
function card(){
  const c=new Card(); c.config={language:'en'};
  c._hass={config:{latitude:48.8566,longitude:2.3522,elevation:35,time_zone:'Europe/Paris'},states:{
    'input_boolean.vacation':{state:'on',attributes:{}}
  }};
  return c;
}
const dusk=(options={})=>({trigger:'sun.dusk',options});
const predict=(c,trigger=dusk(),conditions=[],date=day)=>c._predict({triggers:[trigger],conditions},date,automation);
const expected=(kind='civil',date='2026-09-19',location='Paris')=>
  new Date(reference.cases.find(c=>c.location===location&&c.kind===kind&&c.day===date).expected);
const close=(actual,wanted)=>assert.ok(Math.abs(+actual-+wanted)<=2,`${actual.toISOString()} vs ${wanted.toISOString()}`);

test('300 independent reference cases match Astral 3.2 within 2 milliseconds', t=>{
  const c=card(); let max=0, absent=0;
  for(const fixture of reference.cases){
    const observer={latitude:fixture.latitude,longitude:fixture.longitude,elevation:fixture.elevation};
    const actual=c._astralDuskUTC(new Date(fixture.day+'T00:00:00Z'),observer,fixture.depression);
    if(fixture.expected===null){assert.equal(actual,null,JSON.stringify(fixture));absent++;}
    else {
      const error=Math.abs(+actual-Date.parse(fixture.expected));
      assert.ok(actual&&error<=2,JSON.stringify({fixture,actual,error}));max=Math.max(max,error);
    }
  }
  t.diagnostic(`${reference.cases.length} cases; ${absent} absent twilight events; maximum difference ${max} ms`);
});
test('exact issue #2 YAML becomes planned with its actual civil dusk time',()=>{
  const r=predict(card(),dusk({offset:{days:0,hours:0,minutes:0,seconds:0},offset_type:'before',type:'civil'}));
  assert.equal(r.conditional,false);assert.equal(r.events.length,1);assert.equal(r.events[0].type,'planned');
  assert.equal(r.events[0].detail,'Civil dusk');close(r.events[0].time,expected());
});
test('tomorrow is calculated separately, not today plus 24 hours',()=>{
  const today=predict(card()).events[0].time;
  const tomorrow=predict(card(),dusk(),[],new Date('2026-09-20T00:00:00Z')).events[0].time;
  close(tomorrow,expected('civil','2026-09-20'));
  assert.ok(Math.abs(+tomorrow-+today-86400000)>1000);
});
test('all twilight phases use distinct Astral times and correct labels',()=>{
  const c=card();let previous=0;
  for(const type of ['civil','nautical','astronomical']){
    const r=predict(c,dusk({type}));assert.equal(r.events.length,1);close(r.events[0].time,expected(type));
    assert.ok(+r.events[0].time>previous);previous=+r.events[0].time;
  }
  c.config.language='fr';assert.equal(predict(c).events[0].detail,'Crépuscule civil');
});
test('before/after offsets support objects, strings and numeric seconds',()=>{
  const c=card();
  for(const offset of [{minutes:30},'00:30:00',1800]){
    close(predict(c,dusk({offset,offset_type:'before'})).events[0].time,new Date(+expected()-1800000));
    close(predict(c,dusk({offset,offset_type:'after'})).events[0].time,new Date(+expected()+1800000));
  }
});
test('default offset direction is before; signed offsets are not inverted twice',()=>{
  close(predict(card(),dusk({offset:'00:10:00'})).events[0].time,new Date(+expected()-600000));
  close(predict(card(),dusk({offset:'-00:10:00',offset_type:'before'})).events[0].time,new Date(+expected()+600000));
});
test('after-midnight offsets use the previous solar day',()=>{
  const r=predict(card(),dusk({offset:{hours:8},offset_type:'after'}),[],new Date('2026-09-20T00:00:00Z'));
  assert.equal(r.events.length,1);close(r.events[0].time,new Date(+expected()+8*3600000));
});
test('before-midnight offsets use the following solar day',()=>{
  const r=predict(card(),dusk({offset:{hours:20},offset_type:'before'}));
  assert.equal(r.events.length,1);close(r.events[0].time,new Date(+expected('civil','2026-09-20')-20*3600000));
});
test('multi-day offsets shift the search window without a fixed look-ahead limit',()=>{
  const r=predict(card(),dusk({offset:{days:7,hours:1},offset_type:'after'}),[],new Date('2026-09-26T00:00:00Z'));
  assert.equal(r.events.length,1);close(r.events[0].time,new Date(+expected()+7*86400000+3600000));
});
test('invalid types and dynamic/malformed offsets remain conditional',()=>{
  for(const options of [{type:'invalid'},{type:'toString'},{offset:'{{ states("input_number.delay") }}'},
    {offset:{minutes:'{{ delay }}'}},{offset:'00:99:00'},{offset:null},{offset_type:'sideways'},
    {offset:{weeks:1}},{offset:Infinity},{offset:1e30}]){
    const r=predict(card(),dusk(options));assert.equal(r.events.length,0);assert.equal(r.conditional,true);
  }
});
test('next_dusk is preferred for civil twilight only',()=>{
  const c=card();const supplied=new Date(+expected()+500);
  c._hass.states['sun.sun']={state:'above_horizon',attributes:{next_dusk:supplied.toISOString()}};
  assert.equal(+predict(c).events[0].time,+supplied);
  close(predict(c,dusk({type:'nautical'})).events[0].time,expected('nautical'));
});
test('without coordinates, usable next_dusk is a conservative civil-only fallback',()=>{
  const c=card();c._hass.config={time_zone:'UTC'};
  c._hass.states['sun.sun']={state:'above_horizon',attributes:{next_dusk:expected().toISOString()}};
  assert.equal(predict(c).conditional,false);close(predict(c).events[0].time,expected());
  assert.equal(predict(c,dusk({type:'astronomical'})).conditional,true);
  assert.equal(predict(c,dusk(),[],new Date('2026-09-20T00:00:00Z')).conditional,true);
  c._hass.states['sun.sun'].state='unavailable';assert.equal(predict(c).conditional,true);
});
test('invalid coordinates and timestamps never produce Invalid Date plans',()=>{
  const c=card();c._hass.config.latitude=null;
  c._hass.states['sun.sun']={state:'above_horizon',attributes:{next_dusk:'bad-date'}};
  assert.equal(predict(c).conditional,true);assert.equal(predict(c).events.length,0);
});
test('polar days with no dusk have no planned event and are not unknown',()=>{
  const c=card();c._hass.config={latitude:69.6492,longitude:18.9553,elevation:0,time_zone:'Europe/Oslo'};
  const r=predict(c,dusk(),[],new Date('2026-06-21T00:00:00Z'));
  assert.equal(r.events.length,0);assert.equal(r.conditional,false);
});
test('issue #1 boolean and schedule conditions apply at dusk after the offset',()=>{
  const c=card();const vacation={condition:'state',entity_id:'input_boolean.vacation',state:'on'};
  assert.equal(predict(c,dusk(),[vacation]).events.length,1);
  c._hass.states['input_boolean.vacation'].state='off';assert.equal(predict(c,dusk(),[vacation]).events.length,0);
  c._hass.config.time_zone='UTC';c._hass.states['schedule.evening']={state:'off'};
  c._schedules={'schedule.evening':Object.fromEntries(['sunday','monday','tuesday','wednesday','thursday','friday','saturday'].map(d=>[d,d==='saturday'?[{from:'18:00',to:'19:00'}]:[]]))};
  const condition={condition:'state',entity_id:'schedule.evening',state:'on'};
  assert.equal(predict(c,dusk(),[condition]).events.length,1);
  assert.equal(predict(c,dusk({offset:{hours:2},offset_type:'after'}),[condition]).events.length,0);
});
test('unsupported solar triggers remain conditional; legacy sun is preserved',()=>{
  const c=card();assert.equal(predict(c,{trigger:'sun.elevation_crossed_threshold'}).conditional,true);
  c._hass.states['sun.sun']={state:'above_horizon',attributes:{next_setting:'2026-09-19T17:50:00Z'}};
  const r=predict(c,{trigger:'sun',event:'sunset',offset:'00:10:00'});
  assert.equal(r.events[0].time.toISOString(),'2026-09-19T18:00:00.000Z');
});
test('location, elevation and next_dusk changes trigger refresh; sun elevation chatter does not',async()=>{
  const c=card();c.shadowRoot={childNodes:[{}]};c._targetDate=()=>day;
  let loads=0;c._loadData=async()=>{loads++;};
  let hass=c._hass;c.hass=hass;await c._loadTask;
  hass={...hass,config:{...hass.config,elevation:200}};c.hass=hass;await c._loadTask;assert.equal(loads,2);
  hass={...hass,config:{...hass.config,latitude:47}};c.hass=hass;await c._loadTask;assert.equal(loads,3);
  hass={...hass,states:{...hass.states,'sun.sun':{state:'above_horizon',attributes:{next_dusk:expected().toISOString(),elevation:20}}}};
  c.hass=hass;await c._loadTask;assert.equal(loads,4);
  c.hass={...hass,states:{...hass.states,'sun.sun':{...hass.states['sun.sun'],attributes:{...hass.states['sun.sun'].attributes,elevation:21}}}};
  await c._loadTask;assert.equal(loads,4);
});
test('browser day across the date line selects the correct UTC solar date',()=>{
  const old=process.env.TZ;
  try {
    process.env.TZ='Pacific/Auckland';
    const r=predict(card(),dusk(),[],new Date(2026,8,20));
    assert.equal(r.events.length,1);close(r.events[0].time,expected('civil','2026-09-19'));
  } finally {process.env.TZ=old;}
});
test('offset remains elapsed time over the European DST transition',()=>{
  const old=process.env.TZ;
  try {
    process.env.TZ='Europe/Paris';
    const r=predict(card(),dusk({offset:{hours:10},offset_type:'after'}),[],new Date(2026,2,30));
    assert.equal(r.events.length,1);close(r.events[0].time,new Date(+expected('civil','2026-03-29')+10*3600000));
  } finally {process.env.TZ=old;}
});

