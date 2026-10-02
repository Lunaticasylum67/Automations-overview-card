# v1.1.0 — Next planned display modes

Corresponds to internal version **V44**, supersedes `v1.1.0-beta.6`.

## New display modes (issue #9)

Two new display modes are now available alongside the full timeline:

```yaml
display_mode: next_planned
display_mode: next_planned_details
```

- `next_planned` — a compact banner showing only the next planned automation, its exact time and a live relative delay.
- `next_planned_details` — same banner, plus trigger / conditions / configured actions columns, with nested actions (`choose`, `if/then/else`, `repeat`, `parallel`) expanded.

The display mode can also be changed at any time from the card itself, via the settings cogwheel — available in every mode, including `full`.

## Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `display_mode` | string | `full` | Initial display mode: `full` (complete Yesterday/Today/Tomorrow timeline), `next_planned` (compact banner only), or `next_planned_details` (banner + trigger/conditions/actions columns). |
| `show_next_planned` | boolean | `true` | Show the "next planned automation" banner above the timeline when `display_mode: full`. Has no effect in `next_planned`/`next_planned_details`, where the banner is always shown. |
| `show_compact_settings` | boolean | `true` | Show the settings cogwheel that lets you switch display mode directly from the card, in any mode. Set to `false` to hide it — the user will then be unable to change the view themselves, and will only see the mode set by `display_mode` (or the one already stored for them). Useful for a read-only or kiosk dashboard. |

Once changed from the card's own cogwheel, the selected display mode is remembered per card title in the browser's local storage, and takes priority over `display_mode` in YAML on that device from then on. This means:

- desktop, mobile, and tablet can each keep a different display mode for the same card;
- restarting Home Assistant does not reset it;
- clearing the browser or Companion App data resets it back to the YAML value (or `full` if none is set);
- two cards sharing the same `title` share the same stored preference on the same device.

Example:

```yaml
type: custom:automations-overview-card
title: Automations Overview
display_mode: next_planned
show_compact_settings: true
```

## Fixes based on beta feedback

- The settings cogwheel is now reachable from `full` mode too, not just compact/detailed — previously, landing on `full` (by choice or a stray click) left no way back to the compact modes without digging into the unrelated Legend & filters panel, which no longer holds a duplicate of this control.
- The certainty badge now reads "Condition to confirm" instead of "State to confirm", with a tooltip naming the exact entities the prediction depends on.
