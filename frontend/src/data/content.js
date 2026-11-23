import { img } from '../assetPath.js';

// All site copy lives here so it can be edited without touching components.
// Source: company presentation + leadership details provided by the company.

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#modes', label: 'Transport' },
  { href: '#domestic', label: 'Domestic' },
  { href: '#project', label: 'Project cargo' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export const stats = [
  { value: '3', label: 'Branches — Istanbul, Mersin, Tashkent' },
  { value: '35', label: 'Partner agencies worldwide' },
  { value: '100', label: 'Mega trailers & low-bed trucks' },
  { value: '1000 t', label: 'Max project cargo, up to 80 m' },
];

// The four pillars from the "Our services" diagram
export const pillars = ['Road cargo Europe', 'Transit transport', 'Domestic transport', 'Logistics'];

export const services = [
  {
    n: '01', img: img('road-truck.jpg'), title: 'Road Freight',
    text: 'As a Turkish and European company with experienced staff, we deliver to all accessible territories by road — including low-bed transport.',
  },
  {
    n: '02', img: img('road-truck2.jpg'), title: 'Transit Transport',
    text: 'Transit from all European countries to Afghanistan, Uzbekistan, Turkmenistan, Kazakhstan, Iraq, Iran, Georgia, Azerbaijan, Tajikistan and Armenia.',
  },
  {
    n: '03', img: img('project.jpg'), title: 'Project Transportation',
    text: 'Parts up to 80 m long and 1000 t — loaded and reloaded with hydraulic trailers and cranes at work or construction sites.',
  },
  {
    n: '04', img: img('air-cargo.jpg'), title: 'Air Freight',
    text: 'Airport-to-airport, airport-to-door, door-to-door and transit loading, plus cross-docking between two countries and outside Turkey.',
  },
  {
    n: '05', img: img('sea.jpg'), title: 'Sea Freight',
    text: 'Import and export, full container and groupage — port-to-port, port-to-door and door-to-door, standard and special services.',
  },
  {
    n: '06', img: img('hero-multimodal.jpg'), title: 'Intermodal',
    text: 'Multimodal transport through our overseas assistance network, combining several modes to bridge distant production sites.',
  },
  {
    n: '07', img: img('reefer.jpg'), title: 'Domestic Transport',
    text: 'Complete, groupage and dedicated services with a national network in all four corners of Turkey.',
  },
  {
    n: '08', img: img('warehouse.jpg'), title: 'Warehousing & Distribution',
    text: 'Integrated storage, handling, preparation, distribution, palletisation and insurance.',
  },
  {
    n: '09', img: img('warehouse-ext.jpg'), title: 'Customs Clearance',
    text: 'Customs clearance handled as part of an integrated logistics service, tailored to your needs.',
  },
];

// Detailed transport-mode sections (Transport by road / Air / Sea / Intermodal)
export const modes = [
  {
    id: 'road',
    eyebrow: 'Transport by road',
    title: 'Every accessible territory, by road.',
    img: img('curtain-truck.jpg'),
    alt: 'Flatbed truck loaded with pipes in front of a warehouse',
    paragraphs: [
      'As a Turkish and European company, with experienced staff, international transport services with traditional understanding and experience, we deliver to all accessible territories by road.',
      'We provide transit transportation from all European countries to Afghanistan, Uzbekistan, Turkmenistan, Kazakhstan, Iraq, Iran, Georgia, Azerbaijan, Tajikistan and Armenia, and also make low-bed transport to these countries.',
    ],
    chips: ['Agency in Bazargan, Iran', 'Agency at Bandar Abbas port', 'Agency in Turkmenistan', 'Agency in Afghanistan', 'Low-bed transport'],
  },
  {
    id: 'air',
    eyebrow: 'Air freight',
    title: 'Prompt service when it is needed.',
    img: img('air-cargo.jpg'),
    alt: 'Air cargo container being loaded onto an aircraft',
    paragraphs: [
      'In order to provide prompt service when needed, we provide air services. With a wide network of agencies, we offer different solutions all over the world.',
      'Not only airport-to-airport service: we also offer airport-to-door, door-to-door and transit transport loading services, and cross-docking services that occur between two countries and outside of Turkey.',
      'In accordance with customer needs, we also provide integrated storage, handling, preparation, distribution, customs clearance, palletisation and insurance.',
    ],
    chips: ['Airport-to-airport', 'Airport-to-door', 'Door-to-door', 'Transit loading', 'Cross-docking'],
  },
  {
    id: 'sea',
    eyebrow: 'Sea freight',
    title: 'Maritime solutions through a worldwide network.',
    img: img('containers.jpg'),
    alt: 'Shipping containers being lifted by a crane',
    paragraphs: [
      'With our vast network of agencies all over the world, we offer solutions to meet the needs of our customers in maritime transport.',
      'We offer port-to-port, port-to-door and door-to-door, standard and special services, both as a full container and as a groupage.',
    ],
    chips: ['Import', 'Export', 'Full container (FCL)', 'Groupage', 'Port-to-port', 'Port-to-door', 'Door-to-door'],
  },
  {
    id: 'intermodal',
    eyebrow: 'Intermodal transport',
    title: 'Many modes, one journey.',
    img: img('hero-multimodal.jpg'),
    alt: 'Aircraft, container ship and truck combined in one route',
    paragraphs: [
      'The distance of production sites and the growth of production flows around the world are at the origin of many logistical problems.',
      'We address them through our overseas assistance network, using multiple modes of transportation in one service. This is called multimodal transport.',
    ],
    chips: ['Road', 'Sea', 'Air', 'Overseas assistance network'],
  },
];

export const regions = [
  {
    name: 'Europe',
    countries: 'Germany · Denmark · Austria · France · Italy · Switzerland · Netherlands · Belgium · England · Ireland · Sweden · Norway · Romania · Hungary · Poland · Spain · Slovakia · Portugal',
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
    highlight: true,
  },
];

// Domestic transport (Türkiye)
export const domesticCities = ['Istanbul', 'Bursa', 'Izmir', 'Ankara', 'Mersin', 'Gaziantep', 'Trabzon'];

export const cargoTypes = [
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
];

export const specialServices = [
  {
    title: 'Lift trucks & door-to-door delivery',
    img: img('lift-truck.jpg'),
    text: 'Committed to safe shipment, quality and serial transportation with certain delivery times. We adapt the way of transport to your product range and take responsibility for delivery to the end user.',
  },
  {
    title: 'Refrigerated transport',
    img: img('reefer.jpg'),
    text: 'Walls, ceilings, floors and doors of the cargo section are insulated and cooled by a mechanical vapour-compression refrigeration cycle — for meat, poultry, dairy and other heat-sensitive foods.',
  },
  {
    title: 'Container transportation',
    img: img('containers.jpg'),
    text: 'Numerous loads are loaded, stacked and sealed into standard-sized, robust and reusable metal containers.',
  },
  {
    title: 'Low-bed transportation',
    img: img('lowbed.jpg'),
    text: 'Customer-oriented solutions matched to product sizes and weights, so every transfer is made at the most cost-effective rate.',
  },
  {
    title: 'Fair & festival transportation',
    img: img('road-truck2.jpg'),
    text: 'Dedicated special vehicles for fairs and festivals, with expert staff for assembly and disassembly, special equipment for sensitive systems and safe transportation.',
  },
  {
    title: 'Short-term dedicated vehicles, 24/7',
    img: img('road-truck.jpg'),
    text: 'Project-based short-term transport with special vehicles: we meet short-term operational needs around the clock, with vehicles and drivers placed under your control.',
  },
];

export const projectItems = [
  'Reactors', 'Transformers', 'Generators', 'Turbines', 'Convectors', 'Construction equipment', 'Beams',
];

export const history = [
  {
    year: '1900s',
    text: 'With experience passed from father to son, the family began freight transport from Mesopotamia to Baghdad, Amman and Damascus.',
  },
  {
    year: '1996',
    text: 'The DEGER family formed its group of companies: logistics (freight transportation), Mar Tur (tourism) and fuel stations.',
  },
  {
    year: '2018',
    text: 'VİPET offers new solutions from Europe to Asia with a new structure.',
  },
];

export const aboutTags = [
  'Boutique services',
  'Flexible solutions',
  'Customs clearance',
  'Refrigerated transport',
  'Fair & festival logistics',
  '24/7 dedicated vehicles',
];

export const team = [
  {
    name: 'Bekzod Usmanov',
    nameRu: 'Усманов Бекзод Даниярович',
    role: 'General Director',
    photo: img('team-bekzod-usmanov.jpg'),
    phones: [
      { label: '+998 93 548 38 39', tel: '+998935483839' },
      { label: '+998 98 100 31 30', tel: '+998981003130' },
    ],
  },
  {
    name: 'Hasan Yuldashev',
    nameRu: 'Юлдашев Хасан Учкунович',
    role: 'Director',
    photo: img('team-hasan-yuldashev.jpg'),
    phones: [{ label: '+998 99 993 71 62', tel: '+998999937162' }],
  },
];

export const offices = [
  {
    city: 'Tashkent — USM Bekway Logistics',
    address: 'Birlik MFY, 21-mavze, 1-uy, Uchtepa district, Tashkent, Uzbekistan',
    phones: [
      { label: '+998 93 548 38 39', tel: '+998935483839' },
      { label: '+998 98 100 31 30', tel: '+998981003130' },
    ],
    primary: true,
  },
  {
    city: 'Istanbul — Partner office',
    address: 'Tatlısu Mh. Arif Ay Sk. No: 40, MTK Plaza K:1/5, Ümraniye, Istanbul',
    phones: [{ label: '+90 216 594 56 32', tel: '+902165945632' }],
  },
  {
    city: 'Mersin — Partner office',
    address: 'Camişerif Mh. 5248 Sk. Utku Apt. A Blok Kat: 4/16, Akdeniz, Mersin',
    phones: [{ label: '+90 324 239 07 27', tel: '+903242390727' }],
  },
];

export const serviceOptions = [
  'Road freight',
  'Air freight',
  'Sea freight',
  'Intermodal',
  'Project cargo',
  'Domestic transport',
  'Warehousing & distribution',
  'Customs clearance',
];

// E-mail and website from the presentation. Replace when USM Bekway has its own.
export const contactEmail = 'info@vipetlogistics.com';
export const website = 'www.vipetlogistics.com';
export const legalName = '“USM BEKWAY LOGISTICS” MChJ';

// Official company details (requisites)
export const companyDetails = {
  legalName: '“USM BEKWAY LOGISTICS” MChJ',
  address: 'Toshkent shahri, Uchtepa tumani, Birlik MFY, 21-mavze, 1-uy',
  rows: [
    { label: 'Settlement account (H/r)', value: '2020 8000 8074 9658 4001' },
    { label: 'Bank', value: 'O‘zsanoat Qurilish Bank, Yakkasaroy branch' },
    { label: 'MFO (bank code)', value: '00440' },
    { label: 'STIR (TIN)', value: '313 153 245' },
    { label: 'Director', value: 'B.D. Usmanov' },
  ],
};
