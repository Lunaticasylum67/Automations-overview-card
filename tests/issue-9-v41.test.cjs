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
    HTMLElement: class {
      attachShadow() {
        this.shadowRoot = {
          childNodes: [], innerHTML: '',
          querySelector: () => null, querySelectorAll: () => []
        };
        return this.shadowRoot;
      }
    }, window: {}, console, setInterval, clearInterval,
    CustomEvent: class {},
    customElements: {get: () => false, define: (_, value) => { Card = value; }}
  }
);

function card(config = {}) {
  const c = new Card();
  c.setConfig({language: 'en', ...config});
  c._hass = {
    config: {time_zone: 'UTC'}, locale: {language: 'en', time_format: '24'},
    states: {
      'input_boolean.away': {state: 'off', attributes: {friendly_name: 'Away mode'}},
      'switch.pump': {state: 'off', attributes: {friendly_name: 'Garden pump'}}
    }
  };
  return c;
}

test('full timeline remains the default display mode', () => {
  assert.equal(card()._displayMode, 'full');
  assert.equal(card({display_mode: 'next_planned'})._displayMode, 'next_planned');
  assert.equal(card({display_mode: 'next_planned_details'})._displayMode, 'next_planned_details');
  assert.equal(card({display_mode: 'invalid'})._displayMode, 'full');
});

test('prediction metadata distinguishes planned from state-to-confirm', () => {
  const c = card();
  const day = new Date('2026-09-25T12:00:00Z');
  const state = {entity_id: 'automation.irrigation', attributes: {friendly_name: 'Irrigation'}};
  const base = {
    triggers: [{trigger: 'time', at: '18:30:00'}],
    actions: [{action: 'switch.turn_on', target: {entity_id: 'switch.pump'}}]
  };
  const planned = c._predict({...base, conditions: []}, day, state).events[0];
  const dependent = c._predict({...base, conditions: [{
    condition: 'state', entity_id: 'input_boolean.away', state: 'off'
  }]}, day, state).events[0];
  assert.equal(planned.certainty, 'planned');
  assert.equal(dependent.certainty, 'state');
  assert.match(dependent.conditionSummaries[0].text, /Away mode.* = off/);
  assert.match(dependent.actionSummaries[0], /Garden pump/);
});

test('compact mode is horizontal content with a certainty label', () => {
  const c = card({display_mode: 'next_planned'});
  c._nextPlannedCandidates = [{
    time: new Date('2026-09-25T18:30:00Z'), name: 'Irrigation',
    entity_id: 'automation.irrigation', certainty: 'state', detail: 'Schedule'
  }];
  const html = c._nextPlannedHtml(new Date('2026-09-25T14:30:00Z'));
  assert.match(html, /compact/);
  assert.match(html, /Irrigation/);
  assert.match(html, /State to confirm/);
  assert.doesNotMatch(html, /nextPlannedDetails/);
});

test('detailed mode shows trigger, conditions and configured actions', () => {
  const c = card({display_mode: 'next_planned_details'});
  c._nextPlannedCandidates = [{
    time: new Date('2026-09-25T18:30:00Z'), name: 'Irrigation',
    entity_id: 'automation.irrigation', certainty: 'state', detail: 'Fixed time: 18:30',
    conditionSummaries: [{text: 'Away mode = off', runtime: true}],
    actionSummaries: ['Turned on: Garden pump']
  }];
  const html = c._nextPlannedHtml(new Date('2026-09-25T14:30:00Z'));
  assert.match(html, /detailed/);
  assert.match(html, /Planned trigger/);
  assert.match(html, /Away mode = off/);
  assert.match(html, /Turned on: Garden pump/);
  assert.match(html, /Configured actions, not yet executed/);
});

test('compact settings control is optional', () => {
  const hidden = card({display_mode: 'next_planned', show_compact_settings: false});
  const shown = card({display_mode: 'next_planned', show_compact_settings: true});
  assert.equal(hidden._compactSettingsHtml(), '');
  assert.match(shown._compactSettingsHtml(), /compactSettingsToggle/);
});
