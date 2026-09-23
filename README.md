# Automations Overview Card

A custom [Lovelace](https://www.home-assistant.io/dashboards/) card for Home Assistant that shows a **Yesterday / Today / Tomorrow** timeline of your automations: what triggered them, what actions actually ran, and why an automation was skipped when a condition wasn't met.

Past runs are read from automation traces. Future entries are predictions based on supported triggers, schedule definitions, and conditions; boolean gates use their current state and predictions refresh when that state changes.

<!-- Add a screenshot of the card here, e.g. ![screenshot](screenshot.png) -->

## Features

- Timeline view per automation entity, grouped by day (yesterday / today / tomorrow), with day navigation.
- For each run: the trigger that fired it, the action(s) that were actually executed, or the reason it was skipped (condition not met).
- Status color-coding: done, skipped, no action, error, running, planned, conditional (unpredictable future trigger).
- A "planned" lane for supported time / sun / time-pattern triggers, schedule state transitions and native schedule start/end triggers, plus `sun.dusk` (civil, nautical, astronomical; before/after offsets).
- A "Next planned automation" banner shows the next predictable automation with its exact time and a live relative delay. Clicking the banner opens the automation details.
- Schedule conditions are checked at the predicted trigger time; other `state` conditions (any domain) use their current value, including nested AND/OR/NOT conditions.
- A list of automations with only conditional (unpredictable) future triggers, collapsible.
- Per-status filters and a legend, so you can hide statuses you don't care about.
- Toggle between friendly names and entity IDs for the entities involved.
- Resolves `device_id`-based action targets (e.g. `camera.snapshot` targeting a device) back to a readable entity name, using the device/entity registries.
- Built-in French / English UI, auto-detected from your Home Assistant profile language, with a manual override.

## Requirements

- Home Assistant, recent enough to support custom Lovelace card resources (any reasonably current version works).
- The user viewing the dashboard needs to be a Home Assistant **administrator**. The card reads the device and entity registries (to resolve `device_id` targets) and automation traces, both of which require admin-level websocket access. Non-admin users will see the card fail to load its data.

## Installation

### HACS (custom repository)

This card is not (yet) in the default HACS store, so add it as a custom repository:

1. HACS → the "⋮" menu (top right) → **Custom repositories**.
2. Add this repository's URL, category **Dashboard**.
3. Search for "Automations Overview Card" in HACS and install it.
4. Home Assistant should add the resource automatically. If not, add it manually (see below).

### Manual installation

1. Copy `automations-overview-card.js` into `<config>/www/automations-overview-card/`.
2. In Home Assistant, go to **Settings → Dashboards → Resources** (top-right "⋮" menu) and add:
   - URL: `/local/automations-overview-card/automations-overview-card.js`
   - Resource type: **JavaScript Module**
3. Reload the dashboard (hard refresh, e.g. Ctrl+Shift+R).

## Usage

Add a card (or a view) with:

```yaml
type: custom:automations-overview-card
title: Automations Overview
```

(`title` can be anything you like — pick something distinctive if this card sits alongside other cards on the same dashboard.)

That's it — the card automatically discovers every `automation.*` entity. Use the options below to tune it.

## Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | string | `Overview` | Card title. |
| `language` | string | auto | Force the UI language (`fr` or `en`). By default the card follows your Home Assistant profile language and falls back to English if unsupported. |
| `entity_name_mode` | string | `friendly` | Initial entity display mode: `friendly` (friendly name) or `entity_id`. Can also be toggled from the card UI. |
| `show_conditionals` | boolean | `true` | Show the collapsible list of automations that only have unpredictable (conditional) future triggers. |
| `show_next_planned` | boolean | `true` | Show the next planned automation banner with its exact and relative time. |
| `include_disabled` | boolean | `false` | Include disabled automations. |
| `action_details` | boolean | `true` | Fetch and display the detailed trigger/action text for each run (one extra trace lookup per run). Disable for a lighter/faster card if you only need the status colors. |
| `exclude` | list of strings | `[]` | Entity IDs of automations to hide from the card. |
| `merge_seconds` | number | `45` | Runs of the same automation within this many seconds of each other are merged into a single timeline entry with a counter. |

Example with options:

```yaml
type: custom:automations-overview-card
title: Automations Overview
language: fr
entity_name_mode: entity_id
show_conditionals: true
show_next_planned: true
include_disabled: false
exclude:
  - automation.debug_test
merge_seconds: 60
```

## Prediction support and limits

- Schedule definitions are read using Home Assistant's read-only `schedule.get_schedule` action, for both UI and YAML schedules. If the action or entity is unavailable, predictions remain conditional.
- Supported schedule triggers target explicit entity IDs: `state` transitions to/from `on` or `off`, `schedule.block_started`, and `schedule.block_ended` with the default `each` behavior. Native `schedule.is_on` / `schedule.is_off` conditions are supported too.
- Native schedules spanning midnight use two blocks, such as Monday 22:00–24:00 and Tuesday 00:00–02:00. Continuous blocks do not produce a false state off/on transition at midnight.
- State-based predictions assume the current value remains unchanged. The card recalculates when a tracked entity's state changes; values are compared as-is and never extrapolated into the future (a sensor holding a string is matched against the configured value, not forecast). Jinja/template conditions remain conditional.
- Nonzero `for` durations, attribute triggers, indirect schedule targets (area/device/floor/label), and native `first` / `all` trigger behaviors remain conditional.
- `sun.dusk` uses a distinct calculation for each day and twilight type, including the configured location and elevation. Offsets can cross midnight. Civil `next_dusk` is used when applicable; missing solar data stays conditional.
- `sun.elevation_crossed_threshold` supports fixed numeric `above`, `below`, `between`, and `outside` thresholds, including fixed `for` durations. Entity-based thresholds use the entity selected by `active_choice`; unavailable, ambiguous, or dynamic values remain conditional.
- After editing schedule blocks without changing their published state or attributes, reload the card to reread the definitions.

## Tests

With Node.js installed:

```sh
node --check automations-overview-card.js
node --test tests/issue-1.test.cjs tests/issue-2.test.cjs tests/issue-7.test.cjs
```

The 54 automated tests include 300 reference comparisons against Astral 3.2. They use a simulated Home Assistant API; validation on a live Home Assistant installation is still requested.

## Notes

- This card only reads data (traces, registries, states) — it never modifies your automations.
- Because `device_id`-based action targets are resolved against the *current* device/entity registries, a run captured while a device still existed will keep showing correctly; but if the device itself has since been deleted or re-paired with a new `device_id` (common with some integrations after a reconfiguration), that specific historical run may fall back to a generic name. This is a Home Assistant data limitation, not something the card can work around after the fact — if it happens, check whether the automation's action still targets a valid `device_id` or `entity_id`.

## License

MIT — see [LICENSE](LICENSE), except the three `_astral*` astronomy methods adapted from Astral 3.2, which are licensed under Apache-2.0. Their attribution and the full Apache-2.0 license are included in `automations-overview-card.js`.
