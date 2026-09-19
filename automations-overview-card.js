
/* Automations Overview Card - V31 - issues #1 and #2 */
/* ==========================================================
   V25 - TRADUCTIONS / TRANSLATIONS
   ========================================================== */

const AUTOMATION_TIMELINE_I18N = {

  fr: {
    trigger_prefix: "D\u00e9clencheur : ",
    action_single_prefix: "Action : ",
    actions_multi_prefix: "Actions :\n",
    no_action_detail: "Action : Aucune action ex\u00e9cut\u00e9e",
    entity_fallback_name: "Entit\u00e9",
    depends_on_prefix: "\nD\u00e9pend de : ",
    condition_template_generic: "Condition non remplie : condition template",
    conditions_not_met: "Conditions non remplies",
    error_prefix: "Erreur : ",
    condition_not_met_equals: "Condition non remplie : {name} = {wanted} attendu, actuel : {actual}",
    condition_not_met_between: "Condition non remplie : {above} < {name} < {below}, actuel : {actual}",
    condition_not_met_above: "Condition non remplie : {name} > {above}, actuel : {actual}",
    condition_not_met_below: "Condition non remplie : {name} < {below}, actuel : {actual}",
    action_switch_turn_on: "Allum\u00e9",
    action_switch_turn_off: "\u00c9teint",
    action_toggle: "Bascul\u00e9",
    action_light_turn_on: "\u00c9clairage allum\u00e9",
    action_light_turn_off: "\u00c9clairage \u00e9teint",
    action_cover_open: "Ouvert",
    action_cover_close: "Ferm\u00e9",
    action_cover_stop: "Arr\u00eat\u00e9",
    action_cover_position: "Position r\u00e9gl\u00e9e",
    action_enabled: "Activ\u00e9",
    action_disabled: "D\u00e9sactiv\u00e9",
    action_option_selected: "Option s\u00e9lectionn\u00e9e",
    action_value_set: "Valeur r\u00e9gl\u00e9e",
    action_temperature_set: "Temp\u00e9rature r\u00e9gl\u00e9e",
    action_hvac_mode_set: "Mode r\u00e9gl\u00e9",
    action_fan_on: "Ventilateur activ\u00e9",
    action_fan_off: "Ventilateur arr\u00eat\u00e9",
    action_fan_speed_set: "Vitesse r\u00e9gl\u00e9e",
    action_media_on: "Lecteur activ\u00e9",
    action_media_off: "Lecteur arr\u00eat\u00e9",
    action_media_play: "Lecture d\u00e9marr\u00e9e",
    action_media_pause: "Lecture en pause",
    action_volume_set: "Volume r\u00e9gl\u00e9",
    action_script_started: "Script lanc\u00e9",
    action_automation_on: "Automation activ\u00e9e",
    action_automation_off: "Automation d\u00e9sactiv\u00e9e",
    action_automation_triggered: "Automation d\u00e9clench\u00e9e",
    action_camera_snapshot: "Capture enregistr\u00e9e",
    action_notify_sent: "Notification envoy\u00e9e",
    humanize_fallback: "Action ex\u00e9cut\u00e9e",
    dynamic_time: "heure dynamique",
    schedule_dynamic: "Horaire dynamique",
    dusk_civil: "Cr\u00e9puscule civil",
    dusk_nautical: "Cr\u00e9puscule nautique",
    dusk_astronomical: "Cr\u00e9puscule astronomique",
    schedule_start: "D\u00e9but du planning",
    schedule_end: "Fin du planning",
    schedule: "Horaire",
    sunrise_lower: "lever du soleil",
    sunset_lower: "coucher du soleil",
    sunrise: "Lever du soleil",
    sunset: "Coucher du soleil",
    time_pattern: "Motif horaire",
    time_pattern_lower: "motif horaire",
    dynamic_trigger: "d\u00e9clencheur dynamique",
    condition_dependent: "d\u00e9pend d\u2019une condition non v\u00e9rifiable",
    unpredictable_trigger_prefix: "D\u00e9clenchement non pr\u00e9visible : ",
    trace_executed_fallback: "Ex\u00e9cut\u00e9e",
    now_label: "maintenant",
    legend_done_label: "Ex\u00e9cut\u00e9e",
    legend_done_desc: "Une ou plusieurs actions ont r\u00e9ellement \u00e9t\u00e9 ex\u00e9cut\u00e9es",
    legend_skipped_label: "Non remplie",
    legend_skipped_desc: "Une condition globale a bloqu\u00e9 l\u2019automation",
    legend_no_action_label: "Sans action",
    legend_no_action_desc: "Automation ex\u00e9cut\u00e9e, mais aucune action finale n\u2019a \u00e9t\u00e9 r\u00e9alis\u00e9e",
    legend_error_label: "Erreur",
    legend_error_desc: "Une erreur a interrompu l\u2019ex\u00e9cution",
    legend_running_label: "En cours",
    legend_running_desc: "L\u2019automation est actuellement en cours d\u2019ex\u00e9cution",
    legend_planned_label: "Pr\u00e9vue",
    legend_planned_desc: "D\u00e9clenchement futur pr\u00e9visible",
    legend_conditional_label: "Conditionnelle",
    legend_conditional_desc: "D\u00e9clenchement futur possible mais non pr\u00e9visible",
    legend_filters_header: "L\u00e9gende & filtres",
    legend_click_to: "Cliquer pour {action} ce statut",
    legend_action_hide: "masquer",
    legend_action_show: "afficher",
    entity_name_mode_title: "Nom des entit\u00e9s :",
    entity_name_mode_toggle_title: "Basculer entre Friendly name et Entity ID",
    conditionals_header: "Automations conditionnelles",
    empty_message: "Aucun \u00e9v\u00e9nement visible avec les filtres actuels.",
    loading_message: "Analyse des automations\u2026",
    day_yesterday: "Hier",
    day_today: "Aujourd\u2019hui",
    day_tomorrow: "Demain"
  },

  en: {
    trigger_prefix: "Trigger: ",
    action_single_prefix: "Action: ",
    actions_multi_prefix: "Actions:\n",
    no_action_detail: "Action: No action executed",
    entity_fallback_name: "Entity",
    depends_on_prefix: "\nDepends on: ",
    condition_template_generic: "Condition not met: template condition",
    conditions_not_met: "Conditions not met",
    error_prefix: "Error: ",
    condition_not_met_equals: "Condition not met: {name} = {wanted} expected, current: {actual}",
    condition_not_met_between: "Condition not met: {above} < {name} < {below}, current: {actual}",
    condition_not_met_above: "Condition not met: {name} > {above}, current: {actual}",
    condition_not_met_below: "Condition not met: {name} < {below}, current: {actual}",
    action_switch_turn_on: "Turned on",
    action_switch_turn_off: "Turned off",
    action_toggle: "Toggled",
    action_light_turn_on: "Light turned on",
    action_light_turn_off: "Light turned off",
    action_cover_open: "Opened",
    action_cover_close: "Closed",
    action_cover_stop: "Stopped",
    action_cover_position: "Position set",
    action_enabled: "Enabled",
    action_disabled: "Disabled",
    action_option_selected: "Option selected",
    action_value_set: "Value set",
    action_temperature_set: "Temperature set",
    action_hvac_mode_set: "Mode set",
    action_fan_on: "Fan turned on",
    action_fan_off: "Fan turned off",
    action_fan_speed_set: "Speed set",
    action_media_on: "Player turned on",
    action_media_off: "Player turned off",
    action_media_play: "Playback started",
    action_media_pause: "Playback paused",
    action_volume_set: "Volume set",
    action_script_started: "Script started",
    action_automation_on: "Automation enabled",
    action_automation_off: "Automation disabled",
    action_automation_triggered: "Automation triggered",
    action_camera_snapshot: "Snapshot captured",
    action_notify_sent: "Notification sent",
    humanize_fallback: "Action executed",
    dynamic_time: "dynamic time",
    schedule_dynamic: "Dynamic schedule",
    dusk_civil: "Civil dusk",
    dusk_nautical: "Nautical dusk",
    dusk_astronomical: "Astronomical dusk",
    schedule_start: "Schedule start",
    schedule_end: "Schedule end",
    schedule: "Schedule",
    sunrise_lower: "sunrise",
    sunset_lower: "sunset",
    sunrise: "Sunrise",
    sunset: "Sunset",
    time_pattern: "Time pattern",
    time_pattern_lower: "time pattern",
    dynamic_trigger: "dynamic trigger",
    condition_dependent: "depends on an unverifiable condition",
    unpredictable_trigger_prefix: "Unpredictable trigger: ",
    trace_executed_fallback: "Executed",
    now_label: "now",
    legend_done_label: "Done",
    legend_done_desc: "One or more actions actually ran",
    legend_skipped_label: "Not met",
    legend_skipped_desc: "A top-level condition blocked the automation",
    legend_no_action_label: "No action",
    legend_no_action_desc: "Automation ran, but no final action was performed",
    legend_error_label: "Error",
    legend_error_desc: "An error interrupted execution",
    legend_running_label: "Running",
    legend_running_desc: "The automation is currently running",
    legend_planned_label: "Planned",
    legend_planned_desc: "Predictable future trigger",
    legend_conditional_label: "Conditional",
    legend_conditional_desc: "Possible future trigger, not predictable",
    legend_filters_header: "Legend & filters",
    legend_click_to: "Click to {action} this status",
    legend_action_hide: "hide",
    legend_action_show: "show",
    entity_name_mode_title: "Entity names:",
    entity_name_mode_toggle_title: "Toggle between Friendly name and Entity ID",
    conditionals_header: "Conditional automations",
    empty_message: "No events visible with the current filters.",
    loading_message: "Analyzing automations\u2026",
    day_yesterday: "Yesterday",
    day_today: "Today",
    day_tomorrow: "Tomorrow"
  }

};
class AutomationsOverviewCard extends HTMLElement {
 
  setConfig(config) {
    this.config = {
      title: config.title || "Overview",
      show_conditionals: config.show_conditionals !== false,
      include_disabled: config.include_disabled === true,
      merge_seconds: config.merge_seconds ?? 45,
      action_details: config.action_details !== false,
      exclude: config.exclude || [],
      ...config
    };
 
    this._dayOffset = 0;
    this._loadedFor = null;
    this._events = [];
    this._conditionals = [];
    this._conditionalsOpen = false;
    this._legendFiltersOpen = false;
 
    /*
     * V19 :
     * mode d'affichage des entités.
     * On conserve le choix courant si setConfig() est rappelé.
     *
     * V20 :
     * la valeur par défaut peut être fixée depuis la config YAML
     * de la carte (entity_name_mode: friendly | entity_id).
     * Le choix fait via le bouton dans l'UI reste prioritaire
     * lors des rappels ultérieurs de setConfig().
     */
    const validEntityNameModes =
      ["friendly", "entity_id"];
 
    const configuredEntityNameMode =
      validEntityNameModes.includes(
        config.entity_name_mode
      )
        ? config.entity_name_mode
        : "friendly";
 
    this._entityNameMode =
      this._entityNameMode ||
      configuredEntityNameMode;
 
    this._filters = {
      done: true,
      skipped: false,
      no_action: false,
      error: true,
      running: true,
      planned: true,
      conditional: true
    };
 
    /*
     * V15.1 :
     * Home Assistant peut rappeler setConfig() sur la même
     * instance lors d'un rechargement/rafraîchissement.
     * attachShadow() une seconde fois provoque alors
     * "Shadow root cannot be created..." et la carte affiche
     * simplement "Erreur de configuration".
     */
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
  }
 
 
  set hass(hass) {
    const inputs = this._predictionInputs(hass);
    const inputsChanged = this._predictionInputKey !== inputs;
    this._predictionInputKey = inputs;
    this._hass = hass;
 
    if (!this.shadowRoot.childNodes.length) {
      this.shadowRoot.innerHTML = "<ha-card></ha-card>";
    }
 
    const key = this._dateKey(this._targetDate());
 
    if (this._loadedFor !== key || inputsChanged) {
      this._loadedFor = key;
      this._load();
    }
  }
 
 
  getCardSize() {
    return 8;
  }


  /*
   * V25 :
   * resolution de langue + traduction. Priorite a
   * config.language si fourni et supporte, sinon la langue
   * du profil HA de l'utilisateur (hass.language / hass.locale.
   * language), repli sur l'anglais si la langue n'est pas
   * supportee par la carte.
   */
  _lang() {

    const configured =
      this.config?.language;

    if (
      configured &&
      AUTOMATION_TIMELINE_I18N[configured]
    ) {

      return configured;
    }


    const raw =
      this._hass?.language ||
      this._hass?.locale?.language ||
      "en";

    const short =
      String(raw)
        .slice(0, 2)
        .toLowerCase();

    return AUTOMATION_TIMELINE_I18N[short]
      ? short
      : "en";
  }


  _t(key, vars) {

    const table =
      AUTOMATION_TIMELINE_I18N[this._lang()] ||
      AUTOMATION_TIMELINE_I18N.en;

    let text =
      table[key] ??
      AUTOMATION_TIMELINE_I18N.en[key] ??
      key;

    if (vars) {

      for (
        const [k, v]
        of Object.entries(vars)
      ) {

        text =
          text.split("{" + k + "}").join(v);
      }
    }

    return text;
  }
 
 
  /* ==========================================================
     DATES
     ========================================================== */
 
  _targetDate() {
    const d = new Date();
 
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + this._dayOffset);
 
