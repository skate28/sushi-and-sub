import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Sushi & Sub — the only editable content file.
 *
 * Change business info, hours, menu, photos, testimonials, FAQ and palette here.
 * Components read this module and hide anything that is still empty.
 * Shapes: see types.reference.ts (adapted from the Purple Bagel starter).
 *
 * Photos: files live in `public/images/`. All are real customer photos from
 * Google Maps / Yelp (credit keys only here; full sources in photo-sources.md).
 * Do not drop in stock or AI-generated pictures of the food or the shop.
 * Most food photos are 1200×1600 portraits and work well as cards. The only
 * storefront shot is 608×1080, so keep it small (side column / card), not a banner.
 *
 * Menu: every price comes from the shop's own printed takeout menu, photographed
 * twice by customers (Google + Yelp; the two copies match). The photo dates are
 * unknown, so the owner must confirm every price before launch.
 *
 * Phone numbers: `afterHoursPhone` and `textNumber` are optional. While they are
 * null, after-hours calls and pre-order texts use the shop line (+19048587032).
 */

export const site: SiteContent = {
  name: "Sushi & Sub",
  // From reviews ("fresh made", "made right there in front of us"). TODO(Leads): owner approval.
  tagline: "Fresh rolls, made to order on Beach Blvd.",
  description:
    "Sushi & Sub is a small, family-run sushi shop at 5800 Beach Blvd #202, Jacksonville, FL 32207. Every roll is made to order, with 12-piece rolls, specialty rolls and salads at neighborhood prices. Takeout or a few tables. Mon–Sat 10 AM–8 PM, closed Sunday. Call (904) 858-7032.",
  // A May 2025 Yelp review says the owner "has been at this location for 21 years" (≈2004).
  // TODO(Leads): confirm the opening year before showing it.
  opened: "",

  address: {
    street: "5800 Beach Blvd",
    suite: "#202",
    neighborhood: "Southside",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32207",
    country: "US",
    full: "5800 Beach Blvd #202, Jacksonville, FL 32207",
  },
  // From reviews: "Next to the UPS Store" (Matt M., Yelp/Google); "Beach Blvd. at University" (Nextdoor).
  // A Yelp reviewer says map apps drop you at a beauty store and the shop is "behind all of that".
  // TODO(Leads): confirm wording with the owner (is it really next to The UPS Store?).
  locationHint: "In the plaza at Beach Blvd & University Blvd, next to The UPS Store.",

  // Google (via Exa) 30.291812,-81.603961; Wanderlog/Google 30.291634,-81.604004 (~20 m apart).
  // MapQuest is ~120 m off, ignore it.
  geo: {
    latitude: 30.291812,
    longitude: -81.603961,
  },
  // Google place ID ChIJufmmkne25YgRZwHaseDL4Pk.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Sushi+%26+Sub+5800+Beach+Blvd+202+Jacksonville+FL&query_place_id=ChIJufmmkne25YgRZwHaseDL4Pk",

  phone: {
    display: "(904) 858-7032",
    tel: "tel:+19048587032",
    e164: "+19048587032",
  },

  // TODO(Leads): set once an AI answering line is live.
  afterHoursPhone: null,
  // TODO(Leads): confirm the shop line can receive texts (unknown whether it's a landline).
  textNumber: null,

  closedNotice: "We're closed right now. Open Monday–Saturday, 10 AM–8 PM.",

  // Printed takeout menu ("Open: Mon-Sat, 10.AM-8.PM"), Google, Restaurantji, Wanderlog, MapQuest all agree.
  // Conflicts (stale listings): NetWaiter 10:30 AM–8:30 PM (Fri 8 PM); Menupix 9 AM–9 PM;
  // Nextdoor 9 AM–9:30 PM daily incl. Sunday.
  hours: {
    timezone: "America/New_York",
    summary: "Mon–Sat 10 AM–8 PM · Sun closed",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: "10:00", closeTime: "20:00" },
      tue: { openTime: "10:00", closeTime: "20:00" },
      wed: { openTime: "10:00", closeTime: "20:00" },
      thu: { openTime: "10:00", closeTime: "20:00" },
      fri: { openTime: "10:00", closeTime: "20:00" },
      sat: { openTime: "10:00", closeTime: "20:00" },
      sun: { openTime: null, closeTime: null, closed: true },
    },
    // TODO(Leads): holiday closures / special hours.
  },

  priceRange: "$",
  // Menupix says "Cash Only"; NetWaiter says "Accepts Credit Cards: No". Both are old directory data.
  // TODO(Leads): confirm payment methods before showing anything. Empty = hidden.
  paymentNote: "",

  // No DoorDash, Uber Eats, Grubhub or official online ordering found (Oct 2026).
  // Do NOT link the unofficial ad-funded copycat site: it hosts a third-party
  // "Order Now" widget (see research_brief.md).
  orderingLinks: [
    { label: "Call to order", href: "tel:+19048587032", kind: "phone" },
    // TODO(Leads): add "Text to pre-order" (sms:) once texting is confirmed or a text line is set up.
  ],

  // Facebook page id 116074518421474 is linked from Google, but its content isn't publicly
  // readable and it may be an auto-generated place page. No Instagram found.
  // TODO(Leads): confirm whether the owner manages any social account; leave empty until then.
  socials: [],

  // Google 4.8 from 211 ratings (Wanderlog's Google data, Oct 2026; Exa showed 4.8/202).
  // Yelp 4.5 (24), TripAdvisor 5.0 (4), Restaurantji 4.9 (141).
  rating: {
    value: 4.8,
    count: 211,
    source: "Google",
  },

  // Real quotes only, verbatim ("…" marks a trim), names as the platform shows them.
  // Yelp quotes come from Yelp's feed on MapQuest; Google quotes from Google review
  // excerpts (Exa) with reviewer names from aggregators (localitybiz, roostcafeandbistro).
  // TODO(Leads): get the owner's OK before publishing reviews.
  testimonials: [
    {
      quote:
        "The California Roll is a standout: simple, classic, but elevated with really good rice and fresh ingredients. Their Southsider Roll is another favorite — the way they balance savory, sweet, crunchy, and spice is just magical.",
      author: "Jeffrey Tolen",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJufmmkne25YgRZwHaseDL4Pk",
    },
    {
      quote:
        "Great, homey little hole in the wall with tasty sushi and friendly service. This is a very casual dining establishment. The prices were very reasonable. I will definitely be back.",
      author: "Trixie B.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/sushi-and-sub-jacksonville",
    },
    {
      quote:
        "Been coming here for over ten years, food and service is amazing. Big portions for small prices. Always fresh.",
      author: "Kylie Pimenta",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJufmmkne25YgRZwHaseDL4Pk",
    },
    {
      quote:
        "I love the food and the owner. She makes everything in front of you and her prices are really good. She treats everyone well and the atmosphere makes me feel comfortable.",
      author: "Faily M.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/sushi-and-sub-jacksonville",
    },
    {
      quote:
        "I don't eat fish or meat so I order the vegetable roll. Love coming to this little hole in the wall when on this side of town. It's affordable and tasty.",
      author: "Shiloh Levy",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJufmmkne25YgRZwHaseDL4Pk",
    },
    {
      quote:
        "Food was reasonably priced and service was incredible. This has made me a regular customer for all of my sushi craving needs.",
      author: "Febe V.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/sushi-and-sub-jacksonville",
    },
    {
      quote: "Great food and awesome prices to boot! Huge portions and fresh sushi!",
      author: "Rachel Robinson",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJufmmkne25YgRZwHaseDL4Pk",
    },
    {
      quote: "Great sushi, fast service, kindest owner!! Definitely a hidden gem of Jacksonville!",
      author: "Lily Watson",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/place/?q=place_id:ChIJufmmkne25YgRZwHaseDL4Pk",
    },
  ],

  // Verified answers only.
  // TODO(Leads): owner-only FAQs: payment (cash only?), call-ahead wait time, subs (still sold?),
  // drinks, custom rolls/substitutions, party trays, gluten/allergy info, raw-fish advisory wording.
  faq: [
    {
      question: "Where are you?",
      answer:
        "5800 Beach Blvd #202, Jacksonville, FL 32207, in the plaza at Beach Blvd & University Blvd, next to The UPS Store. There's plenty of parking out front.",
    },
    {
      question: "What are your hours?",
      answer: "Monday–Saturday, 10 AM–8 PM. We're closed on Sunday.",
    },
    {
      question: "Can I call ahead for takeout?",
      answer: "Yes. Call (904) 858-7032 and your order will be made fresh for pickup.",
    },
    {
      question: "How big are the rolls?",
      answer:
        "Most rolls on our menu are 12 pieces. The Stardust Combo is 16 pieces, the Marina Plate is 6 pieces and the Spring Roll is 4 pieces.",
    },
    {
      question: "Do you have vegetarian options?",
      answer:
        "Yes. The Vegetable Roll (cucumber, carrot and avocado) and the Seaweed Salad are both meat- and fish-free.",
    },
    {
      question: "Do you deliver?",
      answer: "We don't offer delivery right now. Call ahead and pick up your order.",
    },
  ],

  menuNote:
    "Prices are from our printed takeout menu and may change. Raw items include tuna, salmon and yellowtail. Call (904) 858-7032 to order.",

  // Source: the shop's own printed takeout menu ("Sushi & Subs", 19 items), photographed by
  // customers on Google Maps (pink copy) and Yelp (green copy). Both copies show the same prices,
  // except #13 Meteor Special: printed $6.00, hand-corrected to $7.00 on the green copy.
  // An older Google/SinglePlatform menu (snapshot June 2023) shows lower prices, e.g. California $4.70,
  // Rainbow $8.40, so prices have changed at least once. TODO(Leads): owner confirms every price.
  // Ingredient lines below are cleaned-up versions of the printed text ("Imit Crab" → imitation crab).
  // TODO(Leads): subs aren't on the printed menu. A Yelp reviewer says "very few people bought subs".
  // Ask whether subs are still sold (and prices) before adding a Subs category.
  // TODO(Leads): drinks. One review mentions "a great selection of drinks"; no list or prices found.
  menu: [
    {
      id: "classic-rolls",
      name: "Classic Rolls",
      description: "12 pieces each.",
      items: [
        { id: "california", number: 1, name: "California Roll", description: "Imitation crab, cucumber and avocado.", pieces: 12, price: 5.5 },
        { id: "cream-cheese", number: 2, name: "Cream Cheese Roll", description: "Imitation crab, shrimp and raw salmon.", pieces: 12, price: 5.5 },
        // TODO(Leads): printed ingredients for the Cream Cheese Roll don't mention cream cheese; confirm.
        { id: "spicy", number: 3, name: "Spicy Roll", description: "Raw tuna, raw salmon and shrimp.", pieces: 12, price: 5.5 },
        { id: "vegetable", number: 4, name: "Vegetable Roll", description: "Cucumber, carrot and avocado.", pieces: 12, price: 5.5 },
        { id: "full-moon", number: 5, name: "Full Moon", description: "Imitation crab, raw tuna and shrimp.", pieces: 12, price: 5.5 },
        { id: "philly", number: 14, name: "Philly Roll", description: "Imitation crab and cream cheese.", pieces: 12, price: 5.5 },
        { id: "eel", number: 9, name: "Eel Roll", description: "Freshwater eel.", pieces: 12, price: 6.5 },
      ],
    },
    {
      id: "specialty-rolls",
      name: "Specialty Rolls & Combos",
      items: [
        { id: "orange", number: 11, name: "Orange Roll", description: "California roll with fish roe and shrimp.", pieces: 12, price: 6 },
        // Printed $6.00; hand-corrected to $7.00 on the (likely newer) green copy. TODO(Leads): confirm.
        { id: "meteor-special", number: 13, name: "Meteor Special", description: "California roll with shrimp, raw tuna and cucumber.", pieces: 12, price: 7 },
        { id: "stardust-combo", number: 10, name: "Stardust Combo", description: "California roll with shrimp, raw salmon and tuna.", pieces: 16, price: 6.5 },
        { id: "dragon", number: 12, name: "Dragon Roll", description: "California roll topped with eel.", pieces: 12, price: 7.5 },
        { id: "shoreline-combo", number: 8, name: "Shoreline Combo", description: "California roll with raw salmon and raw yellowtail.", pieces: 12, price: 8 },
        { id: "tempura", number: 18, name: "Tempura Roll", description: "Fried shrimp, cucumber and avocado.", pieces: 12, price: 8 },
        // Menu prints "Southside Roll"; reviewers call it the "Southsider". Pieces left blank on the menu.
        { id: "southside", number: 19, name: "Southside Roll", description: "Shrimp tempura, avocado, cucumber and crab salad.", price: 8 },
        { id: "rainbow", number: 7, name: "Rainbow Roll", description: "Raw tuna, raw salmon, shrimp and raw yellowtail.", pieces: 12, price: 9 },
      ],
    },
    {
      id: "plates",
      name: "Sushi Plate",
      items: [
        // TODO(Leads): confirm whether this is nigiri or sashimi.
        { id: "marina-plate", number: 6, name: "Marina Plate", description: "Tuna, yellowtail, eel, shrimp and salmon.", pieces: 6, price: 8 },
      ],
    },
    {
      id: "starters-salads",
      name: "Starters & Salads",
      items: [
        { id: "spring-roll", number: 15, name: "Spring Roll", description: "Avocado, carrot, imitation crab, cucumber and shrimp.", pieces: 4, price: 6 },
        { id: "seaweed-salad", number: 16, name: "Seaweed Salad", price: 3.5 },
        { id: "calamari-salad", number: 17, name: "Calamari Salad", description: "Seasoned squid.", price: 4 },
      ],
    },
  ],

  // Real customer photos only (see images/MANIFEST.md). Credit keys only, no URLs.
  // TODO(Leads): get the owner's OK for these, and plan a real photo shoot (storefront in daylight,
  // the owner's hands rolling sushi if she agrees, a hero shot of the Southside Roll).
  photos: [
    { src: "/images/sushi-platter-assorted.jpg", alt: "Takeout tray of salmon, tuna and shrimp nigiri with sliced rolls, wasabi and ginger", category: "food", credit: "google-maps-ugc", width: 810, height: 1080, hero: true },
    { src: "/images/specialty-roll-takeout.jpg", alt: "Long specialty roll topped with crunchy tempura flakes and eel sauce in a takeout tray", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/rainbow-and-specialty-plate.jpg", alt: "Plate with a rainbow roll of tuna and salmon beside a crunchy-topped specialty roll, ginger and wasabi", category: "food", credit: "google-maps-ugc", width: 810, height: 1080 },
    { src: "/images/roll-spicy-mayo-masago.jpg", alt: "Roll topped with orange fish roe and spicy mayo, with a cup of soy sauce", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/roll-plate-spicy-mayo.jpg", alt: "Twelve-piece roll with carrot and cucumber, drizzled with spicy mayo, on a white plate", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/roll-plate-soy.jpg", alt: "Sliced roll drizzled with spicy mayo on a fish-shaped plate with soy sauce", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/rolls-checkered-table.jpg", alt: "Two plates of rolls on a green checkered tablecloth", category: "food", credit: "google-maps-ugc", width: 1600, height: 900 },
    { src: "/images/sushi-trays-wide.jpg", alt: "Two takeout trays: assorted maki rolls and a tray of salmon and tuna sushi", category: "food", credit: "google-maps-ugc", width: 1600, height: 673 },
    { src: "/images/rolls-closeup.jpg", alt: "Close-up of rolls with spicy mayo and a crunchy-topped roll", category: "food", credit: "google-maps-ugc", width: 810, height: 1080 },
    { src: "/images/rolls-takeout-tray.jpg", alt: "Takeout tray of rolls drizzled with spicy mayo", category: "food", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/seaweed-salad.jpg", alt: "Seaweed salad in a takeout container", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/seaweed-and-calamari-salads.jpg", alt: "Seaweed salad and calamari salad in takeout containers", category: "food", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/storefront-sign-dusk.jpg", alt: "Sushi & Subs storefront at dusk with a blue awning and lit sign", category: "storefront", credit: "google-maps-ugc", width: 608, height: 1080 },
    { src: "/images/interior-counter.jpg", alt: "Front counter with a drinks cooler, shelves of snacks and sauces, and potted plants", category: "interior", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/interior-dining-room.jpg", alt: "Small dining room with a few tables along a pale green wall", category: "interior", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/interior-seating-corner.jpg", alt: "Corner of the dining room with plants, a drinks fridge and wall art", category: "interior", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/takeout-menu-pink.jpg", alt: "Printed Sushi & Subs takeout menu listing 19 numbered rolls and salads with prices", category: "menu-board", credit: "google-maps-ugc", width: 608, height: 1080 },
    { src: "/images/takeout-menu-green.jpg", alt: "Green copy of the printed takeout menu held over a sushi order", category: "menu-board", credit: "yelp-ugc", width: 750, height: 1000 },
    // TODO(Leads): no logo found anywhere. Ask the owner, or use a wordmark.
  ],
  heroImage: "/images/sushi-platter-assorted.jpg",

  // Awning navy sampled from the storefront photo (#133162). Sign red is approximate.
  // TODO(Leads): revisit once a logo or daylight storefront photo is available.
  palette: {
    ink: "#13233F",
    brand: "#133162",
    brandDeep: "#0C1F40",
    accent: "#C2343F",
    salmon: "#F28C6A",
    nori: "#1F3B2D",
    rice: "#FFFDF8",
    paper: "#FFFFFF",
  },

  about: {
    heading: "Small shop, made-to-order sushi",
    paragraphs: [
      "Sushi & Sub is a small neighborhood sushi shop on Beach Boulevard. Every roll is made to order, usually right in front of you, and most come 12 pieces to an order.",
      "The menu is short and focused: California, Philly, spicy and vegetable rolls, specialty rolls like the Southside, Dragon and Rainbow, plus the Marina Plate, spring rolls and seaweed and calamari salads.",
      "Most guests call ahead and pick up, and there are a few tables if you'd like to eat in. Regulars have been coming back for more than a decade for big portions at small prices.",
      // TODO(Leads): the owner's story, only what she wants published. Reviews say she has run the shop
      // ~21 years and mention her background; keep both off the site unless she approves.
    ],
  },

  preorder: {
    heading: "Order ahead",
    intro:
      "Call or text your order with a pickup time and it will be rolled fresh and ready when you arrive.",
    textButtonLabel: "Text us your order",
    textMessage: "Hi Sushi & Sub, I'd like to place a pickup order:",
    // TODO(Leads): confirm the shop accepts texted orders and how far ahead.
    maxDaysAhead: 7,
  },

  seo: {
    title: "Sushi & Sub | Fresh Sushi Rolls on Beach Blvd, Jacksonville FL",
    description:
      "Made-to-order sushi rolls, specialty rolls and salads at 5800 Beach Blvd #202, Jacksonville, FL 32207. Open Mon–Sat 10 AM–8 PM. Call (904) 858-7032 for pickup.",
  },

  footerCredit: "Built by nicklopacki.com",
};

/** Text-us number. Falls back to the shop line while `textNumber` is unset. */
export function textTarget(content: SiteContent = site): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) {
    return content.textNumber;
  }
  return content.phone;
}

/**
 * Call number. Open hours always use the shop line.
 * After close, `afterHoursPhone` wins when it is set; otherwise the shop line.
 */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (
    isClosed &&
    (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)
  ) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
