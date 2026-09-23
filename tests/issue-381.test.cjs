const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
process.env.TZ = 'UTC';
let Card;
vm.runInNewContext(fs.readFileSync('/workspace/scratch/6b48694f6afd/Automations-overview-card-V38.1.js', 'utf8'), {
  HTMLElement: class {}, window: {}, console,
  customElements: {get: () => false, define: (_, value) => { Card = value; }}
});

const day = new Date('2026-06-21T00:00:00Z');
const automation = {entity_id: 'automation.elevation', attributes: {friendly_name: 'Elevation'}};
function card() {
  const c = new Card();
  c.config = {language: 'en'};
  c._hass = {
    config: {latitude: 48.8566, longitude: 2.3522, elevation: 35, time_zone: 'Europe/Paris'},
    states: {'input_number.angle': {state: '10', attributes: {}}}
  };
  return c;
}
function predict(value) {
  const trigger = {trigger: 'sun.elevation_crossed_threshold', options: {
    for: '00:00:00', threshold: {type: 'above', value}
  }};
  return card()._predict({triggers: [trigger], conditions: []}, day, automation);
}

test('active_choice selects entity even when a stale number is also stored', () => {
  const entity = predict({active_choice: 'entity', number: 50, entity: 'input_number.angle'});
  const number = predict({active_choice: 'number', number: 50, entity: 'input_number.angle'});
  assert.equal(entity.conditional, false);
  assert.equal(number.conditional, false);
  assert.notEqual(+entity.events[0].time, +number.events[0].time);
});

test('missing selected value and ambiguous values without active_choice stay conditional', () => {
  for (const value of [
    {active_choice: 'entity', number: 50},
    {active_choice: 'number', entity: 'input_number.angle'},
    {number: 50, entity: 'input_number.angle'}
  ]) assert.equal(predict(value).conditional, true);
});

test('entity value is bounded and unavailable/non-numeric states stay conditional', () => {
  const value = {active_choice: 'entity', entity: 'input_number.angle'};
  assert.equal(predict(value).conditional, false);
  for (const state of ['unknown', 'unavailable', 'not-a-number', '91']) {
    const c = card(); c._hass.states['input_number.angle'].state = state;
    const trigger = {trigger: 'sun.elevation_crossed_threshold', options: {
      for: '00:00:00', threshold: {type: 'above', value}
    }};
    assert.equal(c._predict({triggers: [trigger], conditions: []}, day, automation).conditional, true);
  }
});
