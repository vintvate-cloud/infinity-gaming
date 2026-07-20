export type GameCategory = 'singleplayer' | 'twoplayer' | 'fourplayer';

export interface Game {
  id: string;
  title: string;
  genre: string;
  category: GameCategory;
  platform: 'PS5' | 'PC' | 'Both';
  rating: string;
  poster: string;
  description: string;
}

// ── SINGLE PLAYER ────────────────────────────────────────────────
const SP: Game[] = [
  {
    id: 'rdr2', title: 'Red Dead Redemption 2', genre: 'Open World',
    category: 'singleplayer', platform: 'Both', rating: '9.7',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900_2x.jpg',
    description: 'An epic tale of honor and loyalty at the dawn of the modern age.',
  },
  {
    id: 'gta5', title: 'Grand Theft Auto V (GTA V)', genre: 'Open World',
    category: 'singleplayer', platform: 'Both', rating: '9.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900_2x.jpg',
    description: 'The definitive open-world crime epic.',
  },
  {
    id: 'gow', title: 'God of War Ragnarök', genre: 'Action-RPG',
    category: 'singleplayer', platform: 'PS5', rating: '9.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2322010/library_600x900_2x.jpg',
    description: 'Kratos and Atreus journey through the Nine Realms.',
  },
  {
    id: 'uncharted', title: 'Uncharted', genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'PS5', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1659420/library_600x900_2x.jpg',
    description: 'Cinematic adventure across the globe.',
  },
  {
    id: 'ghost', title: 'Ghost of Tsushima', genre: 'Open World',
    category: 'singleplayer', platform: 'PS5', rating: '9.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/library_600x900_2x.jpg',
    description: 'Samurai epic set in feudal Japan.',
  },
  {
    id: 'gtasa_de', title: 'Grand Theft Auto: San Andreas – Definitive Edition', genre: 'Open World',
    category: 'singleplayer', platform: 'Both', rating: '8.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1547000/library_600x900_2x.jpg',
    description: 'The genre-defining classic updated for a new generation.',
  },
  {
    id: 'rev', title: 'Resident Evil Village', genre: 'Survival Horror',
    category: 'singleplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/library_600x900_2x.jpg',
    description: 'Gothic horror in a terrifying village.',
  },
  {
    id: 'spiderman2', title: "Marvel's Spider-Man 2", genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'PS5', rating: '9.6',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2651280/library_600x900_2x.jpg',
    description: 'Peter Parker and Miles Morales return for an epic new adventure.',
  },
  {
    id: 'spiderman1', title: "Marvel's Spider-Man", genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'Both', rating: '9.2',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1817070/library_600x900_2x.jpg',
    description: 'Play as an experienced Peter Parker, fighting big crime in Marvel\'s New York.',
  },
  {
    id: 'miles', title: "Marvel's Spider-Man: Miles Morales", genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'PS5', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1817190/library_600x900_2x.jpg',
    description: 'Miles swings into his own legacy.',
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
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2531310/library_600x900_2x.jpg',
    description: 'A harrowing journey of vengeance.',
  },
  {
    id: 'mw3_camp', title: 'Call of Duty: Modern Warfare III (Campaign)', genre: 'FPS',
    category: 'singleplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2519060/library_600x900_2x.jpg',
    description: 'The singleplayer campaign of Modern Warfare III.',
  },
  {
    id: 'hogwarts', title: 'Hogwarts Legacy', genre: 'Fantasy RPG',
    category: 'singleplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1460300/library_600x900_2x.jpg',
    description: 'Experience Hogwarts in the 1800s. Your legacy is what you make of it.',
  },
  {
    id: 'cyberpunk', title: 'Cyberpunk 2077', genre: 'RPG / Open World',
    category: 'singleplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900_2x.jpg',
    description: 'An open-world action-adventure RPG set in the megacity of Night City.',
  },
  {
    id: 'acshadows', title: "Assassin's Creed Shadows", genre: 'Action-RPG',
    category: 'singleplayer', platform: 'Both', rating: 'TBA',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/3159330/library_600x900_2x.jpg',
    description: 'Live the intertwined stories of Naoe, a shinobi, and Yasuke, a legendary samurai.',
  },
  {
    id: 'acmirage', title: "Assassin's Creed Mirage", genre: 'Action-Adventure',
    category: 'singleplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/3035570/library_600x900_2x.jpg',
    description: 'The story of Basim, a cunning street thief seeking answers in Baghdad.',
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
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/812140/library_600x900_2x.jpg',
    description: 'Epic odyssey through ancient Greece.',
  },
];

