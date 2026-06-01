/* ============================================================
   circady — Sprachumschaltung (DE / EN) + Scroll-Reveal
   Standard: Browsersprache; Deutsch bei "de*", sonst Englisch.
   Manuelle Auswahl wird in localStorage gespeichert.
   ============================================================ */
(function () {
  "use strict";

  var STR = {
    en: {
      "nav.features": "Solutions",
      "nav.protocols": "Protocols",
      "nav.support": "Support",

      "hero.eyebrow": "Longevity Routine Manager",
      "hero.title": "Longevity, made routine.",
      "hero.subtitle": "circady turns the science of healthy aging into curated protocols you can actually follow — timed to your body's natural recovery cycles.",
      "hero.ctaProtocols": "Explore the protocols",

      "shots.ph": "Screenshot coming soon",

      "privacy.heading": "Privacy Policy",

      "protocols.eyebrow": "Where science becomes routine",
      "protocols.title": "The Protocol Library",
      "protocols.lead": "Curated protocols, mapped across six life areas and 254 routine recommendations.",

      "spotlight.eyebrow": "No more guesswork",
      "spotlight.title": "Know exactly what to do",
      "spotlight.lead": "You don't need to read every longevity book. circady distils 20 proven protocols into clear routines — and tells you when each one belongs in your week.",
      "spotlight.p1": "Evidence-based routines across movement, nutrition, sleep, mind, social life and molecules.",
      "spotlight.p2": "Timed around recovery, so your effort actually turns into progress.",
      "spotlight.p3": "Compare 20 longevity protocols and keep what fits you.",
      "spotlight.p4": "Never more than your body — or your week — can absorb.",
      "spotlight.cta": "Open the protocol matrix",
      "spotlight.visTitle": "Recovery-cycle timing",
      "spotlight.visCaption": "Load and recovery, balanced across the week.",
      "mm.row1": "Movement",
      "mm.row2": "Sleep",
      "mm.row3": "Nutrition",

      "custom.eyebrow": "Made to fit you",
      "custom.title": "Or design it entirely your way",
      "custom.lead": "Templates not your thing? Build routines from scratch — your own protocols, your timing, your goals. circady bends to your life, not the other way around.",
      "custom.p1": "Create unlimited custom routines, named and organised your way.",
      "custom.p2": "Set the cadence yourself — daily habits or longer recovery cycles.",
      "custom.p3": "Mix curated protocols with your own into one coherent plan.",
      "custom.bmHeading": "Custom routine",
      "custom.bmName": "Name",
      "custom.bmArea": "Area",
      "custom.bmAreaV": "Movement",
      "custom.bmRepeat": "Repeat",
      "custom.bmRepeatV": "Every 2 days",
      "custom.bmReminder": "Reminder",

      "muscle.eyebrow": "For serious training",
      "muscle.title": "Build muscle on the supercompensation curve",
      "muscle.lead": "Train hard, recover, then hit the sweet spot — not too early, not too late. circady models the supercompensation curve for hypertrophy, so every session lands when your body is ready to grow.",
      "muscle.p1": "Tune the recovery and sweet-spot windows to your own training.",
      "muscle.p2": "See every cycle: stimulus, recovery dip, supercompensation peak.",
      "muscle.p3": "Repeat it right and adaptation compounds — cycle after cycle.",
      "muscle.capApp": "In the app — set your own recovery cycle",
      "muscle.capPrinciple": "The principle continued — well-timed cycles stack into lasting growth",
      "muscle.scExplain": "After a hard training stimulus, your performance first dips while your body recovers. It then rebounds above the starting level — this overshoot is supercompensation. Train again right at that peak and the gains stack up; too early or too late, and progress stalls.",
      "muscle.svgY": "Adaptation",
      "muscle.svgX": "Time",
      "muscle.svgStimulus": "Stimulus",
      "muscle.svgTrend": "Lasting growth",

      "features.eyebrow": "Built for the long run",
      "features.title": "Everything in one rhythm",
      "features.lead": "circady keeps your health practices organised, timed and visible — without the overwhelm.",
      "f1.title": "Recovery cycles",
      "f1.body": "Schedules effort and rest using the supercompensation principle, so progress compounds instead of burning out.",
      "f2.title": "Six life areas",
      "f2.body": "Movement, mind, sleep, social life, nutrition and molecules — balanced in a single view.",
      "f3.title": "Routines that are yours",
      "f3.body": "Build your own routines from scratch — decide which protocols, how often and at what time. circady adapts to your day, not the other way around.",

      "download.eyebrow": "Get circady",
      "download.title": "Start your longevity routine",
      "download.lead": "circady is coming to the App Store. Scan the code or use the badge below to download — soon on iPhone.",
      "download.qrNote": "QR code follows once the app is published",

      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy Policy",
      "footer.support": "Support",
      "footer.protocols": "Protocols",
      "footer.copyright": "© 2026 circady. All rights reserved.",
      "footer.disclaimer": "circady supports healthy habits and is not a medical device. It does not provide medical advice, diagnosis or treatment.",
      "footer.pillars": "Movement · Mind · Sleep · Social · Nutrition · Molecules",

      "support.title": "How can we help?",
      "support.lead": "Questions, feedback or trouble with circady? We're here for you.",
      "support.emailTitle": "Send us a message",
      "support.emailBody": "Reach the circady team directly. We reply within 48 hours on business days.",
      "support.fName": "Name",
      "support.fEmail": "Your email",
      "support.fTopic": "Topic",
      "support.fTopicGeneral": "General question",
      "support.fTopicBug": "Bug / problem",
      "support.fTopicAccount": "Account & data",
      "support.fTopicFeedback": "Feedback / idea",
      "support.fTopicOther": "Other",
      "support.fMessage": "Message",
      "support.fSubmit": "Send message",
      "support.phName": "Your name",
      "support.phEmail": "you@example.com",
      "support.phMessage": "How can we help?",
      "support.formSending": "Sending…",
      "support.formSuccess": "Thanks! Your message has been sent — we'll reply within 48 hours on business days.",
      "support.formError": "Something went wrong. Please try again in a moment.",
      "support.faqTitle": "Frequently asked questions",
      "support.q1": "Which devices does circady support?",
      "support.a1": "circady is built for iPhone and requires a current version of iOS.",
      "support.q3": "How do I delete my account and data?",
      "support.a3": "Open the app and go to Settings → Account → Delete Account. This removes your account and all associated data promptly and completely. Alternatively, email circady.support@gmail.com and we'll delete everything for you.",
      "support.q4": "Is circady a medical product?",
      "support.a4": "No. circady helps you organise healthy routines and does not provide medical advice, diagnosis or treatment.",
      "support.q5": "How is my data handled?",
      "support.a5": "See our Privacy Policy for full details on data processing.",
      "support.deleteTitle": "Account deletion",
      "support.deleteBody": "You can delete your account and all associated data at any time, directly in the app: Settings → Account → Delete Account. Deletion is immediate and complete — your account and all content stored on our backend (Supabase) are removed. If you can't access the app, email circady.support@gmail.com and we'll delete your account for you. Note: deleting your account does not cancel an active App Store subscription — manage that under your Apple ID in the App Store."
    },
    de: {
      "nav.features": "Lösungen",
      "nav.protocols": "Protokolle",
      "nav.support": "Support",

      "hero.eyebrow": "Longevity Routine Manager",
      "hero.title": "Langlebigkeit wird Routine.",
      "hero.subtitle": "circady übersetzt die Wissenschaft des gesunden Alterns in kuratierte Protokolle, die du wirklich durchhältst — abgestimmt auf die natürlichen Erholungszyklen deines Körpers.",
      "hero.ctaProtocols": "Protokolle ansehen",

      "shots.ph": "Screenshot folgt",

      "privacy.heading": "Datenschutzerklärung",

      "protocols.eyebrow": "Wo Wissenschaft zur Routine wird",
      "protocols.title": "Die Protokoll-Bibliothek",
      "protocols.lead": "Kuratierte Protokolle, abgebildet über sechs Lebensbereiche und 254 Routine-Empfehlungen.",

      "spotlight.eyebrow": "Schluss mit Rätselraten",
      "spotlight.title": "Wissen, was wirklich zu tun ist",
      "spotlight.lead": "Du musst nicht jedes Longevity-Buch lesen. circady destilliert 20 bewährte Protokolle in klare Routinen — und sagt dir, wann jede in deine Woche gehört.",
      "spotlight.p1": "Evidenzbasierte Routinen für Bewegung, Ernährung, Schlaf, Mental, Soziales und Moleküle.",
      "spotlight.p2": "Nach Erholung getaktet, damit dein Aufwand wirklich zu Fortschritt wird.",
      "spotlight.p3": "Vergleiche 20 Longevity-Protokolle und behalte, was zu dir passt.",
      "spotlight.p4": "Nie mehr, als dein Körper — und deine Woche — verkraften.",
      "spotlight.cta": "Protokoll-Matrix öffnen",
      "spotlight.visTitle": "Erholungszyklus-Timing",
      "spotlight.visCaption": "Belastung und Erholung, über die Woche ausbalanciert.",
      "mm.row1": "Bewegung",
      "mm.row2": "Schlaf",
      "mm.row3": "Ernährung",

      "custom.eyebrow": "Ganz nach dir gemacht",
      "custom.title": "Oder gestalte es komplett selbst",
      "custom.lead": "Vorlagen nicht dein Ding? Erstelle Routinen von Grund auf — eigene Protokolle, dein Timing, deine Ziele. circady richtet sich nach deinem Leben, nicht andersherum.",
      "custom.p1": "Erstelle beliebig viele eigene Routinen — benannt und organisiert, wie du willst.",
      "custom.p2": "Bestimme den Rhythmus selbst — tägliche Gewohnheiten oder längere Erholungszyklen.",
      "custom.p3": "Kombiniere kuratierte Protokolle mit deinen eigenen zu einem stimmigen Plan.",
      "custom.bmHeading": "Eigene Routine",
      "custom.bmName": "Name",
      "custom.bmArea": "Bereich",
      "custom.bmAreaV": "Bewegung",
      "custom.bmRepeat": "Rhythmus",
      "custom.bmRepeatV": "Alle 2 Tage",
      "custom.bmReminder": "Erinnerung",

      "muscle.eyebrow": "Für ernsthaftes Training",
      "muscle.title": "Muskelaufbau auf der Superkompensationskurve",
      "muscle.lead": "Trainiere hart, erhole dich, dann triff den Sweet Spot — nicht zu früh, nicht zu spät. circady modelliert die Superkompensationskurve für Hypertrophie, damit jede Einheit dann sitzt, wenn dein Körper bereit ist zu wachsen.",
      "muscle.p1": "Stelle Erholungs- und Sweet-Spot-Fenster auf dein eigenes Training ein.",
      "muscle.p2": "Sieh jeden Zyklus: Reiz, Erholungstief, Superkompensations-Peak.",
      "muscle.p3": "Richtig wiederholt summiert sich die Anpassung — Zyklus für Zyklus.",
      "muscle.capApp": "In der App — leg deinen eigenen Erholungszyklus fest",
      "muscle.capPrinciple": "Das Prinzip fortgesetzt — gut getaktete Zyklen summieren sich zu echtem Wachstum",
      "muscle.scExplain": "Nach einem harten Trainingsreiz fällt deine Leistungsfähigkeit zunächst ab, während sich der Körper erholt. Danach steigt sie über das Ausgangsniveau hinaus — dieser Überschuss ist die Superkompensation. Trainierst du genau auf diesem Höhepunkt erneut, summieren sich die Fortschritte; zu früh oder zu spät, und der Fortschritt stagniert.",
      "muscle.svgY": "Anpassung",
      "muscle.svgX": "Zeit",
      "muscle.svgStimulus": "Reiz",
      "muscle.svgTrend": "Dauerhaftes Wachstum",

      "features.eyebrow": "Langfristig gedacht",
      "features.title": "Alles in einem Rhythmus",
      "features.lead": "circady hält deine Gesundheitsroutinen organisiert, getaktet und sichtbar — ohne Überforderung.",
      "f1.title": "Erholungszyklen",
      "f1.body": "Plant Belastung und Erholung nach dem Superkompensations-Prinzip — Fortschritt summiert sich, statt auszubrennen.",
      "f2.title": "Sechs Lebensbereiche",
      "f2.body": "Bewegung, Mental, Schlaf, Soziales, Ernährung und Moleküle — ausbalanciert in einer Ansicht.",
      "f3.title": "Individuelle Routinen",
      "f3.body": "Richte deine eigenen Routinen ein — bestimme selbst, welche Protokolle, wie oft und zu welcher Zeit. circady passt sich deinem Alltag an, nicht umgekehrt.",

      "download.eyebrow": "circady holen",
      "download.title": "Starte deine Longevity-Routine",
      "download.lead": "circady kommt in den App Store. Scanne den Code oder nutze das Badge unten zum Download — bald für iPhone.",
      "download.qrNote": "QR-Code folgt nach Veröffentlichung der App",

      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support",
      "footer.protocols": "Protokolle",
      "footer.copyright": "© 2026 circady. Alle Rechte vorbehalten.",
      "footer.disclaimer": "circady unterstützt gesunde Gewohnheiten und ist kein Medizinprodukt. Es ersetzt keine medizinische Beratung, Diagnose oder Behandlung.",
      "footer.pillars": "Bewegung · Mental · Schlaf · Sozial · Ernährung · Moleküle",

      "support.title": "Wie können wir helfen?",
      "support.lead": "Fragen, Feedback oder Probleme mit circady? Wir sind für dich da.",
      "support.emailTitle": "Schreib uns eine Nachricht",
      "support.emailBody": "Erreiche das circady-Team direkt. Wir antworten an Werktagen innerhalb von 48 Stunden.",
      "support.fName": "Name",
      "support.fEmail": "Deine E-Mail",
      "support.fTopic": "Thema",
      "support.fTopicGeneral": "Allgemeine Frage",
      "support.fTopicBug": "Fehler / Problem",
      "support.fTopicAccount": "Konto & Daten",
      "support.fTopicFeedback": "Feedback / Idee",
      "support.fTopicOther": "Sonstiges",
      "support.fMessage": "Nachricht",
      "support.fSubmit": "Nachricht senden",
      "support.phName": "Dein Name",
      "support.phEmail": "du@beispiel.de",
      "support.phMessage": "Wie können wir helfen?",
      "support.formSending": "Wird gesendet…",
      "support.formSuccess": "Danke! Deine Nachricht wurde gesendet — wir antworten an Werktagen innerhalb von 48 Stunden.",
      "support.formError": "Etwas ist schiefgelaufen. Bitte versuche es gleich noch einmal.",
      "support.faqTitle": "Häufige Fragen",
      "support.q1": "Welche Geräte unterstützt circady?",
      "support.a1": "circady ist für das iPhone gebaut und benötigt eine aktuelle iOS-Version.",
      "support.q3": "Wie lösche ich mein Konto und meine Daten?",
      "support.a3": "Öffne die App und gehe zu Einstellungen → Account → Konto löschen. Damit werden dein Konto und alle zugehörigen Daten unverzüglich und vollständig entfernt. Alternativ schreib uns an circady.support@gmail.com — wir löschen dann alles für dich.",
      "support.q4": "Ist circady ein Medizinprodukt?",
      "support.a4": "Nein. circady hilft dir, gesunde Routinen zu organisieren, und ersetzt keine medizinische Beratung, Diagnose oder Behandlung.",
      "support.q5": "Wie werden meine Daten verarbeitet?",
      "support.a5": "Details zur Datenverarbeitung findest du in unserer Datenschutzerklärung.",
      "support.deleteTitle": "Konto löschen",
      "support.deleteBody": "Du kannst dein Konto und alle zugehörigen Daten jederzeit direkt in der App löschen: Einstellungen → Account → Konto löschen. Die Löschung erfolgt sofort und vollständig — dein Konto und alle in unserem Backend (Supabase) gespeicherten Inhalte werden entfernt. Falls du keinen Zugriff auf die App hast, schreib an circady.support@gmail.com, dann löschen wir dein Konto für dich. Hinweis: Das Löschen des Kontos kündigt kein laufendes App-Store-Abo — das verwaltest du über deine Apple-ID im App Store."
    }
  };

  function pickLang() {
    var saved = localStorage.getItem("circady-lang");
    if (saved === "de" || saved === "en") return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("de") === 0 ? "de" : "en";
  }

  function applyLang(lang) {
    var dict = STR[lang] || STR.en;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }
    // Platzhalter (placeholder) übersetzen
    var phs = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < phs.length; p++) {
      var pk = phs[p].getAttribute("data-i18n-placeholder");
      if (dict[pk] != null) phs[p].setAttribute("placeholder", dict[pk]);
    }
    // Sprachabhängige Inhaltsblöcke (z. B. Rechtstexte) ein-/ausblenden
    var blocks = document.querySelectorAll("[data-lang-content]");
    for (var c = 0; c < blocks.length; c++) {
      blocks[c].style.display = blocks[c].getAttribute("data-lang-content") === lang ? "" : "none";
    }
    var btns = document.querySelectorAll(".lang-switch button");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("active", btns[j].getAttribute("data-lang") === lang);
    }
  }

  var current = pickLang();
  applyLang(current);

  var switches = document.querySelectorAll(".lang-switch button");
  for (var k = 0; k < switches.length; k++) {
    switches[k].addEventListener("click", function () {
      current = this.getAttribute("data-lang");
      localStorage.setItem("circady-lang", current);
      applyLang(current);
    });
  }

  /* Scroll-Reveal */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    for (var r = 0; r < reveals.length; r++) reveals[r].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    for (var s = 0; s < reveals.length; s++) io.observe(reveals[s]);
  }

  /* Kontaktformular (Web3Forms) — AJAX-Versand ohne Seitenwechsel */
  var form = document.getElementById("support-form");
  if (form) {
    var statusEl = document.getElementById("cf-status");
    var submitBtn = form.querySelector('button[type="submit"]');
    var t = function (key) {
      var dict = STR[current] || STR.en;
      return dict[key] != null ? dict[key] : (STR.en[key] || "");
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      statusEl.className = "form-status is-pending";
      statusEl.textContent = t("support.formSending");
      submitBtn.disabled = true;

      var data = new FormData(form);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (res) { return res.json().then(function (j) { return { ok: res.ok, body: j }; }); })
        .then(function (r) {
          if (r.ok && r.body && r.body.success) {
            form.reset();
            // Gesamten Karteninhalt ausblenden, nur die Bestätigung bleibt sichtbar
            var card = form.parentNode;
            for (var c = 0; c < card.children.length; c++) {
              if (card.children[c] !== statusEl) card.children[c].style.display = "none";
            }
            statusEl.className = "form-status is-success is-standalone";
            statusEl.innerHTML =
              '<svg class="cf-check" viewBox="0 0 24 24" fill="none" stroke-width="2.4" ' +
              'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<circle cx="12" cy="12" r="10"/><path d="m8 12 2.5 2.5L16 9"/></svg>' +
              '<span>' + t("support.formSuccess") + '</span>';
          } else {
            statusEl.className = "form-status is-error";
            statusEl.textContent = t("support.formError");
          }
        })
        .catch(function () {
          statusEl.className = "form-status is-error";
          statusEl.textContent = t("support.formError");
        })
        .then(function () { submitBtn.disabled = false; });
    });
  }
})();
