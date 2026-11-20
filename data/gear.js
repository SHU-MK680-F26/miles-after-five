/* ==========================================================================
   GEAR DATA – edited by the Miles After Five team
   --------------------------------------------------------------------------
   This one list feeds the gear cards AND the shoe comparison on gear.html.
   Edit a product here, save, and reload the page.

   Fields:
     name        Product name
     brand       Brand name
     category    Short type, e.g. "Road running shoe"
     image       Path to the image inside this folder, e.g. "images/gear/x.jpg"
     imageAlt    What the image shows, for screen readers
     credit      Photo credit to show under the image ("" for our own designs)
     description One or two sentences, release facts only (no performance claims)
     features    List of key features: ["...", "..."]
     price       Price as shown, e.g. "$155". Use "Not announced" if none.
     release     Release / availability line
     url         Official product or brand page (opens in a new tab)
     compare     true = include this shoe in the side-by-side comparison
     post        Which weekly gear drop it came from (for the team's reference)

   Both Nike photos were supplied by the team on 2026-11-18. The Apex
   photo matches one on Nike's official newsroom page (its url below) and
   is rotated to sit horizontally. The team confirmed the Alphafly 4
   photo's source page on 2026-11-18. The team confirmed on 2026-11-20
   that the Marni photo came from marni.com and the Brooks photo came
   from brooksrunning.com. See photo-sources.md for every image.

   Facts below come from the team's approved gear drop posts in mk680-team-a
   (content/week-1.md to week-4). Check prices on the official site before
   relying on them.
   ========================================================================== */

var GEAR = [
  {
    name: "Nike Apex",
    brand: "Nike",
    category: "Marathon racing shoe",
    image: "images/gear/nike-apex.jpg",
    imageAlt: "Side view of a black Nike Apex racing shoe against a dark, smoky background, with a glowing red and green Air Zoom unit visible in the forefoot.",
    credit: "Photo: Nike",
    description: "Nike has announced the Nike Apex, a marathon racing shoe. Nike hasn't listed a price or an exact release day yet.",
    features: [
      "Marathon racing shoe",
      "Coming January 2027",
      "At nike.com and select retail locations"
    ],
    price: "Not announced",
    release: "January 2027",
    url: "https://about.nike.com/en/newsroom/releases/introducing-nike-apex-the-next-leap-in-marathon-speed",
    compare: true,
    post: "Week 4 gear drop (latest)"
  },
  {
    name: "Hoka Clifton MARNI",
    brand: "Hoka × Marni",
    category: "Running shoe collab",
    image: "images/gear/marni-hoka-clifton.jpg",
    imageAlt: "A pair of black Hoka Clifton MARNI running shoes with red laces on a light grey background.",
    credit: "Photo: Marni",
    description: "A Marni take on the Hoka Clifton 11, in unisex sizing.",
    features: [
      "Multi-color laces",
      "Arching accents across the midfoot",
      "Colorways: Orange/Silver, White/Red, Black/Red",
      "Unisex sizing"
    ],
    price: "$275",
    release: "Nov 12, 2026 (Marni) · Nov 13, 2026 (Hoka and select retailers)",
    url: "https://www.marni.com/en-us/marni-hoka.html",
    compare: true,
    post: "Week 3 gear drop"
  },
  {
    name: "Brooks Adrenaline GTS 26",
    brand: "Brooks",
    category: "Road running shoe",
    image: "images/gear/brooks-adrenaline-gts-26.jpeg",
    imageAlt: "A pair of white Brooks Adrenaline GTS 26 running shoes with pink accents.",
    credit: "Photo: Brooks Running",
    description: "The Adrenaline update brings a new flat-knit tongue, a refreshed knit collar and a reengineered midsole.",
    features: [
      "New flat-knit tongue",
      "Refreshed knit collar and new flat-knit heel loop",
      "Reengineered DNA LOFT v3 midsole",
      "Colorways include White/Black/Gum and Black/Black/Ebony"
    ],
    price: "$155",
    release: "In stores Nov 1, 2026",
    url: "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/adrenaline-gts-26/110509.html",
    compare: true,
    post: "Week 2 gear drop"
  },
  {
    name: "Nike Alphafly 4",
    brand: "Nike",
    category: "Road racing shoe",
    image: "images/gear/nike-alphafly-4.jpg",
    imageAlt: "Side view of a single white Nike Alphafly 4 racing shoe with a dark grey Swoosh and a bright orange-red sole, on a light grey background.",
    credit: "Photo: Nike",
    description: "Nike's road racing shoe, with a wider release on Oct 29, 2026 at nike.com and select retail locations.",
    features: [
      "New Atomknit upper",
      "New ZoomX LT foam",
      "Dual forefoot Air Zoom units",
      "Carbon-fiber Flyplate"
    ],
    price: "$270–$280 (reported)",
    release: "Wider release Oct 29, 2026",
    url: "https://about.nike.com/newsroom/releases/nike-alphafly-4-helps-more-runners-go-the-distance-with-speed-and-confidence",
    compare: true,
    post: "Week 1 gear drop"
  }
];
