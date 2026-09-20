const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
process.env.TZ = 'UTC';
let Card;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'automations-overview-card.js'), 'utf8'), {
  HTMLElement: class {}, window: {}, console: {...console, debug:()=>{}},
  customElements: { get: () => false, define: (_, value) => { Card = value; } }
});
const automation = {entity_id:'automation.test',state:'on',attributes:{id:'test',friendly_name:'Test'}};
const gate = (id, state='on') => ({condition:'state',entity_id:id,state});
const time = at => ({trigger:'time',at});
const date = new Date(2030, 0, 7);
function card() {
  const c = new Card();
  c.config = {language:'en',show_conditionals:true,merge_seconds:45};
  c._dayOffset = 1;
  c._hass = {config:{time_zone:'UTC'},states:{
    'sensor.phone_address': {state:'123 Rue de la Gare',attributes:{}},
    'schedule.dummy': {state:'off',attributes:{}},
    'automation.test': automation
  }};
  c._schedules = {};
  return c;
}
function predict(c, triggers, conditions=[], day=date) {
  return c._predict({triggers:[].concat(triggers),conditions},day,automation);
}

test('generic-domain state condition matches or blocks on its actual current value', () => {
  const c=card();
  assert.equal(predict(c,time('10:00'),[gate('sensor.phone_address','123 Rue de la Gare')]).events.length,1);
  const r=predict(c,time('10:00'),[gate('sensor.phone_address','999 Autre Rue')]);
  assert.equal(r.events.length,0); assert.equal(r.conditional,false);
});
test('unknown/unavailable values stay conditional unless explicitly wanted', () => {
  const c=card();
  for (const value of ['unknown','unavailable']) {
    c._hass.states['sensor.phone_address'].state=value;
    assert.equal(predict(c,time('10:00'),[gate('sensor.phone_address','123 Rue de la Gare')]).conditional,true);
    assert.equal(predict(c,time('10:00'),[gate('sensor.phone_address',value)]).events.length,1);
  }
});
test('malformed or templated entity_id values stay conditional instead of crashing', () => {
  const c=card();
  for (const id of [undefined, 42, '{{ states("input_text.target") }}', 'not-an-entity-id']) {
    assert.equal(predict(c,time('10:00'),[gate(id,'123 Rue de la Gare')]).conditional,true);
  }
});
test('native and schedule state conditions keep the on/off restriction', () => {
  const c=card();
  c._hass.states['switch.y']={state:'maybe',attributes:{}};
  assert.equal(predict(c,time('10:00'),[{condition:'switch.is_on',target:{entity_id:'switch.y'}}]).conditional,true);
  c._hass.states['schedule.x']={state:'maybe',attributes:{}};
  assert.equal(predict(c,time('10:00'),[gate('schedule.x','on')]).conditional,true);
});
test('evaluated entities are tracked as dependencies and their changes trigger a reload (issue #7)', async () => {
  const c=card(); const hass=c._hass; let loads=0;
  c.shadowRoot={childNodes:[{}]}; c._targetDate=()=>date;
  c._ensureDeviceRegistry=async()=>{}; c._render=()=>{};
  c._automationStates=()=>[automation];
  c._readAutomation=async()=>({state:automation,config:{triggers:[time('10:00')],conditions:[gate('sensor.phone_address','123 Rue de la Gare')]},traces:[]});
  hass.callWS=async()=>{loads++; return {response:{'schedule.dummy':{}}};};
  c.hass=hass; await c._loadTask;
  assert.equal(c._events.length,1); assert.equal(loads,1);
  assert.ok(c._conditionEntities && c._conditionEntities.has('sensor.phone_address'));
  c.hass={...hass,states:{...hass.states,'sensor.phone_address':{state:'changed',attributes:{}}}};
  await c._loadTask; assert.equal(loads,2); assert.equal(c._events.length,0);
});
