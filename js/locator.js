/* ==========================================================================
   Race Locator and Race Calendar logic
   Reads the RACES list from data/races.js (load that file first).
   You should not need to edit this file to add or change races.
   ========================================================================== */

// Every US state plus DC, for the dropdown. [code, name]
var US_STATES = [
  ["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],
  ["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["DC","District of Columbia"],
  ["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],
  ["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],
  ["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],
  ["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],
  ["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],
  ["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],
  ["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],
  ["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],
  ["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"]
];

var MONTHS = ["January","February","March","April","May","June","July",
              "August","September","October","November","December"];
var WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/* ----- Helpers ----- */

// Escape text before putting it into the page.
function escapeHtml(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function stateName(code) {
  for (var i = 0; i < US_STATES.length; i++) {
    if (US_STATES[i][0] === code) return US_STATES[i][1];
  }
  return code;
}

// Today's date on the visitor's computer, as "YYYY-MM-DD".
function todayString() {
  var d = new Date();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}

// "2026-11-26" -> a local Date (avoids time-zone shifts).
function parseDate(ymd) {
  var p = ymd.split("-");
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

function longDate(ymd) {
  var d = parseDate(ymd);
  return WEEKDAYS[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

// Minutes after midnight for the first time in a race's "time" text,
// e.g. "8:15 AM (5K) · 8:05 AM kids run" -> 495. Text with no time
// (like "See official site") sorts after every timed race that day.
function startMinutes(timeText) {
  var m = /(\d{1,2})(?::(\d{2}))?\s*([AaPp])\.?[Mm]/.exec(timeText || "");
  if (!m) return 24 * 60;
  var h = Number(m[1]) % 12;
  if (m[3].toLowerCase() === "p") h += 12;
  return h * 60 + Number(m[2] || 0);
}

// Races dated today or later: earliest date first, then earliest start
// time, then name. Past races are never shown.
function upcomingRaces() {
  var today = todayString();
  return (typeof RACES === "undefined" ? [] : RACES)
    .filter(function (r) { return r && r.date && r.date >= today; })
    .slice()
    .sort(function (a, b) {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      var t = startMinutes(a.time) - startMinutes(b.time);
      if (t !== 0) return t;
      return a.name.localeCompare(b.name);
    });
}

// One race as a list item. Used by both pages so they always match.
function raceHtml(r) {
  var d = parseDate(r.date);
  var sampleTag = r.sample ? '<span class="tag tag--sample">Sample</span>' : "";
  return (
    '<li class="race">' +
      '<div class="race-date" aria-hidden="true">' +
        '<span class="day">' + d.getDate() + '</span>' +
        '<span class="mon">' + MONTHS[d.getMonth()].slice(0, 3) + " " + d.getFullYear() + "</span>" +
      "</div>" +
      "<div>" +
        "<h3>" + escapeHtml(r.name) + sampleTag + "</h3>" +
        '<ul class="race-meta">' +
          "<li><strong>Date:</strong> " + longDate(r.date) + "</li>" +
          "<li><strong>Time:</strong> " + escapeHtml(r.time) + "</li>" +
          "<li><strong>Location:</strong> " + escapeHtml(r.city) + ", " + escapeHtml(stateName(r.state)) + "</li>" +
        "</ul>" +
      "</div>" +
      "<div>" +
        '<a class="btn" href="' + escapeHtml(r.url) + '" target="_blank" rel="noopener">' +
          'Official race site<span class="visually-hidden"> for ' + escapeHtml(r.name) + " (opens in a new tab)</span> ↗" +
        "</a>" +
      "</div>" +
    "</li>"
  );
}

/* ----- Race Locator (locator.html) ----- */
(function () {
  var select = document.getElementById("state-select");
  var results = document.getElementById("locator-results");
  if (!select || !results) return;

  // Fill the dropdown with every state.
  US_STATES.forEach(function (s) {
    var opt = document.createElement("option");
    opt.value = s[0];
    opt.textContent = s[1];
    select.appendChild(opt);
  });

  function show() {
    var code = select.value;
    if (!code) {
      results.innerHTML = '<p class="status-msg">Select a state to see its upcoming races.</p>';
      return;
    }
    var list = upcomingRaces().filter(function (r) { return r.state === code; });
    var name = stateName(code);
    if (list.length === 0) {
      results.innerHTML = '<p class="status-msg" role="status">No upcoming races are currently listed for ' + escapeHtml(name) + ".</p>";
      return;
    }
    results.innerHTML =
      '<p role="status">' + list.length + " upcoming race" + (list.length === 1 ? "" : "s") + " in " + escapeHtml(name) + ", earliest first.</p>" +
      '<ul class="race-list">' + list.map(raceHtml).join("") + "</ul>";
  }

  select.addEventListener("change", show);
  show();
})();

/* ----- Race Calendar (calendar.html) ----- */
(function () {
  var cal = document.getElementById("calendar");
  if (!cal) return;

  var list = upcomingRaces();
  if (list.length === 0) {
    cal.innerHTML = '<p class="status-msg">No upcoming races are currently listed. Check back soon.</p>';
    return;
  }

  // Group races by month, in date order.
  var html = "";
  var currentMonth = "";
  list.forEach(function (r) {
    var key = r.date.slice(0, 7);
    if (key !== currentMonth) {
      if (currentMonth) html += "</ul></section>";
      var d = parseDate(r.date);
      html += '<section class="month-group"><h2>' + MONTHS[d.getMonth()] + " " + d.getFullYear() + "</h2>" +
              '<ul class="race-list">';
      currentMonth = key;
    }
    html += raceHtml(r);
  });
  html += "</ul></section>";
  cal.innerHTML = html;
})();
