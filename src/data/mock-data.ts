import {
  AnnouncementItem,
  FandomTile,
  Product,
  WallOfFameItem,
} from "@/types";

export const mockAnnouncement: AnnouncementItem = {
  id: "ann-01",
  message: "NEW DROP: THE DUAL-PHASE REVEAL FRAMES ARE NOW LIVE IN LIMITED BATCHES",
  highlightText: "EXPLORE DROP",
  linkText: "SHOP NEW ARRIVALS",
  linkHref: "/shop",
};

export const mockFandomTiles: FandomTile[] = [
  {
    id: "fandom-anime",
    name: "ANIME & MANGA",
    slug: "anime",
    countLabel: "24 Collectibles",
    image: "/images/itachi-reveal-lit.jpg",
    description: "Cinematic silhouettes, atmospheric contrast, and legendary arcs.",
  },
  {
    id: "fandom-superheroes",
    name: "SUPERHEROES",
    slug: "superheroes",
    countLabel: "18 Collectibles",
    image: "/images/spiderman-portrait.jpg",
    description: "Graphic-novel energy, hand-painted textures, and iconic vigilantes.",
  },
  {
    id: "fandom-indian-cinema",
    name: "INDIAN CINEMA",
    slug: "indian-cinema",
    countLabel: "12 Collectibles",
    image: "/images/chandra-poster.jpg",
    description: "Bold condensed typography, cinematic grandeur, and heroic scale.",
  },
  {
    id: "fandom-motorsport",
    name: "MOTORSPORT",
    slug: "motorsport",
    countLabel: "9 Collectibles",
    image: "/images/itachi-reveal-lit.jpg",
    description: "Historic circuits, mechanical precision, and night-race aesthetics.",
  },
];

