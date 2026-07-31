export interface Building {
  id: string;
  name: string;
  chineseName: string;
  dynasty: string;
  location: string;
  yearBuilt: string;
  type: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: string[];
  images: string[];
  nearby: { name: string; href: string }[];
  travel: {
    visitable: boolean;
    bestSeason: string;
    photoTips: string;
    howToGet: string;
  };
}

export const buildings: Building[] = [
  {
    id: 'forbidden-city',
    name: 'Forbidden City',
    chineseName: 'Zijincheng',
    dynasty: 'Ming-Qing',
    location: 'Beijing',
    yearBuilt: '1406-1420',
    type: 'Palace',
    description: 'The Forbidden City is the largest palace complex in the world, containing 980 buildings across 72 hectares. Built under the Yongle Emperor of the Ming dynasty, it served as the imperial palace for 24 emperors across nearly 500 years. Every aspect of its design — from the orientation to the color scheme to the number of roof beasts — communicates imperial power and cosmic order.',
    sections: [
      { heading: 'Layout & Symbolism', body: 'The palace is laid out on a strict north-south axis, with the most important halls aligned along the central line. The Outer Court (south) housed ceremonial spaces including the Hall of Supreme Harmony, while the Inner Court (north) was the emperor\'s residence. This axial arrangement mirrors the cosmic order, with the emperor positioned at the center of the world.' },
      { heading: 'The Hall of Supreme Harmony', body: 'The largest hall in the complex, used for enthronement ceremonies and imperial weddings. Its double-eaved hip roof — the most prestigious roof form — is covered in yellow-glazed tiles, a color reserved for the emperor. Ten ridge beasts, the maximum permitted, crown its roof ridges.' },
      { heading: 'Construction & Materials', body: 'Built using the standardized modular timber system (cai-fen), the palace incorporates wood from the precious nanmu tree, marble from Fangshan quarries, and specially fired golden bricks from Suzhou. The complex was constructed in just 14 years using an estimated workforce of one million laborers and craftsmen.' }
    ],
    features: ['Largest palace complex in the world (980 buildings)', 'Strict north-south axial layout', 'Yellow-glazed imperial roof tiles', '10 ridge beasts on Hall of Supreme Harmony', 'UNESCO World Heritage Site (1987)'],
    images: [
      '/images/forbidden-city-1.webp',
      '/images/forbidden-city-2.webp'
    ],
    nearby: [
      { name: 'Temple of Heaven', href: '/buildings/temple-of-heaven' },
      { name: 'Summer Palace', href: '/buildings/summer-palace' }
    ],
    travel: {
      visitable: true,
      bestSeason: "April-May or September-October for mild weather",
      photoTips: "Best exterior shots from Jingshan Park at sunrise; interior details in late afternoon golden light",
      howToGet: "Subway Line 1 to Tiananmen East/West; enter through the Meridian Gate"
    }
  },
  {
    id: 'temple-of-heaven',
    name: 'Temple of Heaven',
    chineseName: 'Tiantan',
    dynasty: 'Ming',
    location: 'Beijing',
    yearBuilt: '1420',
    type: 'Temple',
    description: 'The Temple of Heaven is a masterpiece of Ming dynasty religious architecture, where emperors performed annual ceremonies of prayer for good harvests. Its design embodies Chinese cosmological principles: the round Hall of Prayer for Good Harvests represents heaven, while the square base represents earth. The entire complex is arranged to create a ritual journey from the mundane world toward the divine.',
    sections: [
      { heading: 'The Hall of Prayer for Good Harvests', body: 'A triple-gabled circular wooden structure standing 38 meters tall without a single nail. Its three tiers of blue-glazed roof tiles symbolize heaven, and the 28 interior pillars represent the 28 lunar mansions of Chinese astronomy. The hall was rebuilt in 1889 after a lightning strike but faithfully reproduces the Ming original.' },
      { heading: 'The Circular Mound Altar', body: 'An open-air platform of three marble tiers where the emperor performed the winter solstice ceremony. The number of stone slabs in each ring follows multiples of nine — the most yang (masculine, heavenly) number — culminating in 81 slabs in the outermost ring.' },
      { heading: 'Cosmological Design', body: 'Every number and shape in the complex carries symbolic meaning. The round forms represent heaven (tian), the square base represents earth (di). The blue roof tiles match the color of the sky. Even the path the emperor walked — the 360-meter Danbi Bridge — represents the journey from earth to heaven.' }
    ],
    features: ['Triple-gabled circular hall — no nails used', 'Cosmological design: round=heaven, square=earth', '28 pillars = 28 lunar mansions', 'Numbers based on multiples of 9', 'UNESCO World Heritage Site (1998)'],
    images: [
      '/images/temple-of-heaven-1.webp',
      '/images/temple-of-heaven-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city' },
      { name: 'Summer Palace', href: '/buildings/summer-palace' }
    ],
    travel: {
      visitable: true,
      bestSeason: "Early morning in spring when locals practice tai chi in the park",
      photoTips: "Symmetrical front shot from the south approach; blue roof tiles against a clear sky at mid-morning",
      howToGet: "Subway Line 5 to Tiantan Dongmen; enter through the East Gate"
    }
  },
  {
    id: 'great-wall',
    name: 'Great Wall',
    chineseName: 'Changcheng',
    dynasty: 'Ming',
    location: 'Northern China',
    yearBuilt: 'Various (Ming sections: 14th-17th c.)',
    type: 'Fortification',
    description: 'The Great Wall is the world\'s longest defensive structure, stretching over 21,000 kilometers across northern China. While sections date back to the Qin dynasty, the most famous and photogenic segments — including Badaling and Mutianyu near Beijing — were built or rebuilt during the Ming dynasty using brick and stone. The wall is not a single continuous line but a network of walls, watchtowers, beacon towers, and fortresses.',
    sections: [
      { heading: 'Ming Dynasty Construction', body: 'The Ming wall replaced earlier rammed-earth versions with brick and stone facing over a rubble core. Watchtowers were placed at regular intervals (approximately every 500 meters), providing shelter for guards and platforms for signaling. Crenellations on the outer face allowed archers to fire while remaining protected.' },
      { heading: 'Engineering Challenges', body: 'Building across mountains, deserts, and rivers required extraordinary engineering. Workers used local materials where possible: stone in mountainous regions, rammed earth in the Gobi, and brick near the capital. The wall\'s path follows natural ridgelines for maximum defensive advantage, a strategy that also made construction extraordinarily difficult.' },
      { heading: 'The Wall Today', body: 'Only about 8% of the original Ming wall remains in good condition. Sections like Badaling (the most visited) have been heavily restored, while wild sections like Jiankou offer crumbling, overgrown remnants that attract adventurous hikers and photographers.' }
    ],
    features: ['21,000+ km total length across China', 'Ming sections use brick and stone facing', 'Watchtowers every ~500 meters', 'Beacon towers for smoke-signal communication', 'UNESCO World Heritage Site (1987)'],
    images: [
      '/images/great-wall-1.webp',
      '/images/great-wall-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city' }
    ],
    travel: {
      visitable: true,
      bestSeason: "October for autumn foliage; avoid summer weekends and Chinese holidays",
      photoTips: "Mutianyu at sunrise for golden light; Badaling for mountain backdrop; Jiankou for adventurous shots",
      howToGet: "Mutianyu: 2hr drive from Beijing; Badaling: S2 train from Beijing North Station"
    }
  },
  {
    id: 'foguang-temple',
    name: 'Foguang Temple',
    chineseName: 'Foguangsi',
    dynasty: 'Tang',
    location: 'Shanxi Province',
    yearBuilt: '857 CE (East Hall)',
    type: 'Buddhist Temple',
    description: 'Foguang Temple houses the second-oldest surviving timber-frame building in China — the East Hall, dated to 857 CE during the Tang dynasty. Discovered by the architectural historian Liang Sicheng in 1937, this remote mountain temple preserves the bold, powerful proportions that define Tang architecture. Its survival through 1,100 years of earthquakes and wars testifies to the extraordinary durability of Chinese timber construction.',
    sections: [
      { heading: 'The East Hall', body: 'The main hall is a seven-bay-wide structure with a single-eave hip roof — the most prestigious form. Its dougong brackets are massive and primarily structural, characteristic of Tang style before they became smaller and more decorative in later dynasties. The roof\'s gentle slope and deep overhanging eaves create the bold silhouette that defines Tang architecture.' },
      { heading: 'Discovery by Liang Sicheng', body: 'For centuries, architectural historians believed no Tang dynasty buildings survived above ground. In 1937, Liang Sicheng and his wife Lin Huiyin — China\'s pioneering architectural historians — identified the East Hall through a faint inscription on a beam. Their discovery revolutionized understanding of early Chinese architecture.' },
      { heading: 'Interior Treasures', body: 'The hall contains Tang dynasty sculptures, murals, and inscriptions alongside its architecture — a rare complete survival. The main altar features statues of Buddha, bodhisattvas, and disciples, with a donor portrait of a woman named Ning Gongyu whose patronage funded the hall.' }
    ],
    features: ['Second-oldest timber building in China (857 CE)', 'Seven-bay Tang hall with hip roof', 'Massive structural dougong brackets', 'Original Tang sculptures and murals inside', 'Discovered by Liang Sicheng in 1937'],
    images: [
      '/images/foguang-temple-1.webp',
      '/images/foguang-temple-2.webp'
    ],
    nearby: [
      { name: 'Yingxian Pagoda', href: '/buildings/yingxian-pagoda' }
    ],
    travel: {
      visitable: true,
      bestSeason: "May-June or September for comfortable mountain temperatures",
      photoTips: "East Hall's dougong best captured from low angle; morning light on front facade",
      howToGet: "2.5hr drive from Taiyuan; combine with Nanchan Temple; limited public transport"
    }
  },
  {
    id: 'yingxian-pagoda',
    name: 'Yingxian Pagoda',
    chineseName: 'Yingxian Muta',
    dynasty: 'Liao',
    location: 'Shanxi Province',
    yearBuilt: '1056 CE',
    type: 'Pagoda',
    description: 'The Yingxian Pagoda is the oldest and tallest surviving all-wood pagoda in the world. Standing 67 meters tall with no metal fasteners, it was built during the Liao dynasty. Its 54 different types of dougong brackets — more variety than any other building — make it a living encyclopedia of Chinese bracket construction. Despite surviving 40 earthquakes and numerous wars, the pagoda stands today as a testament to the genius of Chinese wooden architecture.',
    sections: [
      { heading: 'Structural Innovation', body: 'The pagoda\'s octagonal plan distributes lateral forces evenly, while the interlocking timber frame allows the structure to flex during earthquakes. The five visible stories conceal four additional internal structural levels, creating a rigid yet resilient framework that has withstood nearly 1,000 years of seismic activity.' },
       { heading: 'The Dougong Encyclopedia', body: 'With 54 different dougong bracket types across its levels, the pagoda displays more variety than any other single structure. Each bracket type serves a specific structural or aesthetic purpose, making the pagoda an invaluable reference for understanding the evolution of Chinese bracket systems.' },
        { heading: 'Historical Context', body: 'Built in 1056 CE during the Liao dynasty, the Yingxian Pagoda was commissioned by Emperor Daozong as part of a Buddhist temple complex honoring his father. The Liao, a Khitan-ruled dynasty that controlled northern China, were devout Buddhists who invested heavily in temple construction. The pagoda\'s location in Yingxian County, near the strategic Yanmenguan Pass, placed it at the intersection of Han Chinese and nomadic cultures — a context reflected in its architectural synthesis of Chinese timber techniques with Liao Buddhist patronage.' },
       { heading: 'Conservation Challenges', body: 'Despite surviving 40 major earthquakes, the pagoda faces significant conservation challenges. The structure has developed a noticeable tilt — leaning approximately 3 degrees from vertical at its upper levels — caused by uneven foundation settlement and centuries of wind load from the northwest. Since the 1990s, Chinese heritage authorities have undertaken extensive studies to stabilize the pagoda without disassembling it, a delicate process given the nail-free construction. The pagoda is not currently open for interior visits, but the exterior and the surrounding temple complex are accessible to the public.' }
     ],
    features: ['Oldest all-wood pagoda in the world (1056 CE)', '67 meters tall — 5 visible + 4 hidden stories', '54 different dougong bracket types', 'No metal fasteners used', 'Survived 40+ earthquakes'],
    images: [
      '/images/yingxian-pagoda-1.webp',
      '/images/yingxian-pagoda-2.webp'
    ],
    nearby: [
      { name: 'Foguang Temple', href: '/buildings/foguang-temple' }
    ],
    travel: {
      visitable: true,
      bestSeason: "Spring for blooming apricot trees; autumn for golden ginkgo leaves",
      photoTips: "Best exterior from southeast corner of the square at golden hour",
      howToGet: "1.5hr drive from Datong; train to Yingxian station then taxi"
    }
  },
  {
    id: 'summer-palace',
    name: 'Summer Palace',
    chineseName: 'Yiheyuan',
    dynasty: 'Qing',
    location: 'Beijing',
    yearBuilt: '1750 (rebuilt 1886)',
    type: 'Imperial Garden',
    description: 'The Summer Palace is China\'s largest and best-preserved imperial garden, combining natural landscape with masterful architecture. Built around Kunming Lake and Longevity Hill, it represents the pinnacle of Chinese garden design — where architecture, water, hills, and vegetation are composed as a unified artistic whole. The Empress Dowager Cixi famously diverted naval funds to rebuild it in 1886.',
    sections: [
      { heading: 'The Long Corridor', body: 'A covered walkway stretching 728 meters along the lakeshore, decorated with over 14,000 paintings depicting Chinese landscapes, legends, and historical scenes. It is the longest painted corridor in the world and a UNESCO-recognized masterpiece of garden architecture.' },
      { heading: 'The Marble Boat', body: 'A two-story pavilion built to resemble a Western-style paddle steamer, constructed entirely of marble and wood. Built by Empress Dowager Cixi using funds originally allocated for the imperial navy, it has become a symbol of Qing dynasty extravagance.' }
    ],
    features: ['Largest imperial garden in China', '728m Long Corridor — longest painted gallery', 'Harmonious mountain-water architecture', 'Marble Boat — Qing extravagance symbol', 'UNESCO World Heritage Site (1998)'],
    images: [
      '/images/summer-palace-1.webp',
      '/images/summer-palace-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city' },
      { name: 'Temple of Heaven', href: '/buildings/temple-of-heaven' }
    ],
    travel: {
      visitable: true,
      bestSeason: "Summer for lush gardens and lotus; winter for snow-dusted pavilions",
      photoTips: "Long Corridor for framed compositions; sunset behind 17-Arch Bridge on Kunming Lake",
      howToGet: "Subway Line 4 to Beigongmen; enter from East Gate for dramatic first view"
    }
  }
];
