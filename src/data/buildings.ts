export interface Building {
  id: string;
  name: string;
  chineseName: string;
  dynasty: string;
  location: string;
  yearBuilt: string;
  type: string;
  seoTitle?: string;
  seoDescription?: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: string[];
  keyDates: { year: string; event: string }[];
  faq: { q: string; a: string }[];
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
      { heading: 'Layout & Symbolism', body: "The palace is laid out on a strict north-south axis, with the most important halls aligned along the central line. The Outer Court (south) housed ceremonial spaces including the Hall of Supreme Harmony, while the Inner Court (north) was the emperor's residence. This axial arrangement mirrors the cosmic order, with the emperor positioned at the center of the world.\n\nThe central axis runs 960 meters from the Meridian Gate to the Gate of Divine Prowess, and extends conceptually beyond the walls to Tiananmen Gate in the south and Jingshan Hill in the north. The Outer Court's three great halls — Supreme Harmony, Middle Harmony, and Preserving Harmony — sit on a three-tiered marble platform 8 meters high, their stepped terraces forming a pyramid of architectural authority. Behind them, the Inner Court's three palaces (Qianqing, Jiaotai, Kunning) formed the private imperial household, each separated by walls and gates that controlled access layer by layer." },
      { heading: 'The Hall of Supreme Harmony', body: 'The largest hall in the complex, used for enthronement ceremonies and imperial weddings. Its double-eaved hip roof — the most prestigious roof form — is covered in yellow-glazed tiles, a color reserved for the emperor. Ten ridge beasts, the maximum permitted, crown its roof ridges.\n\nThe hall rises 35 meters above its marble terrace — the tallest building in old Beijing, deliberately exceeding nothing else within the city walls. Its 11-bay facade is the widest permitted by the building codes, and the interior is floored with 4,718 square meters of "golden bricks" (jinzhuan) fired in Suzhou, whose dense, dark surface took 729 days to produce per batch. During ceremonies, 10,000 courtiers knelt in the courtyard below while the emperor sat alone on the dragon throne — the spatial arrangement itself was the instrument of power.' },
      { heading: 'Construction & Materials', body: 'Built using the standardized modular timber system (cai-fen), the palace incorporates wood from the precious nanmu tree, marble from Fangshan quarries, and specially fired golden bricks from Suzhou. The complex was constructed in just 14 years using an estimated workforce of one million laborers and craftsmen.\n\nNanmu timber was felled in the forests of Sichuan, Guizhou, and Yunnan — up to 3,000 kilometers away — and floated down the Yangtze and Grand Canal to Beijing, a supply chain that took years per shipment. The Fangshan marble for the three-tiered terraces was quarried 30 kilometers away and dragged over ice roads in winter. That the entire complex rose in 14 years (1406-1420) testifies to the modular system: columns, beams, and brackets were prefabricated in workshops across the empire, then assembled on site like a giant kit.' }
    ],
    features: ['Largest palace complex in the world (980 buildings)', 'Strict north-south axial layout', 'Yellow-glazed imperial roof tiles', '10 ridge beasts on Hall of Supreme Harmony', 'UNESCO World Heritage Site (1987)'],
    keyDates: [
      { year: '1406', event: 'Construction begins under the Yongle Emperor with a workforce of up to one million' },
      { year: '1420', event: 'Completion: 980 buildings across 72 hectares' },
      { year: '1925', event: 'Opens to the public as the Palace Museum' },
      { year: '1987', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'Do I need to book tickets in advance for the Forbidden City?', a: "Yes — tickets require real-name advance booking and daily capacity is strictly limited. During national holidays tickets often sell out days ahead, so book online as early as possible and carry your passport for entry." },
      { q: 'How long should I spend inside the Forbidden City?', a: "Most visitors need 3-4 hours to walk the central axis (Meridian Gate to the Imperial Garden). History enthusiasts can easily spend a full day exploring the side halls and museums — allow extra time on weekdays when crowds are smaller." },
      { q: 'Which entrance should I use?', a: "Entry is one-way: enter from the south (Meridian Gate, near Tiananmen Square) and exit from the north (Gate of Divine Prowess). From the north exit you can walk directly to Jingshan Park for the classic elevated view of the palace." }
    ],
    images: [
      '/images/forbidden-city-1.webp',
      '/images/forbidden-city-2.webp'
    ],
    nearby: [
      { name: 'Temple of Heaven', href: '/buildings/temple-of-heaven/' },
      { name: 'Summer Palace', href: '/buildings/summer-palace/' }
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
    description: 'The Temple of Heaven is the largest and most complete ritual complex surviving in China — a 273-hectare park where Ming and Qing emperors performed annual ceremonies to pray for good harvests. Its design encodes cosmology in every dimension: the round Hall of Prayer for Good Harvests rises 38 meters without a single nail, its 28 interior pillars standing for the 28 lunar mansions; the Circular Mound Altar is built so every stone slab follows multiples of nine, the most yang number in Chinese numerology. The entire complex is arranged as a ritual journey — the emperor\'s slow procession from the mundane city to the heart of heaven itself.',
    sections: [
      { heading: 'The Hall of Prayer for Good Harvests', body: "A triple-gabled circular wooden structure standing 38 meters tall without a single nail. Its three tiers of blue-glazed roof tiles symbolize heaven, and the 28 interior pillars represent the 28 lunar mansions of Chinese astronomy. The hall was rebuilt in 1889 after a lightning strike but faithfully reproduces the Ming original.\n\nThe 28 columns carry the load in three concentric rings: four central dragon columns, 19.2 meters high and nearly a meter in circumference, represent the four seasons; 12 inner columns represent the 12 months; and 12 outer columns represent the 12 double-hours of the day. The hall's double eave structure means the outer ring of columns supports only the lowest eave — a sophisticated load distribution that lets the tower's proportions narrow elegantly as it rises. All joints are mortise-and-tenon; the structure flexes, which is why it has survived 500 years of earthquakes." },
      { heading: 'The Circular Mound Altar', body: "An open-air platform of three marble tiers where the emperor performed the winter solstice ceremony. The number of stone slabs in each ring follows multiples of nine — the most yang (masculine, heavenly) number — culminating in 81 slabs in the outermost ring.\n\nEvery dimension of the altar repeats the same numerology: the innermost ring has 9 slabs, the next 18, and so on through nine rings to 81; the balustrade posts also number 360, matching the degrees of a circle. At the exact center lies the Heart of Heaven Stone — a single circular slab where a spoken word returns as an unusually resonant echo, the emperor's voice amplified by the surrounding concentric walls as if heaven itself answered." },
      { heading: 'Cosmological Design', body: "Every number and shape in the complex carries symbolic meaning. The round forms represent heaven (tian), the square base represents earth (di). The blue roof tiles match the color of the sky. Even the path the emperor walked — the 360-meter Danbi Bridge — represents the journey from earth to heaven.\n\nThe Danbi Bridge rises 4 meters from south to north, so the emperor climbed gradually as he approached the altar, leaving the mundane city behind. The complex walls are round on the north side (heaven) and square on the south (earth), and the whole park is laid out so that the north, the emperor's seat of power, is ritually superior. The design is not decoration — it is a machine for staging the most important ritual in the Chinese state." }
    ],
    features: ['Triple-gabled circular hall — no nails used', 'Cosmological design: round=heaven, square=earth', '28 pillars = 28 lunar mansions', 'Numbers based on multiples of 9', 'UNESCO World Heritage Site (1998)'],
    keyDates: [
      { year: '1420', event: 'Built by the Yongle Emperor, the same year the Forbidden City was completed' },
      { year: '1530', event: 'Circular Mound Altar rebuilt by the Jiajing Emperor' },
      { year: '1889', event: 'Hall of Prayer rebuilt after a lightning fire, faithful to the Ming original' },
      { year: '1998', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'Why is the Hall of Prayer for Good Harvests round?', a: "The circular hall symbolizes heaven (tian), while its square marble base symbolizes earth (di). The blue-glazed roof tiles match the color of the sky, and every dimension follows multiples of nine — the most heavenly number in Chinese numerology." },
      { q: 'What is the best time to visit the Temple of Heaven?', a: "Early morning, when Beijing residents practice tai chi and sing opera in the park — the temple grounds are also a public park. Spring (April-May) offers the best weather, while autumn brings golden light for photography." },
      { q: 'How many pillars are inside the Hall of Prayer?', a: "28 pillars: the four central dragon columns represent the four seasons, 12 inner columns represent the 12 months, and 12 outer columns represent the 12 double-hours of the day — together symbolizing the 28 lunar mansions of Chinese astronomy." }
    ],
    images: [
      '/images/temple-of-heaven-1.webp',
      '/images/temple-of-heaven-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city/' },
      { name: 'Summer Palace', href: '/buildings/summer-palace/' }
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
      { heading: 'Ming Dynasty Construction', body: 'The Ming wall replaced earlier rammed-earth versions with brick and stone facing over a rubble core. Watchtowers were placed at regular intervals (approximately every 500 meters), providing shelter for guards and platforms for signaling. Crenellations on the outer face allowed archers to fire while remaining protected.\n\nMing builders standardized the profile: a wall base roughly 6 meters wide, a top 4-5 meters wide, and a height of 7-8 meters — wide enough for five horsemen or ten soldiers to march abreast. The facing bricks were fired in nearby kilns, and the rubble-and-earth core was compacted in layers. At the base, builders in wet regions used a mortar of lime and sticky rice paste (a mixture modern engineers tested in 2009 and found as strong as some modern concretes), which is why many Ming sections still stand where earlier walls crumbled.' },
      { heading: 'Engineering Challenges', body: 'Building across mountains, deserts, and rivers required extraordinary engineering. Workers used local materials where possible: stone in mountainous regions, rammed earth in the Gobi, and brick near the capital. The wall\'s path follows natural ridgelines for maximum defensive advantage, a strategy that also made construction extraordinarily difficult.\n\nOn steep passes the builders stepped the wall like giant stairs, and where the ridge dropped away, they raised the outer face high enough to prevent attackers from climbing over. Water management was equally demanding: drainage gaps (gully arches) in the wall body let mountain streams pass through rather than breach the structure, and the crenellated parapet — merlons and crenels — gave archers cover while leaving clear sightlines down the slopes.' },
      { heading: 'The Wall Today', body: 'Only about 8% of the original Ming wall remains in good condition. Sections like Badaling (the most visited) have been heavily restored, while wild sections like Jiankou offer crumbling, overgrown remnants that attract adventurous hikers and photographers.\n\nThe scale is often understated: the 2012 official survey measured the entire network at 21,196.18 kilometers — more than half the Earth\'s circumference — including 43,721 watchtower sites identified along its branches. Restoration continues at famous sections like Mutianyu and Jiankou, where conservation teams rebuild collapsed parapets with traditional lime-and-brick techniques rather than modern concrete.' }
    ],
    features: ['21,000+ km total length across China', 'Ming sections use brick and stone facing', 'Watchtowers every ~500 meters', 'Beacon towers for smoke-signal communication', 'UNESCO World Heritage Site (1987)'],
    keyDates: [
      { year: 'c. 221 BCE', event: 'Qin Shi Huang links earlier walls into a continuous frontier defense' },
      { year: '1368-1644', event: 'Ming dynasty rebuilds the wall in brick and stone — the sections seen today' },
      { year: '2012', event: 'Official survey measures the full network at 21,196.18 km' },
      { year: '1987', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'Which section of the Great Wall is best for a first visit?', a: "Mutianyu combines spectacular scenery with cable cars and a toboggan ride, Badaling is the most accessible with the best facilities, and Jinshanling offers the most photogenic unrestored sections for hikers. All three are reachable on a day trip from Beijing." },
      { q: 'How long is the Great Wall really?', a: "The 2012 official survey measured the complete network at 21,196.18 kilometers — including every branch and overlap built across 2,000 years of dynasties, not just the Ming-era wall tourists usually visit." },
      { q: 'Can I hike the Great Wall in one day?', a: "Yes. Badaling or Mutianyu can be done in a half day from central Beijing. Serious hikers combine the Jinshanling-Simatai trail, a 10-kilometer wild section that takes a full day and requires a return shuttle at the far end." }
    ],
    images: [
      '/images/great-wall-1.webp',
      '/images/great-wall-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city/' }
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
      { heading: 'The East Hall', body: "The main hall is seven bays wide and four bays deep, covered by a single-eave hip roof — the most prestigious form in the Chinese building hierarchy. Its dougong brackets are among the largest ever recorded in Chinese timber architecture: roughly 2.5 meters tall, they stand about half the height of the columns themselves, projecting the deep eaves nearly 4 meters beyond the wall plane. This massive scale is the signature of Tang construction, when brackets carried the full weight of the roof rather than decorating it.\n\nThe hall follows Tang canons that later builders abandoned: the roof slope is gentle (about 1 in 3), the columns taper slightly toward the top, and the eaves sweep upward at the corners in a long, unhurried arc. When Liang Sicheng measured the building in 1937, he found its structural logic matched the principles codified in the Song dynasty manual Yingzao Fashi (1103) — proof that Tang standards lived on in later building codes even as later halls shrank the brackets into ornament." },
      { heading: 'Discovery by Liang Sicheng', body: "In the 1930s the prevailing scholarly view held that no Tang dynasty timber building survived on Chinese soil. Liang Sicheng, founder of modern Chinese architectural history, had noticed a hall labeled 'Da Foguang Si' (Great Foguang Temple) in a 10th-century mural of Mount Wutai in Cave 61 at Dunhuang — and decided the remote valley was worth the search.\n\nOn June 26, 1937, Liang, his wife Lin Huiyin, and two assistants reached the temple and found a timber hall whose bold dougong matched Tang descriptions exactly. The clincher was a faint ink inscription on a beam: 'Disciple of Buddha, female devotee of the capital, Ning Gongyu', together with the date — the 11th year of Dazhong (857 CE). The announcement, made days before the outbreak of the war with Japan, rewrote the history of Chinese architecture overnight." },
      { heading: 'Interior Treasures', body: "The East Hall preserves more than its frame: the original Tang clay sculptures still stand on the main altar — Sakyamuni flanked by bodhisattvas, disciples, and guardian kings — along with painted murals on the upper walls and the small portrait of the donor Ning Gongyu, whose patronage is recorded in the beam inscription. Very few Tang halls survive at all; fewer still keep their original furnishings.\n\nThe hall's endurance is itself a structural lesson. In 2017 the temple joined the UNESCO World Heritage Tentative List, and recent engineering studies attribute its 1,100-year survival to the very features later builders dropped: deep eaves that shield the timber core from rain, massive brackets that flex under seismic load, and a stone platform that keeps moisture away from the wooden columns." }
    ],
    features: ['Second-oldest timber building in China (857 CE)', 'Seven-bay Tang hall with hip roof', 'Massive structural dougong brackets', 'Original Tang sculptures and murals inside', 'Discovered by Liang Sicheng in 1937'],
    keyDates: [
      { year: '857 CE', event: 'East Hall completed — among the oldest surviving timber buildings in China' },
      { year: '1937', event: 'Rediscovered by Liang Sicheng and Lin Huiyin, ending the belief that no Tang halls survived' },
      { year: '1961', event: 'Designated a National Key Cultural Relic' },
      { year: '2009', event: 'Added to the UNESCO World Heritage tentative list' }
    ],
    faq: [
      { q: 'Why is Foguang Temple so important to architectural history?', a: "For decades scholars believed no Tang dynasty timber building survived. The 857 CE East Hall — identified by Liang Sicheng from a faint beam inscription — proved otherwise and rewrote the history of Chinese architecture, preserving the bold structural dougong that Tang builders used." },
      { q: 'How do I get to Foguang Temple?', a: "The temple sits in a remote valley near Wutai Mountain, about 2.5-3 hours by car from Taiyuan. Public transport is limited — most visitors hire a car or driver, ideally combining it with the nearby Nanchan Temple." },
      { q: 'What is there to see inside the East Hall?', a: "Original Tang sculptures of the Buddha and bodhisattvas, surviving Tang murals, the donor portrait of Ning Gongyu, and the hall's massive dougong brackets — a rare complete survival of Tang interior design." }
    ],
    images: [
      '/images/foguang-temple-1.webp',
      '/images/foguang-temple-2.webp'
    ],
    nearby: [
      { name: 'Yingxian Pagoda', href: '/buildings/yingxian-pagoda/' }
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
      { heading: 'Structural Innovation', body: "The pagoda rises 67 meters on an octagonal plan 30 meters across at the base, making it the tallest wooden building in China and the oldest surviving all-wood pagoda in the world. The octagon is not decorative: compared with a square plan, it shortens the span of every beam and presents the same face to winds from any direction, distributing lateral forces evenly around the ring.\n\nInside, the five visible stories conceal four hidden structural levels whose diagonal braces form rigid rings at every floor line. An outer ring of columns and an inner ring create a double-tube frame, so each story behaves like a huge horizontal wheel. During an earthquake the interlocking joints — more than 10,000 structural members fitted without a single nail — flex and grind instead of snapping. The pagoda has survived more than 40 recorded earthquakes in 970 years." },
      { heading: 'The Dougong Encyclopedia', body: "No other building in China displays so many bracket systems: 54 distinct dougong types applied at column tops, under the eaves, at the corners, and around the hidden structural levels. Each type solves a specific problem — some carry the deep eaves of the lowest story, others transfer the weight of the upper walls onto the inner column ring, and still others brace the corners where two roof planes meet.\n\nArchitectural historians use the pagoda as a living reference for Liao dynasty practice: nearly every bracket type can be matched to a clause in the Yingzao Fashi, the 1103 building manual, yet several variations appear nowhere else in China. Because the pagoda preserves its original 11th-century members, it shows exactly how those written rules were executed — the brackets' proportions, their relation to column height, and the graceful way they step outward story by story." },
      { heading: 'Historical Context', body: 'Built in 1056 CE during the Liao dynasty, the Yingxian Pagoda was commissioned by Emperor Daozong as part of a Buddhist temple complex honoring his father. The Liao, a Khitan-ruled dynasty that controlled northern China, were devout Buddhists who invested heavily in temple construction — and they had the forests to do it: the pine woods of Shanxi supplied timber of exceptional length and straightness, which is why Liao builders could raise members that later dynasties could not match.\n\nRecords show the pagoda was completed in 1056, only 13 years after the founding of the temple, and survived its first documented earthquake by 1195. When the architect Liang Sicheng surveyed it in 1933, he wrote that the pagoda was the greatest wooden structure he had ever seen — the same judgment he had passed on the 857 CE East Hall at Foguang Temple. The pagoda\'s location in Yingxian County, near the strategic Yanmenguan Pass, placed it at the intersection of Han Chinese and nomadic cultures — a context reflected in its architectural synthesis of Chinese timber techniques with Liao Buddhist patronage.' },
      { heading: 'Conservation Challenges', body: 'Despite surviving 40 major earthquakes, the pagoda faces significant conservation challenges. The structure has developed a noticeable tilt — leaning approximately 3 degrees from vertical at its upper levels — caused by uneven foundation settlement and centuries of wind load from the northwest. Since the 1990s, Chinese heritage authorities have undertaken extensive studies to stabilize the pagoda without disassembling it, a delicate process given the nail-free construction. The pagoda is not currently open for interior visits, but the exterior and the surrounding temple complex are accessible to the public.' }
    ],
    features: ['Oldest all-wood pagoda in the world (1056 CE)', '67 meters tall — 5 visible + 4 hidden stories', '54 different dougong bracket types', 'No metal fasteners used', 'Survived 40+ earthquakes'],
    keyDates: [
      { year: '1056 CE', event: 'Built by order of Emperor Daozong of the Liao dynasty as a family shrine honoring his father' },
      { year: '1195', event: 'Major repair after an earthquake — the first of many documented restorations' },
      { year: '1933', event: 'Surveyed by Liang Sicheng, who declared it the greatest wooden structure he had ever seen' },
      { year: '1974', event: 'National conservation program begins; the pagoda remains under careful monitoring today' }
    ],
    faq: [
      { q: 'Why has the Yingxian Pagoda survived so many earthquakes?', a: "The octagonal plan distributes lateral forces evenly, and the nail-free mortise-and-tenon frame flexes like a shock absorber — joints slide and absorb energy instead of snapping. The pagoda has survived over 40 recorded earthquakes, including a magnitude 6.5 quake in 1305." },
      { q: 'Can I climb the Yingxian Pagoda?', a: "The interior is currently closed for conservation work due to the structure's 3-degree tilt, but the exterior and the surrounding Fogong Temple complex remain fully open. Visitors can study the pagoda's 54 bracket types from the ground and the nearby museum." },
      { q: 'Is the pagoda really 5 or 9 stories?', a: "Externally it appears as five stories, but four hidden internal mezzanine levels (dark stories) bring the total to nine — matching the traditional significance of the number nine for the emperor. The pagoda is 67 meters tall, making it the tallest surviving pre-modern wooden building in the world." }
    ],
    images: [
      '/images/yingxian-pagoda-1.webp',
      '/images/yingxian-pagoda-2.webp'
    ],
    nearby: [
      { name: 'Foguang Temple', href: '/buildings/foguang-temple/' }
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
    description: "The Summer Palace is China's largest imperial garden — a 290-hectare composition of lake, hill, pavilions, and corridors laid out by the Qianlong Emperor in 1750 and rebuilt by Empress Dowager Cixi in 1886 with funds earmarked for the imperial navy. Its centerpiece, the 728-meter Long Corridor, is the world's longest painted gallery, carrying more than 14,000 scenes across its beams. The garden is a living textbook of Chinese landscape technique: a lake excavated to raise a hill, islands placed by design, and distant pagodas 'borrowed' into the composition from beyond the garden wall.",
    sections: [
      { heading: 'Kunming Lake & Longevity Hill', body: "The garden's entire landscape was manufactured in one act of earth-moving. In 1750 the Qianlong Emperor ordered the excavation of a lake on the site of a smaller reservoir, and the excavated earth was piled into a new hill on its northern shore — Wanshou Shan (Longevity Hill), named to celebrate his mother's 60th birthday. The result is a controlled landscape where water occupies roughly three quarters of the 290-hectare site, every promontory and island placed by design.\n\nQianlong modeled the lake on West Lake in Hangzhou, which he had toured during southern inspection trips. The western dike with its six bridges copies the Su Causeway, while the 150-meter Seventeen-Arch Bridge links the eastern shore to Nanhu Island, whose temple sits in the water to mirror the hilltop temples on the far shore. Nothing is accidental: the lake's long axis points directly at the Jade Spring Hill pagoda beyond the garden wall, a composition technique called jiejing ('borrowed scenery') that pulls distant landmarks into the garden picture." },
      { heading: 'The Long Corridor', body: "The Long Corridor (Changlang) runs 728 meters along the northern shore of Kunming Lake, connecting the eastern and western garden zones. It is divided into 273 bays by 548 columns and topped with more than 14,000 painted scenes — landscapes, flowers, birds, and episodes from novels such as Journey to the West and Romance of the Three Kingdoms — applied to the beams in the exacting caihua tradition of mineral-pigment painting.\n\nBuilt in 1750 and restored after the 1860 destruction, the corridor is the longest painted gallery in the world. Its function was practical as well as ceremonial: it sheltered the imperial household from sun and rain on the mile-long walk between the residence halls and the lakefront, while its 273 identical bays give the shore a rhythm of light and shadow that changes with every hour of the day." },
      { heading: 'The Marble Boat', body: "The Marble Boat (Shifang) is a 36-meter pavilion built on a stone hull at the lake's northwestern corner. The original 1755 version was a simple waterside pavilion, but after the Anglo-French destruction of 1860 the Empress Dowager Cixi rebuilt it in 1893 with a superstructure of painted wood and two paddle-wheel forms at the stern — a deliberate nod to the Western steamships that had humiliated the Qing navy.\n\nThe boat carries a deliberate political message: a stone vessel that can never sink symbolizes the permanence of the dynasty, while its location — moored just outside the imperial apartments — turned every stroll along the shore into a quiet reminder of power. Its construction from palace funds during the same years the real navy was underfunded made it the most famous symbol of Qing extravagance in China." },
      { heading: 'The Buddhist Axis & View-Borrowing', body: "The garden's visual spine is a single axis running north-south from the lakefront through the Hall of Dispelling Clouds (Paiyundian), past the Pavilion of Buddhist Fragrance, and up to the Sea of Wisdom temple at the hill's crest. The Pavilion of Buddhist Fragrance (Foxiangge) — an octagonal, three-story tower 41 meters tall — rises above the trees as the highest point in the garden, visible from almost every vantage across the lake.\n\nBelow the tower, terraced courtyards ascend the hillside in the same layered progression used in temple architecture, each platform framing the one above. The composition is complete only when the eye travels beyond the garden walls: the distant Jade Spring Hill pagoda and the Western Hills align with the lake's open water, so the borrowed scenery becomes the final, most important element of the design — proof that Chinese garden art treats the entire landscape, not the garden wall, as its canvas." }
    ],
    features: ['Largest imperial garden in China', '728m Long Corridor — longest painted gallery', 'Harmonious mountain-water architecture', 'Marble Boat — Qing extravagance symbol', 'UNESCO World Heritage Site (1998)'],
    keyDates: [
      { year: '1750', event: 'Built by the Qianlong Emperor as a birthday gift for his mother, Empress Dowager Chongqing' },
      { year: '1860', event: 'Destroyed by Anglo-French forces during the Second Opium War' },
      { year: '1886-1895', event: 'Rebuilt by Empress Dowager Cixi, allegedly using funds meant for the imperial navy' },
      { year: '1998', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'Why is it called the Summer Palace?', a: "Originally named Qingyi Garden (Garden of Clear Ripples), it served as the imperial summer retreat — the royal family moved here from the Forbidden City during the hottest months. The name was changed to Yiheyuan, usually translated as Summer Palace, after Cixi's 1886-1895 rebuilding." },
      { q: 'Did the Marble Boat really cost the Chinese navy its funding?', a: "Legend holds that Cixi rebuilt the palace using the 30 million taels earmarked for the Beiyang Fleet — and the Marble Boat, a stone pavilion shaped like a paddle steamer, became the symbol of that extravagance. Historians debate the exact sums, but the navy was undeniably weakened before the 1894-95 defeat by Japan." },
      { q: 'How long is the Long Corridor and what is painted on it?', a: "The covered walkway runs 728 meters along Kunming Lake — the longest painted corridor in the world. Its 273 sections carry more than 14,000 paintings: landscapes, legends, flowers, and scenes from the Romance of the Three Kingdoms and Journey to the West." }
    ],
    images: [
      '/images/summer-palace-1.webp',
      '/images/summer-palace-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city/' },
      { name: 'Temple of Heaven', href: '/buildings/temple-of-heaven/' }
    ],
    travel: {
      visitable: true,
      bestSeason: "Summer for lush gardens and lotus; winter for snow-dusted pavilions",
      photoTips: "Long Corridor for framed compositions; sunset behind 17-Arch Bridge on Kunming Lake",
      howToGet: "Subway Line 4 to Beigongmen; enter from East Gate for dramatic first view"
    }
  },
  {
    id: 'longmen-grottoes',
    name: 'Longmen Grottoes',
    chineseName: 'Longmen Shiku',
    dynasty: 'Northern Wei-Tang',
    location: 'Luoyang, Henan',
    yearBuilt: '493 CE onward',
    type: 'Cave Temple',
    seoTitle: 'Longmen Grottoes: Vairocana Buddha, Calligraphy & Cave Art',
    seoDescription: 'Guide to the Longmen Grottoes, Luoyang — 2,300 caves, the 17m Vairocana Buddha funded by Empress Wu Zetian, and 2,800 stone inscriptions (the largest collection of ancient Chinese calligraphy). Northern Wei to Tang dynasty, UNESCO 2000.',
    description: 'The Longmen Grottoes are one of the finest examples of Chinese Buddhist cave art, with more than 2,300 caves and niches carved into a 1-kilometer limestone cliff along the Yi River. Work began in 493 CE when the Northern Wei dynasty moved its capital to Luoyang and continued for over 400 years through the Tang dynasty. The site contains nearly 110,000 Buddhist statues, 60 stupas, and 2,800 inscriptions — the largest collection of ancient calligraphy in China.',
    sections: [
      { heading: 'Four Centuries of Carving', body: 'The Longmen Grottoes were carved continuously from 493 CE to the late Tang dynasty, making them the longest-running cave project in Chinese history. Work began the moment the Northern Wei court moved its capital from Datong to Luoyang in 493 CE, and the earliest caves — led by Guyang Cave — show the transition from the massive, austere Buddhas of Yungang to slimmer figures with Chinese facial features.\n\nThe Tang dynasty contributed the majority of the site\'s 2,300 caves. Sponsorship was not limited to emperors: court ladies, generals, and merchants funded niches, and their dedicatory inscriptions — 2,800 in total — form the largest collection of ancient calligraphy in China. The famous Nineteen Steles of Longmen, recorded since the Tang, made the site a pilgrimage destination for calligraphers centuries before it became a tourist site.' },
      { heading: 'Fengxian Temple and the Vairocana Buddha', body: "The Fengxian Temple, completed in 675 CE, is the largest open-air cave at Longmen — a horseshoe-shaped amphitheater cut into the cliff rather than a tunnel. Its centerpiece, the seated Vairocana Buddha, stands 17.14 meters tall with ears 1.9 meters long; the figure and its attendants — two disciples, two bodhisattvas, and two guardian kings — were carved over roughly 20 years starting around 651 CE.\n\nThe project's principal patron was Empress Wu Zetian, who contributed 20,000 strings of cash — traditionally described as her cosmetics allowance — to the construction. Contemporaries described Wu as having 'a face like the Buddha's', and the Vairocana's serene, full-faced smile differs markedly from earlier masculine Tang Buddhas. The combination of imperial patronage and cliff-side engineering makes Fengxian the summit of Tang stone sculpture." },
      { heading: 'The Great Cave Temples in Detail', body: "Four caves reward close study. Guyang Cave (begun 493 CE) is the earliest and most important Northern Wei cave at Longmen — its 800+ inscribed niches record the elite families who followed the court south from Datong, and its slender Buddhas mark the birth of a fully Chinese sculptural style. Binyang Central Cave (begun 505 CE) preserves a complete carved stone facade imitating a timber hall, with an arched doorway and roof ridge. The Binyang South Cave and the Wei-character steles beside it document the evolution of Northern Wei calligraphy over half a century.\n\nThe Lotus Cave (Lianhua Dong), named for the huge lotus carved in its ceiling, and the 1,000-Buddha niche of the Tang period show how later patrons filled the cliff with repetitive votive images. The Wanfo Cave ('Ten Thousand Buddhas') of 680 CE, sponsored by Wu Zetian's nephew, continues the pattern at imperial scale. Together these caves demonstrate that Longmen was not one project but 400 years of layered patronage — emperors, empresses, monks, officials, and merchants each adding their mark to the same kilometer of cliff." },
      { heading: 'The Largest Collection of Ancient Calligraphy', body: "Longmen preserves 2,800 stone inscriptions — the largest and most important collection of ancient calligraphy in China. The dedicatory texts carved beside each niche record names, dates, and motives of donors, offering a unique social history of four centuries of Buddhist patronage. They are also a living museum of Chinese writing: the Wei steles document the transition from clerical to regular script, while the Tang inscriptions showcase the mature kaishu of the empire's finest calligraphers.\n\nBecause ink-rubbing of these steles was practiced for over a millennium, Longmen's inscriptions shaped calligraphy education across East Asia. The so-called 'Longmen Twenty' (Longmen Ershi Pin) — twenty celebrated stele inscriptions — have been standard copy models for calligraphers in China, Japan, and Korea since the Qing dynasty. This calligraphic legacy is a major reason Longmen, unlike most cave sites, attracted scholarly pilgrims long before modern tourism." }
    ],
    features: ['2,300+ caves and niches along a 1km cliff', '~110,000 Buddhist statues', '17m Vairocana Buddha at Fengxian Temple', '2,800 inscriptions — largest ancient calligraphy collection in China', 'UNESCO World Heritage Site (2000)'],
    keyDates: [
      { year: '493 CE', event: 'Carving begins when the Northern Wei capital moves from Datong to Luoyang' },
      { year: '675 CE', event: 'Fengxian Temple completed with the 17-meter Vairocana Buddha, funded partly by Empress Wu Zetian' },
      { year: 'late Tang', event: 'Work winds down after roughly 400 continuous years — the longest cave project in Chinese history' },
      { year: '2000', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'How many statues are actually at Longmen?', a: "The official count is nearly 110,000 Buddhist statues distributed across 2,300+ caves and niches, together with 60 stupas and 2,800 inscriptions — the largest collection of ancient calligraphy in China, including the famous Nineteen Stele of the Longmen style." },
      { q: 'Was the Vairocana Buddha modeled on Empress Wu Zetian?', a: "Tradition says yes — Wu Zetian, who contributed 20,000 strings of cash to the project, was described by contemporaries as having a face like the Buddha's. The serene, feminine features of the 17-meter Vairocana at Fengxian Temple differ markedly from earlier masculine Tang Buddhas, a change many scholars attribute to imperial patronage." },
      { q: 'Longmen or Yungang — which should I visit?', a: "Both are UNESCO sites but they tell different stories. Yungang (5th century, near Datong) preserves colossal imperial Buddhas in carved-out caves and shows heavy Indian-Central Asian influence. Longmen (5th-8th century, Luoyang) spans four centuries of Chinese style, peaks in the open-air Fengxian Temple, and is far easier to combine with a visit to Xi'an." }
    ],
    images: [
      '/images/longmen-grottoes-1.webp',
      '/images/longmen-grottoes-2.webp'
    ],
    nearby: [
      { name: 'Yungang Grottoes', href: '/buildings/yungang-grottoes/' },
      { name: 'White Horse Temple', href: 'https://en.wikipedia.org/wiki/White_Horse_Temple' }
    ],
    travel: {
      visitable: true,
      bestSeason: "April-May or September-October; avoid Chinese national holidays",
      photoTips: "Fengxian Temple at sunrise when the cliff face catches golden light",
      howToGet: "High-speed rail to Luoyang Longmen Station, then bus 67 or taxi to the site"
    }
  },
  {
    id: 'yungang-grottoes',
    name: 'Yungang Grottoes',
    chineseName: 'Yungang Shiku',
    dynasty: 'Northern Wei',
    location: 'Datong, Shanxi',
    yearBuilt: '460-525 CE',
    type: 'Cave Temple',
    description: 'The Yungang Grottoes are a monumental complex of 252 caves and 51,000 Buddhist statues carved into the sandstone cliffs near Datong between 460 and 525 CE. Commissioned by the Northern Wei emperors — the first rulers of a unified north China to embrace Buddhism as a state religion — the grottoes represent the earliest and most powerful fusion of Indian, Central Asian, and Chinese artistic traditions. The five earliest caves, the Tanyao Caves, contain colossal Buddhas up to 17 meters tall that are considered among the most important works of early Buddhist art in Asia.',
    sections: [
      { heading: 'The Tanyao Five Caves', body: "The five earliest caves (Caves 16-20), carved between 460 and 465 CE under the monk Tanyao's direction, contain colossal Buddhas designed to embody the Northern Wei emperors themselves. The project was a response to catastrophe: the preceding emperor had persecuted Buddhism, and his successor, Emperor Wencheng, commissioned the statues to restore the faith — with each emperor symbolically equated with a Buddha, linking political authority with divine power.\n\nThe largest figure, in Cave 20, stands 13.7 meters tall and has become the iconic image of the Yungang Grottoes; the outer wall of its chamber collapsed long ago, leaving the colossus exposed against the cliff. The statues' massive, simplified forms and their deep-set niches echo the rock-cut architecture of India's Ajanta and Bamiyan caves, transmitted along the Silk Road — but the faces are unmistakably Chinese, with the broad features of the Tuoba Xianbei rulers." },
      { heading: 'The Meeting of East and West', body: "The Yungang Grottoes are the earliest major Chinese site to record the full artistic vocabulary of the Silk Road. Sculptors drew on Gandhara style (Greco-Buddhist art from present-day Pakistan) with its wavy hair and draped robes; Gupta style from India with its transparent, clinging garments; and the Central Asian styles of Sogdia and Khotan — then absorbed these foreign elements into native Chinese aesthetics.\n\nThe result is visible cave by cave: early figures wear Indian robes with Greek-influenced drapery, while later caves (470-525 CE) adopt slender, elegant proportions and Chinese facial features that would define subsequent Chinese Buddhist art. Cave 12, the 'Music Cave', carries the motif furthest — its upper walls are carved with a band of celestial musicians playing more than a dozen instruments from across Asia, including Persian lutes, Indian drums, and Chinese flutes, a frozen symphony of the Silk Road exchange." },
      { heading: 'Architecture Carved from Rock', body: "Unlike timber buildings, the Yungang caves were created by carving away the cliff face — an architecture of subtraction. The caves reproduce timber temple interiors in stone: the central-pillar caves (notably Cave 6, completed 493 CE) contain a four-sided stone pillar carved with pagoda tiers, Buddha niches, and relief panels that imitate multi-story wooden pagodas.\n\nEven the details follow timber logic: carved brackets, beams, and coffered ceilings replicate wooden assemblies, demonstrating that Chinese builders held the timber tradition as the standard against which all architecture was measured. The site faces the same enemy as the stone itself: the soft sandstone is vulnerable to wind erosion and rain, and conservation teams have spent decades testing water-repellent coatings and structural anchors to slow the cliffs' decay." }
    ],
    features: ['252 caves with 51,000+ statues', 'Colossal 13.7m Buddha in Cave 20', 'Earliest Silk Road artistic fusion in China', 'State-sponsored imperial cave project', 'UNESCO World Heritage Site (2001)'],
    keyDates: [
      { year: '460 CE', event: 'Monk Tanyao begins the first five colossal caves under imperial patronage' },
      { year: '465 CE', event: 'The Tanyao Five (Caves 16-20) completed, embodying the first five Northern Wei emperors' },
      { year: '493 CE', event: 'Capital moves south to Luoyang; carving continues on a smaller scale and shifts to Longmen' },
      { year: '2001', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'Why does the famous Cave 20 Buddha have no front wall?', a: "The cave's outer wall collapsed centuries ago, exposing the 13.7-meter seated Buddha to the open air. The accident became an icon: the Buddha now appears to emerge directly from the cliff face, making it the most photographed statue at Yungang and the site's unofficial symbol." },
      { q: 'How were the Yungang caves carved?', a: "By subtraction — masons and sculptors worked from the top down, carving directly into the sandstone cliff: first roughing the cave chamber, then finishing the ceiling, and finally cutting the statues out of the living rock. Scaffolding holes still visible in the cave walls show where workers stood." },
      { q: 'Which caves should I see on a first visit?', a: "The essentials are Caves 5-6 (the tallest Buddha and the richly carved central-pillar cave), Cave 9-10 (front-chamber temples), Cave 12 (the Music Cave with celestial musicians), and Cave 20 (the exposed colossus). A standard tour covers about 20 caves in 2-3 hours." }
    ],
    images: [
      '/images/yungang-grottoes-1.webp',
      '/images/yungang-grottoes-2.webp'
    ],
    nearby: [
      { name: 'Longmen Grottoes', href: '/buildings/longmen-grottoes/' },
      { name: 'Yingxian Pagoda', href: '/buildings/yingxian-pagoda/' },
      { name: 'Hanging Temple', href: 'https://en.wikipedia.org/wiki/Hanging_Temple' }
    ],
    travel: {
      visitable: true,
      bestSeason: "May-October; Datong is cool and dry even in summer",
      photoTips: "Cave 20 colossal Buddha best in morning light; wide shot from the opposite ridge",
      howToGet: "High-speed rail to Datong South Station, then 30-min taxi ride"
    }
  },
  {
    id: 'mogao-caves',
    name: 'Mogao Caves',
    chineseName: 'Mogao Ku',
    dynasty: 'Various (4th-14th c.)',
    location: 'Dunhuang, Gansu',
    yearBuilt: '366 CE onward',
    type: 'Cave Temple',
    description: 'The Mogao Caves, also known as the Caves of the Thousand Buddhas, are the largest and richest repository of Buddhist art in the world — 735 caves carved over a thousand years into a cliff at Dunhuang, the gateway between China and the Silk Road. The caves preserve 45,000 square meters of murals and over 2,000 painted sculptures, spanning the 4th to the 14th centuries. Their wooden facades, cliff walkways, and painted interiors make Mogao the most complete record of Chinese religious architecture, art, and daily life in existence.',
    sections: [
      { heading: 'Dunhuang: Gateway of the Silk Road', body: "The first cave was carved in 366 CE by the monk Le Zun, who reportedly saw a golden vision of a thousand Buddhas on the cliff — which is why the site is also called the Caves of the Thousand Buddhas. For the next thousand years, Dunhuang's position at the junction of the Silk Road made it the richest Buddhist center in China. Merchants about to cross the Taklamakan Desert, generals on campaign, and pilgrims heading to India all funded new caves as offerings of merit.\n\nThe caves document the ebb and flow of trade and faith better than any chronicle: murals show caravans with Bactrian camels, musicians of every ethnicity, and donor portraits of families in their finest silk. Cave 220, painted in the 640s, preserves a Tang dance scene so vivid that scholars reconstructed the choreography from its pigments. Each dynasty added its layer, so the cliff reads like a 1,000-year stratigraphy of Chinese art." },
      { heading: 'Murals and Wooden Facades', body: "Mogao's greatest treasure is its mural art — 45,000 square meters covering walls, ceilings, and niches. The painters ground minerals into pigments that have not faded in 1,400 years: lapis lazuli blue imported from Afghanistan, malachite green, cinnabar red, and gold leaf. Flying apsaras (feitian), the celestial musicians of Buddhist cosmology, float across ceilings in a style that evolved from heavy Indian figures into the weightless, ribbon-trailing dancers of Tang art.\n\nThe murals are also an architectural archive: they depict palaces, pavilions, and pagodas of the Tang and Song in exact detail — buildings that no longer exist anywhere in China. The most famous structure on site, the nine-story wooden pavilion of Cave 96, was built into the cliff in the 1920s to shelter the 35.5-meter Maitreya Buddha, the world's third-tallest seated Buddha — a late union of rock-cut sculpture and timber construction." },
      { heading: 'The Library Cave', body: "In 1900, the Daoist caretaker Wang Yuanlu broke through a wall and found Cave 17 — the Library Cave — sealed for nearly 900 years. Inside lay more than 50,000 manuscripts, paintings, and textiles dating from the 4th to the 11th centuries, written in Chinese, Tibetan, Sogdian, Khotanese, and Sanskrit: contracts, medical recipes, poems, and the world's oldest dated printed book, the Diamond Sutra (868 CE).\n\nWang reported the find to local officials, but word spread slowly — and by the time scholars reacted, explorers were on the way. Aurel Stein in 1907 and Paul Pelliot in 1908 took thousands of items to London and Paris; further collections went to St. Petersburg and Tokyo. The dispersal scandalized later generations, yet the cataloging of those same manuscripts created modern Dunhuang studies, and the caves themselves — now managed by the Dunhuang Academy with digital documentation and strict visitor rotation — remain the world's largest repository of Buddhist art." }
    ],
    features: ['735 caves carved over 1,000 years', '45,000 sqm of murals', '35.5m Maitreya Buddha in Cave 96', 'Library Cave with 50,000+ manuscripts', 'UNESCO World Heritage Site (1987)'],
    keyDates: [
      { year: '366 CE', event: 'Monk Le Zun carves the first cave after a golden vision of a thousand Buddhas' },
      { year: '868 CE', event: 'Diamond Sutra printed — the world\'s oldest dated printed book, later found in Cave 17' },
      { year: '1900', event: 'Wang Yuanlu discovers the Library Cave with 50,000+ manuscripts' },
      { year: '1987', event: 'Inscribed as a UNESCO World Heritage Site' }
    ],
    faq: [
      { q: 'How many caves can visitors actually see at Mogao?', a: "Of the 735 caves, only about 30-60 are open at any time, rotated for conservation. A standard guided tour visits 8-12 representative caves spanning the Northern Liang to Yuan dynasties — enough to see the evolution of mural painting and sculpture. English tours are available and should be booked in advance." },
      { q: 'Can I take photos inside the caves?', a: "No — photography is strictly forbidden inside the caves because camera flashes and even constant lighting accelerate pigment fading. The exterior, including the iconic nine-story pavilion of Cave 96, is freely photographable from the opposite riverbank." },
      { q: 'What is the Diamond Sutra and why is it famous?', a: "It is the world's oldest dated printed book, a woodblock-printed Buddhist scripture from 868 CE found in the Library Cave in 1900. The scroll now resides in the British Library, while most of the Library Cave's 50,000+ manuscripts were dispersed across London, Paris, St. Petersburg, and Tokyo." }
    ],
    images: [
      '/images/mogao-caves-1.webp',
      '/images/mogao-caves-2.webp'
    ],
    nearby: [
      { name: 'Longmen Grottoes', href: '/buildings/longmen-grottoes/' },
      { name: 'Yungang Grottoes', href: '/buildings/yungang-grottoes/' }
    ],
    travel: {
      visitable: true,
      bestSeason: "May-June and September-October; summers are hot, winters freezing",
      photoTips: "Nine-story pavilion (Cave 96) from the opposite riverbank at sunset; interior photography is restricted",
      howToGet: "Fly to Dunhuang Airport (DNH); caves are 25km southeast of town by taxi"
    }
  },
  {
    id: 'ming-tombs',
    name: 'Ming Tombs',
    chineseName: 'Shisanling',
    dynasty: 'Ming',
    location: 'Beijing',
    yearBuilt: '1409-1644',
    type: 'Imperial Mausoleum',
    description: 'The Ming Tombs (Shisanling) are the burial ground of thirteen of the sixteen Ming dynasty emperors — the largest imperial cemetery complex in the world, set in a valley 40 kilometers north of Beijing. Construction began in 1409 with the tomb of the Yongle Emperor and continued for over two centuries. The approach is a 7-kilometer Sacred Way lined with 36 stone guardians, and the excavated Dingling mausoleum lets visitors descend 27 meters into the only Ming imperial underground palace ever opened — five column-free stone halls that mirror the courtyard hierarchy of above-ground palaces.',
    sections: [
      { heading: 'The Sacred Way', body: "The approach to the Ming Tombs is a 7-kilometer Sacred Way (shendao) lined with 18 pairs of stone guardian figures — lions, camels, elephants, horses, and civil and military officials. The path begins at the Great Red Gate and passes through the five-arch Memorial Gateway (built 1540), the largest stone archway in China. The tomb builders chose the site by geomancy: the valley of Tianshou Mountain, ringed by hills that face south like a great armchair, with a stream running in front — the classic feng shui formula for imperial burial.\n\nThe composition of the Sacred Way — a symbolic journey from the mundane world to the sacred realm — is the most complete surviving example of Chinese funerary planning. Its avenue turns once, bends again, and rises gradually so that the visitor never sees the tombs until the last moment; the 36 stone beasts and officials, arranged in alternating pairs, grow larger toward the tombs, compressing the approach into a ritual of anticipation that dates back to Han dynasty imperial tombs." },
      { heading: 'Dingling: The Underground Palace', body: "The Dingling mausoleum, built for the Wanli Emperor (1573-1620), is the only Ming tomb to have been excavated. In 1956-58, archaeologists opened its 27-meter-deep underground palace, passing through two 4-ton marble doors sealed by a 'self-locking stone' (zilaishi) that dropped into place when the tomb was closed. Beyond them lay five stone halls vaulted entirely without a single supporting column — an architecture of pure masonry compression.\n\nThe tomb contained the emperor and two empresses, along with 3,000 artifacts: the emperor's gold filigree crown woven from 518 grams of pure gold, jade belts, silk robes, and wooden figurines replacing the human sacrifices of earlier eras. The five-chamber plan — antechamber, central hall, and rear chamber linked by side halls — mirrors the courtyard hierarchy of above-ground palace architecture, with the imperial coffins raised on a platform in the rear hall exactly where the emperor's throne would stand in a palace." },
      { heading: 'Architecture of the Afterlife', body: "Each of the thirteen mausolea follows the same axial template as the Forbidden City: a stele pavilion, the Hall of Eminent Favors (Lingen Dian) for sacrificial rites, a spirit tower with the emperor's title inscribed, and a walled burial mound (baocheng). The number of courtyards, size of halls, and richness of decoration were regulated by the same building codes as imperial palaces.\n\nThe largest, Changling (1409-1427), preserves its original 66-meter-wide Hall of Eminent Favors built of 60 whole nanmu logs — the largest surviving nanmu hall in China, never painted, its dark golden timber left exposed. Because the valley was closed to outsiders after the dynasty fell, the tombs escaped the rebuilding that altered so many Ming buildings, preserving 500-year-old painted beams and dougong brackets in near-original condition." }
    ],
    features: ['13 of 16 Ming emperors buried here', '7km Sacred Way with 36 stone guardians', 'Dingling — only excavated Ming imperial tomb', 'Column-free vaulted underground palace', 'UNESCO World Heritage Site (2000)'],
    keyDates: [
      { year: '1409', event: 'Construction begins on Changling, tomb of the Yongle Emperor — the largest of the thirteen' },
      { year: '1540', event: 'Memorial Gateway built — the largest stone archway in China' },
      { year: '1956-58', event: 'Dingling excavated, opening the only Ming imperial underground palace ever explored' },
      { year: '2000', event: 'Inscribed as part of the UNESCO World Heritage listing for Imperial Tombs of the Ming and Qing Dynasties' }
    ],
    faq: [
      { q: 'Which tombs are open to visitors?', a: "Two tombs plus the Sacred Way are fully open: Changling (the largest, with its magnificent 60-pillar Hall of Eminent Favors) and Dingling (the only tomb with its underground palace accessible — visitors descend 27 meters into the five vaulted stone halls)." },
      { q: 'Why are there 13 tombs but 16 Ming emperors?', a: "The founder, Hongwu, is buried at Xiaoling in Nanjing; the Jianwen Emperor vanished during his uncle's coup and has no tomb; and Jingtai, deposed by his brother, was buried as a prince on Beijing's Western Hills. The remaining 13 emperors lie here at Shisanling (Thirteen Tombs)." },
      { q: 'Can you go inside the Dingling underground palace?', a: "Yes — Dingling is the only Ming imperial tomb whose underground palace is open to the public. The five stone halls, vaulted entirely without columns, contained the Wanli Emperor, two empresses, and some 3,000 artifacts now displayed in the on-site museum." }
    ],
    images: [
      '/images/ming-tombs-1.webp',
      '/images/ming-tombs-2.webp'
    ],
    nearby: [
      { name: 'Forbidden City', href: '/buildings/forbidden-city/' },
      { name: 'Great Wall', href: '/buildings/great-wall/' }
    ],
    travel: {
      visitable: true,
      bestSeason: "September-October; spring plum blossoms in April",
      photoTips: "Sacred Way with autumn foliage; Memorial Gateway at golden hour",
      howToGet: "Subway Changping Line to Changping Dongguan, then bus 314 or taxi; or join a day tour from Beijing"
    }
  },
  {
    id: 'zhaozhou-bridge',
    name: 'Zhaozhou Bridge',
    chineseName: 'Anji Qiao',
    dynasty: 'Sui',
    location: 'Zhao County, Hebei',
    yearBuilt: '595-605 CE',
    type: 'Bridge',
    description: 'The Zhaozhou Bridge (also called Anji Bridge) is the oldest open-spandrel segmental arch bridge in the world — a stone bridge built in 605 CE that has survived 1,400 years of floods and earthquakes. Designed by the master mason Li Chun during the Sui dynasty, its innovations — a flat segmental arch and two open spandrel arches in the shoulders — were not replicated in Europe until the 14th century. The bridge remains a functioning crossing today, a testament to the engineering genius of Chinese architecture beyond temples and palaces.',
    sections: [
      { heading: "Li Chun's Engineering Breakthrough", body: "Conventional ancient bridges used semicircular arches, which raised the roadbed steeply at the crown and let floodwater pound the spandrel walls. Li Chun's segmental arch — only a shallow slice of a circle — created a nearly flat deck while maintaining structural integrity. The rise-to-span ratio is just 1:5 (a rise of 7.3 meters over a span of 37 meters), an unprecedented figure for the 7th century; Europe would not build a comparable open-spandrel arch until the 14th century.\n\nThe bridge's second innovation is visible only from the river: two small open spandrel arches cut into each shoulder, lightening the structure by roughly 30 percent and giving floodwater a clear channel through the body of the bridge instead of against it. The design solved a real local problem — the Jiao River floods violently after mountain rains — and the bridge is the proof of the solution: it has never been washed away in 1,400 years." },
      { heading: 'Stone Engineering without Mortar', body: 'The bridge is assembled from 28 independent longitudinal stone arches, each composed of interlocking stones cut to precise shapes and joined by iron ties and dovetailed stone dowels — joinery techniques translated directly from timber construction. No mortar was used, allowing the arch to flex slightly under load and during earthquakes, exactly like the mortise-and-tenon joints of a timber hall.\n\nThe deck runs 9 meters wide, and the balustrades carry carved dragons, flowers, and mythical beasts that make the bridge a work of sculpture as much as engineering. The iron ties that clamp the arch ribs together were designed to be replaceable — later repairs simply knocked out a corroded tie and drove in a new one, an early example of designed-in maintenance that kept the structure repairable across centuries.' },
      { heading: 'A Millennium of Service', body: "For over 1,400 years, the Zhaozhou Bridge carried traffic on the route between the North China Plain and the hinterland. It has survived eight major floods, numerous earthquakes, and heavy cart traffic — in the 1963 flood, water submerged the deck yet the arch held. Repair records begin in the Tang dynasty itself, and every documented repair has preserved the original arch geometry rather than replacing it.\n\nIn 1991, the American Society of Civil Engineers designated it an International Historic Civil Engineering Landmark — one of only 12 such structures worldwide, alongside the Eiffel Tower and the Panama Canal. The bridge's survival demonstrates that Chinese engineering brilliance extended far beyond wood: in stone, builders of the Sui dynasty achieved a design that the rest of the world would not match for 700 years." }
    ],
    features: ['Oldest open-spandrel arch bridge in the world (605 CE)', '37m span with 1:5 rise-to-span ratio', '28 independent stone arch ribs, no mortar', 'Survived 1,400 years of floods and earthquakes', 'ASCE International Historic Civil Engineering Landmark (1991)'],
    keyDates: [
      { year: '595-605 CE', event: 'Built by master mason Li Chun during the Sui dynasty' },
      { year: '1961', event: "Listed among China's first batch of National Key Cultural Relics" },
      { year: '1991', event: 'Designated an International Historic Civil Engineering Landmark by the ASCE' },
      { year: 'today', event: 'Still in use as a working bridge — 1,400 years after completion' }
    ],
    faq: [
      { q: 'What makes the Zhaozhou Bridge so revolutionary?', a: "Its flat segmental arch — with a rise-to-span ratio of just 1:5 — replaced the semicircular arches of earlier bridges, creating a nearly level deck. The two open spandrel arches cut into the shoulders lightened the structure and let floodwater pass through. Europe would not achieve this design for another 700 years." },
      { q: 'Is the bridge still safe to walk across?', a: "Yes — it continues to carry pedestrian traffic today. In 1991 the American Society of Civil Engineers named it an International Historic Civil Engineering Landmark, one of only 12 in the world, and it has been restored several times while preserving the original 7th-century arch structure." },
      { q: 'Why was it built without mortar?', a: "The 28 longitudinal arch ribs are assembled from interlocking stones joined by iron ties and dovetailed stone dowels — joinery translated directly from timber construction. Without rigid mortar, the arch flexes slightly under load and in earthquakes, the same reason mortise-and-tenon timber frames survive quakes." }
    ],
    images: [
      '/images/zhaozhou-bridge-1.webp',
      '/images/zhaozhou-bridge-2.webp'
    ],
    nearby: [
      { name: 'Foguang Temple', href: '/buildings/foguang-temple/' },
      { name: 'Yingxian Pagoda', href: '/buildings/yingxian-pagoda/' }
    ],
    travel: {
      visitable: true,
      bestSeason: "April-June and September-October",
      photoTips: "Arch shot from the riverbank level; low angle from beneath the arch",
      howToGet: "High-speed rail to Shijiazhuang, then 1hr drive to Zhao County; 40km from Shijiazhuang airport"
    }
  },
  {
    id: 'giant-wild-goose-pagoda',
    name: 'Giant Wild Goose Pagoda',
    chineseName: 'Dayan Ta',
    dynasty: 'Tang',
    location: "Xi'an, Shaanxi",
    yearBuilt: '652 CE',
    type: 'Pagoda',
    description: "The Giant Wild Goose Pagoda is the most iconic surviving monument of Tang dynasty Chang'an and one of the finest examples of Chinese brick pagoda architecture. Built in 652 CE to house the Buddhist scriptures brought from India by the pilgrim monk Xuanzang, the original five-story tower was expanded to seven stories and 64 meters in 704 CE. As the only major Tang structure surviving in Xi'an, it preserves the proportions, masonry techniques, and spiritual purpose of China's golden-age architecture.",
    sections: [
      { heading: "Xuanzang and the Pagoda's Purpose", body: "After 17 years and roughly 50,000 kilometers of travel through Central Asia and India, the monk Xuanzang returned to Chang'an in 645 CE with 657 volumes of Sanskrit scriptures. The emperor Gaozong ordered the pagoda built in 652 CE within the Da Ci'en Temple to house the texts and Xuanzang's translation bureau, where he and his team produced 75 works in 1,335 volumes — including the Great Tang Records on the Western Regions, the source for the novel Journey to the West.\n\nThe pagoda's name comes from a legend told across the Silk Road: a starving flock of wild geese was saved when one great goose sacrificed itself, and the monks who witnessed it became vegetarians. The smaller companion, the Small Wild Goose Pagoda, stands 3 kilometers away — the two towers bracketing the southern skyline of Tang Chang'an like twin sentinels of the faith." },
      { heading: 'Masonry Architecture in the Timber Age', body: 'Unlike the timber architecture that dominated Tang building, the Giant Wild Goose Pagoda is built of brick laid up like a tower of stacked blocks — a Chinese adaptation of the Indian stupa. Its seven stories taper from 25 meters square at the base to 17 meters at the top, creating the characteristic graduated silhouette; the walls are 2 meters thick at ground level.\n\nEach story opens with arched doorways on four sides, and the exterior carries recessed pilasters and projecting lintels carved in brick to imitate wooden framework — evidence that even masonry buildings were designed according to timber logic. Inside, a spiral staircase of 248 steps rises through the core. The pagoda belongs to the louge (multi-story) type rather than the solid mishan (dense-eave) type of the Small Wild Goose Pagoda, and its surviving 8th-century brickwork is among the best-preserved Tang masonry in China.' },
      { heading: "Symbol of Tang Chang'an", body: "The pagoda stood within the Da Ci'en Temple in the eastern ward of Chang'an, the largest city in the medieval world — a grid of 84 square kilometers with more than a million residents. Climbing the tower for a view of the capital became a rite: successful candidates in the imperial examinations inscribed their names on the pagoda in the tradition of 'yan ta ti ming' (goose pagoda name-inscribing), and Tang poets celebrated the panorama in verse that made the tower the standard image of Chang'an.\n\nThe monument survived the fall of the dynasty and the city's decline, though earthquake damage in the 16th century and later repairs changed its proportions slightly. In 2014 it was inscribed as part of the UNESCO Silk Roads: Routes Network World Heritage corridor, and today it anchors Xi'an's skyline — the one structure in the modern city that a Tang traveler would instantly recognize." }
    ],
    features: ['Built 652 CE by order of Emperor Gaozong', 'Seven stories, 64m tall', "Built for Xuanzang's Buddhist scriptures", 'Finest Tang brick pagoda in China', 'Part of UNESCO Silk Roads World Heritage (2014)'],
    keyDates: [
      { year: '645 CE', event: "Xuanzang returns to Chang'an after 17 years and 100,000 kilometers of travel" },
      { year: '652 CE', event: "Pagoda built within Da Ci'en Temple to house 657 volumes of Sanskrit scriptures" },
      { year: '704 CE', event: 'Expanded from five to seven stories, reaching its present 64-meter height' },
      { year: '2014', event: 'Inscribed as part of the UNESCO Silk Roads: Routes Network World Heritage corridor' }
    ],
    faq: [
      { q: 'Can I climb the Giant Wild Goose Pagoda?', a: "Yes — visitors can ascend the spiral staircases to the top floor for panoramic views over Xi'an. Climbing is popular at sunset, when the surrounding temple complex and the modern skyline are both illuminated." },
      { q: 'Why does the pagoda lean?', a: "Centuries of soil settlement beneath its massive brick base have given the tower a slight but visible lean to the west. It has been stabilized in modern restorations, and the tilt — roughly 1 meter at the top — has been monitored since the 1990s." },
      { q: 'Why is it called the Giant Wild Goose Pagoda?', a: "According to the legend, a starving flock of wild geese was saved by one great goose that sacrificed itself; the monks, moved by the act of compassion, became vegetarians and the pagoda took the name Dayan (Great Wild Goose) Ta. A smaller companion, the Small Wild Goose Pagoda, stands 3 kilometers away." }
    ],
    images: [
      '/images/giant-wild-goose-pagoda-1.webp',
      '/images/giant-wild-goose-pagoda-2.webp'
    ],
    nearby: [
      { name: 'Great Wall', href: '/buildings/great-wall/' },
      { name: 'Foguang Temple', href: '/buildings/foguang-temple/' }
    ],
    travel: {
      visitable: true,
      bestSeason: "March-May and September-November; spring for peonies in the temple garden",
      photoTips: "Symmetrical front elevation at blue hour; climb to top for Xi'an skyline at sunset",
      howToGet: "Xi'an Metro Line 3/4 to Dayanta Station; the pagoda is inside Da Ci'en Temple, south of the city center"
    }
  }
];
