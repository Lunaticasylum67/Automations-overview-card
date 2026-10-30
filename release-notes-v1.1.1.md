# v1.1.1 — Timer prediction, loading state, filters

Corresponds to internal version **V45**.

## Fixes

- **#13 — transient "no automations".** The card no longer flashes "No events visible" (or "No planned automation" in the compact modes) for a second or two while it loads: it now shows the "Analyzing automations…" message until the first load completes.
- **#12 — `timer.finished` triggers.** An automation triggered by `timer.finished` is no longer reported as "Unpredictable trigger". While the timer is `active`, the card plans the automation at the timer's `finishes_at` (plus any fixed `for` delay). Idle or paused timers stay conditional. Timers are now tracked, so the prediction refreshes when a timer starts, pauses or ends.

## New (#11)

- **Filters by area, label and automation category**, using the new `filter_areas`, `filter_labels` and `filter_categories` options. IDs, names and (for areas) aliases are accepted. Values of one criterion are combined with OR, criteria with AND. The filters apply to the timeline, the conditional list and the next-planned banner.
- **Filter chips in the card** ("Legend & filters" panel): pick areas, labels and categories directly from the card. The choice is remembered per device and can be reset to the YAML values. `show_filter_settings: false` hides them.
- **Visual editor** for the card in the dashboard UI, including area, label and category pickers.

```yaml
type: custom:automations-overview-card
title: Irrigation
filter_areas:
  - Garden
filter_categories:
  - Watering
```

