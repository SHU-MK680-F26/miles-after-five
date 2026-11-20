/* ==========================================================================
   Gear cards and shoe comparison (gear.html)
   Reads the GEAR list from data/gear.js (load that file first).
   You should not need to edit this file to add or change products.
   ========================================================================== */

function escapeGear(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function listHtml(items) {
  return "<ul>" + (items || []).map(function (f) { return "<li>" + escapeGear(f) + "</li>"; }).join("") + "</ul>";
}

(function () {
  var items = typeof GEAR === "undefined" ? [] : GEAR;

  /* ----- Product cards ----- */
  var grid = document.getElementById("gear-grid");
  if (grid) {
    grid.innerHTML = items.map(function (g) {
      return (
        '<article class="gear-card">' +
          '<img src="' + escapeGear(g.image) + '" alt="' + escapeGear(g.imageAlt) + '" loading="lazy">' +
          '<div class="body">' +
            '<p class="eyebrow">' + escapeGear(g.brand) + "</p>" +
            "<h3>" + escapeGear(g.name) + "</h3>" +
            '<p class="category">' + escapeGear(g.category) + " · " + escapeGear(g.release) + "</p>" +
            '<p class="price">' + escapeGear(g.price) + "</p>" +
            "<p>" + escapeGear(g.description) + "</p>" +
            listHtml(g.features) +
            '<p><a href="' + escapeGear(g.url) + '" target="_blank" rel="noopener">Official product page<span class="visually-hidden"> for ' + escapeGear(g.name) + " (opens in a new tab)</span> ↗</a></p>" +
            (g.credit ? '<p class="credit">' + escapeGear(g.credit) + "</p>" : "") +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ----- Side-by-side comparison (shoes with compare: true) ----- */
  var table = document.getElementById("compare-table");
  if (table) {
    var shoes = items.filter(function (g) { return g.compare; });
    if (shoes.length === 0) {
      table.outerHTML = '<p class="status-msg">No shoes are set to compare yet.</p>';
      return;
    }

    // Each row: label + how to show that field for one shoe.
    var rows = [
      ["Price",       function (g) { return '<span class="price-cell">' + escapeGear(g.price) + "</span>"; }],
      ["Type",        function (g) { return escapeGear(g.category); }],
      ["Release",     function (g) { return escapeGear(g.release); }],
      ["Key features",function (g) { return listHtml(g.features); }],
      ["Official page", function (g) {
        return '<a href="' + escapeGear(g.url) + '" target="_blank" rel="noopener">' + escapeGear(g.brand) +
               '<span class="visually-hidden"> page for ' + escapeGear(g.name) + " (opens in a new tab)</span> ↗</a>";
      }]
    ];

    var head = '<thead><tr><th scope="col"><span class="visually-hidden">Feature</span></th>' +
      shoes.map(function (g) { return '<th scope="col">' + escapeGear(g.name) + "</th>"; }).join("") +
      "</tr></thead>";

    var body = "<tbody>" + rows.map(function (row) {
      return '<tr><th scope="row">' + row[0] + "</th>" +
        shoes.map(function (g) { return "<td>" + row[1](g) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody>";

    table.innerHTML = "<caption class=\"visually-hidden\">Side-by-side comparison of " + shoes.length + " running shoes</caption>" + head + body;
  }
})();
