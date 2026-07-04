export type GameCategory = 'singleplayer' | 'multiplayer' | 'twoplayer';

export interface Game {
  id: string; title: string; genre: string;
  category: GameCategory; poster: string;
  platform: 'PS5' | 'PC' | 'Both'; rating: string; description: string;
}

// ── SINGLE PLAYER ────────────────────────────────────────────────
const SP: Game[] = [
  {
    id: 'gta5', title: 'GTA V', genre: 'Open World',
    category: 'singleplayer', platform: 'Both', rating: '9.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900_2x.jpg',
    description: 'The definitive open-world crime epic.',
  },
  {
    id: 'miles', title: 'Spider-Man: Miles Morales', genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'PS5', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1817070/library_600x900_2x.jpg',
    description: 'Miles swings into his own legacy.',
  },
  {
    id: 'uncharted', title: 'Uncharted: Legacy of Thieves', genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'PS5', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1659420/library_600x900_2x.jpg',
    description: 'Cinematic adventure across the globe.',
  },
  {
    id: 'gow', title: 'God of War Ragnarök', genre: 'Action-RPG',
    category: 'singleplayer', platform: 'PS5', rating: '9.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2322010/library_600x900_2x.jpg',
    description: 'Kratos and Atreus journey through the Nine Realms.',
  },
  {
    id: 'acv', title: "Assassin's Creed Valhalla", genre: 'Action-RPG',
    category: 'singleplayer', platform: 'Both', rating: '8.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2208920/library_600x900_2x.jpg',
    description: 'Lead a Viking clan across England.',
  },
  {
    id: 'aco', title: "Assassin's Creed Odyssey", genre: 'Action-RPG',
    category: 'singleplayer', platform: 'Both', rating: '8.6',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/882930/library_600x900_2x.jpg',
    description: 'Epic odyssey through ancient Greece.',
  },
  {
    id: 'tlou1', title: 'The Last of Us Part I', genre: 'Survival Drama',
    category: 'singleplayer', platform: 'PS5', rating: '9.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/library_600x900_2x.jpg',
    description: 'A groundbreaking story of survival.',
  },
  {
    id: 'tlou2', title: 'The Last of Us Part II', genre: 'Survival Drama',
    category: 'singleplayer', platform: 'PS5', rating: '9.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg',
    description: 'A harrowing journey of vengeance.',
  },
  {
    id: 'ghost', title: 'Ghost of Tsushima', genre: 'Open World',
    category: 'singleplayer', platform: 'PS5', rating: '9.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/library_600x900_2x.jpg',
    description: 'Samurai epic set in feudal Japan.',
  },
  {
    id: 'yotei', title: 'Ghost of Yōtei', genre: 'Open World',
    category: 'singleplayer', platform: 'PS5', rating: '9.6',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/library_600x900_2x.jpg',
    description: 'The next chapter of Sucker Punch\'s samurai saga.',
  },
  {
    id: 'mw2019', title: 'Call of Duty: Modern Warfare', genre: 'FPS',
    category: 'singleplayer', platform: 'Both', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2000950/library_600x900_2x.jpg',
    description: 'The reboot that redefined modern FPS.',
  },
  {
    id: 'mw3', title: 'Call of Duty: MW III', genre: 'FPS',
    category: 'singleplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2519060/library_600x900_2x.jpg',
    description: 'The most ambitious Call of Duty yet.',
  },
  {
    id: 'rev', title: 'Resident Evil Village', genre: 'Survival Horror',
    category: 'singleplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/library_600x900_2x.jpg',
    description: 'Gothic horror in a terrifying village.',
  },
  {
    id: 'wsm2', title: 'Warhammer: Space Marine 2', genre: 'Third-Person Shooter',
    category: 'singleplayer', platform: 'Both', rating: '8.7',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2183900/library_600x900_2x.jpg',
    description: 'Annihilate the alien swarm. For the Emperor.',
  },
];

