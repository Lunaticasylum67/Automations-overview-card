const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
process.env.TZ = 'UTC'; // Stable browser-day fixtures on every developer machine.
// The browser stubs only register the real card. All prediction methods below
// run unchanged from the distributable file.
let Card;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'automations-overview-card.js'), 'utf8'), {
  HTMLElement: class {}, window: {}, console: {...console, debug:()=>{}},
  customElements: { get: () => false, define: (_, value) => { Card = value; } }
});
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const week = (overrides = {}) => Object.assign(Object.fromEntries(days.map(d => [d, []])), overrides);
const block = (from, to) => ({ from, to });
const date = new Date(2030, 0, 7); // Monday, displayed in the browser's zone.
const instant = hour => new Date(`2030-01-07T${hour}:00:00Z`);
const automation = {entity_id:'automation.test',state:'on',attributes:{id:'test',friendly_name:'Test'}};
const gate = (id, state='on') => ({condition:'state',entity_id:id,state});
const vacation = gate('input_boolean.vacation');
const time = at => ({trigger:'time',at});
const scheduleStart = {trigger:'state',entity_id:'schedule.work',to:'on'};
const nativeStart = {trigger:'schedule.block_started',target:{entity_id:'schedule.work'}};
function card() {
  const c = new Card();
  c.config = {language:'en',show_conditionals:true,merge_seconds:45};
  c._dayOffset = 1;
  c._hass = {config:{time_zone:'UTC'},states:{
    'input_boolean.vacation': {state:'on',attributes:{}},
    'schedule.work': {state:'off',attributes:{friendly_name:'Work'}},
    'automation.test': automation
  }};
  c._schedules = {'schedule.work': week({monday:[block('09:00:00','12:00:00'),block('14:00:00','17:00:00')]})};
  return c;
}
function predict(c, triggers, conditions=[], day=date) {
  return c._predict({triggers:[].concat(triggers),conditions},day,automation);
}
function hours(result) { return Array.from(result.events, e => e.time.toISOString().slice(11,16)).sort(); }

