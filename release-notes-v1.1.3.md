## v1.1.3 (V47)

Bug fixes:

- **#16** – The delay shown in the "Next planned automation" banner is now rounded to the nearest unit instead of always rounding up (1 h 01 min no longer reads "in 2 hours").
- New runs now appear without a full reload (the card watches `last_triggered` / `current` and polls the trace list for blocked runs).
- Runs refused because of the automation mode (`failed_single`, `failed_max_runs`) are shown as "skipped" with an explanation; cancelled and aborted runs get a note.
- All targets of an action are listed (not only the first one); more service labels and values (`notify.*`, `script.*`, `preset_mode`, `hvac_mode`, `source`…); the temperature unit follows the Home Assistant unit system.
- The trigger is also shown on skipped rows.
- Non-admin users see a short notice instead of an empty card.
- "Next planned automation" banner: the time and the remaining delay are shown right after the automation name again.
- "Configured actions": the step numbers were removed (they did not match the real steps).
- Values that are unresolved Jinja templates are shown as "(computed at run time)" instead of the raw `{{ ... }}`.

Improvements:

- Status filters are remembered per card title; new `default_filters` option.
- One `trace/list` call for all automations, finished traces cached.
- Lighter updates and periodic rendering.
- "‹" tab to reach earlier days (up to 30 days back).
- Unpredictable automations show which conditions block right now.
- New cogwheel settings, remembered per device: **row click** (automation details by default, or the trace of the run) and **blocked-run detection** (off, every minute by default, or every 5 minutes). `row_click: trace` in YAML sets the default for the row click; the cogwheel choice takes precedence.

Thanks to GaelFrance for the audit and pull request #17.