    return d;
  }
 
 
  _dateKey(d) {
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }
 
 
  _startEnd(d) {
    const start = new Date(d);
    start.setHours(0, 0, 0, 0);
 
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
 
    return { start, end };
  }
 
 
  _todayStart() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }
 
 
  _weekdayKey(d) {
    return [
      "sun",
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat"
    ][d.getDay()];
  }
 
 
  /* ==========================================================
     AUTOMATIONS
     ========================================================== */
 
  _automationStates() {
    return Object.values(this._hass.states)
      .filter(state =>
        state.entity_id.startsWith("automation.")
      )
      .filter(state =>
        this.config.include_disabled ||
        state.state === "on"
      )
      .filter(state =>
        !this.config.exclude.includes(
          state.entity_id
        )
      );
  }
 
 
  /* ==========================================================
     CHARGEMENT
     ========================================================== */
 
  async _load() {
    // Serialize refreshes: state changes during an API call request one rerun.
    if (this._loadTask) {
      this._loadAgain = true;
      return this._loadTask;
    }
    this._loadTask = Promise.resolve().then(async () => {
      do {
        this._loadAgain = false;
        this._loadedFor = this._dateKey(this._targetDate());
        try {
          await this._loadData();
        } catch (error) {
          console.error("Automation Timeline : chargement impossible", error);
          this._loadedFor = null;
          this._loading = false;
          this._render();
        }
      } while (this._loadAgain);
    }).finally(() => { this._loadTask = null; });
    return this._loadTask;
  }

  async _loadData() {
    this._loading = true;
    this._render();

    /*
     * V24 :
     * nécessaire pour résoudre les actions ciblant un appareil
     * (target.device_id) vers leur entité — voir
     * _ensureDeviceRegistry() / _resolveEntityFromDevice().
     * Doit être prêt avant le formatage des actions ci-dessous.
     */
    await Promise.all([this._ensureDeviceRegistry(), this._loadSchedules()]);

    const date = this._targetDate();
    const { start, end } = this._startEnd(date);

    const automations = this._automationStates();
 
    let events = [];
    let conditionals = [];
 
    const chunks = [];
 
    for (
      let i = 0;
      i < automations.length;
      i += 8
    ) {
      chunks.push(
        automations.slice(i, i + 8)
      );
    }
 
 
    for (const chunk of chunks) {
 
      const results =
        await Promise.allSettled(
          chunk.map(
            state =>
              this._readAutomation(state)
          )
        );
 
 
      for (const result of results) {
 
        if (
          result.status !== "fulfilled"
        ) {
          continue;
        }
 
 
        const {
          state,
          config,
          traces
        } = result.value;
 
 
        const name =
          state.attributes.friendly_name ||
          state.entity_id;
 
 
        /*
         * HISTORIQUE
         */
 
        for (const trace of traces) {
 
          const timestamp =
            this._traceStart(trace);
 
 
          if (!timestamp) {
            continue;
          }
 
 
          const dt =
            new Date(timestamp);
 
 
          if (
            dt < start ||
            dt >= end
          ) {
            continue;
          }
 
 
          let type =
            this._traceType(trace);
 
 
          let detail =
            this._traceDetail(trace);
 
 
          const triggerDetail =
            trace?.trigger
              ? (
                  this._t("trigger_prefix") +
                  this._formatTriggerText(
                    trace.trigger
                  )
                )
              : null;
 
 
          if (
            this.config.action_details &&
            (
              type === "done" ||
              type === "skipped"
            ) &&
            trace.run_id
          ) {
 
            try {
 
              const fullTrace =
                await this._getTrace(
                  state.attributes.id,
                  trace.run_id
                );
 
 
              /*
               * CONDITION GLOBALE NON REMPLIE
               */
 
              if (
                type === "skipped"
              ) {
 
                const failedCondition =
                  this._extractFailedCondition(
                    fullTrace
                  );
 
 
                if (failedCondition) {
                  detail =
                    failedCondition;
                }
              }
 
 
              /*
               * EXECUTION NORMALE - V17
               *
               * Principe :
               * - on lit uniquement les services réellement exécutés
               *   dans result.params ;
               * - on élimine les actions préparatoires portant
               *   response_variable dans la configuration ;
               * - on conserve TOUTES les autres actions réelles ;
               * - si aucune action métier ne reste => Sans action ;
               * - une condition inline réellement bloquante => Non remplie.
               */
 
              else {
 
                const businessActions =
                  this._executedBusinessServices(
                    fullTrace
                  );
 
 
                const inlineFailure =
                  this._extractFailedInlineCondition(
                    fullTrace
                  );
 
 
                /*
                 * Une condition inline a arrêté la séquence avant
                 * toute action métier ultérieure.
                 */
                if (
                  inlineFailure &&
                  !this._hasBusinessActionAfterPath(
                    fullTrace,
                    businessActions,
                    inlineFailure.path
                  )
                ) {
 
                  type =
                    "skipped";
 
 
                  detail =
                    inlineFailure.text;
                }
 
 
                /*
                 * Une ou plusieurs actions métier ont réellement
                 * été exécutées.
                 */
                else if (
                  businessActions.length
                ) {
 
                  const formattedActions =
                    businessActions.map(
                      item =>
                        this._formatService(
                          item.service
                        )
                    );
 
 
                  if (
                    formattedActions.length === 1
                  ) {
 
                    detail =
                      this._t("action_single_prefix") +
                      formattedActions[0];
                  }
 
 
                  else {
 
                    detail =
                      this._t("actions_multi_prefix") +
                      formattedActions
                        .map(
                          action =>
                            "• " + action
                        )
                        .join("\n");
                  }
                }
 
 
                /*
                 * Exécution terminée mais seulement avec des
                 * opérations préparatoires/techniques, ou aucune
                 * action de service significative.
                 */
                else {
 
                  detail =
                    this._t("no_action_detail");
 
 
                  type =
                    "no_action";
                }
              }
 
            } catch (e) {
 
              console.debug(
                "Automation Timeline : trace détaillée inaccessible",
                state.entity_id,
                e
              );
            }
          }
 
 
          events.push({
 
            time:
              dt,
 
            type,
 
            name,
 
            entity_id:
              state.entity_id,
 
            trigger_detail:
              (
                type === "done" ||
                type === "no_action" ||
                type === "error" ||
                type === "running"
              )
                ? triggerDetail
                : null,
 
            detail,
 
            count:
              1
          });
        }
 
 
        /*
         * FUTUR
         */
 
        if (
          config &&
          date >= this._todayStart()
        ) {
 
          const prediction =
            this._predict(
              config,
              date,
              state
            );
 
 
          for (
            const ev
            of prediction.events
          ) {
 
            if (
              ev.time >= start &&
              ev.time < end
            ) {
 
              events.push(ev);
            }
          }
 
 
          if (
            this.config.show_conditionals &&
            prediction.conditional
          ) {
 
            conditionals.push({
 
              type:
                "conditional",
 
              name,
 
              entity_id:
                state.entity_id,
 
              detail:
                prediction.conditionalDetail
            });
          }
        }
      }
    }
 
 
    const now =
      new Date();
 
 
    events =
      events.filter(
        ev =>
          ev.type !== "planned" ||
          this._dayOffset > 0 ||
          ev.time > now
      );
 
 
    events.sort(
      (a, b) =>
        a.time - b.time
    );
 
 
    // Do not briefly publish results calculated before a newer state/day change.
    if (this._loadAgain) return;

    this._events =
      this._mergeEvents(events);
 
 
    this._conditionals =
      conditionals.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );
 
 
    this._loading = false;
    this._render();
  }
 
 
  /* ==========================================================
     CONFIGURATION + TRACES
     ========================================================== */
 
  async _readAutomation(state) {
 
    const id =
      state.attributes.id;
 
 
    let config = null;
    let traces = [];
 
 
    if (!id) {
 
      return {
        state,
        config,
        traces
      };
    }
 
 
    try {
 
      config =
        await this._hass.callApi(
          "GET",
          "config/automation/config/" +
          encodeURIComponent(id)
        );
 
    } catch (e) {
 
      console.debug(
        "Automation Timeline : configuration inaccessible",
        state.entity_id
      );
    }
 
 
    try {
 
      const result =
        await this._hass.callWS({
 
          type:
            "trace/list",
 
          domain:
            "automation",
 
          item_id:
            id
        });
 
 
      traces =
        Array.isArray(result)
          ? result
          : result?.traces || [];
 
    } catch (e) {
 
      console.debug(
        "Automation Timeline : traces inaccessibles",
        state.entity_id
      );
    }
 
 
    return {
      state,
      config,
      traces
    };
  }
 
 
  async _getTrace(
    itemId,
    runId
  ) {
 
    return await this._hass.callWS({
 
      type:
        "trace/get",
 
      domain:
        "automation",
 
      item_id:
        itemId,
 
      run_id:
        runId
    });
  }
 
 
  /* ==========================================================
     ANALYSE DES TRACES
     ========================================================== */
 
  _traceStart(trace) {
 
    return (
      trace?.timestamp?.start ||
      trace?.start ||
      null
    );
  }
 
 
  _traceType(trace) {
 
    if (
      trace?.error ||
      trace?.script_execution === "error"
    ) {
 
      return "error";
    }
 
 
    if (
      trace?.script_execution ===
        "failed_conditions" ||
      trace?.state ===
        "failed_conditions"
    ) {
 
      return "skipped";
    }
 
 
    if (
      !trace?.timestamp?.finish &&
      (
        trace?.state === "running" ||
        trace?.script_execution ===
          "running"
      )
    ) {
 
      return "running";
    }
 
 
    return "done";
  }
 
 
  _traceDetail(trace) {
 
    if (trace?.error) {
 
      return (
        this._t("error_prefix") +
        trace.error
      );
    }
 
 
    if (
      trace?.script_execution ===
      "failed_conditions"
    ) {
 
      return this._t("conditions_not_met");
    }
 
 
    if (trace?.trigger) {
 
      return (
        this._t("trigger_prefix") +
        this._formatTriggerText(
          trace.trigger
        )
      );
    }
 
 
    return this._t("trace_executed_fallback");
  }
 
 
  /* ==========================================================
     CONDITION NON REMPLIE
     ========================================================== */
 
  _extractFailedCondition(fullTrace) {
 
    if (!fullTrace) {
      return null;
    }
 
 
    /*
     * V17 :
     * pour une condition globale, on utilise la valeur HISTORIQUE
     * contenue dans la trace (state / wanted_state*), et non l'état
     * actuel de l'entité dans Home Assistant.
     */
    const trace =
      fullTrace.trace || {};
 
 
    const topLevelFailures =
      [];
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      if (
        !/^condition\/\d+$/.test(
          String(path)
        )
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        const result =
          entry?.result;
 
 
        if (
          result?.result === false
        ) {
 
          topLevelFailures.push(
            path
          );
 
          break;
        }
      }
    }
 
 
    if (
      topLevelFailures.length
    ) {
 
      const path =
        topLevelFailures[0];
 
 
      return this._formatFailedTraceCondition(
        fullTrace,
        path
      );
    }
 
 
    /*
     * Fallback V18 :
     * on reste dans les données HISTORIQUES de la trace.
     * On remonte depuis last_step jusqu'au noeud de condition
     * réellement présent dans trace, puis on utilise le même
     * formateur historique que pour les conditions top-level.
     */
    const fallbackPath =
      this._nearestFailedConditionTracePath(
        fullTrace
      );
 
 
    if (
      fallbackPath
    ) {
 
      return this._formatFailedTraceCondition(
        fullTrace,
        fallbackPath
      );
    }
 
 
    return null;
  }
 
 
  _nearestFailedConditionTracePath(
    fullTrace
  ) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    const lastStep =
      String(
        fullTrace?.last_step ||
        ""
      );
 
 
    if (!lastStep) {
      return null;
    }
 
 
    /*
     * V19 :
     * remonter last_step segment par segment jusqu'au
     * PREMIER noeud de configuration qui est réellement
     * une condition (.condition).
     *
     * On ne dépend donc plus du fait que result:false soit
     * porté par exactement le même chemin : HA peut placer
     * le détail sur entity_id/0 alors que la condition est
     * son parent.
     */
    const parts =
      lastStep.split("/");
 
 
    for (
      let i = parts.length;
      i >= 1;
      i--
    ) {
 
      const path =
        parts
          .slice(0, i)
          .join("/");
 
 
      /*
       * V20 :
       * même garde-fou que _extractFailedInlineCondition.
       * Un chemin contenant "/conditions/" est la liste de
       * sélection d'une branche choose/if, pas une condition
       * bloquante pour l'automation entière — on ne doit
       * jamais s'y arrêter ici.
       */
      if (
        path.includes(
          "/conditions/"
        )
      ) {
        continue;
      }
 
 
      const configNode =
        this._configNodeAtTracePath(
          fullTrace.config,
          path
        );
 
 
      if (
        configNode &&
        typeof configNode === "object" &&
        configNode.condition
      ) {
 
        /*
         * Vérifier qu'il y a bien un échec sur le noeud
         * ou l'un de ses descendants dans la trace.
         */
        const hasFailure =
          Object.entries(trace)
            .some(
              ([tracePath, entries]) => {
 
                if (
                  tracePath !== path &&
                  !tracePath.startsWith(
                    path + "/"
                  )
                ) {
                  return false;
                }
 
 
                const list =
                  Array.isArray(entries)
                    ? entries
                    : [entries];
 
 
                return list.some(
                  entry =>
                    entry?.result?.result === false
                );
              }
            );
 
 
        if (hasFailure) {
          return path;
        }
      }
    }
 
 
    return null;
  }
 
 
  _formatFailedTraceCondition(
    fullTrace,
    basePath
  ) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    /*
     * V19 :
     * le résultat utile peut être porté par basePath lui-même
     * (cas concret d'une condition template simple avec
     * result.entities), pas uniquement par un descendant.
     */
    const baseEntries =
      trace[basePath];
 
 
    const baseList =
      Array.isArray(baseEntries)
        ? baseEntries
        : baseEntries
          ? [baseEntries]
          : [];
 
 
    const baseResults =
      baseList
        .map(
          entry =>
            entry?.result
        )
        .filter(
          result =>
            result &&
            typeof result === "object" &&
            result.result === false
        );
 
 
    const descendants =
      [];
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      if (
        !String(path).startsWith(
          basePath + "/"
        )
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        const result =
          entry?.result;
 
 
        if (
          result &&
          typeof result === "object" &&
          result.result === false
        ) {
 
          descendants.push({
            path,
            result
          });
        }
      }
    }
 
 
    /*
     * Priorité aux sous-noeuds entity_id/N :
     * ce sont eux qui donnent state vs wanted_state*.
     */
    const structured =
      descendants.find(
        item =>
          /\/entity_id\/\d+$/.test(
            item.path
          ) &&
          item.result.state !== undefined
      );
 
 
    if (structured) {
 
      const conditionNode =
        this._configNodeAtTracePath(
          fullTrace.config,
          basePath
        ) || {};
 
 
      let entityId =
        conditionNode.entity_id;
 
 
      if (
        Array.isArray(entityId)
      ) {
 
        const match =
          structured.path.match(
            /\/entity_id\/(\d+)$/
          );
 
 
        const index =
          match
            ? Number(match[1])
            : 0;
 
 
        entityId =
          entityId[index];
      }
 
 
      const name =
        entityId
          ? this._entityDisplayName(
              entityId
            )
          : this._t("entity_fallback_name");
 
 
      const result =
        structured.result;
 
 
      const actual =
        result.state;
 
 
      if (
        result.wanted_state !== undefined
      ) {
 
        return this._t(
          "condition_not_met_equals",
          {
            name,
            wanted: result.wanted_state,
            actual
          }
        );
      }
 
 
      if (
        result.wanted_state_above !== undefined &&
        result.wanted_state_below !== undefined
      ) {
 
        return this._t(
          "condition_not_met_between",
          {
            above: result.wanted_state_above,
            name,
            below: result.wanted_state_below,
            actual
          }
        );
      }
 
 
      if (
        result.wanted_state_above !== undefined
      ) {
 
        return this._t(
          "condition_not_met_above",
          {
            name,
            above: result.wanted_state_above,
            actual
          }
        );
      }
 
 
      if (
        result.wanted_state_below !== undefined
      ) {
 
        return this._t(
          "condition_not_met_below",
          {
            name,
            below: result.wanted_state_below,
            actual
          }
        );
      }
    }
 
 
    /*
     * Condition template : HA ne sait pas décomposer le Jinja,
     * mais peut parfois fournir les entités référencées.
     */
    const baseEntityHint =
      baseResults.find(
        result =>
          Array.isArray(
            result.entities
          ) &&
          result.entities.length
      );
 
 
    const descendantEntityHint =
      descendants.find(
        item =>
          Array.isArray(
            item.result.entities
          ) &&
          item.result.entities.length
      );
 
 
    const entities =
      baseEntityHint?.entities ||
      descendantEntityHint?.result?.entities ||
      [];
 
 
    if (
      entities.length
    ) {
 
      const names =
        entities
          .map(
            entityId =>
              this._entityDisplayName(
                entityId
              )
          )
          .join(", ");
 
 
      return (
        this._t("condition_template_generic") +
        this._t("depends_on_prefix") +
        names
      );
    }
 
 
    return (
      this._t("condition_template_generic")
    );
  }
 
 
  _extractFailedInlineCondition(
    fullTrace
  ) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      /*
       * Les conditions d'un choose servent à sélectionner
       * une branche : leur échec ne signifie PAS que
       * l'automation entière est "Non remplie".
       */
      if (
        String(path).includes(
          "/conditions/"
        )
      ) {
        continue;
      }
 
 
      const configNode =
        this._configNodeAtTracePath(
          fullTrace.config,
          path
        );
 
 
      if (
        !configNode ||
        typeof configNode !== "object" ||
        !configNode.condition
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        if (
          entry?.result?.result === false
        ) {
 
          return {
            path,
            text:
              this._formatFailedTraceCondition(
                fullTrace,
                path
              )
          };
        }
      }
    }
 
 
    return null;
  }
 
 
 
 
  /* ==========================================================
     V13 - VALEURS RENDUES DES SERVICES EXECUTES
     ========================================================== */
 
  _enrichServiceWithRenderedData(
    fullTrace,
    fallbackService
  ) {
 
    if (
      !fullTrace ||
      !fallbackService
    ) {
 
      return fallbackService;
    }
 
 
    /*
     * V16 :
     * Home Assistant expose dans le "Résultat" de l'étape
     * les paramètres réellement envoyés au service :
     *
     * result:
     *   params:
     *     domain: number
     *     service: set_value
     *     service_data:
     *       value: 42
     *
     * Cette source est prioritaire sur la configuration YAML,
     * car les templates y sont déjà évalués.
     */
    const renderedResult =
      this._renderedServiceFromStepResults(
        fullTrace,
        fallbackService
      );
 
 
    if (renderedResult) {
 
      return renderedResult;
    }
 
 
    const candidates =
      this._renderedServiceCandidates(
        fullTrace
      )
        .filter(candidate =>
          this._sameServiceTarget(
            candidate,
            fallbackService
          )
        );
 
 
    if (!candidates.length) {
      return fallbackService;
    }
 
 
    /*
     * On préfère d'abord une valeur réellement rendue
     * (donc sans template Jinja), puis la dernière action
     * correspondante rencontrée dans la trace.
     */
    candidates.sort(
      (a, b) => {
 
        const aRendered =
          this._containsTemplate(
            a.data
          )
            ? 0
            : 1;
 
 
        const bRendered =
          this._containsTemplate(
            b.data
          )
            ? 0
            : 1;
 
 
        if (aRendered !== bRendered) {
          return aRendered - bRendered;
        }
 
 
        if (a.depth !== b.depth) {
          return a.depth - b.depth;
        }
 
 
        return a.order - b.order;
      }
    );
 
 
    const best =
      candidates[
        candidates.length - 1
      ];
 
 
    return {
 
      service:
        fallbackService.service,
 
      target:
        best.target ||
        fallbackService.target,
 
      data:
        (
          best.data &&
          Object.keys(best.data).length
        )
          ? best.data
          : fallbackService.data
    };
  }
 
 
  _renderedServiceFromStepResults(
    fullTrace,
    fallbackService
  ) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    let best =
      null;
 
 
    let bestOrder =
      -1;
 
 
    let order =
      0;
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      if (
        !String(path).startsWith("action/")
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        /*
         * On ne lit ici QUE la partie "result",
         * c'est-à-dire le résultat réellement exécuté
         * affiché par HA dans Historique des exécutions.
         */
        const services =
          this._servicesFromResultTree(
            entry?.result
          );
 
 
        for (const service of services) {
 
          if (
            !this._sameServiceTarget(
              service,
              fallbackService
            )
          ) {
            order++;
            continue;
          }
 
 
          /*
           * Un résultat contenant encore un template
           * n'est pas considéré comme une valeur finale.
           */
          if (
            this._containsTemplate(
              service.data
            )
          ) {
            order++;
            continue;
          }
 
 
          if (
            order >= bestOrder
          ) {
 
            best =
              service;
 
 
            bestOrder =
              order;
          }
 
 
          order++;
        }
      }
    }
 
 
    if (!best) {
 
      return null;
    }
 
 
    return {
 
      service:
        fallbackService.service,
 
      target:
        best.target ||
        fallbackService.target,
 
      data:
        (
          best.data &&
          Object.keys(best.data).length
        )
          ? best.data
          : fallbackService.data
    };
  }
 
 
  _servicesFromResultTree(root) {
 
    const result =
      [];
 
 
    if (
      !root ||
      typeof root !== "object"
    ) {
 
      return result;
    }
 
 
    const visited =
      new WeakSet();
 
 
    const walk = value => {
 
      if (
        !value ||
        typeof value !== "object"
      ) {
        return;
      }
 
 
      if (
        visited.has(value)
      ) {
        return;
      }
 
 
      visited.add(value);
 
 
      const params =
        value.params;
 
 
      if (
        params &&
        typeof params === "object"
      ) {
 
        let service =
          null;
 
 
        if (
          typeof params.domain === "string" &&
          typeof params.service === "string"
        ) {
 
          service =
            params.domain +
            "." +
            params.service;
        }
 
 
        else if (
          typeof params.service === "string" &&
          params.service.includes(".")
        ) {
 
          service =
            params.service;
        }
 
 
        if (service) {
 
          result.push({
 
            service,
 
            target:
              params.target,
 
            data:
              params.service_data ||
              params.data ||
              {}
          });
        }
      }
 
 
      /*
       * Certains résultats peuvent être eux-mêmes
       * directement structurés comme un appel de service.
       */
      if (
        typeof value.service === "string"
      ) {
 
        let service =
          value.service;
 
 
        if (
          value.domain &&
          !service.includes(".")
        ) {
 
          service =
            value.domain +
            "." +
            service;
        }
 
 
        result.push({
 
          service,
 
          target:
            value.target,
 
          data:
            value.service_data ||
            value.data ||
            {}
        });
      }
 
 
      for (
        const child
        of Object.values(value)
      ) {
 
        if (
          child &&
          typeof child === "object"
        ) {
 
          walk(child);
        }
      }
    };
 
 
    walk(root);
 
 
    return result;
  }
 
 
  _renderedServiceCandidates(fullTrace) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    const result = [];
 
 
    let order = 0;
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      /*
       * V15 :
       * on ne cherche des valeurs rendues que dans
       * les étapes d'action. Les données du trigger
       * ne peuvent donc jamais être prises pour une action.
       */
      if (
        !String(path).startsWith("action/")
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        const foundList =
          this._renderedServicesFromEntry(
            entry
          );
 
 
        for (const found of foundList) {
 
          result.push({
            ...found,
            path,
            depth:
              String(path)
                .split("/")
                .length,
            order:
              order++
          });
        }
      }
    }
 
 
    return result;
  }
 
 
  _renderedServicesFromEntry(entry) {
 
    const result = [];
 
 
    const visited =
      new WeakSet();
 
 
    const walk = value => {
 
      if (
        !value ||
        typeof value !== "object"
      ) {
        return;
      }
 
 
      if (
        visited.has(value)
      ) {
        return;
      }
 
 
      visited.add(value);
 
 
      /*
       * Format classique d'une étape de trace :
       *
       * params:
       *   domain: number
       *   service: set_value
       *   target: ...
       *   service_data:
       *     value: 60
       *
       * Selon l'étape HA, une seconde structure
       * params/result peut contenir les valeurs
       * après rendu des templates. On collecte
       * toutes les variantes puis on choisira la
       * meilleure (sans {{ ... }}).
       */
      const params =
        value.params;
 
 
      if (
        params &&
        typeof params === "object"
      ) {
 
        let service = null;
 
 
        if (
          typeof params.domain === "string" &&
          typeof params.service === "string"
        ) {
 
          service =
            params.domain +
            "." +
            params.service;
        }
 
 
        else if (
          typeof params.service === "string" &&
          params.service.includes(".")
        ) {
 
          service =
            params.service;
        }
 
 
        if (service) {
 
          result.push({
 
            service,
 
            target:
              params.target,
 
            data:
              params.service_data ||
              params.data ||
              {}
          });
        }
      }
 
 
      /*
       * Formats alternatifs rencontrés dans
       * certaines structures de trace.
       */
      if (
        typeof value.service === "string"
      ) {
 
        result.push({
 
          service:
            value.service,
 
          target:
            value.target,
 
          data:
            value.service_data ||
            value.data ||
            {}
        });
      }
 
 
      if (
        typeof value.action === "string" &&
        value.action.includes(".")
      ) {
 
        result.push({
 
          service:
            value.action,
 
          target:
            value.target,
 
          data:
            value.service_data ||
            value.data ||
            {}
        });
      }
 
 
      /*
       * Recherche récursive notamment dans
       * result / params / child / variables de trace.
       */
      for (
        const child
        of Object.values(value)
      ) {
 
        if (
          child &&
          typeof child === "object"
        ) {
 
          walk(child);
        }
      }
    };
 
 
    walk(entry);
 
 
    return result;
  }
 
 
  _sameServiceTarget(
    candidate,
    fallback
  ) {
 
    if (
      !candidate ||
      !fallback ||
      candidate.service !==
        fallback.service
    ) {
 
      return false;
    }
 
 
    const wanted =
      this._serviceEntityIds(
        fallback
      );
 
 
    const actual =
      this._serviceEntityIds(
        candidate
      );
 
 
    /*
     * Si l'action V12 ne désigne pas explicitement
     * d'entité, le service identique suffit.
     */
    if (!wanted.length) {
      return true;
    }
 
 
    /*
     * Si la trace ne répète pas la cible, on ne peut
     * pas prouver la correspondance : on l'écarte.
     */
    if (!actual.length) {
      return false;
    }
 
 
    return wanted.some(
      entityId =>
        actual.includes(
          entityId
        )
    );
  }
 
 
  _serviceEntityIds(serviceObject) {
 
    const values = [];
 
 
    const add = value => {
 
      if (Array.isArray(value)) {
        value.forEach(add);
        return;
      }
 
 
      if (
        typeof value === "string" &&
        value.length
      ) {
        values.push(value);
      }
    };
 
 
    add(
      serviceObject?.target?.entity_id
    );
 
 
    add(
      serviceObject?.data?.entity_id
    );
 
 
    return [...new Set(values)];
  }
 
 
  _containsTemplate(value) {
 
    if (
      typeof value === "string"
    ) {
 
      return (
        value.includes("{{") ||
        value.includes("{%")
      );
    }
 
 
    if (Array.isArray(value)) {
 
      return value.some(
        item =>
          this._containsTemplate(
            item
          )
      );
    }
 
 
    if (
      value &&
      typeof value === "object"
    ) {
 
      return Object.values(value)
        .some(item =>
          this._containsTemplate(
            item
          )
        );
    }
 
 
    return false;
  }
 
 
  /* ==========================================================
     V17 - ACTIONS METIER REELLEMENT EXECUTEES
     ========================================================== */
 
  _executedBusinessServices(
    fullTrace
  ) {
 
    const trace =
      fullTrace?.trace || {};
 
 
    const actions =
      [];
 
 
    let order =
      0;
 
 
    for (
      const [path, entries]
      of Object.entries(trace)
    ) {
 
      if (
        !String(path).startsWith(
          "action/"
        )
      ) {
        continue;
      }
 
 
      const list =
        Array.isArray(entries)
          ? entries
          : [entries];
 
 
      for (const entry of list) {
 
        /*
         * result.params est la source de vérité :
         * le service a réellement été appelé et les templates
         * de service_data ont déjà été résolus par HA.
         */
        const renderedServices =
          this._servicesFromResultTree(
            entry?.result
          );
 
 
        for (
          const rawService
          of renderedServices
        ) {
 
          if (
            !rawService?.service
          ) {
            continue;
          }
 
 
          const configNode =
            this._configNodeAtTracePath(
              fullTrace.config,
              path
            );
 
 
          /*
           * Signal générique confirmé par les traces :
           * response_variable => action de lecture/préparation,
           * pas une action métier finale.
           */
          if (
            configNode &&
            typeof configNode === "object" &&
            configNode.response_variable
          ) {
 
            continue;
          }
 
 
          const service =
            this._enrichServiceWithRenderedData(
              fullTrace,
              rawService
            );
 
 
          actions.push({
            path,
            order:
              order++,
            service
          });
        }
      }
    }
 
 
    /*
     * Déduplication stricte d'une même étape/service.
     * On ne fusionne PAS deux commandes distinctes vers
     * deux entités différentes.
     */
    const seen =
      new Set();
 
 
    return actions.filter(
      item => {
 
        const key =
          item.path +
          "|" +
          item.service.service +
          "|" +
          JSON.stringify(
            item.service.target || {}
          ) +
          "|" +
          JSON.stringify(
            item.service.data || {}
          );
 
 
        if (
          seen.has(key)
        ) {
          return false;
        }
 
 
        seen.add(key);
 
        return true;
      }
    );
  }
 
 
  _hasBusinessActionAfterPath(
    fullTrace,
    businessActions,
    failedPath
  ) {
 
    if (
      !businessActions?.length
    ) {
      return false;
    }
 
 
    const paths =
      Object.keys(
        fullTrace?.trace ||
        {}
      );
 
 
    const failedIndex =
      paths.indexOf(
        failedPath
      );
 
 
    if (
      failedIndex < 0
    ) {
 
      return false;
    }
 
 
    return businessActions.some(
      item =>
        paths.indexOf(
          item.path
        ) >
        failedIndex
    );
  }
 
 
  _configNodeAtTracePath(
    config,
    path
  ) {
 
    if (
      !config ||
      !path
    ) {
      return null;
    }
 
 
    const parts =
      String(path)
        .split("/");
 
 
    let current =
      config;
 
 
    let i =
      0;
 
 
    if (
      parts[0] === "action"
    ) {
 
      current =
        config.actions ||
        config.action ||
        [];
 
 
      i =
        1;
    }
 
 
    else if (
      parts[0] === "condition"
    ) {
 
      current =
        config.conditions ||
        config.condition ||
        [];
 
 
      i =
        1;
    }
 
 
    for (
      ;
      i < parts.length;
      i++
    ) {
 
      const part =
        parts[i];
 
 
      if (
        /^\d+$/.test(part) &&
        Array.isArray(current)
      ) {
 
        current =
          current[
            Number(part)
          ];
 
        continue;
      }
 
 
      if (
        !current ||
        typeof current !== "object"
      ) {
 
        return null;
      }
 
 
      if (
        part === "choose"
      ) {
 
        current =
          current.choose;
 
        continue;
      }
 
 
      if (
        part === "sequence"
      ) {
 
        current =
          current.sequence;
 
        continue;
      }
 
 
      if (
        part === "conditions"
      ) {
 
        current =
          current.conditions;
 
        continue;
      }
 
 
      if (
        part === "default"
      ) {
 
        current =
          current.default;
 
        continue;
      }
 
 
      if (
        part === "then"
      ) {
 
        current =
          current.then;
 
        continue;
      }
 
 
      if (
        part === "else"
      ) {
 
        current =
          current.else;
 
        continue;
      }
 
 
      if (
        part === "if"
      ) {
 
        current =
          current.if;
 
        continue;
      }
 
 
      if (
        current[part] !== undefined
      ) {
 
        current =
          current[part];
 
        continue;
      }
 
 
      /*
       * Certains segments de trace décrivent un résultat
       * interne (entity_id/N...) et ne correspondent plus
       * à un nœud de configuration. On s'arrête alors sur
       * la condition/action parente.
       */
      break;
    }
 
 
    return current ||
      null;
  }
 
 
 
 
  /* ==========================================================
     FORMAT ACTION
     ========================================================== */
 
  _formatService(serviceObj) {
 
    const service =
      serviceObj.service || "";
 
 
    const target =
      serviceObj.target || {};
 
 
    let targetEntity =
      null;
 
 
    if (
      typeof target.entity_id ===
      "string"
    ) {
 
      targetEntity =
        target.entity_id;
    }
 
 
    else if (
      Array.isArray(
        target.entity_id
      )
    ) {
 
      targetEntity =
        target.entity_id[0] ||
        null;
    }
 
 
    if (
      !targetEntity &&
      serviceObj.data &&
      typeof serviceObj.data.entity_id ===
        "string"
    ) {
 
      targetEntity =
        serviceObj.data.entity_id;
    }
 
 
    else if (
      !targetEntity &&
      serviceObj.data &&
      Array.isArray(
        serviceObj.data.entity_id
      )
    ) {

      targetEntity =
        serviceObj.data.entity_id[0] ||
        null;
    }


    /*
     * V23 :
     * certaines actions ciblent un appareil (target.device_id)
     * plutôt qu'une entité directement — cas classique de
     * "Choisir l'appareil" dans l'éditeur d'action HA.
     * La trace ne contient alors aucun target.entity_id : on
     * résout donc l'entité via le registre (this._hass.entities),
     * restreinte si possible au domaine du service appelé.
     */
    if (
      !targetEntity &&
      target.device_id
    ) {

      const domain =
        service.includes(".")
          ? service.split(".")[0]
          : null;

      targetEntity =
        this._resolveEntityFromDevice(
          target.device_id,
          domain
        );
    }


    const data =
      serviceObj.data || {};
 
 
    let friendlyTarget =
      targetEntity
        ? this._entityDisplayName(
            targetEntity
          )
        : null;


    /*
     * V23 :
     * si aucune entité n'a pu être résolue depuis le
     * device_id (registre indisponible, entité désactivée...),
     * on affiche au moins le nom de l'appareil plutôt que
     * rien du tout.
     */
    if (
      !friendlyTarget &&
      target.device_id
    ) {

      friendlyTarget =
        this._deviceDisplayName(
          target.device_id
        );
    }
 
 
    const translations = {
 
      "switch.turn_on":
        this._t("action_switch_turn_on"),
 
      "switch.turn_off":
        this._t("action_switch_turn_off"),
 
      "switch.toggle":
        this._t("action_toggle"),
 
      "light.turn_on":
        this._t("action_light_turn_on"),
 
      "light.turn_off":
        this._t("action_light_turn_off"),
 
      "cover.open_cover":
        this._t("action_cover_open"),
 
      "cover.close_cover":
        this._t("action_cover_close"),
 
      "cover.stop_cover":
        this._t("action_cover_stop"),
 
      "cover.set_cover_position":
        this._t("action_cover_position"),
 
      "input_boolean.turn_on":
        this._t("action_enabled"),
 
      "input_boolean.turn_off":
        this._t("action_disabled"),
 
      "input_boolean.toggle":
        this._t("action_toggle"),
 
      "input_select.select_option":
        this._t("action_option_selected"),
 
      "select.select_option":
        this._t("action_option_selected"),
 
      "number.set_value":
        this._t("action_value_set"),
 
      "input_number.set_value":
        this._t("action_value_set"),
 
      "climate.set_temperature":
        this._t("action_temperature_set"),
 
      "climate.set_hvac_mode":
        this._t("action_hvac_mode_set"),
 
      "fan.turn_on":
        this._t("action_fan_on"),
 
      "fan.turn_off":
        this._t("action_fan_off"),
 
      "fan.set_percentage":
        this._t("action_fan_speed_set"),
 
      "media_player.turn_on":
        this._t("action_media_on"),
 
      "media_player.turn_off":
        this._t("action_media_off"),
 
      "media_player.media_play":
        this._t("action_media_play"),
 
      "media_player.media_pause":
        this._t("action_media_pause"),
 
      "media_player.volume_set":
        this._t("action_volume_set"),
 
      "script.turn_on":
        this._t("action_script_started"),
 
      "automation.turn_on":
        this._t("action_automation_on"),
 
      "automation.turn_off":
        this._t("action_automation_off"),
 
      "automation.trigger":
        this._t("action_automation_triggered"),
 
      "camera.snapshot":
        this._t("action_camera_snapshot"),
 
      "notify.send_message":
        this._t("action_notify_sent"),
 
      "homeassistant.turn_on":
        this._t("action_enabled"),
 
      "homeassistant.turn_off":
        this._t("action_disabled")
    };
 
 
    const actionLabel =
      translations[service] ||
      this._humanizeService(
        service
      );
 
 
    /*
     * V15 :
     * présentation homogène :
     *
     * Valeur réglée → Entité = 42
     * Option sélectionnée → Entité = Enabled
     * Automation activée → Nom
     */
 
    let value;
    let suffix = "";
 
 
    if (
      data.option !== undefined
    ) {
 
      value =
        data.option;
    }
 
 
    else if (
      data.value !== undefined
    ) {
 
      value =
        data.value;
    }
 
 
    else if (
      data.position !== undefined
    ) {
 
      value =
        data.position;
 
      suffix =
        " %";
    }
 
 
    else if (
      data.percentage !== undefined
    ) {
 
      value =
        data.percentage;
 
      suffix =
        " %";
    }
 
 
    else if (
      data.brightness_pct !== undefined
    ) {
 
      value =
        data.brightness_pct;
 
      suffix =
        " %";
    }
 
 
    else if (
      data.temperature !== undefined
    ) {
 
      value =
        data.temperature;
 
      suffix =
        " °C";
    }
 
 
    else if (
      data.volume_level !== undefined
    ) {
 
      value =
        Math.round(
          data.volume_level * 100
        );
 
      suffix =
        " %";
    }
 
 
    if (
      friendlyTarget &&
      value !== undefined
    ) {
 
      return (
        actionLabel +
        " → " +
        friendlyTarget +
        " = " +
        value +
        suffix
      );
    }
 
 
    if (
      friendlyTarget
    ) {
 
      return (
        actionLabel +
        " → " +
        friendlyTarget
      );
    }
 
 
    if (
      value !== undefined
    ) {
 
      return (
        actionLabel +
        " = " +
        value +
        suffix
      );
    }
 
 
    return actionLabel;
  }
 
 
  /*
   * V21 :
   * le nom retourné est enveloppé dans des marqueurs de
   * mise en évidence (caractères de contrôle improbables
   * dans un texte normal). Ils traversent _esc() sans être
   * transformés, puis _esc() les convertit en <span> APRES
   * avoir échappé le reste du texte — voir _esc().
   * Cela évite d'avoir à réécrire l'échappement HTML dans
   * chaque fonction qui construit une chaîne de detail.
   */
  _highlightEntity(name) {
 
    if (
      name === null ||
      name === undefined
    ) {
 
      return name;
    }
 
 
    return (
      "\uE000" +
      name +
      "\uE001"
    );
  }
 
 
  _entityDisplayName(entityId) {
 
    if (!entityId) {
      return null;
    }
 
 
    if (
      this._entityNameMode ===
      "entity_id"
    ) {
 
      return this._highlightEntity(
        entityId
      );
    }
 
 
    return this._highlightEntity(
      this._friendlyEntityName(
        entityId
      )
    );
  }


  /*
   * V24 :
   * this._hass.entities / this._hass.devices ne sont pas
   * garantis par toutes les versions du frontend HA (constaté :
   * absents → aucune entité résolue depuis V23). On charge donc
   * nous-mêmes le registre appareils/entités via callWS(), une
   * seule fois par instance de carte, avec les mêmes commandes
   * WebSocket que celles utilisées par l'éditeur HA lui-même.
   */
  async _ensureDeviceRegistry() {

    if (this._entitiesByDevice) {
      return;
    }


    try {

      const [
        deviceEntries,
        entityEntries
      ] = await Promise.all([

        this._hass.callWS({
          type:
            "config/device_registry/list"
        }),

        this._hass.callWS({
          type:
            "config/entity_registry/list"
        })
      ]);


      const deviceNames = {};

      for (
        const device
        of deviceEntries || []
      ) {

        if (
          !device ||
          !device.id
        ) {
          continue;
        }

        deviceNames[device.id] =
          device.name_by_user ||
          device.name ||
          null;
      }


      const entitiesByDevice = {};

      for (
        const entity
        of entityEntries || []
      ) {

        if (
          !entity ||
          !entity.device_id ||
          !entity.entity_id
        ) {
          continue;
        }

        if (
          !entitiesByDevice[
            entity.device_id
          ]
        ) {

          entitiesByDevice[
            entity.device_id
          ] = [];
        }

        entitiesByDevice[
          entity.device_id
        ].push(entity);
      }


      this._deviceNames =
        deviceNames;

      this._entitiesByDevice =
        entitiesByDevice;

    } catch (e) {

      console.debug(
        "Automation Timeline : registre appareils/entités inaccessible",
        e
      );

      this._deviceNames =
        this._deviceNames || {};

      this._entitiesByDevice =
        this._entitiesByDevice || {};
    }
  }


  /*
   * V24 :
   * résout un device_id (target.device_id) vers l'entity_id
   * le plus pertinent de cet appareil, à partir du registre
   * chargé par _ensureDeviceRegistry(). Restreint au domaine
   * du service quand celui-ci est connu (ex : "camera" pour
   * camera.snapshot), pour éviter de remonter une entité
   * annexe du même appareil (ex : un sensor de qualité de
   * signal plutôt que la caméra elle-même).
   */
  _resolveEntityFromDevice(
    deviceId,
    domain
  ) {

    if (
      !deviceId ||
      !this._entitiesByDevice
    ) {

      return null;
    }


    const candidates =
      (
        this._entitiesByDevice[
          deviceId
        ] || []
      ).filter(
        entry =>
          !domain ||
          String(
            entry.entity_id || ""
          ).startsWith(
            domain + "."
          )
      );


    if (!candidates.length) {
      return null;
    }


    const visible =
      candidates.find(
        entry =>
          !entry.hidden_by &&
          !entry.disabled_by
      );


    return (
      (visible || candidates[0])
        .entity_id ||
      null
    );
  }


  /*
   * V24 :
   * dernier recours d'affichage quand aucune entité n'a pu
   * être résolue pour un target.device_id (registre vide,
   * entité désactivée...) : on montre le nom de l'appareil
   * plutôt que de laisser l'action sans cible visible.
   */
  _deviceDisplayName(deviceId) {

    if (
      !deviceId ||
      !this._deviceNames
    ) {

      return null;
    }


    const name =
      this._deviceNames[deviceId];


    return name
      ? this._highlightEntity(name)
      : null;
  }


  _formatTriggerText(text) {
 
    const raw =
      String(
        text ?? ""
      );
 
 
    /*
     * V21 :
     * transformation générique, sans connaître le type
     * de trigger. On ne remplace que les motifs qui sont
     * réellement des entity_id présents dans hass.states,
     * et on délègue à _entityDisplayName() pour que le mode
     * d'affichage ET la mise en évidence restent cohérents
     * avec le reste de la carte.
     */
    return raw.replace(
      /\b[a-z0-9_]+\.[a-z0-9_]+\b/g,
      match => {
 
        if (
          !this._hass?.states?.[match]
        ) {
 
          return match;
        }
 
 
        return this._entityDisplayName(
          match
        );
      }
    );
  }
 
 
  _friendlyEntityName(entityId) {
 
    if (!entityId) {
      return null;
    }
 
 
    const state =
      this._hass.states[
        entityId
      ];
 
 
    if (
      state &&
      state.attributes &&
      state.attributes.friendly_name
    ) {
 
      return (
        state.attributes.friendly_name
      );
    }
 
 
    return (
      entityId
        .split(".")
        .pop()
        .replace(/_/g, " ")
    );
  }
 
 
  _humanizeService(service) {
 
    if (!service) {
 
      return this._t("humanize_fallback");
    }
 
 
    const parts =
      service.split(".");
 
 
    const name =
      parts.length > 1
        ? parts[1]
        : parts[0];
 
 
    return (
      name
        .replace(/_/g, " ")
        .replace(
          /\b\w/g,
          c =>
            c.toUpperCase()
        )
    );
  }
 
 
  /* ==========================================================
     PREVISIONS
     ========================================================== */
 
  // Schedule definitions come from the read-only get_schedule action, not
  // next_event (which describes only one boundary, not the whole week).
  async _loadSchedules() {
    this._schedules = {};
    const ids = Object.keys(this._hass.states).filter(id => id.startsWith("schedule."));
    for (let i = 0; i < ids.length; i += 8) {
      await Promise.all(ids.slice(i, i + 8).map(async id => {
        try {
          const result = await this._hass.callWS({
            type: "call_service", domain: "schedule", service: "get_schedule",
            target: { entity_id: id }, return_response: true
          });
          const schedule = result?.response?.[id];
          const days = this._scheduleDays();
          if (schedule && days.every(day => Array.isArray(schedule[day]) &&
            schedule[day].every(block => {
              const from = this._clockSeconds(block.from);
              const to = this._clockSeconds(block.to);
              return from !== null && to !== null && from < to;
            }))) {
            this._schedules[id] = schedule;
          }
        } catch (error) {
          // A missing/unsupported service or permission failure is uncertainty,
          // never proof that a schedule is empty or inactive.
          console.debug("Automation Timeline : planning inaccessible", id, error);
        }
      }));
    }
  }

  _predictionInputs(hass) {
    return JSON.stringify([
      hass.config?.time_zone, hass.config?.latitude, hass.config?.longitude, hass.config?.elevation,
      hass.states["sun.sun"]?.state, hass.states["sun.sun"]?.attributes?.next_dusk,
      Object.keys(hass.states).filter(id => /^(input_boolean|schedule)\./.test(id))
        .sort().map(id => [id, hass.states[id].state, hass.states[id].attributes])
    ]);
  }

  _scheduleDays() {
    return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  }

  _clockSeconds(value) {
    if (typeof value !== "string") return null;
    const match = /^(\d{1,2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?$/.exec(value);
    if (!match) return null;
    const [, h, m, s = "0"] = match;
    if (+h > 24 || +m > 59 || +s > 59 || (+h === 24 && (+m || +s))) return null;
    return +h * 3600 + +m * 60 + +s;
  }

  _haParts(date) {
    const zone = this._hass.config?.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._partsZone !== zone) {
      this._partsZone = zone;
      this._partsFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
      });
    }
    const parts = {};
    for (const part of this._partsFormatter.formatToParts(date)) {
      if (part.type !== "literal") parts[part.type] = Number(part.value);
    }
    return parts;
  }

  _haWallTime(day, seconds) {
    const wall = Date.UTC(day.year, day.month - 1, day.day, 0, 0, seconds);
    const matches = new Set();
    // Probe both sides of a DST transition. Missing wall times stay uncertain;
    // an ambiguous wall time uses its first occurrence, as a schedule does.
    for (const delta of [-36, 0, 36]) {
      const probe = wall + delta * 3600000;
      const p = this._haParts(new Date(probe));
      const offset = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second) - probe;
      const candidate = wall - offset;
      const c = this._haParts(new Date(candidate));
      if (Date.UTC(c.year, c.month - 1, c.day, c.hour, c.minute, c.second) === wall) {
        matches.add(candidate);
      }
    }
    return matches.size ? new Date(Math.min(...matches)) : null;
  }

  _scheduleStateAt(id, date) {
    const schedule = this._schedules?.[id];
    const current = this._hass.states[id]?.state;
    if (!schedule || !["on", "off"].includes(current)) return null;
    const p = this._haParts(date);
    const day = new Date(Date.UTC(p.year, p.month - 1, p.day)).getUTCDay();
    // Compare instants rather than wall-clock strings at the autumn DST fold.
    for (const block of schedule[this._scheduleDays()[day]]) {
      const start = this._haWallTime(p, this._clockSeconds(block.from));
      const end = this._haWallTime(p, this._clockSeconds(block.to));
      if (!start || !end) return null;
      if (date >= start && date < end) return "on";
    }
    return "off";
  }

  _haTimesOnDisplayedDay(date, seconds) {
    const { start, end } = this._startEnd(date);
    const base = this._haParts(start);
    const times = [];
    for (let offset = 0; offset <= 1; offset++) {
      const day = new Date(Date.UTC(base.year, base.month - 1, base.day + offset));
      const dt = this._haWallTime({ year: day.getUTCFullYear(), month: day.getUTCMonth() + 1, day: day.getUTCDate() }, seconds);
      if (!dt) return null;
      if (dt >= start && dt < end) times.push(dt);
    }
    return times;
  }

  _zeroDuration(duration) {
    if (duration == null || duration === 0 || duration === "00:00:00") return true;
    return typeof duration === "object" && !Array.isArray(duration) &&
      Object.keys(duration).every(key => ["days", "hours", "minutes", "seconds", "milliseconds"].includes(key) && duration[key] === 0);
  }

  _scheduleTriggerTimes(trigger, date) {
    const kind = trigger.trigger || trigger.platform;
    const native = kind === "schedule.block_started" || kind === "schedule.block_ended";
    const target = trigger.target || {};
    const rawIds = native ? target.entity_id : trigger.entity_id;
    const ids = rawIds == null ? [] : [].concat(rawIds);
    const options = trigger.options || {};
    const duration = native ? options.for : trigger.for;
    // Complex targets/durations remain conditional instead of being guessed.
    if (!ids.length || (native && Object.keys(target).some(key => key !== "entity_id")) ||
        (native && options.behavior && options.behavior !== "each") ||
        !this._zeroDuration(duration) ||
        trigger.attribute || trigger.not_from || trigger.not_to) return null;
    const from = trigger.from == null ? null : [].concat(trigger.from);
    const to = trigger.to == null ? null : [].concat(trigger.to);
    if (!native && ((!from && !to) || [from, to].some(values =>
      values && values.some(value => !["on", "off"].includes(value))))) return null;

    const { start, end } = this._startEnd(date);
    const base = this._haParts(start);
    const events = [];
    let uncertain = false;
    for (const id of ids) {
      if (typeof id !== "string" || !id.startsWith("schedule.") ||
          !this._schedules?.[id] || !["on", "off"].includes(this._hass.states[id]?.state)) {
        uncertain = true;
        continue;
      }
      const boundaries = new Map();
      // Cover the displayed browser day even when HA uses another time zone,
      // including a previous day's 24:00 boundary.
      for (let offset = -1; offset <= 2; offset++) {
        const day = new Date(Date.UTC(base.year, base.month - 1, base.day + offset));
        const p = { year: day.getUTCFullYear(), month: day.getUTCMonth() + 1, day: day.getUTCDate() };
        const blocks = this._schedules[id][this._scheduleDays()[day.getUTCDay()]];
        for (const block of blocks) {
          for (const field of ["from", "to"]) {
            const dt = this._haWallTime(p, this._clockSeconds(block[field]));
            if (!dt) { uncertain = true; continue; }
            if (dt >= start && dt < end) {
              const entry = boundaries.get(+dt) || { time: dt, starts: false };
              entry.starts ||= field === "from";
              boundaries.set(+dt, entry);
            }
          }
        }
      }
      for (const entry of boundaries.values()) {
        const before = this._scheduleStateAt(id, new Date(+entry.time - 1));
        const after = this._scheduleStateAt(id, entry.time);
        if (before === null || after === null) { uncertain = true; continue; }
        const fires = native
          ? (kind === "schedule.block_started" ? entry.starts && after === "on" : before === "on" && after === "off")
          : before !== after && (!from || from.includes(before)) && (!to || to.includes(after));
        if (fires) events.push({ time: entry.time, entity_id: id, state: after });
      }
    }
    return { events, uncertain };
  }

  _combineVerdicts(values, mode = "and") {
    if (mode === "or") {
      return values.includes("ok") ? "ok" : values.includes("uncertain") ? "uncertain" : "blocked";
    }
    return values.includes("blocked") ? "blocked" : values.includes("uncertain") ? "uncertain" : "ok";
  }

  _conditionVerdict(config, date, triggerId) {
    const conditions = config.conditions ?? config.condition ?? [];
    return this._combineVerdicts([].concat(conditions).map(condition =>
      this._oneConditionVerdict(condition, date, triggerId)));
  }

  _oneConditionVerdict(condition, date, triggerId) {
    if (!condition || typeof condition !== "object") return "uncertain";
    if (condition.enabled === false) return "ok";
    let kind = condition.condition;
    // HA also accepts shorthand {or: [...]}, {and: [...]}, {not: [...]}.
    if (!kind) kind = ["and", "or", "not"].find(key => key in condition);
    if (["and", "or", "not"].includes(kind)) {
      const children = condition.conditions ?? condition[kind];
      if (children == null) return "uncertain";
      const values = [].concat(children).map(child => this._oneConditionVerdict(child, date, triggerId));
      const result = this._combineVerdicts(values, kind === "not" ? "or" : kind);
      return kind === "not" ? ({ ok: "blocked", blocked: "ok", uncertain: "uncertain" })[result] : result;
    }
    if (kind === "trigger") {
      if (triggerId === undefined) return "uncertain";
      return [].concat(condition.id ?? []).map(String).includes(String(triggerId)) ? "ok" : "blocked";
    }
    if (kind === "time") {
      if (!date) return "uncertain";
      const p = this._haParts(date);
      const weekday = this._scheduleDays()[new Date(Date.UTC(p.year, p.month - 1, p.day)).getUTCDay()].slice(0, 3);
      if (condition.weekday && ![].concat(condition.weekday).includes(weekday)) return "blocked";
      const after = condition.after === undefined ? 0 : this._clockSeconds(condition.after);
      const before = condition.before === undefined ? 86400 : this._clockSeconds(condition.before);
      if (after === null || before === null) return "uncertain";
      const seconds = p.hour * 3600 + p.minute * 60 + p.second;
      const passes = after <= before ? seconds >= after && seconds < before : seconds >= after || seconds < before;
      return passes ? "ok" : "blocked";
    }
    const native = kind === "schedule.is_on" || kind === "schedule.is_off";
    if (kind !== "state" && !native) return "uncertain";
    if (condition.attribute || !this._zeroDuration(condition.for) || !this._zeroDuration(condition.options?.for)) return "uncertain";
    if (native && Object.keys(condition.target || {}).some(key => key !== "entity_id")) return "uncertain";
    const ids = [].concat((native ? condition.target?.entity_id : condition.entity_id) ?? []);
    const wanted = native ? [kind === "schedule.is_on" ? "on" : "off"] : [].concat(condition.state ?? []);
    if (!ids.length || !wanted.length || wanted.some(value => typeof value !== "string" || /\{[{%]/.test(value))) return "uncertain";
    const values = ids.map(id => {
      if (typeof id !== "string") return "uncertain";
      let actual;
      if (id.startsWith("schedule.")) actual = date ? this._scheduleStateAt(id, date) : null;
      else if (id.startsWith("input_boolean.")) actual = this._hass.states[id]?.state;
      else return "uncertain"; // Do not extrapolate arbitrary sensor states.
      if (!["on", "off"].includes(actual)) return "uncertain";
      return wanted.includes(actual) ? "ok" : "blocked";
    });
    const behavior = native ? condition.options?.behavior || "all" : condition.match || "all";
    if (!["all", "any"].includes(behavior)) return "uncertain";
    return this._combineVerdicts(values, behavior === "any" ? "or" : "and");
  }

  _predict(config, date, state) {
    const triggers = [].concat(config.triggers ?? config.trigger ?? []);
    const events = [];
    const uncertain = new Set();
    const add = (time, detail, triggerId) => {
      const verdict = this._conditionVerdict(config, time, triggerId);
      if (verdict === "ok") events.push(this._futureEvent(time, state, detail));
      else if (verdict === "uncertain") uncertain.add(this._t("condition_dependent"));
    };
    triggers.forEach((trigger, index) => {
      if (!trigger || trigger.enabled === false) return;
      const kind = trigger.trigger || trigger.platform;
      const triggerId = trigger.id ?? String(index);
      // A false current boolean gate blocks even an otherwise unknown trigger.
      // Time/schedule conditions cannot be decided without a trigger instant.
      if (this._conditionVerdict(config, null, triggerId) === "blocked") return;
      if (kind === "time") {
        for (const at of [].concat(trigger.at ?? [])) {
          const resolved = this._resolveTime(at);
          if (!resolved) { uncertain.add(this._t("dynamic_time")); continue; }
          const times = this._haTimesOnDisplayedDay(date, resolved.hour * 3600 + resolved.minute * 60 + resolved.second);
          if (!times) uncertain.add(this._t("dynamic_time"));
          for (const dt of times || []) add(dt, this._t(resolved.dynamic ? "schedule_dynamic" : "schedule"), triggerId);
        }
      } else if (kind === "sun.dusk") {
        const prediction = this._duskPrediction(trigger, date);
        if (!prediction) { uncertain.add("sun.dusk"); return; }
        prediction.times.forEach(dt => add(dt, this._t("dusk_" + prediction.type), triggerId));
      } else if (kind === "sun") {
        const base = this._sunForDate(date, trigger.event);
        if (!base) { uncertain.add(trigger.event || "sun"); return; }
        add(new Date(+base + this._parseOffset(trigger.offset)),
          this._t(trigger.event === "sunrise" ? "sunrise" : "sunset"), triggerId);
      } else if (kind === "time_pattern") {
        const exact = this._exactTimePattern(trigger, date);
        if (!exact.length) uncertain.add(this._t("time_pattern_lower"));
        for (const dt of exact) {
          const times = this._haTimesOnDisplayedDay(date, dt.getHours() * 3600 + dt.getMinutes() * 60 + dt.getSeconds());
          if (!times) uncertain.add(this._t("time_pattern_lower"));
          for (const time of times || []) add(time, this._t("time_pattern"), triggerId);
        }
      } else if (kind === "state" || kind === "schedule.block_started" || kind === "schedule.block_ended") {
        const prediction = this._scheduleTriggerTimes(trigger, date);
        if (!prediction || prediction.uncertain) uncertain.add(kind);
        for (const event of prediction?.events || []) {
          const label = this._entityDisplayName(event.entity_id);
          add(event.time, this._t(event.state === "on" ? "schedule_start" : "schedule_end") + " : " + label, triggerId);
        }
      } else {
        uncertain.add(kind || this._t("dynamic_trigger"));
      }
    });
    return {
      events, conditional: uncertain.size > 0,
      conditionalDetail: this._t("unpredictable_trigger_prefix") + [...uncertain].join(", ")
    };
  }


  _resolveTime(at) {
 
    if (
      typeof at !== "string"
    ) {
 
      return null;
    }
 
 
    if (
      /^\d{1,2}:\d{2}(:\d{2})?$/
        .test(at)
    ) {
 
      const parts =
        at.split(":")
          .map(Number);
 
 
      return {
 
        hour:
          parts[0],
 
        minute:
          parts[1],
 
        second:
          parts[2] || 0,
 
        dynamic:
          false
      };
    }
 
 
    const entity =
      this._hass.states[at];
 
 
    if (!entity) {
 
      return null;
    }
 
 
    const value =
      entity.state;
 
 
    if (
      /^\d{1,2}:\d{2}(:\d{2})?$/
        .test(value)
    ) {
 
      const parts =
        value.split(":")
          .map(Number);
 
 
      return {
 
        hour:
          parts[0],
 
        minute:
          parts[1],
 
        second:
          parts[2] || 0,
 
        dynamic:
          true
      };
    }
 
 
    if (
      entity.attributes.hour !== undefined &&
      entity.attributes.minute !== undefined
    ) {
 
      return {
 
        hour:
          Number(
            entity.attributes.hour
          ),
 
        minute:
          Number(
            entity.attributes.minute
          ),
 
        second:
          Number(
            entity.attributes.second ||
            0
          ),
 
        dynamic:
          true
      };
    }
 
 
    return null;
  }
 
 
  _futureEvent(
    dt,
    state,
    detail
  ) {
 
    return {
 
      time:
        dt,
 
      type:
        "planned",
 
      name:
        state.attributes.friendly_name ||
        state.entity_id,
 
      entity_id:
        state.entity_id,
 
      detail,
 
      count:
        1
    };
  }
 
 
  /* ==========================================================
     SOLEIL
     ========================================================== */
 
  _solarOffsetMilliseconds(value) {
    if (value === undefined) return 0;
    if (typeof value === "number") return Number.isFinite(value) ? value * 1000 : null;
    if (typeof value === "string") {
      const match = /^([+-]?)(\d+):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/.exec(value.trim());
      if (!match || +match[3] > 59 || +(match[4] || 0) >= 60) return null;
      return (match[1] === "-" ? -1 : 1) * (+match[2] * 3600 + +match[3] * 60 + +(match[4] || 0)) * 1000;
    }
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const units = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000, milliseconds: 1 };
    let total = 0;
    for (const [key, amount] of Object.entries(value)) {
      if (!Object.hasOwn(units, key) || typeof amount !== "number" || !Number.isFinite(amount)) return null;
      total += units[key] * amount;
    }
    return Number.isFinite(total) ? total : null;
  }

  _solarObserver() {
    const { latitude, longitude, elevation = 0 } = this._hass.config || {};
    if (![latitude, longitude, elevation].every(value => typeof value === "number" && Number.isFinite(value)) ||
        Math.abs(latitude) > 90 || Math.abs(longitude) > 180) return null;
    return { latitude, longitude, elevation };
  }

  _duskPrediction(trigger, date) {
    const options = trigger.options || {};
    const type = options.type ?? "civil";
    const depressions = { civil: 6, nautical: 12, astronomical: 18 };
    if (!Object.hasOwn(depressions, type)) return null;
    const rawOffset = this._solarOffsetMilliseconds(options.offset);
    const direction = options.offset_type ?? "before";
    if (rawOffset === null || !["before", "after"].includes(direction)) return null;
    const offset = direction === "before" ? -rawOffset : rawOffset;
    const { start, end } = this._startEnd(date);
    const sourceStart = +start - offset;
    const sourceEnd = +end - offset;
    if (![sourceStart, sourceEnd].every(value => Number.isFinite(value) && Math.abs(value) < 8.64e15 - 86400000)) return null;
    const observer = this._solarObserver();
    const sun = this._hass.states["sun.sun"];
    const rawDusk = sun?.attributes?.next_dusk;
    const nextDusk = typeof rawDusk === "string" ? new Date(rawDusk) : null;
    const usableNextDusk = nextDusk && Number.isFinite(+nextDusk) &&
      !["unknown", "unavailable"].includes(sun.state) && type === "civil";
    if (!observer) {
      // next_dusk is the next CIVIL dusk only. It cannot be moved forward by
      // 24 hours or reused for nautical/astronomical twilight.
      return usableNextDusk && +nextDusk >= sourceStart && +nextDusk < sourceEnd
        ? { times: [new Date(+nextDusk + offset)], type } : null;
    }
    const times = [];
    // Shift the search window BEFORE choosing the solar date: an offset can
    // move an event across midnight, across DST, or by several whole days.
    let day = new Date(sourceStart);
    day.setUTCHours(0, 0, 0, 0);
    for (; +day < sourceEnd; day = new Date(+day + 86400000)) {
      let dusk = this._astralDuskUTC(day, observer, depressions[type]);
      if (usableNextDusk && nextDusk.toISOString().slice(0, 10) === day.toISOString().slice(0, 10)) dusk = nextDusk;
      if (dusk && +dusk >= sourceStart && +dusk < sourceEnd) times.push(new Date(+dusk + offset));
    }
    return { times, type };
  }

  /*
   * The following three astronomy methods are adapted from Astral 3.2:
   * https://github.com/sffjunkie/astral (astral/sun.py and astral/__init__.py).
   * Copyright 2009-2021 Simon Kennedy, sffjunkie+code@gmail.com.
   * Licensed under Apache-2.0; the full license is included at the end of
   * this file. Modifications: JavaScript port limited to evening twilight,
   * merged coefficient calculations, null results instead of ValueError.
   */
  _astralSolarTerms(century) {
    const rad = Math.PI / 180;
    const t = century;
    const longitude = ((280.46646 + t * (36000.76983 + 0.0003032 * t)) % 360 + 360) % 360;
    const anomaly = (357.52911 + t * (35999.05029 - 0.0001537 * t)) * rad;
    const eccentricity = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
    const center = Math.sin(anomaly) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
      Math.sin(2 * anomaly) * (0.019993 - 0.000101 * t) + Math.sin(3 * anomaly) * 0.000289;
    const omega = (125.04 - 1934.136 * t) * rad;
    const apparent = (longitude + center - 0.00569 - 0.00478 * Math.sin(omega)) * rad;
    const obliquity = (23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60 +
      0.00256 * Math.cos(omega)) * rad;
    const declination = Math.asin(Math.sin(obliquity) * Math.sin(apparent));
    const y = Math.tan(obliquity / 2) ** 2;
    const l = longitude * rad;
    const equation = 4 / rad * (y * Math.sin(2 * l) - 2 * eccentricity * Math.sin(anomaly) +
      4 * eccentricity * y * Math.sin(anomaly) * Math.cos(2 * l) -
      0.5 * y * y * Math.sin(4 * l) - 1.25 * eccentricity * eccentricity * Math.sin(2 * anomaly));
    return { declination, equation };
  }

  _astralDuskTransit(day, observer, depression) {
    const rad = Math.PI / 180;
    const latitude = Math.max(-89.8, Math.min(89.8, observer.latitude)) * rad;
    const horizon = observer.elevation > 0 ? Math.acos(6356900 / (6356900 + observer.elevation)) / rad : 0;
    const geometricElevation = -(depression + horizon);
    // All supported twilight angles are below -0.575 degrees, so only this
    // branch of Astral's refraction correction is needed.
    const refraction = -20.774 / Math.tan(geometricElevation * rad) / 3600;
    const zenith = (90 + depression + horizon + refraction) * rad;
    const julianDay = +day / 86400000 + 2440587.5;
    let minutes = 0;
    for (let iteration = 0; iteration < 2; iteration++) {
      const terms = this._astralSolarTerms((julianDay + minutes / 1440 - 2451545) / 36525);
      const cosine = (Math.cos(zenith) - Math.sin(latitude) * Math.sin(terms.declination)) /
        (Math.cos(latitude) * Math.cos(terms.declination));
      if (!Number.isFinite(cosine) || cosine < -1 || cosine > 1) return null;
      const hourAngle = -Math.acos(cosine) / rad;
      let correction = (-observer.longitude - hourAngle) * 4 - terms.equation;
      if (correction < -720) correction += 1440;
      minutes = 720 + correction;
    }
    return new Date(+day + minutes * 60000);
  }

  _astralDuskUTC(day, observer, depression) {
    let result = this._astralDuskTransit(day, observer, depression);
    if (!result) return null; // This twilight does not occur (polar day/night).
    if (result.toISOString().slice(0, 10) !== day.toISOString().slice(0, 10)) {
      const adjacent = new Date(+day + (+result < +day ? 86400000 : -86400000));
      result = this._astralDuskTransit(adjacent, observer, depression);
      if (!result || result.toISOString().slice(0, 10) !== day.toISOString().slice(0, 10)) return null;
    }
    return result;
  }


  _sunForDate(
    date,
    event
  ) {
 
    const sun =
      this._hass.states[
        "sun.sun"
      ];
 
 
    if (!sun) {
 
      return null;
    }
 
 
    let attr =
      null;
 
 
    if (
      event === "sunrise"
    ) {
 
      attr =
        "next_rising";
    }
 
 
    else if (
      event === "sunset"
    ) {
 
      attr =
        "next_setting";
    }
 
 
    else {
 
      return null;
    }
 
 
    const value =
      sun.attributes[attr];
 
 
    if (!value) {
 
      return null;
    }
 
 
    const dt =
      new Date(value);
 
 
    if (
      this._dateKey(dt) ===
      this._dateKey(date)
    ) {
 
      return dt;
    }
 
 
    return null;
  }
 
 
  _parseOffset(value) {
 
    if (
      !value ||
      typeof value !== "string"
    ) {
 
      return 0;
    }
 
 
    let sign =
      1;
 
 
    let str =
      value.trim();
 
 
    if (
      str.startsWith("-")
    ) {
 
      sign =
        -1;
 
 
      str =
        str.slice(1);
    }
 
 
    else if (
      str.startsWith("+")
    ) {
 
      str =
        str.slice(1);
    }
 
 
    const match =
      str.match(
        /^(\d+):(\d{2}):(\d{2})$/
      );
 
 
    if (!match) {
 
      return 0;
    }
 
 
    return (
      sign *
      (
        Number(match[1]) * 3600 +
        Number(match[2]) * 60 +
        Number(match[3])
      ) *
      1000
    );
  }
 
 
  _exactTimePattern(
    trigger,
    date
  ) {
 
    const hour =
      String(
        trigger.hours ??
        trigger.hour ??
        ""
      );
 
 
    const minute =
      String(
        trigger.minutes ??
        trigger.minute ??
        ""
      );
 
 
    const second =
      String(
        trigger.seconds ??
        trigger.second ??
        "0"
      );
 
 
    if (
      !/^\d+$/.test(hour) ||
      !/^\d+$/.test(minute) ||
      !/^\d+$/.test(second)
    ) {
 
      return [];
    }
 
 
    const dt =
      new Date(date);
 
 
    dt.setHours(
      Number(hour),
      Number(minute),
      Number(second),
      0
    );
 
 
    return [dt];
  }
 
 
  /* ==========================================================
     REGROUPEMENT
     ========================================================== */
 
  _mergeEvents(events) {
 
    if (
      !events.length
    ) {
 
      return [];
    }
 
 
    const result =
      [];
 
 
    for (
      const event
      of events
    ) {
 
      const previous =
        result[
          result.length - 1
        ];
 
 
      if (
        previous &&
        previous.entity_id ===
          event.entity_id &&
        previous.type ===
          event.type &&
        previous.detail ===
          event.detail &&
        previous.trigger_detail ===
          event.trigger_detail &&
        Math.abs(
          event.time -
          previous.time
        ) <=
          this.config.merge_seconds *
          1000
      ) {
 
        previous.count += 1;
 
        continue;
      }
 
 
      result.push({
        ...event
      });
    }
 
 
    return result;
  }
 
 
  /* ==========================================================
     FILTRES
     ========================================================== */
 
  _filteredEvents() {
 
    return this._events.filter(
      ev =>
        this._filters[
          ev.type
        ] !== false
    );
  }
 
 
  _statusCounts() {
 
    const counts = {
 
      done:
        0,
 
      skipped:
        0,
 
      no_action:
        0,
 
      error:
        0,
 
      running:
        0,
 
      planned:
        0,
 
      conditional:
        this._conditionals.length
    };
 
 
    for (
      const ev
      of this._events
    ) {
 
      if (
        counts[ev.type] !== undefined
      ) {
 
        counts[ev.type] +=
          ev.count || 1;
      }
    }
 
 
    return counts;
  }
 
 
  _toggleFilter(type) {
 
    this._filters[type] =
      !this._filters[type];
 
 
    this._render();
  }
 
 
  /* ==========================================================
     SYMBOLES CSS
     ========================================================== */
 
  _statusSymbol(type) {
 
    if (
      type === "skipped"
    ) {
 
      return `
        <span
          class="circleSymbol blockedSymbol"
          aria-hidden="true"
        ></span>
      `;
    }
 
 
    if (
      type === "no_action"
    ) {
 
      return `
        <span
          class="circleSymbol noActionSymbol"
          aria-hidden="true"
        ></span>
      `;
    }
 
 
    const symbols = {
 
      done:
        "✓",
 
      error:
        "✕",
 
      running:
        "●",
 
      planned:
        "→",
 
      conditional:
        "?"
    };
 
 
    return `
      <span class="textSymbol">
        ${symbols[type] || "•"}
      </span>
    `;
  }
 
 
  /* ==========================================================
     NAVIGATION
     ========================================================== */
 
  _openAutomation(
    entityId
  ) {
 
    const event =
      new CustomEvent(
        "hass-more-info",
        {
 
          bubbles:
            true,
 
          composed:
            true,
 
          detail: {
            entityId
          }
        }
      );
 
 
    this.dispatchEvent(
      event
    );
  }
 
 
  /* ==========================================================
     LEGENDE = FILTRES
     ========================================================== */
 
  _legendFiltersHtml(counts) {
 
    const definitions = [
 
      {
        type:
          "done",
 
        label:
          this._t("legend_done_label"),
 
        description:
          this._t("legend_done_desc")
      },
 
      {
        type:
          "skipped",
 
        label:
          this._t("legend_skipped_label"),
 
        description:
          this._t("legend_skipped_desc")
      },
 
      {
        type:
          "no_action",
 
        label:
          this._t("legend_no_action_label"),
 
        description:
          this._t("legend_no_action_desc")
      },
 
      {
        type:
          "error",
 
        label:
          this._t("legend_error_label"),
 
        description:
          this._t("legend_error_desc")
      },
 
      {
        type:
          "running",
 
        label:
          this._t("legend_running_label"),
 
        description:
          this._t("legend_running_desc")
      },
 
      {
        type:
          "planned",
 
        label:
          this._t("legend_planned_label"),
 
        description:
          this._t("legend_planned_desc")
      },
 
      {
        type:
          "conditional",
 
        label:
          this._t("legend_conditional_label"),
 
        description:
          this._t("legend_conditional_desc")
      }
    ];
 
 
    let html = `
 
      <button
        id="legendFiltersHeader"
        class="legendFiltersHeader ${
          this._legendFiltersOpen
            ? "open"
            : ""
        }"
      >
 
        <span>
          ${
            this._legendFiltersOpen
              ? "▼"
              : "▶"
          }
        </span>
 
        <span>
          ${this._t("legend_filters_header")}
        </span>
 
        <span></span>
 
      </button>
    `;
 
 
    if (
      !this._legendFiltersOpen
    ) {
 
      return html;
    }
 
 
    html += `
 
      <div class="legendFiltersPanel">
 
        <div class="legendTable">
 
          ${definitions
            .map(item => {
 
              const active =
                this._filters[
                  item.type
                ] !== false;
 
 
              const count =
                counts[
                  item.type
                ] || 0;
 
 
              return `
 
                <button
                  class="
                    legendFilterRow
                    ${item.type}
                    ${
                      active
                        ? "active"
                        : "inactive"
                    }
                  "
                  data-filter="${item.type}"
                  title="${this._t(
                    "legend_click_to",
                    {
                      action: active
                        ? this._t("legend_action_hide")
                        : this._t("legend_action_show")
                    }
                  )}"
                >
 
                  <span class="legendIdentity">
 
                    <span class="legendIcon">
                      ${this._statusSymbol(
                        item.type
                      )}
                    </span>
 
                    <span class="legendLabel">
                      ${item.label}
                    </span>
 
                  </span>
 
 
                  <span class="legendDescription">
                    ${item.description}
                  </span>
 
 
                  <span class="legendCount">
                    ${count}
                  </span>
 
                </button>
              `;
            })
            .join("")}
 
        </div>
 
 
        <div class="entityNameMode">
 
          <span class="entityNameModeTitle">
            ${this._t("entity_name_mode_title")}
          </span>
 
          <span
            class="entityModeLabel ${
              this._entityNameMode === "friendly"
                ? "selected"
                : ""
            }"
          >
            Friendly name
          </span>
 
          <label
            class="entityModeSwitch"
            title="${this._t("entity_name_mode_toggle_title")}"
          >
 
            <input
              id="entityNameModeToggle"
              type="checkbox"
              ${
                this._entityNameMode === "entity_id"
                  ? "checked"
                  : ""
              }
            >
 
            <span class="entityModeSlider"></span>
 
          </label>
 
          <span
            class="entityModeLabel ${
              this._entityNameMode === "entity_id"
                ? "selected"
                : ""
            }"
          >
            Entity ID
          </span>
 
        </div>
 
      </div>
    `;
 
 
    return html;
  }
 
 
  /* ==========================================================
     RENDU
     ========================================================== */
 
  _render() {
 
    if (
      !this.shadowRoot ||
      !this._hass
    ) {
 
      return;
    }
 
 
    const date =
      this._targetDate();
 
 
    const language =
      this._hass.locale?.language ||
      this._lang();
 
 
    const label =
      new Intl.DateTimeFormat(
        language,
        {
 
          weekday:
            "long",
 
          day:
            "numeric",
 
          month:
            "long"
        }
      ).format(date);
 
 
    const now =
      new Date();
 
 
    const visibleEvents =
      this._filteredEvents();
 
 
    const counts =
      this._statusCounts();
 
 
    const timelineItems =
      [];
 
 
    for (
      const event
      of visibleEvents
    ) {
 
      timelineItems.push({
 
        kind:
          "event",
 
        time:
          event.time,
 
        event
      });
    }
 
 
    if (
      this._dayOffset === 0
    ) {
 
      timelineItems.push({
 
        kind:
          "now",
 
        time:
          now
      });
    }
 
 
    timelineItems.sort(
      (a, b) =>
        a.time - b.time
    );
 
 
    const timelineHtml =
      timelineItems
 
        .map(item => {
 
          if (
            item.kind === "now"
          ) {
 
            return `
 
              <div class="nowline">
 
                <span></span>
 
                <b>
 
                  ${now.toLocaleTimeString(
                    [],
                    {
 
                      hour:
                        "2-digit",
 
                      minute:
                        "2-digit"
                    }
                  )}
 
                  ${this._t("now_label")}
 
                </b>
 
                <span></span>
 
              </div>
            `;
          }
 
 
          return this._eventRow(
            item.event
          );
        })
 
        .join("");
 
 
    const legendFiltersHtml =
      this._legendFiltersHtml(
        counts
      );
 
 
    const conditionalCount =
      this._conditionals.length;
 
 
    let conditionalHtml =
      "";
 
 
    if (
      !this._loading &&
      this.config.show_conditionals &&
      this._filters.conditional &&
      conditionalCount
    ) {
 
      conditionalHtml = `
 
        <button
          id="conditionalHeader"
          class="conditionalHeader"
        >
 
          <span>
            ${
              this._conditionalsOpen
                ? "▼"
                : "▶"
            }
          </span>
 
          <span>
            ${this._t("conditionals_header")}
          </span>
 
          <span class="counter">
            ${conditionalCount}
          </span>
 
        </button>
      `;
 
 
      if (
        this._conditionalsOpen
      ) {
 
        conditionalHtml +=
          this._conditionals
 
            .map(
              ev => `
 
                <button
                  class="row conditional"
                  data-entity="${this._esc(
                    ev.entity_id
                  )}"
                >
 
                  <span class="time">
                    —
                  </span>
 
                  <span class="mark">
                    ${this._statusSymbol(
                      "conditional"
                    )}
                  </span>
 
                  <span class="main">
 
                    <span class="name">
                      ${this._esc(
                        ev.name
                      )}
                    </span>
 
                    <span class="detail">
                      ${this._escWithHighlight(
                        ev.detail
                      )}
                    </span>
 
                  </span>
 
                  <span></span>
 
                </button>
              `
            )
 
            .join("");
      }
    }
 
 
    const empty =
      !this._loading &&
      !visibleEvents.length &&
      !(
        this._filters.conditional &&
        conditionalCount
      )
 
        ? `
          <div class="empty">
            ${this._t("empty_message")}
          </div>
        `
 
        : "";
 
 
    this.shadowRoot.innerHTML = `
 
      <style>
 
        ha-card {
          overflow: hidden;
        }
 
 
        .wrap {
          padding: 16px;
        }
 
 
        .title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
 
 
        /* ====================================================
           NAVIGATION JOURS
           ==================================================== */
 
        .tabs {
          display: grid;
 
          grid-template-columns:
            1fr 1fr 1fr;
 
          gap: 8px;
 
          margin-bottom: 14px;
        }
 
 
        .tab {
          border:
            1px solid
            var(--divider-color);
 
          background:
            var(--card-background-color);
 
          color:
            var(--primary-text-color);
 
          border-radius:
            9px;
 
          padding:
            9px;
 
          cursor:
            pointer;
        }
 
 
        .tab.active {
          background:
            var(--primary-color);
 
          border-color:
            var(--primary-color);
 
          color:
            white;
        }
 
 
        .date {
          text-transform:
            capitalize;
 
          color:
            var(--secondary-text-color);
 
          margin-bottom:
            8px;
        }
 
 
        /* ====================================================
           LEGENDE & FILTRES
           ==================================================== */
 
        .legendFiltersHeader,
        .conditionalHeader {
 
          width:
            100%;
 
          display:
            grid;
 
          grid-template-columns:
            22px 1fr auto;
 
          gap:
            7px;
 
          align-items:
            center;
 
          text-align:
            left;
 
          font-weight:
            600;
 
          cursor:
            pointer;
        }
 
 
        /*
         * V18 :
         * Légende & filtres devient un vrai panneau de contrôle,
         * visuellement distinct de la liste des événements.
         */
        .legendFiltersHeader {
 
          margin-top:
            8px;
 
          padding:
            11px 12px;
 
          border:
            1px solid
            var(--divider-color);
 
          border-radius:
            10px;
 
          background:
            var(--secondary-background-color);
 
          color:
            var(--primary-text-color);
        }
 
 
        .legendFiltersHeader.open {
 
          border-bottom-left-radius:
            0;
 
          border-bottom-right-radius:
            0;
 
          border-bottom-color:
            transparent;
        }
 
 
        .legendFiltersPanel {
 
          padding:
            7px 7px 10px;
 
          border:
            1px solid
            var(--divider-color);
 
          border-top:
            0;
 
          border-bottom-left-radius:
            10px;
 
          border-bottom-right-radius:
            10px;
 
          background:
            var(--secondary-background-color);
 
          margin-bottom:
            10px;
        }
 
 
        .conditionalHeader {
 
          padding:
            10px 5px;
 
          border:
            0;
 
          border-top:
            1px solid
            var(--divider-color);
 
          background:
            transparent;
 
          color:
            var(--secondary-text-color);
        }
 
 
        .legendTable {
 
          display:
            grid;
 
          gap:
            3px;
        }
 
 
        /*
         * Une ligne de légende est maintenant
         * directement un filtre.
         */
 
        .legendFilterRow {
 
          width:
            100%;
 
          display:
            grid;
 
          grid-template-columns:
            155px 1fr 42px;
 
          gap:
            12px;
 
          align-items:
            center;
 
          border:
            0;
 
          border-radius:
            7px;
 
          background:
            transparent;
 
          color:
            var(--primary-text-color);
 
          padding:
            8px 8px;
 
          text-align:
            left;
 
          cursor:
            pointer;
 
          transition:
            opacity .15s ease,
            background .15s ease;
        }
 
 
        .legendFilterRow:hover {
 
          background:
            var(--secondary-background-color);
        }
 
 
        /*
         * Filtre désactivé
         */
 
        .legendFilterRow.inactive {
 
          opacity:
            .30;
 
          filter:
            grayscale(1);
        }
 
 
        .legendIdentity {
 
          display:
            grid;
 
          grid-template-columns:
            24px 1fr;
 
          gap:
            7px;
 
          align-items:
            center;
 
          min-width:
            0;
 
          font-weight:
            600;
        }
 
 
        .legendIcon {
 
          width:
            24px;
 
          height:
            22px;
 
          display:
            flex;
 
          align-items:
            center;
 
          justify-content:
            center;
        }
 
 
        .legendLabel {
 
          white-space:
            nowrap;
        }
 
 
        .legendDescription {
 
          color:
            var(--secondary-text-color);
 
          font-size:
            .80rem;
 
          line-height:
            1.25;
        }
 
 
        /*
         * V19 - choix global Friendly name / Entity ID
         */
        .entityNameMode {
 
          display:
            flex;
 
          align-items:
            center;
 
          justify-content:
            flex-start;
 
          gap:
            8px;
 
          margin:
            10px 8px 2px;
 
          padding-top:
            10px;
 
          border-top:
            1px solid
            var(--divider-color);
 
          font-size:
            .80rem;
        }
 
 
        .entityNameModeTitle {
 
          color:
            var(--secondary-text-color);
 
          font-weight:
            600;
 
          margin-right:
            2px;
        }
 
 
        .entityModeLabel {
 
          color:
            var(--secondary-text-color);
 
          transition:
            color .15s ease,
            opacity .15s ease;
 
          opacity:
            .60;
 
          white-space:
            nowrap;
        }
 
 
        .entityModeLabel.selected {
 
          color:
            var(--primary-text-color);
 
          opacity:
            1;
 
          font-weight:
            600;
        }
 
 
        .entityModeSwitch {
 
          position:
            relative;
 
          display:
            inline-block;
 
          width:
            36px;
 
          height:
            20px;
 
          flex:
            0 0 auto;
 
          cursor:
            pointer;
        }
 
 
        .entityModeSwitch input {
 
          opacity:
            0;
 
          width:
            0;
 
          height:
            0;
        }
 
 
        .entityModeSlider {
 
          position:
            absolute;
 
          inset:
            0;
 
          border-radius:
            999px;
 
          background:
            var(--disabled-text-color);
 
          transition:
            .18s ease;
        }
 
 
        .entityModeSlider::before {
 
          content:
            "";
 
          position:
            absolute;
 
          width:
            16px;
 
          height:
            16px;
 
          left:
            2px;
 
          top:
            2px;
 
          border-radius:
            50%;
 
          background:
            var(--card-background-color);
 
          transition:
            .18s ease;
        }
 
 
        .entityModeSwitch
        input:checked +
        .entityModeSlider {
 
          background:
            var(--primary-color);
        }
 
 
        .entityModeSwitch
        input:checked +
        .entityModeSlider::before {
 
          transform:
            translateX(16px);
        }
 
 
        .legendCount {
 
          justify-self:
            end;
 
          min-width:
            26px;
 
          padding:
            2px 7px;
 
          border-radius:
            11px;
 
          text-align:
            center;
 
          font-size:
            .78rem;
 
          color:
            var(--secondary-text-color);
 
          background:
            var(--secondary-background-color);
 
          font-variant-numeric:
            tabular-nums;
        }
 
 
        /* ====================================================
           SYMBOLES COMMUNS
           ==================================================== */
 
        .textSymbol {
 
          display:
            inline-flex;
 
          align-items:
            center;
 
          justify-content:
            center;
 
          width:
            18px;
 
          height:
            18px;
 
          line-height:
            18px;
 
          font-size:
            17px;
 
          font-weight:
            700;
        }
 
 
        /*
         * IMPORTANT :
         *
         * Non remplie et Sans action utilisent
         * exactement CE MEME cercle CSS.
         *
         * Même diamètre.
         * Même bordure.
         * Même épaisseur.
         * Même position.
         */
 
        .circleSymbol {
 
          position:
            relative;
 
          display:
            inline-block;
 
          box-sizing:
            border-box;
 
          width:
            16px;
 
          height:
            16px;
 
          border:
            2px solid currentColor;
 
          border-radius:
            50%;
 
          flex:
            0 0 16px;
        }
 
 
        /*
         * Seule différence :
         * la barre diagonale de Non remplie.
         */
 
        .blockedSymbol::after {
 
          content:
            "";
 
          position:
            absolute;
 
          left:
            50%;
 
          top:
            50%;
 
          width:
            19px;
 
          height:
            2px;
 
          background:
            currentColor;
 
          border-radius:
            2px;
 
          transform:
            translate(-50%, -50%)
            rotate(-45deg);
 
          transform-origin:
            center;
        }
 
 
        /* ====================================================
           COULEURS
           ==================================================== */
 
        /*
         * V22 :
         * le titre de l'automation (.name) prend maintenant
         * aussi la couleur du statut, comme le symbole (.mark).
         * Ca donne une hiérarchie visuelle claire : le titre
         * indique le statut d'un coup d'oeil (couleur), le
         * detail met en évidence le nom d'entité (gras, couleur
         * neutre) — les deux ne se confondent plus.
         */
 
        /*
         * Exécutée : vert
         */
 
        .done .mark,
        .done .name,
        .legendFilterRow.done
        .legendIdentity {
 
          color:
            #4CAF50;
        }
 
 
        /*
         * Non remplie : orange
         */
 
        .skipped .mark,
        .skipped .name,
        .legendFilterRow.skipped
        .legendIdentity {
 
          color:
            #FF9800;
        }
 
 
        /*
         * Sans action : jaune / ocre
         */
 
        .no_action .mark,
        .no_action .name,
        .legendFilterRow.no_action
        .legendIdentity {
 
          color:
            #FFC107;
        }
 
 
        /*
         * Erreur : rouge
         */
 
        .error .mark,
        .error .name,
        .legendFilterRow.error
        .legendIdentity {
 
          color:
            #F44336;
        }
 
 
        /*
         * En cours : violet
         */
 
        .running .mark,
        .running .name,
        .legendFilterRow.running
        .legendIdentity {
 
          color:
            #9C27B0;
        }
 
 
        /*
         * Prévue : cyan / bleu
         */
 
        .planned .mark,
        .planned .name,
        .legendFilterRow.planned
        .legendIdentity {
 
          color:
            #03A9F4;
        }
 
 
        /*
         * Conditionnelle : gris clair
         */
 
        .conditional .mark,
        .conditional .name,
        .legendFilterRow.conditional
        .legendIdentity {
 
          color:
            #B0BEC5;
        }
 
 
        /* ====================================================
           TIMELINE
           ==================================================== */
 
        .row {
 
          width:
            100%;
 
          display:
            grid;
 
          grid-template-columns:
            52px 24px 1fr auto;
 
          gap:
            8px;
 
          align-items:
            start;
 
          text-align:
            left;
 
          border:
            0;
 
          border-top:
            1px solid
            var(--divider-color);
 
          background:
            transparent;
 
          color:
            var(--primary-text-color);
 
          padding:
            10px 4px;
 
          cursor:
            pointer;
        }
 
 
        .row:hover {
 
          background:
            rgba(
              var(
                --rgb-primary-text-color,
                255,255,255
              ),
              .04
            );
        }
 
 
        .time {
 
          color:
            var(--secondary-text-color);
 
          font-variant-numeric:
            tabular-nums;
 
          white-space:
            nowrap;
        }
 
 
        .mark {
 
          width:
            24px;
 
          min-height:
            20px;
 
          display:
            flex;
 
          align-items:
            center;
 
          justify-content:
            center;
 
          font-weight:
            700;
        }
 
 
        .main {
 
          min-width:
            0;
        }
 
 
        .name {
 
          display:
            block;
 
          font-weight:
            500;
        }
 
 
        .detail {
 
          display:
            block;
 
          margin-top:
            2px;
 
          font-size:
            .81rem;
 
          color:
            var(--secondary-text-color);
 
          overflow-wrap:
            anywhere;
 
          white-space:
            pre-line;
        }


        .detailGrid {
 
          display:
            grid;
 
          grid-template-columns:
            max-content 1fr;
 
          column-gap:
            6px;
 
          row-gap:
            2px;
 
          margin-top:
            2px;
        }
 
 
        .detail-label {
 
          font-size:
            .81rem;
 
          color:
            var(--secondary-text-color);
 
          white-space:
            nowrap;
        }
 
 
        .detail-content {
 
          font-size:
            .81rem;
 
          color:
            var(--secondary-text-color);
 
          overflow-wrap:
            anywhere;
 
          white-space:
            pre-line;
        }
 
 
        /*
         * V21 :
         * fait ressortir le nom d'entité (friendly name ou
         * entity_id selon le mode choisi) dans les actions,
         * conditions et déclencheurs — sans introduire une
         * nouvelle couleur qui entrerait en concurrence avec
         * le code couleur des statuts.
         */
        .entityHighlight {
 
          color:
            var(--primary-text-color);
 
          font-weight:
            600;
        }
 
 
        .count {
 
          font-size:
            .78rem;
 
          color:
            var(--secondary-text-color);
 
          padding-right:
            4px;
 
          white-space:
            nowrap;
        }
 
 
        /* ====================================================
           MAINTENANT
           ==================================================== */
 
        .nowline {
 
          display:
            grid;
 
          grid-template-columns:
            1fr auto 1fr;
 
          gap:
            9px;
 
          align-items:
            center;
 
          margin:
            10px 0;
 
          color:
            var(--primary-color);
 
          font-size:
            .78rem;
        }
 
 
        .nowline span {
 
          height:
            1px;
 
          background:
            var(--primary-color);
        }
 
 
        /* ====================================================
           CONDITIONNELLES
           ==================================================== */
 
        .conditionalHeader {
 
          margin-top:
            16px;
        }
 
 
        .counter {
 
          min-width:
            25px;
 
          padding:
            2px 7px;
 
          border-radius:
            10px;
 
          text-align:
            center;
 
          background:
            var(--secondary-background-color);
        }
 
 
        /* ====================================================
           MESSAGES
           ==================================================== */
 
        .loading,
        .empty {
 
          padding:
            18px 4px;
 
          color:
            var(--secondary-text-color);
 
          text-align:
            center;
        }
 
 
        /* ====================================================
           MOBILE
           ==================================================== */
 
        @media (
          max-width: 650px
        ) {
 
          .legendFilterRow {
 
            grid-template-columns:
              135px 1fr 34px;
 
            gap:
              6px;
 
            padding:
              7px 3px;
          }
 
 
          .legendDescription {
 
            font-size:
              .74rem;
          }
 
 
          .legendCount {
 
            padding:
              2px 5px;
          }
        }
 
 
        @media (
          max-width: 560px
        ) {
 
          .entityNameMode {
 
            flex-wrap:
              wrap;
 
            row-gap:
              6px;
          }
 
 
          .entityNameModeTitle {
 
            flex-basis:
              100%;
          }
        }
 
 
        @media (
          max-width: 480px
        ) {
 
          .legendFilterRow {
 
            grid-template-columns:
              1fr auto;
 
            align-items:
              start;
          }
 
 
          .legendIdentity {
 
            grid-column:
              1;
          }
 
 
          .legendCount {
 
            grid-column:
              2;
 
            grid-row:
              1;
          }
 
 
          .legendDescription {
 
            grid-column:
              1 / 3;
 
            padding-left:
              31px;
          }
        }
 
      </style>
 
 
      <ha-card>
 
        <div class="wrap">
 
 
          <div class="title">
 
            ${this._esc(
              this.config.title
            )}
 
          </div>
 
 
          <div class="tabs">
 
            ${this._dayButton(
              -1,
              this._t("day_yesterday")
            )}
 
            ${this._dayButton(
              0,
              this._t("day_today")
            )}
 
            ${this._dayButton(
              1,
              this._t("day_tomorrow")
            )}
 
          </div>
 
 
          <div class="date">
 
            ${this._esc(label)}
 
          </div>
 
 
          ${legendFiltersHtml}
 
 
          ${
            this._loading
 
              ? `
                <div class="loading">
                  ${this._t("loading_message")}
                </div>
              `
 
              : timelineHtml
          }
 
 
          ${conditionalHtml}
 
 
          ${empty}
 
 
        </div>
 
      </ha-card>
    `;
 
 
    /*
     * JOURS
     */
 
    this.shadowRoot
      .querySelectorAll(".tab")
      .forEach(button => {
 
        button.addEventListener(
          "click",
          () => {
 
            this._dayOffset =
              Number(
                button.dataset.day
              );
 
 
            this._loadedFor =
              null;
 
 
            this._load();
          }
        );
      });
 
 
    /*
     * OUVERTURE AUTOMATION
     */
 
    this.shadowRoot
      .querySelectorAll(".row")
      .forEach(button => {
 
        button.addEventListener(
          "click",
          () => {
 
            this._openAutomation(
              button.dataset.entity
            );
          }
        );
      });
 
 
    /*
     * LEGENDE & FILTRES
     */
 
    const legendFiltersHeader =
      this.shadowRoot.querySelector(
        "#legendFiltersHeader"
      );
 
 
    if (
      legendFiltersHeader
    ) {
 
      legendFiltersHeader
        .addEventListener(
          "click",
          () => {
 
            this._legendFiltersOpen =
              !this._legendFiltersOpen;
 
 
            this._render();
          }
        );
    }
 
 
    /*
     * Chaque ligne de légende
     * est directement un filtre.
     */
 
    this.shadowRoot
      .querySelectorAll(
        ".legendFilterRow"
      )
      .forEach(button => {
 
        button.addEventListener(
          "click",
          event => {
 
            event.stopPropagation();
 
 
            this._toggleFilter(
              button.dataset.filter
            );
          }
        );
      });
 
 
    /*
     * V19 - Friendly name / Entity ID
     *
     * Les détails sont calculés lors de _load(), donc on recharge
     * les traces après le changement pour appliquer le choix partout.
     */
    const entityNameModeToggle =
      this.shadowRoot.querySelector(
        "#entityNameModeToggle"
      );
 
 
    if (
      entityNameModeToggle
    ) {
 
      entityNameModeToggle
        .addEventListener(
          "change",
          () => {
 
            this._entityNameMode =
              entityNameModeToggle.checked
                ? "entity_id"
                : "friendly";
 
 
            this._loadedFor =
              null;
 
 
            this._load();
          }
        );
    }
 
 
    /*
     * CONDITIONNELLES
     */
 
    const conditionalHeader =
      this.shadowRoot.querySelector(
        "#conditionalHeader"
      );
 
 
    if (
      conditionalHeader
    ) {
 
      conditionalHeader
        .addEventListener(
          "click",
          () => {
 
            this._conditionalsOpen =
              !this._conditionalsOpen;
 
 
            this._render();
          }
        );
    }
  }
 
 
  _dayButton(
    offset,
    label
  ) {
 
    return `
 
      <button
        class="tab ${
          this._dayOffset === offset
            ? "active"
            : ""
        }"
        data-day="${offset}"
      >
 
        ${label}
 
      </button>
    `;
  }
 
 
  _eventRow(ev) {
 
    const time =
      ev.time.toLocaleTimeString(
        [],
        {
 
          hour:
            "2-digit",
 
          minute:
            "2-digit"
        }
      );
 
 
    const count =
      ev.count > 1
 
        ? `
          <span class="count">
            ×${ev.count}
          </span>
        `
 
        : `
          <span></span>
        `;
 
 
    return `
 
      <button
        class="row ${ev.type}"
        data-entity="${this._esc(
          ev.entity_id
        )}"
      >
 
        <span class="time">
          ${time}
        </span>
 
 
        <span class="mark">
 
          ${this._statusSymbol(
            ev.type
          )}
 
        </span>
 
 
        <span class="main">
 
          <span class="name">
 
            ${this._esc(
              ev.name
            )}
 
          </span>
 
 
          ${
            (
              ev.trigger_detail ||
              (
                ev.detail &&
                ev.detail !== ev.trigger_detail
              )
            )
              ? `
                <span class="detailGrid">
                  ${this._detailPairHtml(
                    ev.trigger_detail
                  )}
                  ${
                    ev.detail &&
                    ev.detail !== ev.trigger_detail
                      ? this._detailPairHtml(
                          ev.detail
                        )
                      : ""
                  }
                </span>
              `
              : ""
          }
 
        </span>
 
 
        ${count}
 
 
      </button>
    `;
  }
 
 
  _esc(value) {
 
    return String(
      value ?? ""
    ).replace(
      /[&<>"']/g,
      char => ({
 
        "&":
          "&amp;",
 
        "<":
          "&lt;",
 
        ">":
          "&gt;",
 
        '"':
          "&quot;",
 
        "'":
          "&#039;"
 
      })[char]
    );
  }
 
 
  /*
   * V21 :
   * échappe le texte comme _esc(), puis convertit les
   * marqueurs posés par _highlightEntity() en <span> réel.
   * L'échappement passe EN PREMIER : le nom d'entité qu'ils
   * entourent est donc lui aussi échappé avant d'être
   * réinjecté dans le HTML, pas de risque d'injection.
   */
  /* ==========================================================
     V26 : alignement Declencheur / Actions en colonnes
     ========================================================== */

  _splitDetailParts(raw) {

    const str =
      String(raw ?? "");


    const idx =
      str.indexOf(":");


    if (idx === -1) {

      return {

        label:
          "",

        content:
          str
      };
    }


    const label =
      str.slice(0, idx + 1);


    let content =
      str.slice(idx + 1);


    if (
      content.startsWith(" ") ||
      content.startsWith("\n")
    ) {

      content =
        content.slice(1);
    }


    return {

      label,

      content
    };
  }


  _detailPairHtml(raw) {

    if (!raw) {
      return "";
    }


    const { label, content } =
      this._splitDetailParts(raw);


    const bulleted =
      (
        label &&
        !content.startsWith("\u2022 ")
      )
        ? "\u2022 " + content
        : content;


    return `
      <span class="detail-label">${
        label ? this._esc(label) : ""
      }</span>
      <span class="detail-content">${
        this._escWithHighlight(bulleted)
      }</span>
    `;
  }


  _escWithHighlight(value) {
 
    return this._esc(value)
      .replace(
        /\uE000/g,
        '<span class="entityHighlight">'
      )
      .replace(
        /\uE001/g,
        "</span>"
      );
  }
}
 
 
/* ==========================================================
   ENREGISTREMENT CARTE
   ========================================================== */
 
if (
  !customElements.get(
    "automations-overview-card"
  )
) {
 
  customElements.define(
    "automations-overview-card",
    AutomationsOverviewCard
  );
}
 
 
window.customCards =
  window.customCards || [];
 
 
if (
  !window.customCards.some(
    card =>
      card.type ===
      "automations-overview-card"
  )
) {
 
  window.customCards.push({
 
    type:
      "automations-overview-card",
 
    name:
      "Automations Overview",
 
    description:
      (
        (
          (typeof navigator !== "undefined" && navigator.language) ||
          "en"
        ).toLowerCase().startsWith("fr")
          ? "Vue d\u2019ensemble Hier / Aujourd\u2019hui / Demain des automations Home Assistant"
          : "Home Assistant automations overview \u2014 Yesterday / Today / Tomorrow"
      )
  });
}


/*
Third-party license for the three _astral* methods above (Astral 3.2).
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/