test('vacation ON and OFF select the complementary automations', () => {
  const c=card();
  assert.equal(predict(c,time('10:00'),[vacation]).events.length,1);
  assert.equal(predict(c,time('10:00'),[gate('input_boolean.vacation','off')]).events.length,0);
  c._hass.states['input_boolean.vacation'].state='off';
  assert.equal(predict(c,time('10:00'),[vacation]).events.length,0);
  assert.equal(predict(c,time('10:00'),[gate('input_boolean.vacation','off')]).events.length,1);
});
test('schedule conditions use the future trigger instant, not current state or midnight', () => {
  const c=card();
  assert.deepEqual(hours(predict(c,[time('08:00'),time('09:00'),time('11:59'),time('12:00'),time('14:00')],[gate('schedule.work'),vacation])),['09:00','11:59','14:00']);
});
test('inactive weekday suppresses the automation even if schedule is currently ON', () => {
  const c=card(); c._hass.states['schedule.work'].state='on';
  const r=predict(c,time('10:00'),[gate('schedule.work')],new Date(2030,0,8));
  assert.equal(r.events.length,0); assert.equal(r.conditional,false);
});
test('schedule OFF condition uses future inactivity', () => {
  assert.deepEqual(hours(predict(card(),[time('10:00'),time('12:00')],[gate('schedule.work','off')])),['12:00']);
});
test('all schedule starts and ends are predicted', () => {
  assert.deepEqual(hours(predict(card(),scheduleStart)),['09:00','14:00']);
  assert.deepEqual(hours(predict(card(),{...scheduleStart,to:'off'})),['12:00','17:00']);
});
test('native block start and end triggers are predicted', () => {
  assert.deepEqual(hours(predict(card(),nativeStart)),['09:00','14:00']);
  assert.deepEqual(hours(predict(card(),{...nativeStart,trigger:'schedule.block_ended'})),['12:00','17:00']);
});
test('touching blocks: native start fires again, state ON does not; OFF only at final end', () => {
  const c=card(); c._schedules['schedule.work']=week({monday:[block('09:00','10:00'),block('10:00','12:00')]});
  assert.deepEqual(hours(predict(c,nativeStart)),['09:00','10:00']);
  assert.deepEqual(hours(predict(c,scheduleStart)),['09:00']);
  assert.deepEqual(hours(predict(c,{...nativeStart,trigger:'schedule.block_ended'})),['12:00']);
});
test('midnight continuation has no false OFF/ON; native block start remains visible', () => {
  const c=card(); c._schedules['schedule.work']=week({sunday:[block('22:00','24:00')],monday:[block('00:00','02:00')]});
  assert.deepEqual(hours(predict(c,scheduleStart)),[]);
  assert.deepEqual(hours(predict(c,nativeStart)),['00:00']);
  assert.deepEqual(hours(predict(c,{...scheduleStart,to:'off'})),['02:00']);
});
test('previous day ending at 24:00 produces an OFF trigger at midnight', () => {
  const c=card(); c._schedules['schedule.work']=week({sunday:[block('22:00','24:00')]});
  assert.deepEqual(hours(predict(c,{...scheduleStart,to:'off'})),['00:00']);
});
test('nested AND/OR/NOT and shorthand conditions use three-valued logic', () => {
  const c=card(); const unknown={condition:'template',value_template:'{{ something }}'};
  const verdict = conditions => c._conditionVerdict({conditions},instant('10'));
  assert.equal(verdict([{condition:'and',conditions:[vacation,{or:[unknown,gate('schedule.work')]}]}]),'ok');
  assert.equal(verdict([{condition:'not',conditions:[vacation,unknown]}]),'blocked');
  assert.equal(verdict([{not:[gate('input_boolean.vacation','off')]}]),'ok');
  assert.equal(verdict([{and:[unknown,gate('input_boolean.vacation','off')]}]),'blocked');
  assert.equal(verdict([{or:[unknown,gate('input_boolean.vacation','off')]}]),'uncertain');
});
test('any/all entity lists handle missing entities without discarding decisive results', () => {
  const c=card(); const condition={condition:'state',entity_id:['input_boolean.missing','input_boolean.vacation'],state:'on',match:'any'};
  assert.equal(c._conditionVerdict({conditions:[condition]},instant('10')),'ok');
  condition.match='all'; c._hass.states['input_boolean.vacation'].state='off';
  assert.equal(c._conditionVerdict({conditions:[condition]},instant('10')),'blocked');
});
test('unknown/unavailable booleans remain conditional even inside NOT', () => {
  const c=card();
  for(const value of ['unknown','unavailable']) {
    c._hass.states['input_boolean.vacation'].state=value;
    assert.equal(predict(c,time('10:00'),[{not:[vacation]}]).conditional,true);
  }
});
test('arbitrary sensors and templates are not extrapolated as boolean gates', () => {
  const c=card(); c._hass.states['binary_sensor.motion']={state:'on'};
  assert.equal(predict(c,time('10:00'),[gate('binary_sensor.motion')]).conditional,true);
  assert.equal(predict(c,time('10:00'),['{{ true }}']).conditional,true);
});
test('native schedule conditions and zero-duration defaults', () => {
  const c=card();
  assert.equal(predict(c,time('10:00'),[{condition:'schedule.is_on',target:{entity_id:'schedule.work'},options:{behavior:'all',for:{seconds:0}}}]).events.length,1);
  assert.equal(predict(c,{...nativeStart,options:{for:{hours:0,minutes:0,seconds:0}}}).events.length,2);
});
test('missing definitions stay conditional; valid empty schedules produce no events', () => {
  const c=card(); c._schedules={};
  assert.equal(predict(c,scheduleStart).conditional,true);
  assert.equal(predict(c,time('10:00'),[gate('schedule.work','off')]).conditional,true);
  c._schedules['schedule.work']=week();
  assert.equal(predict(c,scheduleStart).conditional,false);
  assert.equal(predict(c,scheduleStart).events.length,0);
});
test('unsupported duration/attribute/aggregate targets stay conditional', () => {
  const c=card();
  for(const trigger of [{...scheduleStart,for:'00:05:00'},{...scheduleStart,attribute:'value'},
    {...nativeStart,options:{behavior:'all'}},{...nativeStart,target:{area_id:'room'}}]) {
    const r=predict(c,trigger); assert.equal(r.events.length,0); assert.equal(r.conditional,true);
  }
});
test('trigger IDs and disabled conditions/triggers do not create false plans', () => {
  const c=card();
  assert.deepEqual(hours(predict(c,[{...time('10:00'),id:'yes'},{...time('11:00'),id:'no'},{...time('12:00'),id:'yes',enabled:false}],
    [{condition:'trigger',id:'yes'},{...vacation,state:'off',enabled:false}])),['10:00']);
});
test('weekday/time windows evaluate each candidate, including overnight ranges', () => {
  const c=card();
  assert.deepEqual(hours(predict(c,[time('09:00'),time('10:00'),time('12:00')],[{condition:'time',weekday:'mon',after:'10:00',before:'12:00'}])),['10:00']);
  assert.deepEqual(hours(predict(c,[time('01:00'),time('10:00'),time('23:00')],[{condition:'time',after:'22:00',before:'02:00'}])),['01:00','23:00']);
});
test('time-pattern and sun predictions apply schedule and boolean gates', () => {
  const c=card(); c._sunForDate=()=>instant('10');
  assert.equal(predict(c,{trigger:'time_pattern',hours:10,minutes:0},[gate('schedule.work')]).events.length,1);
  assert.equal(predict(c,{trigger:'sun',event:'sunrise'},[gate('schedule.work')]).events.length,1);
  c._hass.states['input_boolean.vacation'].state='off';
  assert.equal(predict(c,{trigger:'sun',event:'sunrise'},[vacation]).events.length,0);
});
test('HA time zone governs schedules and time gates when browser zone differs', () => {
  const c=card(); c._hass.config.time_zone='Europe/Paris';
  assert.deepEqual(hours(predict(c,scheduleStart)),['08:00','13:00']);
  assert.deepEqual(hours(predict(c,time('09:00'),[gate('schedule.work')])),['08:00']);
});
test('summer offset and DST fold preserve schedule duration', () => {
  const c=card(); c._hass.config.time_zone='Europe/Paris';
  c._schedules['schedule.work']=week({monday:[block('09:00','12:00')],sunday:[block('01:00','03:30')]});
  assert.deepEqual(hours(predict(c,scheduleStart,[],new Date(2030,6,1))),['07:00']);
  assert.equal(c._scheduleStateAt('schedule.work',new Date('2030-10-27T01:45:00Z')),'on');
  assert.equal(c._scheduleStateAt('schedule.work',new Date('2030-10-27T02:30:00Z')),'off');
});
test('nonexistent DST wall times are uncertain rather than shifted silently', () => {
  const c=card(); c._hass.config.time_zone='Europe/Paris';
  c._schedules['schedule.work']=week({sunday:[block('02:30','04:00')]});
  assert.equal(predict(c,scheduleStart,[],new Date(2030,2,31)).conditional,true);
});
test('sun.dusk without solar coordinates or next_dusk remains conditional', () => {
  assert.equal(predict(card(),{trigger:'sun.dusk',options:{type:'civil'}}).conditional,true);
});
test('false boolean gate also suppresses unknown triggers or inaccessible schedules', () => {
  const c=card(); c._hass.states['input_boolean.vacation'].state='off'; c._schedules={};
  for (const trigger of [scheduleStart,{trigger:'event',event_type:'test'}]) {
    const r=predict(c,trigger,[vacation,gate('schedule.work')]);
    assert.equal(r.events.length,0); assert.equal(r.conditional,false);
  }
});
test('schedule service uses response mapping and isolates individual failures', async () => {
  const c=card(); c._hass.states['schedule.denied']={state:'off'};
  const calls=[];
  c._hass.callWS=async request=>{
    calls.push(request);
    if(request.target.entity_id==='schedule.denied') throw new Error('test permission denial');
    return {response:{'schedule.work':week({monday:[block('09:00','12:00')]})}};
  };
  await c._loadSchedules();
  assert.equal(calls.length,2); assert.equal(calls[0].service,'get_schedule'); assert.equal(calls[0].return_response,true);
  assert.equal(predict(c,scheduleStart).events.length,1);
  assert.equal(c._schedules['schedule.denied'],undefined);
});
test('failed or malformed schedule reads discard stale definitions', async () => {
  const c=card(); c._hass.callWS=async()=>({response:{'schedule.work':{monday:[]}}});
  await c._loadSchedules(); assert.equal(predict(c,scheduleStart).conditional,true);
  c._hass.callWS=async()=>{throw new Error('test service unavailable');};
  await c._loadSchedules(); assert.equal(predict(c,scheduleStart).conditional,true);
});
test('hass updates reload on relevant changes only and render new boolean predictions', async () => {
  const c=card(); const hass=c._hass; let loads=0;
  c.shadowRoot={childNodes:[{}]}; c._targetDate=()=>date;
  c._ensureDeviceRegistry=async()=>{}; c._render=()=>{};
  c._automationStates=()=>[automation];
  c._readAutomation=async()=>({state:automation,config:{triggers:[time('10:00')],conditions:[vacation]},traces:[]});
  hass.callWS=async()=>{loads++; return {response:{'schedule.work':week()}};};
  c.hass=hass; await c._loadTask;
  assert.equal(c._events.length,1); assert.equal(loads,1);
  c.hass={...hass,states:{...hass.states,'sensor.other':{state:'42'}}};
  await c._loadTask; assert.equal(loads,1);
  c.hass={...hass,states:{...hass.states,'input_boolean.vacation':{state:'off',attributes:{}}}};
  await c._loadTask; assert.equal(loads,2); assert.equal(c._events.length,0);
  c.hass=hass; await c._loadTask; assert.equal(c._events.length,1);
});
test('concurrent refresh requests are serialized and coalesced', async () => {
  const c=card(); let release, runs=0, active=0, maxActive=0;
  c._targetDate=()=>date;
  c._loadData=async()=>{ runs++; active++; maxActive=Math.max(maxActive,active);
    if(runs===1) await new Promise(resolve=>{release=resolve;}); active--; };
  const first=c._load(); await Promise.resolve();
  const second=c._load(); const third=c._load(); release();
  await Promise.all([first,second,third]);
  assert.equal(runs,2); assert.equal(maxActive,1); assert.equal(c._loadTask,null);
});
test('schedule state/attribute changes refresh the displayed plans', async () => {
  const c=card(); const hass=c._hass; let loads=0;
  c.shadowRoot={childNodes:[{}]}; c._targetDate=()=>date;
  c._loadData=async()=>{loads++;};
  c.hass=hass; await c._loadTask;
  c.hass={...hass,states:{...hass.states,'schedule.work':{state:'off',attributes:{next_event:'2030-01-07T10:00:00Z'}}}};
  await c._loadTask; assert.equal(loads,2);
});
test('a boolean change during a real data load cannot publish the old prediction', async () => {
  const c=card(); const hass=c._hass; let release, reads=0; const published=[];
  c.shadowRoot={childNodes:[{}]}; c._targetDate=()=>date;
  c._ensureDeviceRegistry=async()=>{}; c._automationStates=()=>[automation];
  c._render=()=>{if(!c._loading) published.push(c._events.length);};
  hass.callWS=async()=>({response:{'schedule.work':week()}});
  c._readAutomation=async()=>{
    reads++; if(reads===1) await new Promise(resolve=>{release=resolve;});
    return {state:automation,config:{triggers:[time('10:00')],conditions:[vacation]},traces:[]};
  };
  c.hass=hass;
  while(!release) await new Promise(resolve=>setImmediate(resolve));
  c.hass={...hass,states:{...hass.states,'input_boolean.vacation':{state:'off',attributes:{}}}};
  release(); await c._loadTask;
  assert.equal(reads,2); assert.deepEqual(published,[0]);
});