export const mockProducts: Product[] = [
  // 1. Reveal Frame - Anime (Itachi)
  {
    id: "prod-itachi-reveal",
    title: "Itachi: Crow Mirage Reveal Frame",
    fandom: "Anime",
    fandomSlug: "anime",
    productType: "illuminated-frame",
    productTypeLabel: "Illuminated Reveal Frame",
    price: 5499,
    originalPrice: 6200,
    editionNote: "Batch 01 • 150 Units Serialized",
    badge: "DUAL-STATE ILLUMINATED",
    isNewDrop: true,
    isLimited: true,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      secondary: "/images/itachi-reveal-unlit.jpg",
      lit: "/images/itachi-reveal-lit.jpg",
      unlit: "/images/itachi-reveal-unlit.jpg",
      alt: "Itachi Crow Mirage Illuminated Reveal Frame showing active amber glow and daylight monochrome states",
    },
    gallery: [
      {
        url: "/images/itachi-reveal-lit.jpg",
        label: "ILLUMINATED STATE (NIGHT)",
        alt: "Itachi Crow Mirage Reveal Frame in active backlit state with warm amber glow",
        lightingState: "lit",
      },
      {
        url: "/images/itachi-reveal-unlit.jpg",
        label: "DAYLIGHT STATE (OFF)",
        alt: "Itachi Crow Mirage Reveal Frame with unlit daylight stark monochrome line art",
        lightingState: "unlit",
      },
      {
        url: "/images/chandra-poster.jpg",
        label: "GALLERY PAIRING VIEW",
        alt: "Collector room styling pairing reveal frame with typographic print",
      },
      {
        url: "/images/spiderman-portrait.jpg",
        label: "STUDIO DETAIL FINISH",
        alt: "Close-up showing matte charcoal frame finish and optical diffusion glass",
      },
    ],
    sizes: [
      {
        id: "size-standard",
        label: "Standard Studio",
        dimensions: "35 cm × 50 cm × 3.2 cm",
        price: 4999,
      },
      {
        id: "size-gallery",
        label: "Gallery Grand (Featured)",
        dimensions: "45 cm × 60 cm × 3.2 cm",
        price: 5499,
      },
    ],
    variants: [
      {
        id: "var-charcoal-alu",
        name: "Matte Charcoal Aluminum",
        priceDelta: 0,
      },
      {
        id: "var-obsidian-ash",
        name: "Solid Obsidian Ash Wood",
        priceDelta: 500,
      },
    ],
    dimensions: "45 cm × 60 cm × 3.2 cm",
    material: "Charcoal Aluminum with Dual-Phase Optical Diffusion Film",
    finish: "Anti-glare museum acrylic front with recessed low-heat warm perimeter diodes",
    specs: [
      { label: "DIMENSIONS", value: "45 cm × 60 cm × 3.2 cm (Grand Size)" },
      { label: "OPTICAL TECHNOLOGY", value: "Dual-layer diffusion film with daylight transmission cutoff" },
      { label: "LIGHTING ARRAY", value: "Recessed 2700K warm glow LED perimeter matrix" },
      { label: "POWER & CONTROLS", value: "12V low-heat DC adapter with 2m braided obsidian cable and inline touch dimmer" },
      { label: "GLAZING", value: "3mm UV-filtering anti-reflective museum acrylic" },
      { label: "MOUNTING", value: "Concealed heavy-duty French-cleat bracket (hardware included)" },
    ],
    whatsIncluded: [
      "1× Dual-State Illuminated Reveal Frame",
      "1× Concealed French-Cleat Wall Mount & Steel Anchors",
      "1× 12V Power Adapter with 2m Braided Cable & Dimmer",
      "1× Serialized Metal Certificate of Authenticity (Batch 01 / 150)",
      "1× Microfiber Care Cloth & Frame Handling Gloves",
    ],
    shortDescription:
      "A dual-state physical frame presenting crisp minimalist line-art by day, revealing the fiery ember dusk and murder of crows when illuminated.",
    longDescription:
      "The Crow Mirage Reveal Frame represents our core design philosophy: physical art that responds to your space. In natural daylight, the frame presents an understated, stark Japanese ink-style portrait of Itachi amidst flying silhouettes. At dusk, engaging the low-voltage illumination triggers our proprietary dual-phase optical film, flooding the scene with deep amber skies, scattered glowing embers, and high-contrast atmospheric depth. Engineered with zero visible bezels and anti-reflective museum acrylic.",
    inStock: true,
    slug: "itachi-crow-mirage-reveal-frame",
    popularity: 98,
    createdAt: "2026-10-15T10:00:00Z",
  },

  // 2. Framed Art - Superheroes (Spider-Man Portrait)
  {
    id: "prod-spiderman-portrait",
    title: "Peter Parker: Half-Mask Portrait",
    fandom: "Superheroes",
    fandomSlug: "superheroes",
    productType: "framed-poster",
    productTypeLabel: "Framed Art Poster",
    price: 2899,
    originalPrice: 3299,
    editionNote: "Open Studio Edition",
    badge: "COLLECTOR FAVORITE",
    isNewDrop: true,
    isLimited: false,
    images: {
      primary: "/images/spiderman-portrait.jpg",
      alt: "Peter Parker expressive painted portrait with comic panels collage",
    },
    gallery: [
      {
        url: "/images/spiderman-portrait.jpg",
        label: "STUDIO PORTRAIT",
        alt: "Peter Parker expressive painted portrait with comic panels collage",
      },
      {
        url: "/images/itachi-reveal-lit.jpg",
        label: "WARM INTERIOR CONTEXT",
        alt: "Framed print hanging on dark charcoal studio wall",
      },
      {
        url: "/images/chandra-poster.jpg",
        label: "COLLECTOR ARRANGEMENT",
        alt: "Gallery wall pairing Spider-Man with graphic posters",
      },
    ],
    sizes: [
      {
        id: "size-a2",
        label: "A2 Medium (Framed)",
        dimensions: "40 cm × 50 cm",
        price: 2899,
      },
      {
        id: "size-a1",
        label: "A1 Grand (Framed)",
        dimensions: "50 cm × 70 cm",
        price: 3699,
      },
      {
        id: "size-sheet",
        label: "Fine Art Sheet (Unframed)",
        dimensions: "40 cm × 50 cm",
        price: 1699,
      },
    ],
    variants: [
      {
        id: "var-charcoal-wood",
        name: "Solid Charcoal Ash Wood Frame",
        priceDelta: 0,
      },
      {
        id: "var-matte-black",
        name: "Minimalist Matte Black Metal Frame",
        priceDelta: 200,
      },
    ],
    dimensions: "40 cm × 50 cm",
    material: "310gsm Cotton Rag Archival Stock",
    finish: "Charcoal ash solid wood frame with warm ivory border mount",
    specs: [
      { label: "PAPER STOCK", value: "310gsm 100% cotton rag archival fine art paper" },
      { label: "PRINTING", value: "12-color archival mineral pigment giclée" },
      { label: "MATBOARD", value: "2-inch archival acid-free warm ivory passe-partout" },
      { label: "FRAME", value: "Kiln-dried solid ash wood with deep charcoal stain" },
      { label: "GLASS", value: "Shatter-resistant optically clear museum grade acrylic" },
    ],
    whatsIncluded: [
      "1× Framed Archival Fine Art Print",
      "Pre-installed Heavyweight Stainless Steel Hanging Wire",
      "Protective Corner Bumpers",
    ],
    shortDescription:
      "Expressive graphic-novel energy layered with textured comic strip clippings and vibrant oil-stroke highlights.",
    longDescription:
      "Capturing the human vulnerability behind the mask, this original studio composition pairs classical portraiture with collage elements sourced from vintage comic newsprint. Printed on heavyweight 310gsm 100% cotton rag paper with textured mineral pigment inks that preserve the tangible brushwork of the original painted study.",
    inStock: true,
    slug: "peter-parker-half-mask-portrait",
    popularity: 92,
    createdAt: "2026-10-14T12:00:00Z",
  },

  // 3. Unframed Art Poster - Indian Cinema
  {
    id: "prod-chandra-typography",
    title: "Chandra: Monolith Type Edition",
    fandom: "Indian Cinema",
    fandomSlug: "indian-cinema",
    productType: "poster",
    productTypeLabel: "Archival Art Poster",
    price: 1499,
    originalPrice: 1799,
    editionNote: "First Print Run",
    badge: "EDITORIAL SERIES",
    isNewDrop: true,
    isLimited: false,
    images: {
      primary: "/images/chandra-poster.jpg",
      alt: "Chandra silhouette against stacked condensed display typography",
    },
    gallery: [
      {
        url: "/images/chandra-poster.jpg",
        label: "MONOLITH POSTER",
        alt: "Chandra silhouette against stacked condensed display typography",
      },
      {
        url: "/images/itachi-reveal-unlit.jpg",
        label: "DESK DISPLAY STYLING",
        alt: "Poster resting on industrial studio desk",
      },
      {
        url: "/images/spiderman-portrait.jpg",
        label: "PAPER TEXTURE DETAIL",
        alt: "Macro photograph of deep velvet matte paper texture",
      },
    ],
    sizes: [
      {
        id: "size-50x70",
        label: "Standard Display",
        dimensions: "50 cm × 70 cm",
        price: 1499,
      },
      {
        id: "size-70x100",
        label: "Monolith Large",
        dimensions: "70 cm × 100 cm",
        price: 2299,
      },
    ],
    dimensions: "50 cm × 70 cm",
    material: "280gsm Deep Velvet Matte Stock",
    finish: "Smudge-resistant archival pigment inks",
    specs: [
      { label: "PAPER", value: "280gsm premium archival uncoated velvet matte stock" },
      { label: "TYPOGRAPHY", value: "Bespoke stacked condensed geometric typography" },
      { label: "PACKAGING", value: "Heavy-gauge reinforced kraft tube with acid-free tissue wrap" },
    ],
    whatsIncluded: [
      "1× Chandra Monolith Art Print",
      "Acid-free archival tissue protective sleeve",
      "Reinforced heavy-wall shipping canister",
    ],
    shortDescription:
      "Striking repeated condensed typographic backdrop in deep slate teal with central hooded heroic silhouette.",
    longDescription:
      "An homage to the cinematic scale of Indian action cinema, the Chandra Monolith uses repeating architectural condensed typography as an imposing rhythm behind the central hero's silhouette. Printed with deep mineral inks that absorb light to create a rich, glare-free presentation in any room.",
    inStock: true,
    slug: "chandra-monolith-type-edition",
    popularity: 85,
    createdAt: "2026-10-13T14:30:00Z",
  },

  // 4. 3D Figure - Superheroes
  {
    id: "prod-spiderman-figure",
    title: "Vigilante Ascent: 1/8 Scale Figure",
    fandom: "Superheroes",
    fandomSlug: "superheroes",
    productType: "figure",
    productTypeLabel: "3D-Printed Collectible",
    price: 6499,
    originalPrice: 7200,
    editionNote: "Serialized • 250 Worldwide",
    badge: "HAND FINISHED",
    isNewDrop: true,
    isLimited: true,
    images: {
      primary: "/images/spiderman-portrait.jpg",
      alt: "3D printed collectible figure on magnetic obsidian display base",
    },
    gallery: [
      {
        url: "/images/spiderman-portrait.jpg",
        label: "FIGURE FRONT VIEW",
        alt: "Front showcase of 1/8 scale sculpted collectible",
      },
      {
        url: "/images/itachi-reveal-lit.jpg",
        label: "DISPLAY BASE DETAIL",
        alt: "Magnetic obsidian plinth with engraved serial numbering",
      },
      {
        url: "/images/chandra-poster.jpg",
        label: "STUDIO SCALE SHOT",
        alt: "Figure staged next to art prints showing proportional scale",
      },
    ],
    sizes: [
      {
        id: "size-1-8",
        label: "1:8 Display Scale",
        dimensions: "25.5 cm H × 14 cm W × 12 cm D",
        price: 6499,
      },
    ],
    variants: [
      {
        id: "var-classic",
        name: "Classic Matte Studio Finish",
        priceDelta: 0,
      },
      {
        id: "var-stealth",
        name: "Midnight Stealth Monochrome Finish",
        priceDelta: 400,
      },
    ],
    dimensions: "25.5 cm H × 14 cm W × 12 cm D",
    material: "High-density photopolymer resin with weighted steel core",
    finish: "Matte-sealed hand-painted acrylic with satin suit textures",
    specs: [
      { label: "SCALE", value: "1:8 Precision Display Scale" },
      { label: "DIMENSIONS", value: "25.5 cm Height × 14 cm Width × 12 cm Depth" },
      { label: "TOTAL WEIGHT", value: "850 grams (Weighted steel core)" },
      { label: "MATERIAL", value: "12K photopolymer resin with internal steel skeleton" },
      { label: "FINISHING", value: "Hand-painted acrylic lacquer with satin suit textures" },
      { label: "BASE", value: "Magnetic solid obsidian composite plinth with serial plate" },
    ],
    whatsIncluded: [
      "1× Vigilante Ascent 1:8 Collectible Sculpture",
      "1× Weighted Magnetic Obsidian Display Plinth",
      "1× Serialized Brass Authentication Card",
      "1× Custom Laser-Cut EVA Foam Presentation Box",
    ],
    shortDescription:
      "Precision 3D printed display sculpture with architectural plinth base, designed for desk and curated shelf displays.",
    longDescription:
      "Crafted for collectors who demand tactile weight and razor-sharp fidelity. Each Vigilante Ascent sculpture is printed in ultra-dense photopolymer resin at 12K resolution, eliminating layer artifacts. Hand-finished by studio painters with custom-mixed acrylics that differentiate suit webbing, fabric tension, and expressive ocular lenses. The sculpture docks securely onto an 850g weighted magnetic obsidian plinth.",
    inStock: true,
    slug: "vigilante-ascent-figure",
    popularity: 95,
    createdAt: "2026-10-12T09:00:00Z",
  },

  // 5. Reveal Frame - Anime
  {
    id: "prod-akatsuki-dusk-reveal",
    title: "Akatsuki Crimson Dusk Reveal Frame",
    fandom: "Anime",
    fandomSlug: "anime",
    productType: "illuminated-frame",
    productTypeLabel: "Illuminated Reveal Frame",
    price: 4999,
    originalPrice: 5600,
    editionNote: "Numbered Batch • 100 Units",
    badge: "LIMITED DROP",
    isNewDrop: false,
    isLimited: true,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      secondary: "/images/itachi-reveal-unlit.jpg",
      lit: "/images/itachi-reveal-lit.jpg",
      unlit: "/images/itachi-reveal-unlit.jpg",
      alt: "Akatsuki Crimson Dusk dual lighting state display art frame",
    },
    gallery: [
      {
        url: "/images/itachi-reveal-lit.jpg",
        label: "ILLUMINATED STATE (NIGHT)",
        alt: "Akatsuki Crimson Dusk active illumination",
        lightingState: "lit",
      },
      {
        url: "/images/itachi-reveal-unlit.jpg",
        label: "DAYLIGHT STATE (OFF)",
        alt: "Akatsuki Crimson Dusk unlit daylight line art",
        lightingState: "unlit",
      },
    ],
    dimensions: "35 cm × 50 cm × 3 cm",
    material: "Solid ash wood frame with black stain and optical diffusion glass",
    finish: "Integrated discrete touch dimmer with memory brightness",
    specs: [
      { label: "DIMENSIONS", value: "35 cm × 50 cm × 3 cm" },
      { label: "FRAME", value: "Solid ash wood with deep obsidian stain" },
      { label: "LIGHTING", value: "Perimeter 2700K warm LED array" },
    ],
    whatsIncluded: [
      "1× Akatsuki Dusk Reveal Frame",
      "1× Concealed French-Cleat Wall Mount",
      "1× 12V Power Supply with Touch Dimmer",
    ],
    shortDescription:
      "Minimalist black line silhouettes reveal sweeping amber clouds and crimson crests under backlighting.",
    longDescription:
      "Designed specifically for compact gallery walls and desk-side displays. Features dual-state optical diffusion that keeps daytime walls calm and minimalist, transforming into a rich crimson sanctuary at the touch of a switch.",
    inStock: true,
    slug: "akatsuki-crimson-dusk-reveal-frame",
    popularity: 89,
    createdAt: "2026-10-10T16:00:00Z",
  },

  // 6. Framed Poster - Motorsport
  {
    id: "prod-senna-rascasse-framed",
    title: "Monaco 1988: The Rascasse Pole Lap",
    fandom: "Motorsport",
    fandomSlug: "motorsport",
    productType: "framed-poster",
    productTypeLabel: "Framed Art Poster",
    price: 2999,
    originalPrice: 3499,
    editionNote: "Archival Series",
    badge: "MOTORSPORT HERITAGE",
    isNewDrop: false,
    isLimited: false,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      alt: "Historic Monaco Grand Prix qualifying lap graphic poster in black frame",
    },
    dimensions: "50 cm × 70 cm",
    material: "300gsm Ultra-smooth Fine Art Paper",
    finish: "Brushed obsidian metal frame with anti-reflective glass",
    specs: [
      { label: "DIMENSIONS", value: "50 cm × 70 cm" },
      { label: "PAPER", value: "300gsm ultra-smooth cotton rag" },
      { label: "FRAME", value: "Brushed obsidian aluminum frame" },
    ],
    shortDescription:
      "Telemetry overlay and dramatic barrier silhouette immortalizing the most legendary qualifying lap in racing history.",
    inStock: true,
    slug: "monaco-1988-rascasse-pole-lap",
    popularity: 81,
    createdAt: "2026-10-08T11:20:00Z",
  },

  // 7. 3D Figure - Anime
  {
    id: "prod-shogun-statue",
    title: "Crow Shogun: 1/8 Studio Maquette",
    fandom: "Anime",
    fandomSlug: "anime",
    productType: "figure",
    productTypeLabel: "3D-Printed Collectible",
    price: 6999,
    originalPrice: 7800,
    editionNote: "Studio Master Series • 100 Worldwide",
    badge: "SERIALIZED",
    isNewDrop: false,
    isLimited: true,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      alt: "Hand finished resin anime statue on custom plinth",
    },
    dimensions: "28 cm H × 16 cm W × 14 cm D",
    material: "Photopolymer engineering resin with internal brass armature",
    finish: "Hand-buffed satin lacquer with metallic red accents",
    specs: [
      { label: "SCALE", value: "1:8 Studio Maquette" },
      { label: "HEIGHT", value: "28 cm" },
      { label: "MATERIAL", value: "Engineering photopolymer resin" },
    ],
    shortDescription:
      "Sculpted with layered raven feathers and dramatic flowing cloak, anchored to an obsidian hexagonal plinth.",
    inStock: false,
    slug: "crow-shogun-studio-maquette",
    popularity: 88,
    createdAt: "2026-10-05T08:00:00Z",
  },

  // 8. Framed Poster - Indian Cinema
  {
    id: "prod-chandra-framed",
    title: "Chandra: The Vigilant Shadow",
    fandom: "Indian Cinema",
    fandomSlug: "indian-cinema",
    productType: "framed-poster",
    productTypeLabel: "Framed Art Poster",
    price: 2799,
    originalPrice: 3199,
    editionNote: "Studio Gallery Framing",
    badge: "GALLERY FRAMED",
    isNewDrop: false,
    isLimited: false,
    images: {
      primary: "/images/chandra-poster.jpg",
      alt: "Framed Chandra poster with warm ivory passe-partout",
    },
    dimensions: "45 cm × 60 cm",
    material: "Archival matte paper with 2-inch warm ivory matboard",
    finish: "Custom solid dark walnut frame with shatterproof acrylic",
    shortDescription:
      "Gallery framed version of the iconic monolith typography poster, mounted with an archival warm ivory border.",
    inStock: true,
    slug: "chandra-the-vigilant-shadow-framed",
    popularity: 79,
    createdAt: "2026-10-03T15:00:00Z",
  },

  // 9. Fine Art Poster - Superheroes
  {
    id: "prod-spider-verse-print",
    title: "Spider-Verse: Painterly Collision",
    fandom: "Superheroes",
    fandomSlug: "superheroes",
    productType: "poster",
    productTypeLabel: "Archival Art Poster",
    price: 1699,
    originalPrice: 1999,
    editionNote: "Open Studio Edition",
    badge: "TEXTURED PRINT",
    isNewDrop: false,
    isLimited: false,
    images: {
      primary: "/images/spiderman-portrait.jpg",
      alt: "Collage comic panels and bold painted Spider-Man artwork poster",
    },
    dimensions: "40 cm × 60 cm",
    material: "310gsm German Etching Textured Paper",
    finish: "Giclée archival pigment print with subtle paper grain",
    shortDescription:
      "Rich painterly portrait showcasing the duality of identity, printed on heavyweight textured German etching stock.",
    inStock: true,
    slug: "spider-verse-painterly-collision",
    popularity: 87,
    createdAt: "2026-10-01T12:00:00Z",
  },

  // 10. Fine Art Poster - Motorsport
  {
    id: "prod-silverstone-print",
    title: "Silverstone 1993: Rain Masterclass",
    fandom: "Motorsport",
    fandomSlug: "motorsport",
    productType: "poster",
    productTypeLabel: "Archival Art Poster",
    price: 1399,
    originalPrice: 1699,
    editionNote: "Edition of 500",
    badge: "LIMITED RUN",
    isNewDrop: false,
    isLimited: true,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      alt: "Historic formula racing car in spray art poster print",
    },
    dimensions: "50 cm × 70 cm",
    material: "280gsm Archival Fine Art Stock",
    finish: "Satin finish pigment ink",
    shortDescription:
      "Dramatic spray trails, high-contrast rain reflections, and iconic British racing green composition.",
    inStock: true,
    slug: "silverstone-1993-rain-masterclass",
    popularity: 76,
    createdAt: "2026-09-28T09:00:00Z",
  },

  // 11. 3D Figure - Motorsport
  {
    id: "prod-apex-figure",
    title: "Apex Ground Effect: 1:18 Aerodynamic Sculpture",
    fandom: "Motorsport",
    fandomSlug: "motorsport",
    productType: "figure",
    productTypeLabel: "3D-Printed Collectible",
    price: 5899,
    originalPrice: 6500,
    editionNote: "First Release • 150 Units",
    badge: "PRECISION PRINT",
    isNewDrop: true,
    isLimited: true,
    images: {
      primary: "/images/chandra-poster.jpg",
      alt: "Aerodynamic wind-tunnel racing sculpture on carbon-textured display base",
    },
    dimensions: "26 cm L × 11 cm W × 8 cm H",
    material: "High-temperature engineering resin with internal steel weighting",
    finish: "Ultra-matte slate grey with gloss aerodynamic flow vanes",
    shortDescription:
      "Pure sculpted downforce. Visualizing fluid flow dynamics over a modern ground-effect formula car chassis.",
    inStock: true,
    slug: "apex-ground-effect-sculpture",
    popularity: 84,
    createdAt: "2026-09-25T14:00:00Z",
  },

  // 12. Reveal Frame - Gaming & Cartoons
  {
    id: "prod-neon-overdrive-reveal",
    title: "Neon Overdrive: Dual-Phase Frame",
    fandom: "Gaming & Cartoons",
    fandomSlug: "gaming-cartoons",
    productType: "illuminated-frame",
    productTypeLabel: "Illuminated Reveal Frame",
    price: 5299,
    originalPrice: 5900,
    editionNote: "Batch 02",
    badge: "DUAL-STATE ILLUMINATED",
    isNewDrop: false,
    isLimited: true,
    images: {
      primary: "/images/itachi-reveal-lit.jpg",
      secondary: "/images/itachi-reveal-unlit.jpg",
      lit: "/images/itachi-reveal-lit.jpg",
      unlit: "/images/itachi-reveal-unlit.jpg",
      alt: "Cyberpunk metropolis street scene illuminated reveal frame",
    },
    gallery: [
      {
        url: "/images/itachi-reveal-lit.jpg",
        label: "ILLUMINATED STATE (NIGHT)",
        alt: "Cyberpunk metropolis illuminated state",
        lightingState: "lit",
      },
      {
        url: "/images/itachi-reveal-unlit.jpg",
        label: "DAYLIGHT STATE (OFF)",
        alt: "Cyberpunk metropolis daylight state",
        lightingState: "unlit",
      },
    ],
    dimensions: "40 cm × 50 cm × 3.2 cm",
    material: "Anodized charcoal aluminum frame with optical acrylic",
    finish: "Touch power sensor with ambient light detection",
    shortDescription:
      "Stark architectural blueprints reveal blazing holographic neon street advertisements when the internal illumination engages.",
    inStock: true,
    slug: "neon-overdrive-dual-phase-frame",
    popularity: 91,
    createdAt: "2026-09-20T10:00:00Z",
  },
];

