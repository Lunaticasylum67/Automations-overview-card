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
        this.shadowRoot = {childNodes: [], innerHTML: '', querySelector: () => null, querySelectorAll: () => []};
        return this.shadowRoot;
      }
    },
    window: {}, console, setInterval, clearInterval, CustomEvent: class {},
    customElements: {get: () => false, define: (_, value) => { Card = value; }}
  }
);

function card(config = {}) {
  const c = new Card();
  c.setConfig({language: 'en', ...config});
  c._hass = {
    config: {time_zone: 'UTC'}, locale: {language: 'en', time_format: '24'},
    states: {
      'input_boolean.water': {state: 'on', attributes: {friendly_name: 'Water enabled'}},
      'switch.valve_1': {state: 'off', attributes: {friendly_name: 'Valve 1'}},
      'switch.valve_2': {state: 'off', attributes: {friendly_name: 'Valve 2'}}
    }
  };
  return c;
}

test('settings and chevron have separate sibling controls in the shared header', () => {
  const c = card({display_mode: 'next_planned_details', show_compact_settings: true});
  c._nextPlannedCandidates = [{
    time: new Date('2026-09-25T18:00:00Z'), name: 'Irrigation',
    entity_id: 'automation.irrigation', certainty: 'planned', detail: 'Time'
  }];
  const html = c._nextPlannedHtml(new Date('2026-09-25T14:00:00Z'));
  assert.match(html, /nextPlannedHeader hasSettings/);
  assert.match(html, /id="compactSettingsToggle"/);
  assert.match(html, /class="nextPlannedChevronButton"/);
  assert.ok(html.indexOf('compactSettingsToggle') < html.indexOf('nextPlannedChevronButton'));
  assert.ok(html.indexOf('</button>') < html.indexOf('compactSettingsToggle'));
});

test('header keeps exact time, relative delay and certainty on distinct cells', () => {
  const c = card({display_mode: 'next_planned'});
  c._nextPlannedCandidates = [{
    time: new Date('2026-09-25T18:00:00Z'), name: 'Irrigation',
    entity_id: 'automation.irrigation', certainty: 'planned', detail: 'Time'
  }];
  const html = c._nextPlannedHtml(new Date('2026-09-25T14:00:00Z'));
  assert.match(html, /nextPlannedIdentity/);
  assert.match(html, /nextPlannedExact/);
  assert.match(html, /nextPlannedRelative/);
  assert.match(html, /certaintyBadge planned/);
});

test('conditional action summaries expose branches and their nested actions', () => {
  const c = card();
  const summaries = c._plannedActionSummaries({actions: [{
    choose: [{
      conditions: [{condition: 'state', entity_id: 'input_boolean.water', state: 'on'}],
      sequence: [{action: 'switch.turn_on', target: {entity_id: 'switch.valve_1'}}]
    }],
    default: [{action: 'switch.turn_off', target: {entity_id: 'switch.valve_2'}}]
  }]});
  assert.match(summaries[0].text, /Conditional choice/);
  assert.match(summaries[1].text, /Water enabled.*on/);
  assert.match(summaries[2].text, /Valve 1/);
  assert.equal(summaries[2].level, 2);
  assert.match(summaries[3].text, /Otherwise/);
  assert.match(summaries[4].text, /Valve 2/);
});
