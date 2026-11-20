/* ==========================================================================
   RACE DATA – edited by the Miles After Five team
   --------------------------------------------------------------------------
   This one list feeds BOTH the Race Locator (locator.html) and the Race
   Calendar (calendar.html). Edit a race here, save, and reload the page.

   Each race is one { ... } block. Fields:
     name    Race name
     date    "YYYY-MM-DD"  (races before today are hidden automatically)
     time    Start time as you want it shown, e.g. "8:00 AM"
     city    City or location
     state   Two-letter state code, e.g. "CT" (DC is "DC")
     url     Official race website for registration (opens in a new tab)
     sample  true = made-up test race, shows a "Sample" tag. Delete these
             once real races are in. Leave it out (or false) for real races.

   Keep a comma between blocks. Order does not matter; pages sort by date.
   ========================================================================== */

var RACES = [

  /* ---------- Real races ----------
     Manchester, Pittsburgh and Dallas are from content/options/
     week-4-thu-race-calendar.md in mk680-team-a (official pages opened
     2026-11-18). Pittsburgh and Dallas start times are still
     [NEEDS TEAM CONFIRMATION]: check each official site and replace
     "See official site" with the real start time. */
  {
    // Start time confirmed on manchesterroadrace.com on 2026-11-18:
    // "November 26th, 2026, 10:00 am"
    name: "Manchester Road Race (90th running)",
    date: "2026-11-26",
    time: "10:00 AM",
    city: "Manchester",
    state: "CT",
    url: "https://manchesterroadrace.com/"
  },

  /* Connecticut Thanksgiving turkey trots, added 2026-11-18. Each one was
     checked on its 2026 registration page (the url below) that day. */
  {
    // RunSignup: 5K "8:15AM EST"; free kids run (ages 9 and under) "8:05AM EST"
    name: "Stratford Turkey Day Trot",
    date: "2026-11-26",
    time: "8:15 AM (5K) · 8:05 AM free kids run, ages 9 and under",
    city: "Stratford",
    state: "CT",
    url: "https://runsignup.com/Race/CT/Stratford/StratfordTurkeyDayTrot"
  },
  {
    // ACTIVE 2026 registration page (organizer: Shoreline Sharks): "8:00am: Race starts"
    name: "Shoreline Turkey Trot 5K",
    date: "2026-11-26",
    time: "8:00 AM",
    city: "West Haven",
    state: "CT",
    url: "https://www.active.com/west-haven-ct/running/distance-running/shoreline-turkey-trot-5k-2026"
  },
  {
    // RunSignup: 5K "8:00AM EST"
    name: "Bethel Turkey Trot",
    date: "2026-11-26",
    time: "8:00 AM",
    city: "Bethel",
    state: "CT",
    url: "https://runsignup.com/Race/CT/Bethel/BethelTurkeyTrot"
  },
  {
    name: "YMCA of Greater Pittsburgh Turkey Trot",
    date: "2026-11-26",
    time: "See official site",
    city: "Pittsburgh",
    state: "PA",
    url: "https://pittsburghymca.org/turkey-trot"
  },
  {
    name: "Dallas YMCA Turkey Trot",
    date: "2026-11-26",
    time: "See official site",
    city: "Dallas",
    state: "TX",
    url: "https://raceroster.com/events/2026/117103/2026-dallas-ymca-turkey-trot"
  },

  /* ---------- SAMPLE races (made up, for testing) ----------
     Replace or delete these. Their links go to example.com on purpose.
     The October race is in the past, to show past races are hidden.
     No race is listed in Alaska, to show the "no races" message. */
  {
    name: "Sample: Fall Foliage 5K",
    date: "2026-10-10",
    time: "9:00 AM",
    city: "Hartford",
    state: "CT",
    url: "https://example.com/sample-fall-foliage-5k",
    sample: true
  },
  {
    name: "Sample: Hudson River Holiday 10K",
    date: "2026-12-06",
    time: "8:30 AM",
    city: "New York",
    state: "NY",
    url: "https://example.com/sample-hudson-river-10k",
    sample: true
  },
  {
    name: "Sample: New Year Fresh Start 5K",
    date: "2027-01-01",
    time: "11:00 AM",
    city: "Brooklyn",
    state: "NY",
    url: "https://example.com/sample-new-year-5k",
    sample: true
  },
  {
    name: "Sample: Harborwalk Half Marathon",
    date: "2027-03-21",
    time: "7:30 AM",
    city: "Boston",
    state: "MA",
    url: "https://example.com/sample-harborwalk-half",
    sample: true
  },
  {
    name: "Sample: Lakefront Spring 8K",
    date: "2027-04-11",
    time: "8:00 AM",
    city: "Chicago",
    state: "IL",
    url: "https://example.com/sample-lakefront-8k",
    sample: true
  },
  {
    name: "Sample: Golden Hour 10K",
    date: "2027-02-14",
    time: "5:30 PM",
    city: "San Diego",
    state: "CA",
    url: "https://example.com/sample-golden-hour-10k",
    sample: true
  },
  {
    name: "Sample: Sunshine State Twilight 5K",
    date: "2027-01-23",
    time: "6:00 PM",
    city: "Orlando",
    state: "FL",
    url: "https://example.com/sample-twilight-5k",
    sample: true
  },
  {
    name: "Sample: Capitol Cherry Blossom 10 Miler",
    date: "2027-04-04",
    time: "7:00 AM",
    city: "Washington",
    state: "DC",
    url: "https://example.com/sample-cherry-blossom-10",
    sample: true
  }
];
