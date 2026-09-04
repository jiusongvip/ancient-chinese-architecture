export interface Element {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: string[];
  faq: { q: string; a: string }[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  image: string;
  relatedElements: { name: string; href: string }[];
}

export const elements: Element[] = [
  {
    id: 'dougong',
    name: 'Dougong Brackets',
    subtitle: 'The interlocking wooden bracket system',
    description: 'Dougong is the key interlocking bracket system that supports Chinese wooden buildings. See how it works, its history, and examples in Tang and Song structures.',
    sections: [
      { heading: 'Structural Function', body: "The dougong is named for its two parts: the dou (bowl-shaped bearing block) and the gong (curved arm). Arms stacked on blocks, blocks capping arms — each level extending further outward — transfer the roof's immense weight from the column head to the beam network, spreading the load over a wider footprint and allowing the characteristically wide, overhanging eaves of Chinese buildings.\n\nThe scale of this system in early buildings is hard to overstate. At Foguang Temple's East Hall (857 CE), the brackets rise about 2.5 meters — roughly half the column height — and project the eaves nearly 4 meters past the wall. The deeper the eaves, the more the bracket tiers multiply: the Hall of Supreme Harmony (1695) carries ten levels of projecting arms under its double eave, each tier extending the reach of the roof further outward." },
      { heading: 'Seismic Engineering', body: "The loose joinery of the dougong acts as a shock absorber during earthquakes. Because the components are fitted without nails or glue, they can slide and grind against each other when the ground shakes, converting seismic energy into friction and heat — the same principle behind modern base isolators that let skyscrapers ride out earthquakes.\n\nThe record speaks for itself: the Yingxian Pagoda (1056 CE), built with 54 different bracket types and no metal fasteners, has survived more than 40 recorded earthquakes. In 1976, the 7.8-magnitude Tangshan quake flattened modern masonry buildings in Tianjin while the timber Guanyin Pavilion of Dule Temple (984 CE) — held together by the same joinery — stood unharmed a few blocks from the epicentral damage zone." },
      { heading: 'Decorative Evolution', body: "The dougong's role shifted dramatically across dynasties. In Tang buildings (618-907), brackets were massive, few, and purely structural — bold projections that carried the roof with visible effort. The Song dynasty's Yingzao Fashi (1103) codified eight grades of bracket size and multiplied their tiers, making the system more intricate but still load-bearing.\n\nBy the Ming-Qing period, builders moved the structural load onto hidden beams behind the bracket zone, and the dougong became largely decorative: smaller, denser, and packed with ornament. Compare the East Hall of Foguang Temple — where four mighty brackets per column bay carry everything — with the Forbidden City's Hall of Supreme Harmony, where ranks of small painted brackets frame the ceiling while concealed steel and timber do the real work. The evolution tracks the changing relationship between structure and display across 1,200 years of Chinese building." }
    ],
    features: ['No nails or glue — pure joinery', 'Acts as a seismic shock absorber', 'Each tier extends eaves further outward', 'Varies by dynasty: structural (Tang) to decorative (Qing)'],
    faq: [
      { q: 'Why doesn\'t a dougong structure fall apart without nails?', a: "The weight of the roof presses every component together — the heavier the load, the tighter the joints lock. Mortise-and-tenon connections hold each piece in place, while the compression from above keeps the assembly stable. This is why dougong is strongest under a heavy roof." },
      { q: 'How does dougong protect buildings during earthquakes?', a: "The brackets are fitted loosely rather than rigidly fixed, so when the ground shakes, the wooden components slide and grind against each other, converting seismic energy into friction and heat. This dissipation mechanism — similar to a modern base isolator — has allowed timber halls to survive quakes for over a millennium." },
      { q: 'Is dougong still used in modern Chinese architecture?', a: "Traditional dougong continues in restoration work and new temple construction, and its principles have influenced contemporary seismic design. Notable examples include the China Pavilion at the 2010 Shanghai Expo, which reinterpreted dougong geometry at a monumental scale." }
    ],
    table: {
      caption: 'How Dougong Changed Across Dynasties',
      headers: ['Period', 'Bracket Size', 'Structural Role', 'Representative Building'],
      rows: [
        ['Tang (618-907)', 'Massive and bold', 'Fully load-bearing', 'East Hall, Foguang Temple (857 CE)'],
        ['Song (960-1279)', 'Smaller, more complex', 'Still structural, more tiers', 'Longxing Temple, Hebei (971 CE)'],
        ['Ming-Qing (1368-1912)', 'Small and delicate', 'Largely decorative', 'Forbidden City, Beijing']
      ]
    },
    image: '/images/dougong.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs/' }, { name: 'Columns & Beams', href: '#' }]
  },
  {
    id: 'roofs',
    name: 'Roof Forms',
    subtitle: 'The crowning glory of Chinese architecture',
    description: 'Learn about traditional Chinese roof types: Xieshan, Wudian, Xuanshan, and the famous upturned eaves. Includes diagrams and symbolic meanings.',
    sections: [
      { heading: 'Hip Roof (Wudian)', body: 'Four sloping planes meet at a single horizontal ridge, making this the most prestigious of all roof forms. Double-eaved versions — where a second, shorter roof section projects below the main one — were reserved for the highest imperial halls, such as the Hall of Supreme Harmony (1420, rebuilt 1695). The form\'s stability and completeness symbolized the absolute authority of the ruler; no commoner building could employ it under penalty of law.\n\nThe hierarchy was enforced in practice: a Ming official named in the Veritable Records was demoted for roofing his mansion with a hip roof, and the rule survived into the Qing code. Only the emperor\'s throne halls, the most sacred temples, and — after a specific imperial grant — the main halls of a few grand Confucian academies were permitted the form. Standing before such a roof, a literate observer could read the building\'s rank instantly: the wudian is the single most powerful status symbol in Chinese architecture.' },
      { heading: 'Hip-and-Gable (Xieshan)', body: 'A hybrid that joins hip slopes on the upper portion with gable ends on the lower portion, creating a distinctive \'shouldered\' silhouette. Ranking second in the official hierarchy, it was the standard form for important buildings below the imperial summit: palaces, temples, official halls, and the mansions of princes. The Tiananmen Gate, the Drum Tower, and most main halls of Buddhist temples use the xieshan form.\n\nBecause the gable end breaks the continuous slope, builders could open windows in the upper wall — which is why the xieshan became the standard for multi-story structures like drum towers, gate towers, and the upper levels of pagodas. The double-eaved xieshan, a rung below the imperial wudian, crowns the main halls of major temples such as the Daxiongbaodian at Beijing\'s Lama Temple. In the Forbidden City itself, the side gates and secondary halls — including the Meridian Gate\'s five pavilions — all employ it, so that even the second-ranking form is still overwhelmingly imperial.' },
      { heading: 'Overhanging Gable (Xuanshan)', body: 'The gable roof whose eaves extend well beyond the end walls, sheltering the masonry and timber wall-plates from rain. This is the form of choice in southern China, where monsoon rainfall is heavy, and it was long the standard for common dwellings in the Yangtze valley — from the whitewashed water-town houses of Jiangnan to the timber-frame homes of Sichuan and Hunan.\n\nThe projecting gable ends often carry small carved ornaments — the xuanyu (\'hanging fish\') and rensui (\'kindling strips\') — that both decorate and protect the exposed rafters. The xuanyu is usually carved as a fish, a water creature chosen to protect the building from fire, and its shape changed with local fashion: simple boards in Anhui, elaborate openwork in Jiangsu. Despite its commoner status, the xuanshan remained the technical ancestor of all Chinese roofing: its deep, sheltering overhang is the form from which the imperial hip roof evolved.' },
      { heading: 'Flush Gable (Yingshan)', body: 'A gable roof whose ends stop flush with the gable walls, so the roofline is hidden behind brick parapets. The design suits the drier climate of northern China, where rain does not demand overhanging eaves, and it became the most common roof of Ming-Qing houses — including the siheyuan courtyards of Beijing.\n\nThe brick gables also served as fire barriers between tightly packed houses in city lanes: in the great conflagrations that periodically swept Beijing, a row of yingshan gables could stop a blaze from leaping house to house. Their plain parapets became a canvas for status display in Huizhou architecture, where the gable tops rise into the famous matouqiang (horse-head walls) — stepped silhouettes that climb above the roofline, still acting as fire breaks but now among the most photographed forms in Chinese vernacular building.' },
      { heading: 'Pyramidal (Cuanjian)', body: 'All slopes converge at a single point, crowned by a finial — the form used for pavilions, pagodas, and altars. The most famous example is the Hall of Prayer for Good Harvests at the Temple of Heaven (1545): a triple-eaved cuanjian roof in deep blue tile rising 38 meters as the visual climax of the altar complex.\n\nThe single-eaved version crowns countless garden pavilions across China — from the lakeside pavilions of Suzhou to the hilltop kiosks of the Summer Palace — where the finial\'s gilded orb (baoding) becomes the composition\'s focal point. The form is also the natural choice for pagodas: since all sides slope equally, the cuanjian reads the same from every direction, which is why Buddhist stupas and many octagonal pagodas adopt it. In the garden, the pyramidal roof\'s one-point convergence gives a pavilion a vertical accent that terminates a vista or marks a turn in a walkway.' }
    ],
    features: ['5 primary roof forms ranked by status', 'Curved eaves for practical and symbolic reasons', 'Ridge beasts indicate building importance', 'Yellow glaze reserved for imperial buildings'],
    faq: [
      { q: 'Why do Chinese roofs curve upward at the corners?', a: "The upturned eaves lighten the massive silhouette, direct rainwater away from the walls in long arcs, and let in more light through windows set below the eaves. Symbolically, the curve was also believed to ward off evil spirits, which were thought to travel in straight lines." },
      { q: 'What do the beasts on roof ridges mean?', a: "The ridge beasts (zoushou) are mythical guardians — dragon, phoenix, lion, and others — that protect the building from fire and evil. Their number marks rank: the Hall of Supreme Harmony carries the maximum ten, while lesser buildings have fewer, always in an odd-numbered sequence ending with a horseman." },
      { q: 'Why is yellow reserved for imperial roofs?', a: "In Chinese cosmology, yellow symbolizes the center of the universe and the element earth — the emperor's place at the center of the world. Yellow-glazed tiles were therefore restricted to imperial buildings; temples used blue (heaven), princes used green, and commoners used grey." }
    ],
    table: {
      caption: 'The Five Roof Forms at a Glance',
      headers: ['Form', 'Chinese Name', 'Distinguishing Feature', 'Status', 'Famous Example'],
      rows: [
        ['Hip roof', 'Wudian (庑殿顶)', 'Four slopes meeting at a single ridge', 'Highest — imperial halls only', 'Hall of Supreme Harmony, Forbidden City'],
        ['Hip-and-gable', 'Xieshan (歇山顶)', 'Hip slopes above, gable ends below', 'Second rank — palaces, temples', 'Tiananmen Gate, Beijing'],
        ['Overhanging gable', 'Xuanshan (悬山顶)', 'Eaves project beyond the end walls', 'Common — rainy southern China', 'Jiangnan water-town houses'],
        ['Flush gable', 'Yingshan (硬山顶)', 'Gable ends flush with the walls', 'Common — dry northern China', 'Siheyuan houses, Beijing hutongs'],
        ['Pyramidal', 'Cuanjian (攒尖顶)', 'Slopes converging to a single point', 'Pavilions, pagodas, altars', 'Hall of Prayer for Good Harvests']
      ]
    },
    image: '/images/roof-forms.webp',
    relatedElements: [{ name: 'Dougong Brackets', href: '/elements/dougong/' }, { name: 'Decorative Motifs', href: '/elements/decoration/' }]
  },
  {
    id: 'courtyards',
    name: 'Courtyard Layouts',
    subtitle: 'Harmony between heaven and earth',
    description: 'Discover the traditional Siheyuan courtyard: its layout, orientation rules, Feng Shui principles, and how it shaped Chinese family life for centuries.',
    sections: [
      { heading: 'The Siheyuan', body: "The classic Beijing courtyard house arranges four buildings around a central open space: a main hall (zhengfang) facing south for the head of the family, east and west side halls (xiangfang) for sons by seniority — the east taking precedence over the west — and a reverse hall (daozuofang) for servants and guests along the street side. The size and number of courtyards reflected the owner's wealth and rank: a commoner was limited to one courtyard and a 3-bay main hall, while a high official could build two to four linked courtyards with 5-bay halls.\n\nThe plan is passive solar engineering. The south-facing main hall admits low winter sun while the building mass blocks the cold north wind; in summer, deep eaves and the shaded courtyard keep rooms cool. The courtyard itself served as outdoor living room, garden, light well, and the symbolic center of the family — a private sky framed by the rooftops of the household." },
      { heading: 'Palace Compounds', body: "Imperial palace layouts multiply the courtyard principle to monumental scale. The Forbidden City contains roughly 90 courtyards arranged along a strict north-south axis; each successive courtyard leads deeper into increasingly restricted space — from the vast public plazas of the Outer Court, where 10,000 officials knelt during audiences, to the intimate walled gardens and chambers of the Inner Court.\n\nThe hierarchy is encoded in the ground plan itself: wider courtyards, taller halls, and deeper platforms mark each step up the scale of power. The emperor's private quarters sat at the precise center of the complex, ringed by layer after layer of walls, gates, and courtyards that controlled access — a spatial diagram of absolute monarchy. The same logic repeats at every level of society, from the largest palace to the humblest single-courtyard home." },
      { heading: 'Temple Layouts', body: "Buddhist and Daoist temples adapted the courtyard model with their own sequence: a mountain gate (shanmen), a bell tower and drum tower facing each other across the first courtyard, a Hall of Heavenly Kings, then the main hall (dadian) housing the principal Buddha or deity, and finally a sutra repository. Side halls flank each courtyard, so the visitor advances through a chain of open spaces toward the sacred core — the same progressive revelation used in palaces, applied to the approach of worship.\n\nThe layout also served practical monastic life: the courtyards provided open-air gathering space for festivals, drying space for grain and laundry, and light and ventilation for the surrounding halls. Whether at the great monasteries of Wutai Mountain or a village temple, the rhythm is identical — gate, courtyard, hall, courtyard, hall — a modular system of sacred space that Buddhist builders carried across all of East Asia, from Japan to Vietnam." }
    ],
    features: ['North-south axis with south-facing main halls', 'Courtyard size reflects social rank', 'Screen walls (yingbi) at entrances for privacy', 'Gardens integrated into residential courtyards'],
    faq: [
      { q: 'Why do Chinese courtyard houses face south?', a: "South-facing orientation is passive solar design: in winter the low sun streams into the main hall from the south, while the building's mass blocks the cold north wind; in summer the deep eaves shade the interior. This principle — recorded in the Book of Changes 3,000 years ago — also applied to palaces, temples, and cities." },
      { q: 'What is a yingbi (screen wall) for?', a: "The screen wall just inside the gate blocks direct sightlines into the courtyard, preserving family privacy, and intercepts evil spirits, which were believed to travel only in straight lines. It also shelters the entrance from wind and displays the family's status through its materials and decoration." },
      { q: 'How many courtyards did an official\'s mansion have?', a: "Courtyard count was regulated by rank: commoners were limited to one, officials could have several along the axis, and the emperor's palace — the Forbidden City — contains roughly 90 courtyards. Each courtyard marked a more private layer of the household." }
    ],
    table: {
      caption: 'Courtyard Scale by Social Rank',
      headers: ['Owner', 'Courtyards Allowed', 'Hall Width', 'Example'],
      rows: [
        ['Commoner family', '1 courtyard', '3 bays', 'Beijing siheyuan'],
        ['High official', '2-4 courtyards', '5 bays', 'Prince Gong Mansion, Beijing'],
        ['Emperor', 'Dozens of courtyards', '11 bays', 'Forbidden City (980 buildings)']
      ]
    },
    image: '/images/courtyard.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs/' }, { name: 'Decorative Motifs', href: '/elements/decoration/' }]
  },
  {
    id: 'decoration',
    name: 'Decorative Motifs',
    subtitle: 'Symbolism in color, pattern, and figure',
    description: 'From dragon carvings to imperial yellow glaze, discover the symbolism behind Chinese architectural decoration. Includes roof beast meanings and color rules.',
    sections: [
      { heading: 'Color Symbolism', body: "Colors in Chinese architecture follow a strict hierarchy rooted in the Five Elements (wuxing) cosmology: blue-green (wood, east, spring), red (fire, south, summer), yellow (earth, center), white (metal, west, autumn), and black (water, north, winter). Yellow — the color of the center — was reserved for the emperor, and yellow-glazed roofs still mark the Forbidden City's principal halls against the grey city around them.\n\nRed, the color of fire and vitality, was believed to repel evil and was used for palace walls, columns, and gates across China — the vermillion columns of the Hall of Supreme Harmony and the Red Wall of the Forbidden City are the most famous examples. Blue symbolized heaven, so temple and altar roofs — like the Hall of Prayer for Good Harvests — were tiled in blue, while green glazes distinguished the mansions of princes from imperial yellow. The system was enforced by law: using a color above your rank was a crime." },
      { heading: 'Ridge Beasts (Zoushou)', body: "The row of mythical beasts marching along the roof ridge is the most direct visual index of a building's rank. The sequence is fixed — a rider on a chicken leads, followed by dragon, phoenix, lion, heavenly horse, sea horse, suanni, xiezhi, douniu, and xingshi — and the number of beasts placed after the rider marked the building's importance. The Hall of Supreme Harmony carries the maximum ten; the imperial gates of the Forbidden City use nine; lesser palace halls seven; and ordinary buildings none at all.\n\nThe beasts are not decoration but talismans. The dragon summons rain to extinguish fire, the phoenix wards off misfortune, the lion embodies courage, and the fish-tailed xiezhi is the guardian of justice — each is also a ridge weight, pinning down the heavy glazed tile ridge-caps against wind. Their practical role is architectural: by weighting the ridge ends, they hold the roof structure together and prevent the sweeping eaves from lifting in storms." },
      { heading: 'Painted Beams (Caihua)', body: "The decorative painting of structural beams — caihua — is the largest continuous art surface in Chinese architecture, and it serves a double purpose: the layers of mineral pigment, lacquer, and oil seal the timber against moisture, insects, and decay, dramatically extending the life of the frame; the patterns simultaneously announce the building's rank.\n\nQing dynasty painting was classified into three grades: hexi (dragon-and-phoenix with gold) for imperial buildings, xuanzi (spiral-scroll patterns) for temples and official halls, and su (landscape-and-figure scenes) for gardens and private homes. The most elaborate caihua covers every beam of the Hall of Supreme Harmony in gold-dragon hexi style, while the Summer Palace's Long Corridor carries 14,000 su-style scenes of landscapes and stories — the largest painted gallery in the world. Beneath the artistry, the logic is strictly legal: paint above your rank was as illegal as building above it." }
    ],
    features: ['Color hierarchy: Yellow > Red > Green > Blue', 'Ridge beasts indicate building rank', 'Painted beams protect and decorate', 'Guardian lions at important entrances'],
    faq: [
      { q: 'What is the dragon\'s role in architectural decoration?', a: "The dragon symbolizes imperial power, rain, and good fortune. Five-clawed dragons were reserved for the emperor and his buildings, while princes could use four claws and officials only three. Dragon motifs appear on roof ridges, beams, columns, and carved balustrades throughout the Forbidden City." },
      { q: 'Do the painted beams (caihua) serve any practical purpose?', a: "Yes — the layers of mineral pigment and lacquer seal the timber against moisture, insects, and decay, dramatically extending the life of structural wood. The decorative patterns follow strict rank-based categories: dragon-and-phoenix for imperial halls, floral scrolls for temples, and geometric designs for lesser buildings." },
      { q: 'Why are guardian lions always in pairs?', a: "A pair sits at each important gate: the male lion with a ball under his paw symbolizes power and the universe, the female with a cub symbolizes fertility and family protection. Their fierce expressions are meant to frighten evil influences away from the threshold." }
    ],
    table: {
      caption: 'The Color Hierarchy of Chinese Architecture',
      headers: ['Color', 'Meaning', 'Who Could Use It', 'Where to See'],
      rows: [
        ['Yellow', 'Center of the universe, imperial power', 'The emperor alone', 'Forbidden City roofs'],
        ['Red', 'Happiness, good fortune, vitality', 'Palaces, temples, wealthy homes', 'Palace walls and columns'],
        ['Blue / black', 'Heaven, the sky', 'Temples and imperial altars', 'Hall of Prayer for Good Harvests roof'],
        ['Green', 'Growth, spring, harmony', 'Princely mansions and officials', 'Prince mansions of Beijing']
      ]
    },
    image: '/images/decoration.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs/' }, { name: 'Courtyard Layouts', href: '/elements/courtyards/' }]
  },
  {
    id: 'materials',
    name: 'Materials & Structure',
    subtitle: 'Wood, rammed earth, brick and the timber frame',
    description: 'What materials built ancient China? Explore wood, hangtu (rammed earth), brick, and glazed tiles. Learn how climate and culture shaped material choices.',
    sections: [
      { heading: 'The Timber Frame', body: 'Unlike the load-bearing masonry walls of the West, Chinese buildings were supported entirely by an internal skeleton of timber columns and beams. Walls did not carry weight — they merely enclosed space. This allowed builders to vary window openings freely and made the structure remarkably resilient: during earthquakes, the flexible frame could sway and absorb energy while masonry walls would crack.\n\nThe timber frame was assembled with mortise-and-tenon joints and wooden pegs, without nails or glue. The proof of the system is written in disaster records: during the 1976 Tangshan earthquake, the 984 CE timber Guanyin Pavilion of Dule Temple stood intact while concrete buildings collapsed around it, and the 67-meter Yingxian Pagoda has absorbed more than 40 recorded earthquakes in 970 years. The oldest surviving frame, the East Hall of Foguang Temple (857 CE), still stands 1,100 years after construction — and its columns, like all Chinese columns, were not fixed to the foundation but simply seated on stone plinths, free to shift slightly without cracking.' },
      { heading: 'Rammed Earth and Foundations', body: 'Before the first timber column was raised, builders laid a platform of hangtu — rammed earth — created by compacting layers of soil, gravel, and lime between wooden forms. These platforms elevated buildings above damp ground and floodwater and provided a stable, level base. The technique dates back to the Shang dynasty (1600-1046 BCE) and was used for everything from humble dwellings to the Great Wall and the monumental foundations of the Ming Tombs.\n\nRammed earth is extraordinarily durable: sections of the Wall built over 2,000 years ago still stand today, and the platform under the Forbidden City\'s Hall of Supreme Harmony has carried the hall\'s weight for six centuries without measurable settlement. In the Fujian tulou, the same technique rose to house-scale fortresses with walls two meters thick, and modern engineers have tested hangtu compositions that rival weak concrete in compressive strength. The Chinese saying \'a building is only as good as its foundation\' (geng gao gai lou, di ji yao lao) is literal engineering doctrine.' },
      { heading: 'The Cai-Fen Modular System', body: "By the Song dynasty (960-1279 CE), Chinese construction had evolved into a fully modular system. The Yingzao Fashi (1103 CE) specified that all building dimensions — column height, beam span, roof slope, bracket size — derived from a single standard timber cross-section called the cai. This meant components could be prefabricated in workshops, assembled on site, and scaled up or down while preserving proportional harmony. A peasant's house and the emperor's throne hall used the same system, differing only in the size of the base module. This modularity was the key to building the Forbidden City's 980 structures in just 14 years." },
      { heading: 'Brick, Stone and Glazed Tile', body: "While wood dominated structure, brick and stone served specialized roles. Fired clay bricks appeared in the Warring States period and became essential for tombs, fortifications, and pagodas — the Giant Wild Goose Pagoda (652 CE) is built entirely of brick. Glazed ceramic roof tiles, in imperial yellow and temple blue, protected wooden rafters from rain while announcing the building's status. Stone was reserved for bases, balustrades, and bridges, where its weight and permanence were assets. The Zhaozhou Bridge (605 CE) demonstrates that in stone, Chinese builders achieved engineering feats unmatched elsewhere in the world." }
    ],
    features: ['Timber frame with mortise-and-tenon joints — no nails', 'Rammed earth (hangtu) foundations since the Shang dynasty', 'Cai-fen modular system standardized all dimensions', 'Glazed roof tiles for protection and status', 'Brick pagodas and stone bridges as specialized types'],
    faq: [
      { q: 'Why did the Chinese build in wood instead of stone like the West?', a: "Wood was abundant, quick to work, and suited to the region's earthquakes — a flexible timber frame survives shaking that shatters rigid masonry. Symbolically, wood was also associated with life and growth, while the annual rebuilding of palaces reflected cyclical renewal. Stone was reserved for tombs, bridges, and bases, where permanence was wanted." },
      { q: 'How do mortise-and-tenon joints compare to nails?', a: "Joints distribute stress across the whole member and allow controlled flex, so the frame sways rather than snaps in earthquakes; nails concentrate stress and corrode over centuries. Wooden pegs can also be removed, letting ancient buildings be dismantled and rebuilt — a key reason so many timber halls survive." },
      { q: 'What is the cai-fen system in simple terms?', a: "The Yingzao Fashi (1103 CE) defined one standard timber cross-section — the cai — and derived every dimension of a building from it: column height, beam span, bracket depth, roof slope. Like modern modular construction, components were prefabricated to fit together, which is how the Forbidden City's 980 buildings rose in just 14 years." }
    ],
    table: {
      caption: 'Materials and Their Roles',
      headers: ['Material', 'Primary Use', 'Notable Example'],
      rows: [
        ['Timber', 'Structural frame — columns, beams, brackets', 'Foguang Temple East Hall (857 CE)'],
        ['Rammed earth', 'Foundations, city walls, tulou walls', 'Great Wall Qin sections; Fujian tulou'],
        ['Brick', 'Pagodas, fortifications, tomb vaults', 'Giant Wild Goose Pagoda (652 CE)'],
        ['Stone', 'Bases, balustrades, bridges', 'Zhaozhou Bridge (605 CE)'],
        ['Glazed tile', 'Roof covering and status display', 'Forbidden City yellow roofs']
      ]
    },
    image: '/images/materials.webp',
    relatedElements: [{ name: 'Dougong Brackets', href: '/elements/dougong/' }, { name: 'Roof Forms', href: '/elements/roofs/' }]
  },
  {
    id: 'vernacular',
    name: 'Vernacular Houses',
    subtitle: 'Courtyard homes, tulou, cave dwellings and stilt houses',
    description: "Beyond palaces and temples lies the architecture of ordinary people — the vernacular tradition that adapted China's diverse climates and cultures into hundreds of local house forms. The courtyard house (siheyuan) of the north, the circular earthen fortresses (tulou) of Fujian, the cave dwellings (yaodong) of the Loess Plateau, and the stilt houses (diaojiaolou) of the south each solved the same problem — shelter — with radically different solutions. These traditions preserve some of the oldest continuous building practices on earth and were recognized by UNESCO for their cultural significance.",
    sections: [
      { heading: 'The Courtyard House', body: 'The siheyuan of Beijing and northern China arranged four buildings around a central courtyard: a south-facing main hall for the head of the family, east and west side halls for children by seniority, and a southern reverse hall for servants and guests. The south-facing main hall captured winter sun and deflected cold northern winds — passive solar design centuries before the term existed. A screen wall (yingbi) inside the gate blocked evil spirits (which were believed to travel only in straight lines) and preserved family privacy. The courtyard itself was outdoor living room, light well, and the symbolic center of the family.' },
      { heading: 'The Tulou of Fujian', body: 'In the mountains of southeastern Fujian, the Hakka people built tulou — massive circular or square earthen fortresses housing entire clans of 300 to 800 people. Built from rammed earth walls up to two meters thick, they were designed for defense against bandits and clan warfare: a single iron-plated door guarded the ground floor, which had no windows. The interior rose in concentric rings of wooden galleries around a central ancestral hall. Forty-six tulou were declared UNESCO World Heritage Sites in 2008, recognized as outstanding examples of human settlement planning that combine defense, community, and environmental harmony.' },
      { heading: 'Cave Dwellings of the Loess Plateau', body: 'In the arid loess highlands of Shanxi, Shaanxi, and Gansu, generations of farmers carved homes directly into the soft loess cliffs. The yaodong — cave dwelling — is a single chamber hollowed out of the earth, barrel-vaulted for strength and finished with plastered walls. These homes maintain a near-constant temperature of 15°C year-round, need no heating in winter or cooling in summer, and cost almost nothing to build. More than 30 million people still live in cave dwellings today, making yaodong one of the oldest and most sustainable housing forms in continuous use on earth.' },
      { heading: 'Stilt Houses and River Towns', body: 'In the humid south and southwest — along the Yangtze and its tributaries, in Yunnan and Guangxi — houses are raised on stilts (diaojiaolou) to escape flooding, snakes, and damp ground. The Miao, Dong, and Zhuang peoples built entire villages of stilt houses on steep hillsides and riverbanks. In the river towns of Jiangnan — like Zhouzhuang and Wuzhen — whitewashed houses with dark tiled roofs crowd the canals, their reflections creating the image that defines Chinese water towns. The Huizhou style of Anhui adds towering white gable walls (matouqiang) that rise above the roof line to prevent fires from spreading between tightly packed houses.' }
    ],
    features: ['Siheyuan courtyard house — passive solar design', 'Fujian tulou — clan fortresses of rammed earth', 'Yaodong cave dwellings — 30M+ people still live in them', 'Stilt houses (diaojiaolou) of the humid south', 'Huizhou horse-head gable walls'],
    faq: [
      { q: 'Why are Fujian tulou built in a circle?', a: "The circular plan was defense and community in one: the windowless exterior wall (up to 2 meters thick) faces the outside world, while the interior galleries face a central ancestral hall — maximizing clan cohesion and mutual protection. The round form also distributes wind and seismic loads evenly, making tulou unusually earthquake-resistant." },
      { q: 'How do cave dwellings (yaodong) stay warm in winter and cool in summer?', a: "The surrounding earth acts as a thermal mass — 2-3 meters of soil insulates the chamber so well that interior temperature stays near 15°C year-round, regardless of outside extremes. This near-zero-energy comfort is why more than 30 million people still live in yaodong today." },
      { q: 'Can you still stay in a traditional siheyuan in Beijing?', a: "Yes — many restored hutong courtyard houses operate as boutique hotels and guesthouses. A handful of original single-courtyard homes are also open as museums, letting visitors experience the layout that shaped Chinese family life for two millennia." }
    ],
    table: {
      caption: "China's Major Vernacular House Types",
      headers: ['Type', 'Region', 'Key Feature', 'Heritage Status'],
      rows: [
        ['Siheyuan', 'Beijing and the north', 'Courtyard plan with south-facing main hall', '—'],
        ['Tulou', 'Fujian (Hakka)', 'Circular rammed-earth clan fortress', 'UNESCO 2008 (46 sites)'],
        ['Yaodong', 'Loess Plateau (Shaanxi, Shanxi, Gansu)', 'Cave dwelling, ~15°C year-round', '—'],
        ['Diaojiaolou', 'Yunnan, Guangxi, Guizhou', 'Stilt house raised above flood and damp', '—'],
        ['Huizhou houses', 'Anhui, Jiangxi', 'White walls, horse-head gables, skywells', 'UNESCO 2000 (Xidi and Hongcun)']
      ]
    },
    image: '/images/vernacular.webp',
    relatedElements: [{ name: 'Courtyard Layouts', href: '/elements/courtyards/' }, { name: 'Materials & Structure', href: '/elements/materials/' }]
  }
];
