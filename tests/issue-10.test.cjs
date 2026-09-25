const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

process.env.TZ = 'UTC';

let Card;
vm.runInNewContext(
  fs.readFileSync(process.env.CARD_FILE || path.join(__dirname, '..', 'automations-overview-card.js'), 'utf8'),
  {
    HTMLElement: class {}, window: {}, console, setInterval, clearInterval,
    customElements: {get: () => false, define: (_, value) => { Card = value; }}
  }
);

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const nightlySchedule = Object.fromEntries(days.map(day => [day, [
  {from: '00:00:00', to: '08:00:00'},
  {from: '23:00:00', to: '23:59:59.999999'}
]]));

function card() {
  const c = new Card();
  c.config = {language: 'en'};
  c._hass = {
    config: {time_zone: 'UTC'},
    states: {'schedule.nightly_schedule': {state: 'on', attributes: {}}}
  };
  c._schedules = {'schedule.nightly_schedule': nightlySchedule};
  return c;
}

test('all-nine end-of-day fractions are normalized to 24:00', () => {
  const c = card();
  for (const value of ['23:59:59.99', '23:59:59.999', '23:59:59.999999']) {
    assert.equal(c._clockSeconds(value), 86400);
  }
  assert.equal(c._clockSeconds('24:00:00'), 86400);
  assert.equal(c._clockSeconds('23:59:59.500'), 86399);
  assert.equal(c._clockSeconds('23:59:59.9905'), 86399);
});

test('get_schedule end-of-day serialization does not create a midnight state transition', () => {
  const c = card();
  const result = c._scheduleTriggerTimes(
    {trigger: 'state', entity_id: 'schedule.nightly_schedule', from: 'off', to: 'on'},
    new Date('2026-09-21T12:00:00Z')
  );
  assert.equal(result.uncertain, false);
  assert.deepEqual(
    Array.from(result.events, event => event.time.toISOString()),
    ['2026-09-21T23:00:00.000Z']
  );
});
