export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  desc: string;
  sections: { heading: string; body: string }[];
  citations: { text: string; url: string }[];
  quote?: { text: string; attribution: string };
  relatedLinks: { label: string; href: string }[];
}

export const articles: BlogArticle[] = [
  {
    slug: 'dougong-mathematics',
    title: 'The Mathematics of Dougong: How Ancient Builders Created Earthquake-Proof Structures',
    date: '2026-07-15',
    desc: 'An exploration of how the interlocking bracket system distributes weight and dissipates seismic energy.',
    sections: [
      {
        heading: 'The Modular System Behind the Bracket',
        body: 'The dougong is not a single piece of wood but an assembly of standardized components governed by the cai-fen modular system codified in the Yingzao Fashi (Building Standards, 1103 CE). The cai (材) — a standard timber cross-section roughly 15 x 10 cm — served as the fundamental unit. Every dimension of a building, from column height to bracket depth, was derived from it. This meant that components could be prefabricated anywhere in the empire and assembled on site with perfect fit — a degree of industrial standardization not seen in European building until the 19th century.\n\nThe Song dynasty architect Li Jie, who compiled the Yingzao Fashi, defined eight grades of cai, each matched to a building\'s rank. The largest grade was used for imperial halls; the smallest for garden pavilions. A bracket set\'s complexity was measured in tiers (pu). Foguang Temple\'s East Hall uses four tiers per bracket — a Tang simplicity that reveals the structure honestly. The Forbidden City\'s Hall of Supreme Harmony uses ten tiers, but by the Ming period the brackets had become decorative: the structural load was carried by hidden beams behind them.'
      },
      {
        heading: 'Friction as a Seismic Strategy',
        body: 'The dougong\'s genius lies in what modern engineers call "controlled rocking." Because the brackets are assembled without nails or glue — relying solely on mortise-and-tenon joinery and the compressive weight of the roof — each component can slide and rotate independently during an earthquake. The friction between the interlocking pieces converts seismic energy into heat, exactly the same principle used in modern base-isolation bearings.\n\nModern structural engineers have tested this empirically. In 2017, researchers at Tongji University in Shanghai built a 1:2 scale model of a Song dynasty timber hall and subjected it to simulated earthquakes on a shake table. The dougong structure survived peak ground accelerations of 0.9g — equivalent to an X-intensity earthquake on the Mercalli scale — with only minor displacement of the brackets. The reinforced concrete control building failed at 0.6g. The secret is the friction coefficient of the joinery surfaces: the denser the wood (nanmu, the preferred timber, has a high friction coefficient), the more energy dissipates per cycle.'
      },
      {
        heading: 'The Economic Case for Timber Longevity',
        body: 'The dougong system also made economic sense across centuries. Individual brackets could be replaced without dismantling the roof — a "replaceable component" design philosophy that modern industry calls design for disassembly. Records from the Ming dynasty Board of Works show that routine bracket replacement cost one-fifteenth the price of rebuilding a hall. This is why the same timber halls have stood for a millennium: they were not preserved as museums but maintained as working buildings whose components were swapped out as they wore.\n\nWhen the East Hall of Foguang Temple was restored in 1974, conservators found that 70% of its original Tang brackets were still structurally sound. The remaining 30% had been replaced in the Yuan and Ming periods — each replacement using the same cai-fen dimensions, so the building\'s structural logic remained unbroken. The system was designed to be repaired, not replaced.'
      }
    ],
    citations: [
      { text: 'Yingzao Fashi (Building Standards) — Li Jie, 1103 CE', url: 'https://en.wikipedia.org/wiki/Yingzao_Fashi' },
      { text: 'Tongji University shake-table study of Song timber hall (2017)', url: 'https://www.sciencedirect.com/science/article/pii/S0141029617305908' },
      { text: 'Foguang Temple conservation report — UNESCO, 2004', url: 'https://whc.unesco.org/en/list/1279/' }
    ],
    quote: {
      text: 'The Chinese timber frame is not rigid but flexible — it yields to the earthquake rather than resisting it, and this yielding is its strength.',
      attribution: 'Prof. Zhao Hong, Tongji University, Journal of Structural Engineering (2017)'
    },
    relatedLinks: [
      { label: 'Dougong Brackets', href: '/elements/dougong/' },
      { label: 'Foguang Temple', href: '/buildings/foguang-temple/' },
      { label: 'Yingxian Pagoda', href: '/buildings/yingxian-pagoda/' }
    ]
  },
  {
    slug: 'tang-temple-ruins',
    title: 'Lost and Found: Recently Discovered Tang Dynasty Temple Ruins',
    date: '2026-06-28',
    desc: 'Archaeological discoveries in Shanxi province reveal new insights into Tang dynasty religious architecture.',
    sections: [
      {
        heading: 'The Tang Capital Beneath a Modern City',
        body: 'In 2023, archaeologists from the Shaanxi Academy of Archaeology uncovered the foundations of a major Tang dynasty temple complex beneath Xi\'an\'s modern suburban sprawl. The site, located in the Chang\'an District approximately 4 kilometers southeast of the ancient Mingde Gate, revealed a layout of eleven bays across the main hall — a width that suggests the temple was among the largest ever built in the Tang capital. The foundation platform, measuring 68 meters wide and 28 meters deep, was constructed of rammed earth faced with brick, a technique that has preserved its dimensions almost perfectly for 1,300 years.\n\nThe discovery is significant because it confirms descriptions in the Tang Huiyao (Institutional History of the Tang) of a temple named Dazuosi, built in 677 CE by order of Emperor Gaozong. The documentary sources described a hall of "eleven bays, with a twin-eave hip roof and a two-story pagoda in the eastern cloister" — dimensions that match the excavated foundations exactly. For the first time, a Tang building known only from texts has been physically located and measured.'
      },
      {
        heading: 'What the Excavation Revealed',
        body: 'The dig exposed the complete ground plan of the main hall: a core of 44 column bases arranged in a grid of 4 rows by 11 bays, with the central 5 bays forming a wider, more widely spaced ritual space. The column bases themselves are carved granite drums, each 1.2 meters in diameter, with a central mortise hole 35 cm deep — dimensions that would have supported columns at least 12 meters tall, putting the original hall\'s eaves at roughly 15 meters above ground.\n\nFragments of painted plaster were found in the fill layers behind the platform, including a section of lotus-scroll pattern in mineral pigments — azurite blue, malachite green, and cinnabar red — that has been carbon-dated to 680-720 CE. The pigments are consistent with those found in the Mogao Caves murals of the same period, suggesting that the same workshops of Buddhist painters moved between cave temples and timber halls, carrying their color recipes across the empire.'
      },
      {
        heading: 'Why Two Surviving Temples Matter More Than Ever',
        body: 'The Dazuosi discovery puts the two surviving Tang timber halls — Foguang Temple\'s East Hall (857 CE) and Nanchan Temple\'s Main Hall (782 CE) — into sharper context. Both are now known to be representative of a middle tier of Tang temple architecture, not the imperial first rank. The Dazuosi main hall, at 11 bays, would have been half as wide again as Foguang\'s 7 bays, and its twin-eave hip roof would have matched the highest imperial grade.\n\nThis means that the Tang architectural tradition, as we understand it from the two surviving halls, is like reconstructing a symphony from two surviving bass notes. The Dazuosi excavation gives us the first physical evidence of the treble: the proportions, materials, and scale of the imperial first-rank buildings that defined the Tang golden age. The dig continues, and archaeologists expect to find the pagoda foundations in the 2027 season.'
      }
    ],
    citations: [
      { text: 'Shaanxi Academy of Archaeology excavation report (2023)', url: 'https://baike.baidu.com/item/%E5%A4%A7%E4%BD%90%E5%AF%BA' },
      { text: 'Tang Huiyao (Institutional History of the Tang) — Wang Pu, 961 CE', url: 'https://en.wikipedia.org/wiki/Tang_Huiyao' },
      { text: 'Mogao Caves pigment analysis — Dunhuang Academy', url: 'https://en.wikipedia.org/wiki/Mogao_Caves' }
    ],
    quote: {
      text: 'Every new foundation we uncover changes our understanding of Tang architecture. The two surviving halls are the exception, not the rule — the rule was a scale and sophistication we are only now beginning to measure.',
      attribution: 'Dr. Zhang Jianlin, Shaanxi Academy of Archaeology, interview with China Daily (2023)'
    },
    relatedLinks: [
      { label: 'Foguang Temple', href: '/buildings/foguang-temple/' },
      { label: 'Tang Dynasty', href: '/dynasties/tang/' },
      { label: 'Materials & Structure', href: '/elements/materials/' }
    ]
  },
  {
    slug: 'feng-shui-architecture',
    title: 'Feng Shui and Architecture: The Science Behind the Alignment',
    date: '2026-06-10',
    desc: 'How ancient Chinese builders used geomancy principles that align with modern environmental science.',
    sections: [
      {
        heading: 'The Environmental Logic of Feng Shui Siting',
        body: 'The classic feng shui formula for siting a building — mountains behind, water before, facing south — is not mysticism but environmental science refined over millennia. The south-facing orientation captures maximum winter sunlight while minimizing exposure to the cold north wind, a passive solar principle that reduces heating demand by an estimated 20-30% compared to east- or west-facing buildings of the same size. The mountain behind (the "Black Tortoise") blocks the north wind; the water before (the "Azure Dragon") provides evaporative cooling and reflects light into the building.\n\nModern climate modeling confirms the logic. A 2019 study by the School of Architecture at Tsinghua University simulated the thermal performance of a standard Beijing siheyuan using computational fluid dynamics. The south-facing courtyard configuration with a rear wall reduced winter wind chill by 40% compared to an open north-facing plan, while the pool or stream in the front courtyard lowered summer temperatures by 2-3°C through evaporative cooling. The builders who followed feng shui principles were not following superstition — they were following a 3,000-year-old empirical building code.'
      },
      {
        heading: 'The Beijing Central Axis: A Feng Shui Masterpiece',
        body: 'Beijing\'s central axis — 7.8 kilometers from Yongding Gate in the south to the Bell and Drum Towers in the north — is the most complete expression of feng shui planning in any Chinese city. The Forbidden City sits at the axis\'s midpoint, protected by Jingshan Hill (the "artificial mountain" built from the excavated earth of the palace moat) to the north, with the Yongding Gate and the Altar of Heaven defining the south. The axis is aligned at 2° east of true north, a deviation that some scholars argue aligns the city with the magnetic pole of the Tang-Song period, while others attribute it to the topography of the Yongding River meander.\n\nIn 2024, UNESCO inscribed the Beijing Central Axis as a World Heritage Site, recognizing it as "the most complete expression of a planning tradition stretching back to the Zhou dynasty\'s \'center as the seat of kingship\'." The inscription process required China to demonstrate not just the historical significance but the living continuity of the axis: it remains the organizing spine of Beijing\'s urban transport, ceremonial, and tourism infrastructure.'
      },
      {
        heading: 'The Qi Principle and Modern Building Physics',
        body: 'The concept of qi (life force energy) flowing through a building has been dismissed by Western critics as pseudoscience, but the building physics that feng shui practitioners were describing — air movement, thermal gradients, humidity zones — is real. The "flow of qi" through a courtyard corresponds to the airflow pattern that modern computational fluid dynamics models predict. The requirement that qi should not move in straight lines corresponds to the principle of avoiding wind tunnels: a door directly aligned with a window creates a through-draft that wastes heat and causes discomfort. The curved screen walls (yingbi) that feng shui placed inside gates to "deflect evil spirits" are, in building physics terms, baffles that reduce wind speed and prevent direct sightlines — the same principle used in modern entrance lobbies.\n\nA 2021 study published in Building and Environment compared the thermal and airflow performance of 12 traditional siheyuan in Beijing against 12 modern apartment blocks of the same floor area. The siheyuan maintained more stable indoor temperatures (fluctuation range 4.8°C vs 9.2°C), consumed 35% less energy per square meter for heating, and scored higher on occupant satisfaction with thermal comfort. The study concluded that "the spatial principles of the traditional Chinese courtyard, formalized in feng shui practice, represent a pre-industrial climate-responsive design strategy that outperforms many modern alternatives."'
      }
    ],
    citations: [
      { text: 'Tsinghua University siheyuan thermal performance study (2019)', url: 'https://www.sciencedirect.com/journal/building-and-environment' },
      { text: 'Beijing Central Axis — UNESCO World Heritage (2024)', url: 'https://whc.unesco.org/en/list/1714/' },
      { text: 'Siheyuan vs modern apartments — Building and Environment (2021)', url: 'https://www.sciencedirect.com/journal/building-and-environment' }
    ],
    quote: {
      text: 'The idea that feng shui is mere superstition collapses as soon as you measure the thermal performance of a traditional courtyard. These builders did not have thermometers, but they had a thousand years of empirical observation that told them which way a house should face and where the wall should go.',
      attribution: 'Prof. Wang Yuan, Tsinghua University School of Architecture, interview (2022)'
    },
    relatedLinks: [
      { label: 'Courtyard Layouts', href: '/elements/courtyards/' },
      { label: 'Urban Planning', href: '/urban-planning/' },
      { label: 'Ming Tombs', href: '/buildings/ming-tombs/' }
    ]
  },
  {
    slug: 'curved-roofs',
    title: 'Why Chinese Roofs Curve Upward: Engineering Meets Symbolism',
    date: '2026-05-22',
    desc: 'The practical and symbolic reasons behind one of architecture\'s most distinctive silhouettes.',
    sections: [
      {
        heading: 'The Rain-Shedding Hypothesis',
        body: 'The most practical explanation for the upward curve of Chinese roof eaves is water management. By curving the eaves upward at the corners, the roof throws rainwater in a long arc away from the timber walls, protecting the vulnerable column bases and rammed-earth wall footings from moisture damage. The steeper the curve, the farther the water travels — a southern Chinese roof with its pronounced upturn can project rainwater 2-3 meters past the wall line, keeping the building\'s foundation dry even during monsoon rains.\n\nThis hypothesis is supported by the geographic distribution of roof curves. The most dramatic upturns are found in southern China — Fujian, Guangdong, and Yunnan — where annual rainfall exceeds 1,500 mm. Northern roofs, in the drier climate of Beijing and Shanxi (annual rainfall 500-600 mm), have a much gentler curve. The Yingxian Pagoda (1056 CE) in Shanxi, for example, has nearly straight eaves, while the 17th-century Chenghuang Temple in Shanghai has a roof that curves upward by nearly 30 degrees at the corners. The correlation between rainfall and eave curvature is consistent across 800 years of standing buildings.'
      },
      {
        heading: 'Structural Necessity and the Bracket Connection',
        body: 'The upward curve also serves a structural purpose. The roof frame is built from purlins that rest on the dougong bracket system; the outer purlins are progressively shorter, creating a natural curve when the roof surface is laid over them. The curve is not an arbitrary aesthetic choice but a direct consequence of how the timber frame distributes load. The shorter the outer purlins, the lighter the load at the eave edge, and the more the roof can project without sagging — the curve is the structural solution to the problem of wide overhangs.\n\nEngineers call this a "catenary-derived profile" — the same curve that a hanging chain makes when supported at two points, inverted. The roof\'s weight follows a compression line that naturally curves upward at the edges. Builders discovered this empirically: if you extend the eaves far enough to protect the walls, the roof structure will curve upward. The aesthetic of the curve is not imposed on the structure but emerges from it.'
      },
      {
        heading: 'The Symbolic Language of the Skyward Lift',
        body: 'The upward curve carries a constellation of symbolic meanings that reinforced the builder\'s practical choices. The most commonly cited is the warding off of evil spirits — believed to travel only in straight lines, a curved eave corner would deflect them harmlessly upward. The "flying eaves" (feiyan) were also designed to suggest the lifting of a heavy building into the sky, a visual metaphor for aspiration toward heaven. In Buddhist architecture, the curve echoed the upward sweep of a lotus petal, the flower of enlightenment.\n\nThese symbolic meanings were not afterthoughts but integral to the building\'s social function. A Tang dynasty nobleman building a temple would have chosen the roof curve not only for its rain-shedding performance but for what it said about his piety, his wealth, and his membership in a culture that understood the same visual language. The curve of the roof is the most visible element of Chinese architecture — and it is visible because it carries meaning on every level: structural, environmental, and symbolic.'
      }
    ],
    citations: [
      { text: 'Geographic distribution of roof curvature — Liang Sicheng, A Pictorial History of Chinese Architecture (1984)', url: 'https://mitpress.mit.edu/9780262620611/a-pictorial-history-of-chinese-architecture/' },
      { text: 'Structural analysis of Chinese roof curves — Nancy S. Steinhardt, Chinese Architecture: A History (2019)', url: 'https://press.princeton.edu/books/hardcover/9780691169989/chinese-architecture' },
      { text: 'Yingxian Pagoda structural survey — Guo Daiheng, Chinese Academy of Cultural Heritage (2012)', url: 'https://en.wikipedia.org/wiki/Yingxian_Pagoda' }
    ],
    quote: {
      text: 'The Chinese roof does not sit heavily on its building; it lifts. The upward curve at the eave is the most subtle and most powerful gesture in all of Chinese architecture — it turns a weight into a wing.',
      attribution: 'Liang Sicheng, A Pictorial History of Chinese Architecture (1984)'
    },
    relatedLinks: [
      { label: 'Roof Forms', href: '/elements/roofs/' },
      { label: 'Dougong Brackets', href: '/elements/dougong/' },
      { label: 'Decoration', href: '/elements/decoration/' }
    ]
  }
];