// ── 2 PLAYER ─────────────────────────────────────────────────────
const TP: Game[] = [
  {
    id: 'mk1_tp', title: 'Mortal Kombat 1', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1971870/library_600x900_2x.jpg',
    description: 'Liu Kang resets history. All-out brutality.',
  },
  {
    id: 'tek8_tp', title: 'Tekken 8', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1778820/library_600x900_2x.jpg',
    description: 'King of Iron Fist — more brutal than ever.',
  },
  {
    id: 'dbsparking_tp', title: 'Dragon Ball: Sparking! ZERO', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '9.2',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1790600/library_600x900_2x.jpg',
    description: 'Take the legendary gameplay of the Budokai Tenkaichi series to historic levels.',
  },
  {
    id: 'jumpforce_tp', title: 'Jump Force', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '7.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/816020/library_600x900_2x.jpg',
    description: 'Manga\'s most famous heroes are thrown into a whole new battlefield.',
  },
  {
    id: 'sfv_ce', title: 'Street Fighter V: Champion Edition', genre: 'Fighting',
    category: 'twoplayer', platform: 'Both', rating: '8.5',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/310950/library_600x900_2x.jpg',
    description: 'Capcom\'s modern classic fighting game with the complete Champion Edition roster.',
  },
  {
    id: 'wwe2k25_tp', title: 'WWE 2K25', genre: 'Wrestling',
    category: 'twoplayer', platform: 'Both', rating: '8.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2878960/library_600x900_2x.jpg',
    description: 'Face off against your rival in high-stakes head-to-head wrestling matches.',
  },
  {
    id: 'gow_reloaded', title: 'Gears of War: Reloaded', genre: 'Co-op / TPS',
    category: 'twoplayer', platform: 'Both', rating: '8.6',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Gears_of_war_cover_art.jpg',
    description: 'Fight the Locust Horde together in this ultimate co-op campaign.',
  },
  {
    id: 'splitfiction_tp', title: 'Split Fiction', genre: 'Co-op / Adventure',
    category: 'twoplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/3052150/library_600x900_2x.jpg',
    description: 'Hazelight\'s next co-op adventure. Mio and Zoe must work together to escape.',
  },
  {
    id: 'itt_tp', title: 'It Takes Two', genre: 'Co-op',
    category: 'twoplayer', platform: 'Both', rating: '9.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900_2x.jpg',
    description: 'The greatest co-op game ever made.',
  },
  {
    id: 'awayout_tp', title: 'A Way Out', genre: 'Co-op / Adventure',
    category: 'twoplayer', platform: 'Both', rating: '8.9',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/library_600x900_2x.jpg',
    description: 'An exclusive co-op adventure where you play the role of two prisoners making their escape.',
  },
  {
    id: 're5_tp', title: 'Resident Evil 5', genre: 'Co-op / Survival Horror',
    category: 'twoplayer', platform: 'Both', rating: '8.6',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/219640/library_600x900_2x.jpg',
    description: 'Team up with Chris and Sheva to uncover a bioterrorist threat in Africa.',
  },
  {
    id: 'asphalt_tp', title: 'Asphalt Legends', genre: 'Racing',
    category: 'twoplayer', platform: 'Both', rating: '8.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1815780/library_600x900_2x.jpg',
    description: 'Race head-to-head in high-octane splitscreen arcade challenges.',
  },
  {
    id: 'dirt5_tp', title: 'DiRT 5', genre: 'Racing',
    category: 'twoplayer', platform: 'Both', rating: '8.2',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1038360/library_600x900_2x.jpg',
    description: 'Bold off-road racing experience with intense 2-player split-screen battle.',
  },
  {
    id: 'rl_tp', title: 'Rocket League', genre: 'Sports',
    category: 'twoplayer', platform: 'Both', rating: '9.1',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900_2x.jpg',
    description: 'Soccer meets cars — settle the score in intense 1v1 splitscreen matches.',
  },
  {
    id: 'mw3_tp', title: 'Call of Duty: Modern Warfare III', genre: 'FPS',
    category: 'twoplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2519060/library_600x900_2x.jpg',
    description: 'Jump into local split-screen multiplayer matches or cooperative spec ops.',
  },
  {
    id: 'bo2_tp', title: 'Call of Duty: Black Ops II', genre: 'FPS',
    category: 'twoplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/202970/library_600x900_2x.jpg',
    description: 'Settle the rivalry in 1v1 split-screen or play local zombies co-op.',
  },
];

