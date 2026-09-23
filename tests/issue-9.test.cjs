const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
process.env.TZ = 'UTC';
let Card;
vm.runInNewContext(fs.readFileSync('/workspace/scratch/6b48694f6afd/Automations-overview-card-V39.js', 'utf8'), {
  HTMLElement: class {}, window: {}, console, setInterval, clearInterval,
  customElements: {get: () => false, define: (_, value) => { Card = value; }}
});

function card(language = 'en') {
  const c = new Card();
  c.config = {
    language, title: 'Overview', show_next_planned: true,
    show_conditionals: true, include_disabled: false, exclude: [], action_details: true
  };
  c._hass = {config: {time_zone: 'UTC'}, locale: {language, time_format: '24'}, states: {}};
  return c;
}

test('next planned banner shows exact and relative time', () => {
  const c = card();
  const now = new Date('2026-09-22T14:20:00Z');
  c._nextPlanned = {
    time: new Date('2026-09-22T14:30:00Z'), name: 'Start irrigation',
    entity_id: 'automation.start_irrigation', type: 'planned'
  };
  c._nextPlannedCandidates = [c._nextPlanned];
  const html = c._nextPlannedHtml(now);
  assert.match(html, /Next planned automation/);
  assert.match(html, /Start irrigation at 14:30/);
  assert.match(html, /in 10 minutes/);
  assert.match(html, /data-entity="automation\.start_irrigation"/);
});

test('tomorrow and empty states are explicit and localized', () => {
  const c = card('fr');
  const now = new Date();
  const tomorrow = new Date(c._todayStart());
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(6, 0, 0, 0);
  c._nextPlanned = {time: tomorrow, name: 'Charge batterie', entity_id: 'automation.charge', type: 'planned'};
  c._nextPlannedCandidates = [c._nextPlanned];
  assert.match(c._nextPlannedHtml(now), /Charge batterie demain à 06:00/);
  c._nextPlanned = null;
  c._nextPlannedCandidates = [];
  assert.match(c._nextPlannedHtml(now), /Aucune automation prévue/);
});

test('loader selects the earliest planned event through tomorrow regardless of legend filters', async () => {
  const c = card();
  c._filters = {planned: false};
  c._dayOffset = -1;
  c._render = () => {};
  c._ensureDeviceRegistry = async () => {};
  c._loadSchedules = async () => { c._schedules = {}; };
  const now = new Date();
  const first = new Date(+now + 10 * 60000);
  const second = new Date(+now + 30 * 60000);
  const states = [first, second].map((time, index) => ({
    entity_id: `automation.test_${index}`,
    state: 'on',
    attributes: {id: String(index), friendly_name: `Test ${index}`},
    _time: time
  }));
  c._automationStates = () => states;
  c._readAutomation = async state => ({
    state, traces: [], config: {triggers: [{trigger: 'time', at: state._time.toISOString().slice(11, 19)}], conditions: []}
  });
  await c._loadDataWithDependencies();
  assert.equal(c._nextPlanned.entity_id, 'automation.test_0');
  assert.ok(Math.abs(+c._nextPlanned.time - +first) < 1000);
});

test('banner rolls to the following candidate after the first one passes', () => {
  const c = card();
  const now = new Date('2026-09-22T14:20:00Z');
  c._nextPlannedCandidates = [
    {time: new Date('2026-09-22T14:19:00Z'), name: 'Past', entity_id: 'automation.past'},
    {time: new Date('2026-09-22T14:30:00Z'), name: 'Next', entity_id: 'automation.next'}
  ];
  const html = c._nextPlannedHtml(now);
  assert.match(html, /Next at 14:30/);
  assert.doesNotMatch(html, /Past/);
});
