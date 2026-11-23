import { img } from '../assetPath.js';

// Language-independent data: images, phone numbers, ids and form values.
// All visible text lives in src/i18n/locales/<lang>.js and is matched by index.

export const navLinks = [
  { href: '#services', key: 'services' },
  { href: '#modes', key: 'transport' },
  { href: '#domestic', key: 'domestic' },
  { href: '#project', key: 'project' },
  { href: '#about', key: 'about' },
  { href: '#team', key: 'team' },
  { href: '#contact', key: 'contact' },
];

// Same order as services.items in the locale files
export const serviceImages = [
  img('road-truck.jpg'),
  img('road-truck2.jpg'),
  img('project.jpg'),
  img('air-cargo.jpg'),
  img('sea.jpg'),
  img('hero-multimodal.jpg'),
  img('reefer.jpg'),
  img('warehouse.jpg'),
  img('warehouse-ext.jpg'),
];

// Same order as modes.items
export const modeMeta = [
  { id: 'road', img: img('curtain-truck.jpg') },
  { id: 'air', img: img('air-cargo.jpg') },
  { id: 'sea', img: img('containers.jpg') },
  { id: 'intermodal', img: img('hero-multimodal.jpg') },
];

// Same order as domestic.special
export const specialImages = [
  img('lift-truck.jpg'),
  img('reefer.jpg'),
  img('containers.jpg'),
  img('lowbed.jpg'),
  img('road-truck2.jpg'),
  img('road-truck.jpg'),
];

// Index of the highlighted region in coverage.regions
export const highlightedRegion = 2;

// Same order as team.members
export const teamMeta = [
  {
    nameNative: 'Усманов Бекзод Даниярович',
    photo: img('team-bekzod-usmanov.jpg'),
    phones: [
      { label: '+998 93 548 38 39', tel: '+998935483839' },
      { label: '+998 98 100 31 30', tel: '+998981003130' },
    ],
  },
  {
    nameNative: 'Юлдашев Хасан Учкунович',
    photo: img('team-hasan-yuldashev.jpg'),
    phones: [{ label: '+998 99 993 71 62', tel: '+998999937162' }],
  },
];

// Same order as contact.offices
export const officePhones = [
  [
    { label: '+998 93 548 38 39', tel: '+998935483839' },
    { label: '+998 98 100 31 30', tel: '+998981003130' },
  ],
  [{ label: '+90 216 594 56 32', tel: '+902165945632' }],
  [{ label: '+90 324 239 07 27', tel: '+903242390727' }],
];

// Values sent to the backend (must match backend/app/schemas.py ServiceType).
// Labels come from form.services in the locale files.
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
