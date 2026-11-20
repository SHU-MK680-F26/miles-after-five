/* ==========================================================================
   Miles After Five – shared header, navigation and footer
   Every page has <div id="site-header"></div> and <div id="site-footer"></div>
   and a data-page attribute on <body>. This file fills them in, so the menu
   only has to be edited here.
   ========================================================================== */

// The six pages, in menu order. "key" matches <body data-page="...">.
var SITE_PAGES = [
  { key: "home",     label: "Home",              href: "index.html" },
  { key: "locator",  label: "Race Locator",      href: "locator.html" },
  { key: "calendar", label: "Race Calendar",     href: "calendar.html" },
  { key: "gear",     label: "New Gear Drops",    href: "gear.html" },
  { key: "tips",     label: "Running Tips",      href: "tips.html" },
  { key: "training", label: "Training Programs", href: "training.html" }
];

(function () {
  var current = document.body.getAttribute("data-page");

  // ----- Header -----
  var header = document.getElementById("site-header");
  if (header) {
    var links = SITE_PAGES.map(function (p) {
      var cur = p.key === current ? ' aria-current="page"' : "";
      return '<li><a href="' + p.href + '"' + cur + ">" + p.label + "</a></li>";
    }).join("");

    header.outerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header">' +
        '<div class="container header-inner">' +
          '<a class="brand-mark" href="index.html">Miles After <span>Five</span></a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
          '<nav class="site-nav" id="site-nav" aria-label="Main">' +
            "<ul>" + links + "</ul>" +
          "</nav>" +
        "</div>" +
      "</header>";

    // Phone menu: the button shows and hides the stacked list.
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // ----- Footer -----
  var footer = document.getElementById("site-footer");
  if (footer) {
    var footLinks = SITE_PAGES.map(function (p) {
      return '<li><a href="' + p.href + '">' + p.label + "</a></li>";
    }).join("");

    footer.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            "<div>" +
              '<p class="footer-tag">Clock out. Lace up.</p>' +
              "<p>A social run club for after work. Came for the miles, stayed for the company.</p>" +
              "<p>Find us on Instagram: <strong>@milesafter5_</strong></p>" +
            "</div>" +
            '<nav aria-label="Footer"><ul>' + footLinks + "</ul></nav>" +
            "<div><p>Race dates, prices and sign-ups can change. Always check the official race or brand website before you register or buy.</p></div>" +
          "</div>" +
          '<p class="footer-note">This site is a student project (MK-680, Team A). Miles After Five is a fictional brand, not a real business or run club. ' +
            "Product photos belong to the brands credited beneath each photo and are used for this non-commercial class project.</p>" +
        "</div>" +
      "</footer>";
  }
})();
