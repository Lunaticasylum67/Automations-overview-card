# Automations Overview Card

A custom [Lovelace](https://www.home-assistant.io/dashboards/) card for Home Assistant that shows a **Yesterday / Today / Tomorrow** timeline of your automations: what triggered them, what actions actually ran, and why an automation was skipped when a condition wasn't met.

Past runs are read from automation traces. Future entries are predictions based on supported triggers, schedule definitions, and conditions; boolean gates use their current state and predictions refresh when that state changes.

<!-- Add a screenshot of the card here, e.g. ![screenshot](screenshot.png) -->

## Features

- Timeline view per automation entity, grouped by day (yesterday / today / tomorrow), with day navigation and a "‹" tab to go back to earlier days (up to 30 days, within the traces Home Assistant still stores).
- New runs appear without reloading the page.
- For each run: the trigger that fired it, the action(s) that were actually executed (all targets of an action are listed), or the reason it was skipped (condition not met, or the automation was already running — `single` / `max` mode). Interrupted (`restart`) and stopped runs carry a note.
- Status color-coding: done, skipped, no action, error, running, planned, conditional (unpredictable future trigger).
- A "planned" lane for supported time / sun / time-pattern triggers, schedule state transitions and native schedule start/end triggers, plus `sun.dusk` (civil, nautical, astronomical; before/after offsets).
- Three display modes: the complete timeline, a compact next-planned view, or a detailed next-planned view showing the trigger, conditions, and configured actions.
- The next-planned views show the exact execution time, a live relative delay, and a certainty indicator (`Planned` or `Condition to confirm`, the latter with a tooltip naming the entities involved).
- Schedule conditions are checked at the predicted trigger time; other `state` conditions (any domain) use their current value, including nested AND/OR/NOT conditions.
- A list of automations with only conditional (unpredictable) future triggers, collapsible, showing which of their conditions are blocking right now.
- Per-status filters and a legend, so you can hide statuses you don't care about. The choice is remembered per card title on each device, and `default_filters` sets the starting point.
- Toggle between friendly names and entity IDs for the entities involved.
- Optional filters by area, label and automation category (YAML or visual editor), applied to the timeline and to the next-planned banner.
- Visual card editor in the Home Assistant dashboard UI.
- Resolves `device_id`-based action targets (e.g. `camera.snapshot` targeting a device) back to a readable entity name, using the device/entity registries.
- Built-in French / English UI, auto-detected from your Home Assistant profile language, with a manual override.
- Settings cogwheel with per-device choices: display mode, what a click on a row does, and how often blocked runs are looked for (see [Settings cogwheel](#settings-cogwheel)).

## Requirements

- Home Assistant, recent enough to support custom Lovelace card resources (any reasonably current version works).
- The user viewing the dashboard needs to be a Home Assistant **administrator**. The card reads the device and entity registries (to resolve `device_id` targets) and automation traces, both of which require admin-level websocket access. Non-admin users see a short notice instead of the timeline.

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
| `display_mode` | string | `full` | Display mode: `full`, `next_planned`, or `next_planned_details`. It can also be changed from the card's own settings cogwheel, in any mode. |
| `show_compact_settings` | boolean | `true` | Show the settings cogwheel that lets you change the display mode, the row click behavior and the blocked-run detection directly from the card, in any mode. Set to `false` to hide it — the user will then be unable to change the view themselves, and will only see the mode set by `display_mode` (or the one already stored for them). Useful for a read-only or kiosk dashboard. |
| `show_conditionals` | boolean | `true` | Show the collapsible list of automations that only have unpredictable (conditional) future triggers. |
| `show_next_planned` | boolean | `true` | Show the next planned automation banner in `full` mode. |
| `include_disabled` | boolean | `false` | Include disabled automations. |
| `action_details` | boolean | `true` | Fetch and display the detailed trigger/action text for each run (one extra trace lookup per run). Disable for a lighter/faster card if you only need the status colors. |
| `exclude` | list of strings | `[]` | Entity IDs of automations to hide from the card. |
| `merge_seconds` | number | `45` | Runs of the same automation within this many seconds of each other are merged into a single timeline entry with a counter. |
| `filter_areas` | string or list | none | Only show automations assigned to one of these areas. Accepts area IDs, names or aliases (case-insensitive). If the automation has no area of its own, the area of its device is used. |
| `filter_labels` | string or list | none | Only show automations carrying at least one of these labels (label IDs or names). |
| `filter_categories` | string or list | none | Only show automations in one of these automation categories (category IDs or names). |
| `row_click` | string | `more-info` | What a click on a past run does: `more-info` opens the automation's details, `trace` opens the trace of that run. The cogwheel choice of a device takes priority over this value. |
| `default_filters` | object or list | `done`, `error`, `running`, `planned`, `conditional` shown; `skipped` and `no_action` hidden | Statuses shown when the card is first displayed, e.g. `default_filters: {skipped: true, no_action: true}` (or a list of the statuses to show, e.g. `[done, skipped, planned]`). Status keys: `done`, `skipped`, `no_action`, `error`, `running`, `planned`, `conditional`. A choice made in the legend is remembered per device and takes priority. |
| `show_filter_settings` | boolean | `true` | Show the area / label / category chips in the card's "Legend & filters" panel so users can change the filter from the card itself. Set to `false` to lock the dashboard on the YAML filters (kiosk / read-only dashboards). |

Example with options:

```yaml
type: custom:automations-overview-card
title: Automations Overview
language: fr
entity_name_mode: entity_id
display_mode: full
show_compact_settings: false
show_conditionals: true
include_disabled: false
exclude:
  - automation.debug_test
merge_seconds: 60
```

Compact next-planned mode:

```yaml
type: custom:automations-overview-card
title: Next automation
display_mode: next_planned
show_compact_settings: true
```

Detailed next-planned mode:

```yaml
type: custom:automations-overview-card
title: Next automation
display_mode: next_planned_details
```

The detailed view describes the automation configuration. Its actions have not yet been executed. Automations whose future trigger time cannot be determined are not candidates for the next-planned display.

## Filtering by area, label or category

Use `filter_areas`, `filter_labels` and `filter_categories` (or the matching fields of the visual editor) to restrict the card to some automations — for example an irrigation dashboard:

```yaml
type: custom:automations-overview-card
title: Irrigation
filter_areas:
  - Garden
filter_labels:
  - irrigation
```

- Values within one criterion are combined with **OR**; the criteria themselves are combined with **AND** (an automation must match every criterion that is set).
- A single value or a comma-separated string is accepted as well as a list.
- The same filters can be changed from the card itself, in the **Legend & filters** panel (area / label / category chips). That choice is remembered per card title in the browser's local storage, so each device keeps its own filter; it takes priority over the YAML values on that device until you press **Reset**. Set `show_filter_settings: false` to hide these chips and lock the card on its YAML filters.
- Filters apply to the whole card: the timeline, the conditional list and the next-planned banner.
- Automations that are not in the entity registry (YAML automations without an `id`) have no area, label or category, so they are hidden as soon as a filter is set.

## Settings cogwheel

The cogwheel next to the next-planned banner opens a small panel with three choices. They are remembered **per device** (in the browser's local storage, per card title), take priority over the YAML values on that device, and the panel is hidden when `show_compact_settings` is `false`.

- **Display** — the complete timeline, a compact next-planned view, or a detailed next-planned view (same as `display_mode`).
- **Row click** — *Automation details* (default) or *Run trace* (same as `row_click`).
- **Blocked-run detection** — runs blocked by a condition do not change the automation's `last_triggered`, so the card polls the trace list to notice them: *Off*, *Every minute* (default) or *Every 5 minutes*. With *Off*, new runs still appear (the card watches `last_triggered`); only blocked runs wait for the next reload.

## Prediction support and limits

- Schedule definitions are read using Home Assistant's read-only `schedule.get_schedule` action, for both UI and YAML schedules. If the action or entity is unavailable, predictions remain conditional.
- Supported schedule triggers target explicit entity IDs: `state` transitions to/from `on` or `off`, `schedule.block_started`, and `schedule.block_ended` with the default `each` behavior. Native `schedule.is_on` / `schedule.is_off` conditions are supported too.
- Native schedules spanning midnight use two blocks, such as Monday 22:00–24:00 and Tuesday 00:00–02:00. Continuous blocks do not produce a false state off/on transition at midnight.
- State-based predictions assume the current value remains unchanged. The card recalculates when a tracked entity's state changes; values are compared as-is and never extrapolated into the future (a sensor holding a string is matched against the configured value, not forecast). Jinja/template conditions remain conditional.
- Nonzero `for` durations, attribute triggers, indirect schedule targets (area/device/floor/label), and native `first` / `all` trigger behaviors remain conditional.
- `timer.finished` triggers are predicted at the timer's `finishes_at` while the timer is `active` (a fixed `for` delay is added). Idle or paused timers, and several timers with `first`/`last` behavior, remain conditional.
- `sun.dusk` uses a distinct calculation for each day and twilight type, including the configured location and elevation. Offsets can cross midnight. Civil `next_dusk` is used when applicable; missing solar data stays conditional.
- `sun.elevation_crossed_threshold` predictions support `above`, `below`, `between`, and `outside` thresholds, including a fixed `for` duration. Each bound can be a fixed number or an entity's current value, read as a live snapshot and tracked as a prediction dependency — same mechanism as other state-based predictions.
- After editing schedule blocks without changing their published state or attributes, reload the card to reread the definitions.

## Tests

With Node.js installed:

```sh
node --check automations-overview-card.js
node --test tests/*.test.cjs
```

The 74 automated tests include 300 reference comparisons against Astral 3.2. They use a simulated Home Assistant API; validation on a live Home Assistant installation is still requested.

## Notes

- This card only reads data (traces, registries, states) — it never modifies your automations.
- Because `device_id`-based action targets are resolved against the *current* device/entity registries, a run captured while a device still existed will keep showing correctly; but if the device itself has since been deleted or re-paired with a new `device_id` (common with some integrations after a reconfiguration), that specific historical run may fall back to a generic name. This is a Home Assistant data limitation, not something the card can work around after the fact — if it happens, check whether the automation's action still targets a valid `device_id` or `entity_id`.

## License

MIT — see [LICENSE](LICENSE), except the three `_astral*` astronomy methods adapted from Astral 3.2, which are licensed under Apache-2.0. Their attribution and the full Apache-2.0 license are included in `automations-overview-card.js`.