// ── 2 PLAYER ────────────────────────────────────────────────────
const TP: Game[] = [
  {
    id: 'fifa24', title: 'EA Sports FC 24', genre: 'Football',
    category: 'twoplayer', platform: 'Both', rating: '8.2',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/library_600x900_2x.jpg',
    description: 'The world\'s most popular football simulation.',
  },
  {
    id: 'wwe24', title: 'WWE 2K24', genre: 'Wrestling',
    category: 'twoplayer', platform: 'Both', rating: '8.1',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2394660/library_600x900_2x.jpg',
    description: 'Step into the ring — settle it like champions.',
  },
  {
    id: 'mk1', title: 'Mortal Kombat 1', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1971870/library_600x900_2x.jpg',
    description: 'Liu Kang resets history. All-out brutality.',
  },
  {
    id: 'tek8', title: 'Tekken 8', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1778820/library_600x900_2x.jpg',
    description: 'King of Iron Fist — more brutal than ever.',
  },
  {
    id: 'sf6', title: 'Street Fighter 6', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '9.1',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1794680/library_600x900_2x.jpg',
    description: 'The greatest fighting game ever made.',
  },
  {
    id: 'itt', title: 'It Takes Two', genre: 'Co-op',
    category: 'twoplayer', platform: 'Both', rating: '9.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900_2x.jpg',
    description: 'The greatest co-op game ever made.',
  },
  {
    id: 'mkxl', title: 'Mortal Kombat XL', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '8.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/307780/library_600x900_2x.jpg',
    description: 'The complete brutal package — all DLC included.',
  },
  {
    id: 'ufc5', title: 'EA Sports UFC 5', genre: 'MMA Fighting',
    category: 'twoplayer', platform: 'PS5', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2394660/header.jpg',
    description: 'The most realistic MMA simulation.',
  },
];

// ── MULTIPLAYER ──────────────────────────────────────────────────
const MP: Game[] = [
  {
    id: 'warzone', title: 'Call of Duty: Warzone', genre: 'Battle Royale',
    category: 'multiplayer', platform: 'Both', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1962660/library_600x900_2x.jpg',
    description: '150-player squad warfare with no mercy.',
  },
  {
    id: 'fortnite', title: 'Fortnite', genre: 'Battle Royale',
    category: 'multiplayer', platform: 'Both', rating: '8.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg',
    description: 'The cultural phenomenon battle royale.',
  },
  {
    id: 'apex', title: 'Apex Legends', genre: 'Battle Royale',
    category: 'multiplayer', platform: 'Both', rating: '8.7',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/library_600x900_2x.jpg',
    description: 'Fast-paced legend-based battle royale.',
  },
  {
    id: 'valorant', title: 'Valorant', genre: 'Tactical FPS',
    category: 'multiplayer', platform: 'PC', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
    description: 'Riot\'s ultra-precise 5v5 tactical shooter.',
  },
  {
    id: 'cs2', title: 'Counter-Strike 2', genre: 'Tactical FPS',
    category: 'multiplayer', platform: 'PC', rating: '8.9',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/730/library_600x900_2x.jpg',
    description: 'The gold standard of competitive shooters.',
  },
  {
    id: 'pubg', title: 'PUBG: Battlegrounds', genre: 'Battle Royale',
    category: 'multiplayer', platform: 'PC', rating: '8.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/library_600x900_2x.jpg',
    description: 'The original battle royale — still the best.',
  },
  {
    id: 'rl', title: 'Rocket League', genre: 'Sports',
    category: 'multiplayer', platform: 'Both', rating: '9.1',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900_2x.jpg',
    description: 'Soccer meets cars — impossibly addictive.',
  },
  {
    id: 'ow2', title: 'Overwatch 2', genre: 'Hero Shooter',
    category: 'multiplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2357570/library_600x900_2x.jpg',
    description: 'Team-based hero action reimagined.',
  },
];

export const games: Game[] = [...SP, ...TP, ...MP];

export const categories = [
  { id: 'singleplayer', label: 'Single Player', sub: 'Epic solo adventures',   count: SP.length },
  { id: 'twoplayer',    label: '2 Player',      sub: 'Head-to-head showdowns', count: TP.length },
  { id: 'multiplayer',  label: 'Multiplayer',   sub: 'Online battlegrounds',    count: MP.length },
] as const;
