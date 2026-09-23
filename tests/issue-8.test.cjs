const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
process.env.TZ = 'UTC';
let Card;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'automations-overview-card.js'), 'utf8'), {
  HTMLElement: class {}, window: {}, console,
  customElements: {get: () => false, define: (_, value) => { Card = value; }}
});

// Summer solstice makes the issue reporter's 50° example reachable in Paris.
const day = new Date('2026-06-21T00:00:00Z');
const automation = {entity_id: 'automation.solar_elevation', attributes: {friendly_name: 'Solar elevation'}};
function card() {
  const c = new Card();
  c.config = {language: 'en'};
  c._hass = {config: {latitude: 48.8566, longitude: 2.3522, elevation: 35, time_zone: 'Europe/Paris'}, states: {}};
  return c;
}
const value = number => ({active_choice: 'number', number});
const trigger = (type, threshold, duration = '00:00:00') => ({
  trigger: 'sun.elevation_crossed_threshold',
  options: {for: duration, threshold: {type, ...threshold}}
});
const predict = (c, item, date = day) => c._predict({triggers: [item], conditions: []}, date, automation);

test('issue #8 exact below-threshold YAML is planned once in the evening', () => {
  const result = predict(card(), trigger('below', {value: value(50)}));
  assert.equal(result.conditional, false);
  assert.equal(result.events.length, 1);
  assert.equal(result.events[0].detail, 'Sun elevation below 50°');
  assert.ok(Number.isFinite(+result.events[0].time));
  assert.equal(result.events[0].time.toISOString(), '2026-06-21T14:30:06.274Z');
});

test('above produces the morning crossing; between and outside produce two entries', () => {
  const c = card();
  const above = predict(c, trigger('above', {value: value(50)}));
  assert.equal(above.events.length, 1);
  assert.ok(+above.events[0].time < +predict(c, trigger('below', {value: value(50)})).events[0].time);
  const between = predict(c, trigger('between', {value_min: value(10), value_max: value(30)}));
  const outside = predict(c, trigger('outside', {value_min: value(10), value_max: value(30)}));
  assert.equal(between.events.length, 2);
  assert.equal(outside.events.length, 2);
  assert.equal(between.events[0].detail, 'Sun elevation between 10° and 30°');
  assert.equal(outside.events[0].detail, 'Sun elevation outside 10° to 30°');
});

test('for delays the event and is cancelled when the selected range is left first', () => {
  const c = card();
  const immediate = predict(c, trigger('above', {value: value(50)})).events[0].time;
  const delayed = predict(c, trigger('above', {value: value(50)}, {minutes: 30})).events[0].time;
  assert.equal(+delayed, +immediate + 30 * 60000);
  assert.equal(predict(c, trigger('between', {value_min: value(10), value_max: value(11)}, {hours: 2})).events.length, 0);
});

test('invalid, dynamic, and unavailable-coordinate thresholds remain conditional', () => {
  const cases = [
    trigger('above', {value: {active_choice: 'entity', entity: 'input_number.angle'}}),
    trigger('between', {value_min: value(30), value_max: value(10)}),
    trigger('unknown', {value: value(10)}),
    trigger('above', {value: value(91)}),
    trigger('above', {value: value(10)}, '{{ duration }}')
  ];
  for (const item of cases) assert.equal(predict(card(), item).conditional, true);
  const c = card(); c._hass.config.latitude = null;
  assert.equal(predict(c, trigger('below', {value: value(10)})).conditional, true);
});

test('a threshold never reached that day is known-empty rather than conditional', () => {
  const result = predict(card(), trigger('above', {value: value(89)}));
  assert.equal(result.conditional, false);
  assert.equal(result.events.length, 0);
});

test('observer altitude does not shift the sun.sun elevation crossing', () => {
  const seaLevel = card();
  seaLevel._hass.config.elevation = 0;
  const mountain = card();
  mountain._hass.config.elevation = 2000;
  const item = trigger('below', {value: value(50)});
  assert.equal(+predict(seaLevel, item).events[0].time, +predict(mountain, item).events[0].time);
});
