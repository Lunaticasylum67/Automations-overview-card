# Automations Overview Card

A custom [Lovelace](https://www.home-assistant.io/dashboards/) card for Home Assistant that shows a **Yesterday / Today / Tomorrow** timeline of your automations: what triggered them, what actions actually ran, and why an automation was skipped when a condition wasn't met.

It reads directly from automation traces, so what you see is what actually happened (or is scheduled to happen), not a guess based on the automation's YAML alone.

<!-- Add a screenshot of the card here, e.g. ![screenshot](screenshot.png) -->

## Features

- Timeline view per automation entity, grouped by day (yesterday / today / tomorrow), with day navigation.
- For each run: the trigger that fired it, the action(s) that were actually executed, or the reason it was skipped (condition not met).
- Status color-coding: done, skipped, no action, error, running, planned, conditional (unpredictable future trigger).
- A "planned" lane that predicts upcoming time / sun / time-pattern triggers for tomorrow, and flags triggers whose next run can't be predicted (e.g. state-based triggers).
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
include_disabled: false
exclude:
  - automation.debug_test
merge_seconds: 60
```

## Notes

- This card only reads data (traces, registries, states) — it never modifies your automations.
- Because `device_id`-based action targets are resolved against the *current* device/entity registries, a run captured while a device still existed will keep showing correctly; but if the device itself has since been deleted or re-paired with a new `device_id` (common with some integrations after a reconfiguration), that specific historical run may fall back to a generic name. This is a Home Assistant data limitation, not something the card can work around after the fact — if it happens, check whether the automation's action still targets a valid `device_id` or `entity_id`.

## License

MIT — see [LICENSE](LICENSE).
