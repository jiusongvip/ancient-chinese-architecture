export interface Dynasty {
  id: string;
  name: string;
  years: string;
  description: string;
  summary: string;
  features: string[];
  image: string;
  notableBuildings: { name: string; href: string }[];
  sections: { heading: string; body: string }[];
}

export const dynasties: Dynasty[] = [
  {
    id: 'shang',
    name: 'Shang',
    years: '1600-1046 BCE',
    description: 'The Shang dynasty marks the earliest period of Chinese architecture with surviving archaeological evidence. Builders used rammed-earth foundations (hangtu) and developed early timber-frame structures. Large palace complexes at sites like Erlitou and Yinxu reveal sophisticated urban planning, with buildings arranged on north-south axes — a pattern that would define Chinese architecture for millennia. The Shang also pioneered the use of bronze in architectural fittings, creating elaborate door-knockers, hinges, and ritual vessels embedded in building foundations during consecration ceremonies.',
    summary: 'Rammed earth foundations, early timber frames, and the first north-south axial planning.',
    features: ['Rammed-earth (hangtu) foundations', 'Timber post-and-beam construction', 'North-south axial orientation', 'Large ceremonial platforms', 'Earliest bronze architectural fittings'],
    image: '/images/dynasty-shang.webp',
    notableBuildings: [{ name: 'Yinxu (Yin Ruins)', href: 'https://whc.unesco.org/en/list/1114/' }, { name: 'Erlitou Site', href: 'https://en.wikipedia.org/wiki/Erlitou_culture' }],
    sections: [
      { heading: 'Foundations of Chinese Architecture', body: 'The Shang dynasty laid the physical and conceptual foundations of Chinese architecture. The technique of hangtu — rammed earth — involved compacting layers of soil, gravel, and lime between wooden forms to create extraordinarily durable platforms and walls. These platforms elevated important buildings above the ground, a practice that persisted through every subsequent dynasty. Archaeological excavations at Yinxu (near modern Anyang) have revealed palace foundations measuring up to 40 by 60 meters, with post holes indicating sophisticated timber column grids.' },
      { heading: 'Urban Planning and Ritual Space', body: 'Shang cities were not haphazard settlements but carefully planned ceremonial centers. Buildings were arranged along north-south axes, with the most important structures — ancestral temples and royal residences — occupying the central position. This axial orientation reflected early Chinese cosmological beliefs linking the earthly realm to the celestial pole. Oracle bone inscriptions from Shang sites record precise details about construction rituals, including the sacrificial offerings made when laying building foundations.' },
      { heading: 'Materials and Construction', body: 'Shang builders worked primarily in timber and rammed earth, but their most distinctive architectural contribution was the integration of bronze. Bronze door fittings, hinge-posts, and ritual vessels were embedded in building foundations during consecration ceremonies. The Shang also developed early roof tiles from fired clay, though these were reserved for the most important structures. Thatched roofs remained common for ordinary buildings, supported by timber posts set directly into rammed-earth foundation trenches.' }
    ]
  },
  {
    id: 'zhou',
    name: 'Zhou',
    years: '1046-256 BCE',
    description: 'The Zhou dynasty codified architectural principles that became central to Chinese building tradition. The concept of the courtyard compound (siheyuan) matured, and strict building regulations tied architectural scale and decoration to social rank. Roof tiles appeared, and the dougong bracket system began to take recognizable form. The Zhou also produced the first written building codes, known from bronze inscriptions and bamboo texts, which specified everything from column spacing to the permissible number of courtyards for each rank of nobility.',
    summary: 'Codified courtyard compounds, social-rank building regulations, and the emergence of roof tiles.',
    features: ['Courtyard compound (siheyuan) standardization', 'Rank-based building codes', 'Ceramic roof tiles', 'Early dougong bracket prototypes', 'Rammed-earth city walls'],
    image: '/images/dynasty-zhou.webp',
    notableBuildings: [{ name: 'Zhou Royal City (Haojing)', href: 'https://en.wikipedia.org/wiki/Haojing' }],
    sections: [
      { heading: 'The Birth of Building Codes', body: 'The Zhou dynasty formalized architecture through the ritual text Zhou Li (Rites of Zhou), which prescribed building dimensions, decoration, and layout according to strict social hierarchy. A feudal lord\'s main hall could not exceed the emperor\'s in width or height; the number of courtyards, the type of roof tiles, and even the color of painted columns were regulated by rank. This codification ensured that architecture visually reinforced the social order — a principle that would govern Chinese building for three millennia.' },
      { heading: 'The Siheyuan Courtyard House', body: 'The classic Chinese courtyard house took its mature form during the Zhou. A siheyuan consisted of buildings arranged around a central open space, with the main hall facing south to capture winter sunlight and deflect cold northern winds. Side halls housed family members according to seniority, while the southern building served as an entrance and servants\' quarters. This layout was not merely practical — it embodied Confucian family hierarchy and the cosmological relationship between earth (the courtyard) and the surrounding structures.' },
      { heading: 'City Walls and Defense', body: 'Zhou cities were defined by their walls — massive rammed-earth fortifications that could reach 10 meters in height and 20 meters in thickness at the base. The capital city of Haojing was surrounded by a rectangular wall punctuated by gates aligned with the cardinal directions. Within the walls, a grid of streets organized the city into wards, with the royal palace occupying the center. This wall-grid-palace pattern became the template for Chinese urban design, visible in cities from Chang\'an to Beijing.' }
    ]
  },
  {
    id: 'qin',
    name: 'Qin',
    years: '221-206 BCE',
    description: 'Though brief, the Qin dynasty transformed Chinese architecture through unprecedented scale and standardization. Qin Shi Huang unified not only the empire but its building practices. The Great Wall was linked into a continuous defensive system, and monumental projects like the Epang Palace and the emperor\'s mausoleum with its terracotta army demonstrated imperial ambition in built form. The Qin introduced standardized bricks and tiles across the empire, enforced uniform axle widths for roads, and built an extensive network of imperial highways stretching over 6,800 kilometers.',
    summary: 'Unprecedented monumental scale, standardization, and the first unified Great Wall.',
    features: ['Monumental imperial scale', 'Standardized building components', 'Great Wall unification', 'Underground tomb complexes', 'Avenue-grid urban planning'],
    image: '/images/dynasty-qin.webp',
    notableBuildings: [{ name: 'Great Wall (early sections)', href: '/buildings/great-wall' }, { name: 'Epang Palace (ruins)', href: 'https://en.wikipedia.org/wiki/Epang_Palace' }, { name: 'Mausoleum of the First Emperor', href: 'https://whc.unesco.org/en/list/441/' }],
    sections: [
      { heading: 'Standardization at Imperial Scale', body: 'Qin Shi Huang\'s unification of China extended to architecture through enforced standardization. Bricks, tiles, and building components were manufactured to uniform specifications across the empire, enabling rapid construction and repair of imperial projects. This standardization was more than practical efficiency — it was a statement of imperial control, replacing the diverse regional building traditions of the Warring States period with a single, empire-wide architectural language.' },
      { heading: 'The Terracotta Army and Underground Architecture', body: 'The mausoleum of Qin Shi Huang, discovered in 1974 near Xi\'an, represents the most ambitious underground architectural project in Chinese history. The tomb complex covers approximately 56 square kilometers and includes not only the famous terracotta warriors but also bronze chariots, subterranean palaces, and mercury-filled rivers representing the waterways of China. The main tomb chamber, still unexcavated, is described in historical texts as containing a bronze-sheathed palace ceiling inlaid with pearls representing the constellations.' },
      { heading: 'Roads and Infrastructure', body: 'The Qin built China\'s first imperial highway network, with standardized road widths and post stations spaced at regular intervals. These roads connected the capital at Xianyang to the farthest reaches of the empire, enabling rapid military movement and administrative control. The Qin also standardized canal construction, linking the Yangtze and Pearl River systems to create a water transport network that would serve Chinese commerce for two millennia.' }
    ]
  },
  {
    id: 'han',
    name: 'Han',
    years: '206 BCE-220 CE',
    description: 'The Han dynasty saw Chinese architecture flourish in sophistication and variety. Multi-story watchtowers and pagodas appeared, ceramic roof tiles became widespread, and the dougong bracket system matured. Tomb architecture reached new heights with underground palace complexes, while above ground, the first Buddhist structures entered China from India along the Silk Road. Han architects perfected the que — monumental gate towers that flanked palace and tomb entrances, creating dramatic visual markers for important buildings.',
    summary: 'Multi-story towers, mature dougong, ceramic roofing, and the arrival of Buddhist architecture.',
    features: ['Multi-story towers (que)', 'Mature dougong brackets', 'Glazed ceramic roof tiles', 'Underground tomb palaces', 'Early Buddhist stupas and halls'],
    image: '/images/dynasty-han.webp',
    notableBuildings: [{ name: 'Han Weiyang Palace', href: 'https://en.wikipedia.org/wiki/Weiyang_Palace' }, { name: 'Baima Temple', href: 'https://en.wikipedia.org/wiki/White_Horse_Temple' }],
    sections: [
      { heading: 'Multi-Story Architecture', body: 'The Han dynasty pioneered vertical architecture in China. Multi-story watchtowers (que) — often built as paired gate towers flanking palace and tomb entrances — could reach four or five stories, constructed with timber frames infilled with rammed earth or brick. Clay tomb models (mingqi) from Han burials provide detailed evidence of these buildings, showing balconies, bracket sets, and tiled roofs on structures that no longer survive above ground. The development of mature dougong bracketing made multi-story construction structurally feasible by distributing the weight of upper floors.' },
      { heading: 'Buddhist Architecture Arrives', body: 'The arrival of Buddhism along the Silk Road in the 1st century CE introduced entirely new building types to China. The White Horse Temple (Baima Si) in Luoyang, built in 68 CE, is traditionally recognized as the first Buddhist temple in China. Its architecture adapted Indian stupa and vihara forms to Chinese building techniques, creating a hybrid style that would evolve into the iconic Chinese pagoda. Buddhist architecture brought with it new spatial concepts — the circumambulation path around a central stupa, the assembly hall for monastic chanting, and the progressive revelation of sacred space through sequential courtyards.' },
      { heading: 'Tomb Architecture and the Afterlife', body: 'Han tombs were conceived as underground palaces for the deceased, complete with living quarters, kitchens, stables, and entertainment spaces. The most elaborate tombs featured vaulted brick ceilings, stone-carved doorways, and wall paintings depicting the daily life of the deceased. Inscriptions and ceremonial objects placed within tombs provide invaluable evidence of Han building practices, since most above-ground structures from this period have been lost. The que towers that marked tomb entrances were scaled-down versions of the gate towers at real palaces, ensuring the deceased maintained their status in the afterlife.' }
    ]
  },
  {
    id: 'tang',
    name: 'Tang',
    years: '618-907 CE',
    description: 'The Tang dynasty represents the golden age of Chinese architecture. Bold proportions, sweeping roofs with dramatically overhanging eaves, and powerful, masculine structural expression define the style. The oldest surviving timber-frame building in China — the main hall of Nanchan Temple (782 CE) — dates from this period. Tang architecture influenced building traditions across East Asia, from Japan\'s Nara to Korea\'s Silla. The Tang capital of Chang\'an, with its population exceeding one million, was the largest and most meticulously planned city in the medieval world, laid out on a grid of 108 wards.',
    summary: 'The golden age: bold proportions, dramatic eaves, and the oldest surviving timber structures.',
    features: ['Bold, masculine proportions', 'Wide overhanging eaves', 'Seven-tier dougong systems', 'Red-and-white color scheme', 'Raised stone platforms (xumizuo)', 'Hipped roofs on important halls'],
    image: '/images/dynasty-tang.webp',
    notableBuildings: [{ name: 'Nanchan Temple', href: 'https://en.wikipedia.org/wiki/Nanchan_Temple' }, { name: 'Foguang Temple', href: '/buildings/foguang-temple' }, { name: 'Great Wild Goose Pagoda', href: 'https://whc.unesco.org/en/list/1442/' }],
    sections: [
      { heading: 'The Golden Age of Proportion', body: 'Tang architecture is characterized by bold, confident proportions. Columns are thick and widely spaced, roofs sweep outward in dramatic overhangs, and the overall composition conveys strength and monumentality. The dougong brackets of Tang buildings are massive and primarily structural, transferring roof weight directly to columns — unlike later periods where brackets became smaller and more decorative. This structural honesty gives Tang buildings their distinctive character: powerful, unadorned, and architecturally legible.' },
      { heading: 'Chang\'an: The Medieval Megacity', body: 'The Tang capital of Chang\'an (modern Xi\'an) was the largest planned city in the medieval world. Organized on a strict grid of streets dividing the city into 108 walled wards, Chang\'an was home to over one million residents. The Imperial Palace occupied the northern center, aligned with the celestial pole, while the Imperial City to its south housed government offices. Two vast market districts — the Eastern and Western Markets — served as commercial hubs where merchants from across Asia traded goods. The city\'s layout directly influenced the design of Kyoto and Nara in Japan, as well as other East Asian capitals.' },
      { heading: 'Tang Architecture Beyond China', body: 'Tang architectural influence radiated across East Asia through diplomatic missions, Buddhist pilgrimages, and trade. Japanese envoys to the Tang court returned with architectural drawings and building manuals, resulting in Tang-style monasteries at Horyu-ji and Toshodai-ji in Nara. Korean builders under the Silla dynasty adopted Tang proportions and bracket systems. Even the Tibetan Empire incorporated Tang architectural elements, creating a distinctive Sino-Tibetan style visible in the Jokhang Temple in Lhasa. This international diffusion made Tang architecture the first truly pan-East Asian style.' },
      { heading: 'Materials and Construction Methods', body: 'Tang builders refined the timber frame to its classical form. The seven-tier dougong system (with brackets stacked in seven layers) was standardized for the most important buildings. Columns were often made from nanmu (Phoebe zhennan), a precious hardwood resistant to insects and moisture. Walls were typically plastered and painted red, contrasting with white columns and blue-green bracket details. The raised stone platform (xumizuo), derived from Buddhist altar designs, elevated important halls and visually separated sacred space from the surrounding ground.' }
    ]
  },
  {
    id: 'song',
    name: 'Song',
    years: '960-1279 CE',
    description: 'Song dynasty architecture turned from Tang boldness toward refined elegance. Roofs grew steeper with more pronounced upward-curving eaves, and dougong brackets became smaller but far more intricate — sometimes purely decorative. The Yingzao Fashi, an official building manual published in 1103, standardized construction across the empire. Garden architecture flourished as an art form. Song cities broke from the rigid ward system of earlier dynasties, developing vibrant commercial streets lined with multi-story shops, restaurants, and entertainment venues.',
    summary: 'Refined elegance, intricate decorative brackets, and the first official building code.',
    features: ['Steeper, upward-curving eaves', 'Intricate multi-tier decorative dougong', 'Green-glazed roof tiles', 'Official building manual (Yingzao Fashi, 1103)', 'Flourishing garden architecture'],
    image: '/images/dynasty-song.webp',
    notableBuildings: [{ name: 'Longxing Temple', href: 'https://en.wikipedia.org/wiki/Longxing_Temple' }, { name: 'Liuhe Pagoda', href: 'https://en.wikipedia.org/wiki/Liuhe_Pagoda' }, { name: 'Suzhou Gardens', href: 'https://whc.unesco.org/en/list/813/' }],
    sections: [
      { heading: 'The Yingzao Fashi: Architecture Codified', body: 'In 1103, the Song government published the Yingzao Fashi (Treatise on Architectural Methods), the world\'s first state-issued building code. Compiled by the architect Li Jie, this comprehensive manual specified everything from timber sizing and joinery techniques to decorative painting and cost estimation. The Yingzao Fashi introduced the cai-fen modular system, where all building dimensions were derived from a standard timber cross-section measurement. This modular approach allowed prefabrication of components and standardized construction across the empire, yet permitted enough flexibility for regional variation and artistic expression.' },
      { heading: 'Garden Architecture as High Art', body: 'Song dynasty literati elevated garden design to a refined art form. Unlike the vast imperial hunting parks of earlier dynasties, Song gardens were intimate spaces designed for contemplation, poetry, and scholarly gatherings. Natural rock formations — often transported at great expense from distant mountains — were arranged to evoke mountain landscapes in miniature. Pavilions, covered walkways, and moon gates framed carefully composed views. The principles established in Song gardens — borrowed scenery (jiejing), the interplay of solid and void, and the seasonal transformation of plants — became foundational to Chinese garden design.' },
      { heading: 'The Commercial City', body: 'Song cities abandoned the Tang ward system, allowing commercial activity to spill into the streets. Multi-story buildings lined commercial thoroughfares, with shops on the ground floor and residences or entertainment venues above. The famous Qingming Shanghe Tu (Along the River During Qingming Festival) scroll painting, attributed to Zhang Zeduan, depicts the Song capital of Bianjing (Kaifeng) in exquisite detail: restaurants with elaborate signage, wine shops with decorative facades, and multi-story buildings of four or five floors — a built density unprecedented in Chinese urban history.' }
    ]
  },
  {
    id: 'yuan',
    name: 'Yuan',
    years: '1271-1368 CE',
    description: 'Under Mongol rule, Chinese architecture absorbed Central Asian and Tibetan influences. Tibetan Buddhist (Lamaist) architecture appeared in the capital at Dadu (Beijing), with white stupas and Tibetan-style temples. The cosmopolitan Yuan court brought Persian and Nepalese craftsmen, introducing new decorative motifs and structural techniques that enriched the Chinese architectural vocabulary. The Nepalese architect Araniko became the most celebrated builder of the Yuan period, designing the White Stupa of Miaoying Temple in Dadu, which still stands today.',
    summary: 'Mongol rule brought Tibetan Buddhist forms, Central Asian influences, and cosmopolitan craftsmen.',
    features: ['Tibetan Buddhist stupas and temples', 'Central Asian decorative motifs', 'Persian and Nepalese craftsmanship', 'White marble construction', 'Cosmopolitan architectural fusion'],
    image: '/images/dynasty-yuan.webp',
    notableBuildings: [{ name: 'White Stupa Temple (Beijing)', href: 'https://en.wikipedia.org/wiki/Miaoying_Temple' }, { name: 'Miaoying Temple', href: 'https://en.wikipedia.org/wiki/Miaoying_Temple' }],
    sections: [
      { heading: 'The Cosmopolitan Court', body: 'Kublai Khan\'s Yuan court was the most cosmopolitan in Chinese history. Architects, craftsmen, and artists from across the Mongol Empire — Persia, Central Asia, Nepal, and Tibet — worked alongside Chinese builders in the new capital of Dadu. The court employed Muslim engineers to design astronomical observatories and hydraulic systems, Nepalese sculptors to create Buddhist imagery, and Persian artisans to introduce new decorative techniques including cobalt-blue ceramic glazes. This unprecedented cultural mixing produced a uniquely hybrid architecture.' },
      { heading: 'Tibetan Buddhist Architecture in China', body: 'The Yuan emperors\' conversion to Tibetan Buddhism (Lamaism) introduced a new architectural tradition to China. White stupas (dagobas) — solid, bell-shaped monuments of Tibetan origin — became prominent landmarks in the capital. The White Stupa of Miaoying Temple, designed by the Nepalese architect Araniko in 1271, rises 50.9 meters and remains one of Beijing\'s oldest intact structures. Tibetan Buddhist temples, with their distinctive hall plans organized around circumambulation paths and central deity platforms, contrasted sharply with traditional Chinese axial courtyard layouts.' },
      { heading: 'Dadu: Blueprint for Beijing', body: 'The Yuan capital of Dadu — built on the site of modern Beijing — was designed according to the Kaogong Ji (Record of Trades), an ancient text specifying the ideal city layout: a square plan, three gates per side, a central palace, and an ancestral temple paired with an altar of soil and grain. Dadu\'s street grid, water system, and central lake district established the urban framework that the Ming and Qing dynasties preserved and elaborated. The Forbidden City, the Temple of Heaven, and Beijing\'s historic lakes all trace their origins to Dadu\'s Yuan-era layout.' }
    ]
  },
  {
    id: 'ming',
    name: 'Ming',
    years: '1368-1644 CE',
    description: 'The Ming dynasty produced some of China\'s most iconic architecture, including the Forbidden City and the current form of the Great Wall. Building practices were standardized through the use of modular timber components (cai-fen system). Brick and stone construction became more common for walls and fortifications. Temple, palace, and tomb architecture reached their mature classical form. Ming architects refined the painted decoration system (caihua), developing a hierarchy of ornamental patterns — from dragon-and-phoenix motifs for imperial buildings to simple geometric designs for common structures.',
    summary: 'The Forbidden City, standardized timber modules, and the mature classical style.',
    features: ['Standardized modular timber system', 'Brick and stone fortifications', 'Yellow-glazed imperial roof tiles', 'Elaborate painted decoration (caihua)', 'Mature courtyard hierarchy'],
    image: '/images/dynasty-ming.webp',
    notableBuildings: [{ name: 'Forbidden City', href: '/buildings/forbidden-city' }, { name: 'Temple of Heaven', href: '/buildings/temple-of-heaven' }, { name: 'Great Wall (Ming sections)', href: '/buildings/great-wall' }],
    sections: [
      { heading: 'The Forbidden City: Architecture as Imperial Statement', body: 'Commissioned by the Yongle Emperor and built between 1406 and 1420, the Forbidden City is the culmination of Chinese palace architecture. Its 980 buildings are arranged along a 960-meter central axis that extends from the Meridian Gate in the south to the Imperial Garden in the north. Every architectural detail — from the yellow-glazed roof tiles (yellow being the imperial color) to the ten ridge beasts on the Hall of Supreme Harmony (the maximum permitted) — communicates the emperor\'s supreme authority. The Forbidden City demonstrates Ming mastery of modular timber construction at an unprecedented scale.' },
      { heading: 'The Great Wall Reborn in Brick', body: 'The Ming dynasty transformed the Great Wall from earlier rammed-earth fortifications into the stone-and-brick structure visible today. Ming builders faced the wall with fired brick and stone, constructed watchtowers at regular intervals, and incorporated beacon towers for smoke-signal communication. The Ming wall was not a single defensive line but an integrated system of walls, fortresses, signal towers, and garrison towns stretching over 8,850 kilometers. The sections most visited today — Badaling, Mutianyu, Jinshanling — are all Ming construction.' },
      { heading: 'The Cai-Fen Modular System', body: 'Ming architects refined the cai-fen modular system inherited from the Song dynasty. Under this system, the cross-section of a standard timber bracket (the cai) determined all other building dimensions: column height, beam span, roof slope, and decorative detail. This modularity enabled rapid construction, standardized component production, and ensured proportional harmony across buildings of different scales. A minor official\'s residence and the emperor\'s throne hall used the same proportional system — differing only in the size of the base module.' },
      { heading: 'Tombs and Ancestral Architecture', body: 'Ming tomb architecture reached its apex at the Ming Tombs complex north of Beijing. Thirteen emperors are buried in individual mausolea arranged along a sacred way (shendao) lined with stone guardian figures. Each tomb mirrors the Forbidden City in miniature: a spirit gate, a stele pavilion, a hall of offerings, and a burial mound, all aligned on a north-south axis. The tombs demonstrate how Ming architecture extended its principles of hierarchy, axiality, and symbolic ornamentation from the world of the living into the realm of the ancestors.' }
    ]
  },
  {
    id: 'qing',
    name: 'Qing',
    years: '1644-1912 CE',
    description: 'The Qing dynasty continued Ming traditions while adding increasing elaboration and ornament. Garden architecture reached its zenith at the Summer Palace and Chengde. Roof decoration became more ornate, with an expanded vocabulary of ridge beasts and glazed figures. The architectural treatise Gongcheng Zuofa Zeli (1734) further standardized official construction. The Qing also developed distinctive regional styles — notably the Manchu-influenced architecture of the northeast, with its raised kang beds, heated floors, and multi-generational courtyard compounds adapted to harsh winters.',
    summary: 'Continued Ming forms with increasing ornamentation, garden architecture at its height.',
    features: ['Highly ornate roof decoration', 'Expanded ridge beast vocabulary', 'Garden architecture zenith', 'Official construction manual (1734)', 'Manchu and Tibetan stylistic blends'],
    image: '/images/dynasty-qing.webp',
    notableBuildings: [{ name: 'Summer Palace', href: '/buildings/summer-palace' }, { name: 'Chengde Mountain Resort', href: 'https://whc.unesco.org/en/list/703/' }, { name: 'Yonghe Temple', href: 'https://en.wikipedia.org/wiki/Yonghe_Temple' }],
    sections: [
      { heading: 'Garden Architecture at Its Peak', body: 'The Qing dynasty represents the pinnacle of Chinese garden design. The Summer Palace (Yiheyuan), rebuilt by the Empress Dowager Cixi in 1886, is the largest and best-preserved imperial garden in China. It combines Kunming Lake, Longevity Hill, and hundreds of pavilions, halls, and covered corridors into a unified composition where architecture and nature are inseparable. The 728-meter Long Corridor — the longest painted gallery in the world — contains over 14,000 paintings depicting Chinese landscapes, legends, and historical scenes. At Chengde, the Mountain Resort integrated Tibetan, Mongolian, and Han Chinese architectural styles into gardens that replicated famous landscapes from across the empire.' },
      { heading: 'The Ornamentation of Power', body: 'Qing architecture intensified Ming decorative traditions to new levels of elaboration. Roof ridges sprouted an expanded vocabulary of glazed ceramic beasts, each with specific protective meanings. Painted beams (caihua) became more colorful and complex, with gold leaf applied to the most important imperial buildings. Door panels were carved with increasingly intricate lattice patterns. This decorative exuberance was not arbitrary — it communicated imperial wealth, cosmic order, and the emperor\'s role as mediator between heaven and earth.' },
      { heading: 'The Last Imperial Building Code', body: 'The Gongcheng Zuofa Zeli (Engineering Methods and Regulations), published in 1734, was the final comprehensive building code of imperial China. It standardized construction practices for all official buildings: dimensions, proportions, materials, decorative patterns, and cost estimates. The manual included detailed illustrations of joinery, bracket assembly, and roof framing. While building on Song and Ming precedents, the Qing code reflected the dynasty\'s preference for standardized efficiency over architectural innovation — a shift that paralleled the Qing state\'s emphasis on administrative control.' }
    ]
  }
];