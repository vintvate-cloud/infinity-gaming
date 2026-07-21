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
    id: 'pool',
    title: 'Pool Table',
    emoji: '🎱',
    highlight: true,
    tiers: [
      { label: '1 Hour', price: '₹150', unit: 'per hour' },
    ],
    note: 'Professional slate tables, cues included',
  },
  {
    id: 'racing',
    title: 'Racing Simulator',
    emoji: '🏎️',
    tiers: [
      { label: '1 Hour', price: '₹300', unit: 'per hour' },
    ],
    note: 'Full motion sim rig with force feedback wheel & gearbox',
  },
];
