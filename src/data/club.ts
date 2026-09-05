/** Single source of truth for club details used across the site. */
export const club = {
  name: 'Swale Chess Club',
  tagline: 'Chess in Sittingbourne for everyone, from novice to expert',
  venue: {
    name: 'The Artisan Room',
    building: 'Central House',
    street: 'Central Avenue',
    town: 'Sittingbourne',
    county: 'Kent',
    postcode: 'ME10 4NU',
  },
  meets: {
    day: 'Thursday',
    time: '7.40pm',
    summary: 'Thursdays from 7.40pm',
    note: 'The club is closed throughout August.',
  },
  contact: {
    email: 'info@swalechessclub.co.uk',
    phone: '07724 273157',
    phoneHref: 'tel:+447724273157',
    facebook: 'https://www.facebook.com/groups/497290421830431',
  },
  membership: {
    annualFee: '£96',
    includes: 'Bronze registration with the ECF',
  },
} as const;

export const fullAddress = [
  club.venue.name,
  club.venue.building,
  club.venue.street,
  club.venue.town,
  club.venue.county,
  club.venue.postcode,
].join(', ');

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news/' },
  { label: 'Juniors', href: '/juniors/' },
  { label: 'Puzzles', href: '/puzzles/' },
  { label: 'Tournaments', href: '/tournaments/' },
] as const;

/** Rendered as the highlighted button at the end of the header nav. */
export const navCta = { label: 'Join us', href: '/join/' } as const;

export const congresses = [
  {
    name: 'Medway FIDE-rated Congress',
    dates: 'Friday 25th – Sunday 27th September 2026',
    dayRange: '25–27',
    monthYear: 'September 2026',
    venue: 'Chatham Masonic Hall, 5 Manor Road, Chatham, Kent ME4 6AU',
    format:
      'FIDE- and ECF-rated standardplay, 5 rounds of 90 minutes + 30 seconds per move. Sections: Open, U1800 (both FIDE and ECF rated) and U1400 (ECF rated only).',
    href: 'https://www.invictachess.co.uk/medway.html',
    startDate: '2026-09-25',
  },
  {
    name: '54th Thanet FIDE Chess Congress',
    dates: 'Friday 9th – Sunday 11th October 2026',
    dayRange: '9–11',
    monthYear: 'October 2026',
    venue: 'Baypoint Sports Club, Ramsgate Road, Sandwich, Kent CT13 9QL',
    format:
      'Five-round Swiss, 90 minutes + 30 seconds increment from the start. Sections: Open and U1800 (ECF & FIDE rated), U1550 (ECF rated).',
    href: 'https://www.congress.org.uk/congress/815/home',
    startDate: '2026-10-09',
  },
] as const;