export const mockIlluminatedFeature = {
  title: "MORE THAN A POSTER",
  subtitle: "DUAL-STATE ILLUMINATED REVEAL FRAMES",
  eyebrow: "PATENTED PHYSICAL DISPLAY TECHNOLOGY",
  description:
    "Engineered with internal multi-layer optical film and recessed low-heat perimeter illumination. By day, enjoy a crisp, understated minimalist art piece. At night, flip the switch to reveal hidden narrative layers, warm ember hues, and dramatic contrast that transforms your room.",
  unlitSpecs: {
    label: "LIGHT OFF • DAYLIGHT STATE",
    description: "Understated stark line-art with clean white background and subtle outline typography.",
    image: "/images/itachi-reveal-unlit.jpg",
  },
  litSpecs: {
    label: "LIGHT ON • REVEAL STATE",
    description: "Atmospheric amber glow reveals the crimson sky, fluttering crows, and intense eye reflection.",
    image: "/images/itachi-reveal-lit.jpg",
  },
  features: [
    {
      title: "Real Physical Switch",
      detail: "Accessible inline dimmer or remote control with 3 brightness presets.",
    },
    {
      title: "Museum Anti-Reflective Layer",
      detail: "Eliminates distracting room glare while protecting artwork colors from UV fading.",
    },
    {
      title: "Clean Wall Mount",
      detail: "Flush concealed French-cleat mounting bracket with braided obsidian power cable.",
    },
  ],
};

