export interface PricingTier {
  label: string;
  price: string;
  unit: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  emoji: string;
  tiers: PricingTier[];
  note?: string;
  highlight?: boolean;
}

export const pricing: PricingCategory[] = [
  {
    id: 'ps5',
    title: 'PS5 Gaming',
    emoji: '🎮',
    highlight: true,
    tiers: [
      { label: '1 Player',  price: '₹100', unit: 'per hour' },
      { label: '2 Players', price: '₹150', unit: 'per hour' },
      { label: '3 Players', price: '₹200', unit: 'per hour' },
      { label: '4 Players', price: '₹250', unit: 'per hour' },
    ],
  },
  {
    id: 'pc',
    title: 'PC Gaming',
    emoji: '💻',
    tiers: [
      { label: '1 Hour', price: '₹100', unit: 'per hour' },
    ],
  },
  {
    id: 'racing',
    title: 'Racing Simulator',
    emoji: '🏎️',
    tiers: [
      { label: '1 Hour', price: '₹300', unit: 'per hour' },
    ],
    note: 'Full motion sim rig with force feedback wheel',
  },
  {
    id: 'vr',
    title: 'VR Cricket',
    emoji: '🏏',
    tiers: [
      { label: '15 Minutes', price: '₹100', unit: 'flat' },
      { label: '1 Hour',     price: '₹300', unit: 'flat' },
    ],
    note: 'Full immersive VR cricket experience',
  },
  {
    id: 'pool',
    title: 'Pool Table',
    emoji: '🎱',
    tiers: [
      { label: '1 Hour', price: '₹150', unit: 'per hour' },
    ],
    note: 'Professional slate tables, cues included',
  },
  {
    id: 'private',
    title: 'Gaming Room',
    emoji: '🚪',
    tiers: [
      { label: '1 Hour', price: '₹300', unit: 'per hour' },
    ],
    note: 'Private room — full surround sound, up to 8 people',
    highlight: true,
  },
  {
    id: 'movie',
    title: 'Movie Screening',
    emoji: '🎬',
    tiers: [
      { label: 'Per Film', price: '₹500', unit: 'flat rate' },
    ],
    note: 'Big screen, surround audio, any film you want',
  },
];