// ── 4 PLAYER ─────────────────────────────────────────────────────
const FP: Game[] = [
  {
    id: 'fc25', title: 'EA Sports FC 25', genre: 'Football',
    category: 'fourplayer', platform: 'Both', rating: '8.3',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2963840/library_600x900_2x.jpg',
    description: 'Play together in Rush, a new 5v5 mode, and lead your club to victory.',
  },
  {
    id: 'wwe2k25', title: 'WWE 2K25', genre: 'Wrestling',
    category: 'fourplayer', platform: 'Both', rating: '8.4',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/2878960/library_600x900_2x.jpg',
    description: 'Step back into the ring with up to 4 players for chaotic local matchups.',
  },
  {
    id: 'bo3', title: 'Call of Duty: Black Ops III', genre: 'FPS',
    category: 'fourplayer', platform: 'Both', rating: '8.8',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/311210/library_600x900_2x.jpg',
    description: '4-player co-op campaign and classic local splitscreen zombies.',
  },
  {
    id: 'bo2', title: 'Call of Duty: Black Ops II', genre: 'FPS',
    category: 'fourplayer', platform: 'Both', rating: '9.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/202970/library_600x900_2x.jpg',
    description: 'Classic Call of Duty local splitscreen action and zombies mode.',
  },
  {
    id: 'asphalt', title: 'Asphalt Legends', genre: 'Racing',
    category: 'fourplayer', platform: 'Both', rating: '8.0',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1815780/library_600x900_2x.jpg',
    description: 'Experience the adrenaline of arcade racing with 4-player splitscreen.',
  },
  {
    id: 'dirt5', title: 'DiRT 5', genre: 'Racing',
    category: 'fourplayer', platform: 'Both', rating: '8.2',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/1038360/library_600x900_2x.jpg',
    description: 'Let Loose in DIRT 5 - the boldest off-road racing experience with 4-player splitscreen.',
  },
  {
    id: 'ctr', title: 'Crash Team Racing Nitro-Fueled (CTR)', genre: 'Racing',
    category: 'fourplayer', platform: 'Both', rating: '9.0',
    poster: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Crash_Team_Racing_Nitro-Fueled_cover_art.jpg',
    description: 'Crash is back in the driver\'s seat! Start your engines with up to 4 players splitscreen.',
  },
  {
    id: 'rl', title: 'Rocket League', genre: 'Sports',
    category: 'fourplayer', platform: 'Both', rating: '9.1',
    poster: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900_2x.jpg',
    description: 'Soccer meets cars — splitscreen and online competitive fun.',
  },
];

export const games: Game[] = [...SP, ...TP, ...FP];

export const categories = [
  { id: 'singleplayer', label: 'Single Player', sub: 'Epic solo adventures',   count: SP.length },
  { id: 'twoplayer',    label: '2 Player',      sub: 'Head-to-head showdowns', count: TP.length },
  { id: 'fourplayer',   label: '4 Player',      sub: 'Splitscreen & co-op action', count: FP.length },
] as const;
