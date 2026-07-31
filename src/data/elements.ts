export interface Element {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: string[];
  image: string;
  relatedElements: { name: string; href: string }[];
}

export const elements: Element[] = [
  {
    id: 'dougong',
    name: 'Dougong Brackets',
    subtitle: 'The interlocking wooden bracket system',
    description: 'The dougong is the most distinctive and ingenious element of traditional Chinese architecture. It is an interlocking system of wooden brackets placed atop columns to support the projecting roof eaves. Remarkably, the entire structure is assembled without nails or glue, relying purely on precise joinery. Beyond its structural role, the dougong also serves as a seismic damper — during earthquakes, the friction between interlocking wooden pieces absorbs and dissipates energy, protecting the building.',
    sections: [
      { heading: 'Structural Function', body: 'The dougong transfers the weight of the roof outward from the column to the beam, allowing for the characteristically wide, overhanging eaves of Chinese buildings. Multiple tiers of brackets can be stacked, with each tier extending the reach of the eaves further outward.' },
      { heading: 'Seismic Engineering', body: 'The loose joinery of the dougong acts as a shock absorber during earthquakes. The friction between wooden components dissipates seismic energy, making these buildings remarkably earthquake-resistant — a fact demonstrated by the survival of Tang dynasty structures through centuries of seismic activity.' },
      { heading: 'Decorative Evolution', body: 'In earlier dynasties (Tang), dougong was primarily structural and bold. By the Song dynasty, it became smaller and more intricate. In Ming-Qing architecture, dougong often served a largely decorative function, with the actual load-bearing transferred to hidden structural members.' }
    ],
    features: ['No nails or glue — pure joinery', 'Acts as a seismic shock absorber', 'Each tier extends eaves further outward', 'Varies by dynasty: structural (Tang) to decorative (Qing)'],
    image: '/images/dougong.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs' }, { name: 'Columns & Beams', href: '#' }]
  },
  {
    id: 'roofs',
    name: 'Roof Forms',
    subtitle: 'The crowning glory of Chinese architecture',
    description: 'The roof is the most visually striking element of a Chinese building. Far more than mere shelter, roof forms communicate the status, function, and symbolic meaning of the structure beneath. Chinese roofs are classified into several distinct types, each with specific rules governing which buildings could use them. The sweeping curves, upturned eaves, and elaborate ridge decoration create the unmistakable silhouette that defines Chinese architecture.',
    sections: [
      { heading: 'Hip Roof (Wudian)', body: 'The most prestigious roof form, with slopes on all four sides. Reserved exclusively for imperial halls and the most important religious buildings — notably the Hall of Supreme Harmony in the Forbidden City.' },
      { heading: 'Hip-and-Gable (Xieshan)', body: 'A roof with hip ends at the top and gable ends below. The most common form for important buildings below the imperial level, including temples, palaces, and wealthy residences.' },
      { heading: 'Overhanging Gable (Xuanshan)', body: 'A gable roof whose eaves project beyond the end walls, protecting them from rain. Common in southern China where rainfall is heavy.' },
      { heading: 'Flush Gable (Yingshan)', body: 'Similar to the overhanging gable but with the roof ending flush with the gable wall. More common in northern China where rainfall is lighter.' },
      { heading: 'Pyramidal (Cuanjian)', body: 'A roof rising to a central point, used for pavilions, pagodas, and smaller ornamental structures. Often topped with a decorative finial.' }
    ],
    features: ['5 primary roof forms ranked by status', 'Curved eaves for practical and symbolic reasons', 'Ridge beasts indicate building importance', 'Yellow glaze reserved for imperial buildings'],
    image: '/images/roof-forms.webp',
    relatedElements: [{ name: 'Dougong Brackets', href: '/elements/dougong' }, { name: 'Decorative Motifs', href: '/elements/decoration' }]
  },
  {
    id: 'courtyards',
    name: 'Courtyard Layouts',
    subtitle: 'Harmony between heaven and earth',
    description: 'The courtyard — whether the humble siheyuan of Beijing or the vast walled compounds of the Forbidden City — is the fundamental organizing principle of Chinese architecture. It reflects deep cosmological beliefs: the open courtyard represents the space between heaven and earth, while the surrounding buildings create a microcosm of order and hierarchy. The arrangement of halls, side rooms, and gates follows strict rules based on the owner\'s social status.',
    sections: [
      { heading: 'The Siheyuan', body: 'The classic Beijing courtyard house arranges buildings around a central open space. The main hall faces south for maximum sunlight, with side halls for family members and a reverse hall for servants. The size and number of courtyards reflected the owner\'s wealth and rank.' },
      { heading: 'Palace Compounds', body: 'Imperial palace layouts multiply the courtyard principle. The Forbidden City contains hundreds of courtyards arranged along a strict north-south axis, with each successive courtyard leading deeper into increasingly restricted spaces — from the public outer court to the private inner palace.' },
      { heading: 'Temple Layouts', body: 'Buddhist and Daoist temples adapted the courtyard model, typically with a sequence of halls (mountain gate, heavenly king hall, main hall) arranged along a central axis with side halls and courtyards.' }
    ],
    features: ['North-south axis with south-facing main halls', 'Courtyard size reflects social rank', 'Screen walls (yingbi) at entrances for privacy', 'Gardens integrated into residential courtyards'],
    image: '/images/courtyard.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs' }, { name: 'Decorative Motifs', href: '/elements/decoration' }]
  },
  {
    id: 'decoration',
    name: 'Decorative Motifs',
    subtitle: 'Symbolism in color, pattern, and figure',
    description: 'Chinese architectural decoration is never merely ornamental — every color, pattern, and sculptural figure carries symbolic meaning. The ridge beasts (zoushou) marching along roof ridges, the vibrant painted beams (caihua), the carved stone balustrades, and the guardian lions at gates all participate in a rich visual language that communicates protection, prosperity, and cosmic order.',
    sections: [
      { heading: 'Color Symbolism', body: 'Colors in Chinese architecture follow strict hierarchies. Yellow (gold) was reserved for the emperor, symbolizing the center of the universe. Red represented happiness and good fortune. Green signified growth and harmony. Blue-black was used for certain temple roofs, representing heaven.' },
      { heading: 'Ridge Beasts (Zoushou)', body: 'The row of mythical beasts along roof ridges serves both decorative and protective functions. The number of beasts indicated the building\'s importance — the Hall of Supreme Harmony has the maximum 10, while lesser buildings have proportionally fewer.' },
      { heading: 'Painted Beams (Caihua)', body: 'The decorative painting of structural beams combines protection (against insects and moisture) with aesthetic beauty. Patterns range from simple geometric designs to elaborate dragon-and-phoenix motifs, with the complexity reflecting the building\'s rank.' }
    ],
    features: ['Color hierarchy: Yellow > Red > Green > Blue', 'Ridge beasts indicate building rank', 'Painted beams protect and decorate', 'Guardian lions at important entrances'],
    image: '/images/decoration.webp',
    relatedElements: [{ name: 'Roof Forms', href: '/elements/roofs' }, { name: 'Courtyard Layouts', href: '/elements/courtyards' }]
  }
];