export const mockFigureFeature = {
  title: "BUILD YOUR UNIVERSE",
  subtitle: "PRECISION 3D DISPLAY SCULPTURES",
  eyebrow: "STUDIO CRAFT & FINISH",
  description:
    "We don't do mass-molded toys. Each figure is custom 3D-printed in high-density resin, individually hand-finished by studio artisans, and balanced on a solid obsidian display plinth.",
  stats: [
    { label: "SCALE", value: "1:8 Display" },
    { label: "RESOLUTION", value: "12K Layering" },
    { label: "CORE WEIGHT", value: "850g Weighted" },
    { label: "EDITION", value: "Serialized" },
  ],
};

export const mockWallOfFameItems: WallOfFameItem[] = [
  {
    id: "wof-1",
    title: "Midnight Desk Battlestation",
    collectorName: "Arjun K.",
    collectorHandle: "@arjun_collects",
    location: "Bengaluru, India",
    image: "/images/itachi-reveal-lit.jpg",
    taggedProductTitles: ["Itachi: Crow Mirage Reveal Frame"],
    likesCount: 342,
    featuredQuote: "The reveal frame at dusk completely changes the entire mood of my desk. Incredible build quality.",
    isVerifiedSetup: true,
  },
  {
    id: "wof-2",
    title: "Minimal Studio Gallery Wall",
    collectorName: "Dev M.",
    collectorHandle: "@devdesigns",
    location: "Mumbai, India",
    image: "/images/spiderman-portrait.jpg",
    taggedProductTitles: ["Peter Parker: Half-Mask Portrait"],
    likesCount: 289,
    featuredQuote: "The paper weight and charcoal frame are museum quality. It looks like an original commission.",
    isVerifiedSetup: true,
  },
  {
    id: "wof-3",
    title: "Cinematic Corner Bookshelf",
    collectorName: "Rohan & Sneha",
    collectorHandle: "@rohan_cine",
    location: "Delhi, India",
    image: "/images/chandra-poster.jpg",
    taggedProductTitles: ["Chandra: Monolith Type Edition"],
    likesCount: 198,
    featuredQuote: "Bold typography that actually commands the space. Friends always ask where we got this.",
    isVerifiedSetup: true,
  },
];
