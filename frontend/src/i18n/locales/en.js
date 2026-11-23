// English — the reference dictionary. Every other locale must have the same keys
// and the same array lengths (checked by scripts/check-locales.mjs).

export default {
  meta: {
    title: 'USM Bekway Logistics — Freight between Europe, the Middle East and Central Asia',
    description:
      'Road, air, sea, intermodal and project cargo transport from Europe to Türkiye, the Gulf and Central Asia. Offices in Tashkent, Istanbul and Mersin.',
  },
  skip: 'Skip to content',

  nav: {
    services: 'Services',
    transport: 'Transport',
    domestic: 'Domestic',
    project: 'Project cargo',
    about: 'About',
    team: 'Team',
    contact: 'Contact',
    cta: 'Get a quote',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  hero: {
    eyebrow: 'Europe · Middle East · Central Asia',
    title1: 'Freight that moves',
    title2: 'between',
    title3: 'continents.',
    lead:
      'Road, air, sea and intermodal transport from every corner of Europe to Turkey, the Gulf and Central Asia — with boutique service and flexible solutions at every stage of your project.',
    cta1: 'Request a quote',
    cta2: 'Explore services',
    cardHead: 'Transit corridor',
    active: 'Active lanes',
    mapLabel: 'Route from Europe through Istanbul and Mersin to Tashkent',
    places: { europe: 'Europe', istanbul: 'Istanbul', mersin: 'Mersin', tashkent: 'Tashkent' },
    modes: [
      { name: 'Road', sub: 'FTL · LTL · Low-bed' },
      { name: 'Air', sub: 'Door-to-door' },
      { name: 'Sea', sub: 'FCL · Groupage' },
    ],
  },

  stats: {
    label: 'Key figures',
    items: [
      { value: '3', label: 'Branches — Istanbul, Mersin, Tashkent' },
      { value: '35', label: 'Partner agencies worldwide' },
      { value: '100', label: 'Mega trailers & low-bed trucks' },
      { value: '1000 t', label: 'Max project cargo, up to 80 m' },
    ],
  },

  services: {
    eyebrow: 'Our services',
    title: 'One partner for every mode of transport.',
    aside: 'Your logistics office at every stage of the project — from first quote to final delivery.',
    pillarsLabel: 'Service areas',
    pillars: ['Road cargo Europe', 'Transit transport', 'Domestic transport', 'Logistics'],
    items: [
      {
        title: 'Road Freight',
        text: 'As a Turkish and European company with experienced staff, we deliver to all accessible territories by road — including low-bed transport.',
      },
      {
        title: 'Transit Transport',
        text: 'Transit from all European countries to Afghanistan, Uzbekistan, Turkmenistan, Kazakhstan, Iraq, Iran, Georgia, Azerbaijan, Tajikistan and Armenia.',
      },
      {
        title: 'Project Transportation',
        text: 'Parts up to 80 m long and 1000 t — loaded and reloaded with hydraulic trailers and cranes at work or construction sites.',
      },
      {
        title: 'Air Freight',
        text: 'Airport-to-airport, airport-to-door, door-to-door and transit loading, plus cross-docking between two countries and outside Turkey.',
      },
      {
        title: 'Sea Freight',
        text: 'Import and export, full container and groupage — port-to-port, port-to-door and door-to-door, standard and special services.',
      },
      {
        title: 'Intermodal',
        text: 'Multimodal transport through our overseas assistance network, combining several modes to bridge distant production sites.',
      },
      {
        title: 'Domestic Transport',
        text: 'Complete, groupage and dedicated services with a national network in all four corners of Turkey.',
      },
      {
        title: 'Warehousing & Distribution',
        text: 'Integrated storage, handling, preparation, distribution, palletisation and insurance.',
      },
      {
        title: 'Customs Clearance',
        text: 'Customs clearance handled as part of an integrated logistics service, tailored to your needs.',
      },
    ],
  },

  modes: {
    eyebrow: 'How we move it',
    title: 'Road, air, sea — or all three.',
    items: [
      {
        eyebrow: 'Transport by road',
        title: 'Every accessible territory, by road.',
        alt: 'Flatbed truck loaded with pipes in front of a warehouse',
        paragraphs: [
          'As a Turkish and European company, with experienced staff, international transport services with traditional understanding and experience, we deliver to all accessible territories by road.',
          'We provide transit transportation from all European countries to Afghanistan, Uzbekistan, Turkmenistan, Kazakhstan, Iraq, Iran, Georgia, Azerbaijan, Tajikistan and Armenia, and also make low-bed transport to these countries.',
        ],
        chips: ['Agency in Bazargan, Iran', 'Agency at Bandar Abbas port', 'Agency in Turkmenistan', 'Agency in Afghanistan', 'Low-bed transport'],
      },
      {
        eyebrow: 'Air freight',
        title: 'Prompt service when it is needed.',
        alt: 'Air cargo container being loaded onto an aircraft',
        paragraphs: [
          'In order to provide prompt service when needed, we provide air services. With a wide network of agencies, we offer different solutions all over the world.',
          'Not only airport-to-airport service: we also offer airport-to-door, door-to-door and transit transport loading services, and cross-docking services that occur between two countries and outside of Turkey.',
          'In accordance with customer needs, we also provide integrated storage, handling, preparation, distribution, customs clearance, palletisation and insurance.',
        ],
        chips: ['Airport-to-airport', 'Airport-to-door', 'Door-to-door', 'Transit loading', 'Cross-docking'],
      },
      {
        eyebrow: 'Sea freight',
        title: 'Maritime solutions through a worldwide network.',
        alt: 'Shipping containers being lifted by a crane',
        paragraphs: [
          'With our vast network of agencies all over the world, we offer solutions to meet the needs of our customers in maritime transport.',
          'We offer port-to-port, port-to-door and door-to-door, standard and special services, both as a full container and as a groupage.',
        ],
        chips: ['Import', 'Export', 'Full container (FCL)', 'Groupage', 'Port-to-port', 'Port-to-door', 'Door-to-door'],
      },
      {
        eyebrow: 'Intermodal transport',
        title: 'Many modes, one journey.',
        alt: 'Aircraft, container ship and truck combined in one route',
        paragraphs: [
          'The distance of production sites and the growth of production flows around the world are at the origin of many logistical problems.',
          'We address them through our overseas assistance network, using multiple modes of transportation in one service. This is called multimodal transport.',
        ],
        chips: ['Road', 'Sea', 'Air', 'Overseas assistance network'],
      },
    ],
  },

  coverage: {
    eyebrow: 'Coverage',
    title: 'From the Atlantic to the Pamir.',
    regions: [
      {
        name: 'Europe',
        countries:
          'Germany · Denmark · Austria · France · Italy · Switzerland · Netherlands · Belgium · England · Ireland · Sweden · Norway · Romania · Hungary · Poland · Spain · Slovakia · Portugal',
        note: '',
      },
      {
        name: 'Middle East',
        countries: 'Saudi Arabia · Iraq · Kuwait · Oman · Qatar · United Arab Emirates',
        note: 'Transit also to Iran, Georgia and Armenia · agencies in Bazargan and Bandar Abbas port (Iran)',
      },
      {
        name: 'Central Asia',
        countries: 'Azerbaijan · Uzbekistan · Kazakhstan · Turkmenistan · Afghanistan · Tajikistan · Kyrgyzstan',
        note: 'Agencies in Turkmenistan and Afghanistan; branch office in Tashkent',
      },
    ],
  },

  domestic: {
    eyebrow: 'Domestic transport · Türkiye',
    title: 'A national network in all four corners of Turkey.',
    aside: 'For all your domestic, complete, groupage and dedicated shipments — the most appropriate quality-price service.',
    mapAlt: 'Map of Turkey showing routes between Istanbul, Bursa, Izmir, Ankara, Mersin, Gaziantep and Trabzon',
    cities: ['Istanbul', 'Bursa', 'Izmir', 'Ankara', 'Mersin', 'Gaziantep', 'Trabzon'],
    cargoTitle: 'Cargo we carry',
    cargo: [
      'Dry food products',
      'Food products requiring refrigeration',
      'Textile products',
      'Raw materials without chemical ingredients',
      'Metal, aluminium, steel and similar products',
      'Machinery and accessories',
      'Sheet, profile and pipe',
      'Plastic products',
      'Glass products',
      'Paper and paper-based raw materials',
      'Cleaning equipment',
      'White goods and furniture',
      'Office materials',
    ],
    specialTitle: 'Special services',
    special: [
      {
        title: 'Lift trucks & door-to-door delivery',
        text: 'Committed to safe shipment, quality and serial transportation with certain delivery times. We adapt the way of transport to your product range and take responsibility for delivery to the end user.',
      },
      {
        title: 'Refrigerated transport',
        text: 'Walls, ceilings, floors and doors of the cargo section are insulated and cooled by a mechanical vapour-compression refrigeration cycle — for meat, poultry, dairy and other heat-sensitive foods.',
      },
      {
        title: 'Container transportation',
        text: 'Numerous loads are loaded, stacked and sealed into standard-sized, robust and reusable metal containers.',
      },
      {
        title: 'Low-bed transportation',
        text: 'Customer-oriented solutions matched to product sizes and weights, so every transfer is made at the most cost-effective rate.',
      },
      {
        title: 'Fair & festival transportation',
        text: 'Dedicated special vehicles for fairs and festivals, with expert staff for assembly and disassembly, special equipment for sensitive systems and safe transportation.',
      },
      {
        title: 'Short-term dedicated vehicles, 24/7',
        text: 'Project-based short-term transport with special vehicles: we meet short-term operational needs around the clock, with vehicles and drivers placed under your control.',
      },
    ],
  },

  project: {
    eyebrow: 'Project transportation',
    title: 'Heavy, oversized, handled.',
    lead: 'Parts up to 80 metres long and 1000 tonnes can be transported, loaded and reloaded with hydraulic trailers and/or cranes right at your work or construction site.',
    items: ['Reactors', 'Transformers', 'Generators', 'Turbines', 'Convectors', 'Construction equipment', 'Beams'],
    length: { value: '80 m', label: 'Max part length' },
    weight: { value: '1000 t', label: 'Max part weight' },
    photo1Alt: 'Oversized cylindrical cargo on a hydraulic trailer',
    photo2Alt: 'Low-bed trailer on a coastal road',
  },

  about: {
    eyebrow: 'About us',
    title: 'A century of freight experience, passed from father to son.',
    p1: 'We are the partner and companion of our customers in a growing and developing economy — the logistics solution office of customers who trust us with their experience and knowledge at every stage of the project.',
    p2: 'With a strong organisational structure, we make a difference by producing special boutique services and flexible solutions.',
    logoAlt: 'USM Bekway Logistics logo',
    tags: ['Boutique services', 'Flexible solutions', 'Customs clearance', 'Refrigerated transport', 'Fair & festival logistics', '24/7 dedicated vehicles'],
    historyLabel: 'Company history',
    history: [
      { year: '1900s', text: 'With experience passed from father to son, the family began freight transport from Mesopotamia to Baghdad, Amman and Damascus.' },
      { year: '1996', text: 'The DEGER family formed its group of companies: logistics (freight transportation), Mar Tur (tourism) and fuel stations.' },
      { year: '2018', text: 'VİPET offers new solutions from Europe to Asia with a new structure.' },
    ],
  },

  team: {
    eyebrow: 'Leadership',
    title: 'The people behind your cargo.',
    aside: 'Talk directly to our management in Tashkent.',
    portraitAlt: 'Portrait of {name}',
    members: [
      { name: 'Bekzod Usmanov', role: 'General Director' },
      { name: 'Hasan Yuldashev', role: 'Director' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's move your cargo.",
    offices: [
      { city: 'Tashkent — USM Bekway Logistics', address: 'Birlik MFY, 21-mavze, 1-uy, Uchtepa district, Tashkent, Uzbekistan' },
      { city: 'Istanbul — Partner office', address: 'Tatlısu Mh. Arif Ay Sk. No: 40, MTK Plaza K:1/5, Ümraniye, Istanbul' },
      { city: 'Mersin — Partner office', address: 'Camişerif Mh. 5248 Sk. Utku Apt. A Blok Kat: 4/16, Akdeniz, Mersin' },
    ],
    management: 'Management — direct lines',
    email: 'E-mail',
    details: {
      title: 'Company details',
      legalName: '“USM BEKWAY LOGISTICS” MChJ',
      address: 'Toshkent shahri, Uchtepa tumani, Birlik MFY, 21-mavze, 1-uy',
      rows: [
        { label: 'Settlement account (H/r)', value: '2020 8000 8074 9658 4001' },
        { label: 'Bank', value: 'O‘zsanoat Qurilish Bank, Yakkasaroy branch' },
        { label: 'MFO (bank code)', value: '00440' },
        { label: 'STIR (TIN)', value: '313 153 245' },
        { label: 'Director', value: 'B.D. Usmanov' },
      ],
    },
  },

  form: {
    title: 'Request a quote',
    name: 'Full name',
    email: 'Email',
    emailPh: 'you@company.com',
    origin: 'Origin',
    originPh: 'e.g. Hamburg',
    destination: 'Destination',
    destinationPh: 'e.g. Tashkent',
    service: 'Service',
    phone: 'Phone',
    optional: '(optional)',
    details: 'Cargo details',
    detailsPh: 'Weight, dimensions, ready date',
    send: 'Send request',
    sending: 'Sending…',
    successTitle: 'Thank you — your request has been sent.',
    successText: 'Our team will reply with a route and a price shortly.',
    another: 'Send another request',
    demoTitle: 'Form check passed (preview).',
    demoText: 'This preview is not connected to the backend, so nothing was sent.',
    demoNote: 'Preview mode: submissions are not sent anywhere.',
    error: 'Something went wrong. Please try again or call us.',
    invalid: 'Please check the highlighted fields and try again.',
    rateLimit: 'Too many requests. Please try again later or call one of our offices.',
    services: {
      'Road freight': 'Road freight',
      'Air freight': 'Air freight',
      'Sea freight': 'Sea freight',
      Intermodal: 'Intermodal',
      'Project cargo': 'Project cargo',
      'Domestic transport': 'Domestic transport',
      'Warehousing & distribution': 'Warehousing & distribution',
      'Customs clearance': 'Customs clearance',
    },
  },

  footer: {
    rights: 'USM Bekway Logistics',
  },
};
