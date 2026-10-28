export const POPULAR_ROUTES = [
  {
    id: 'shirdi-mumbai',
    title: 'Shirdi ⇄ Mumbai (Airport / City)',
    from: 'Shirdi',
    to: 'Mumbai (City / Airport / Thane / Navi Mumbai)',
    tag: 'Most Popular Highway Route',
    type: 'One-Way or Round Trip',
    availableVehicles: ['Dzire (4S)', 'Ertiga (6S)', 'Innova Crysta (7S)', 'Tempo Traveller (17/20S)'],
    highlights: [
      'Travel via the Samruddhi Mahamarg expressway or Nashik-Igatpuri highway',
      'Direct doorstep drop at Mumbai Airport (T1/T2) or home',
      'Comfortable food stops at clean highway food plazas',
      'All commercial toll and tax options clarified in quotation'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Custom quotation based on vehicle selection, pickup suburb, and one-way vs round-trip requirement.'
  },
  {
    id: 'shirdi-pune',
    title: 'Shirdi ⇄ Pune (Airport / City)',
    from: 'Shirdi',
    to: 'Pune (Airport / Railway Station / Hinjawadi / Hadapsar)',
    tag: 'Daily Business & Pilgrimage',
    type: 'One-Way or Round Trip',
    availableVehicles: ['Swift Dzire', 'Ciaz', 'Ertiga', 'Innova Crysta', 'Tempo Traveller'],
    highlights: [
      'Convenient travel via Sangamner / Pune-Nashik highway route',
      'Direct connectivity for IT professionals and college students',
      'Optional en-route darshan at Narayangaon or Ranjangaon Ganpati on request',
      'Safe, smooth driving suited for children and elderly travelers'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Contact our travel desk for best customized quotes.'
  },
  {
    id: 'shirdi-shani-shingnapur',
    title: 'Shirdi ⇄ Shani Shingnapur Darshan',
    from: 'Shirdi',
    to: 'Shani Shingnapur',
    tag: 'Essential Pilgrimage Extension',
    type: 'Same-Day Return Excursion',
    availableVehicles: ['Swift Dzire', 'Ertiga', 'Innova Crysta', 'Tempo Traveller (17/20S)'],
    highlights: [
      'The sacred holy seat of Lord Shanidev (approx 70 km from Shirdi)',
      'Vehicle waits at the shrine parking while you complete darshan and pooja',
      'Return back to Shirdi in time for evening Aarti or hotel check-out',
      'Flexible departure timings throughout morning and afternoon'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Includes vehicle waiting during darshan.'
  },
  {
    id: 'shirdi-nashik-trimbakeshwar',
    title: 'Shirdi ⇄ Nashik & Trimbakeshwar Jyotirlinga',
    from: 'Shirdi',
    to: 'Nashik (Panchavati / Trimbakeshwar / Muktidham)',
    tag: 'Sacred Jyotirlinga Circuit',
    type: 'Same-Day or Multi-Day Tour',
    availableVehicles: ['Dzire', 'Verna', 'Ciaz', 'Ertiga', 'Innova Crysta', 'Tempo Traveller'],
    highlights: [
      'Visit Lord Shiva Trimbakeshwar Jyotirlinga & Godavari river origin',
      'Cover Panchavati, Sita Gufa, Kalaram Temple, and Tapovan',
      'Drivers familiar with temple entry rules and mountain ghat curves',
      'Smooth road journey via Kopargaon - Yeola - Nashik route'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Customized itinerary to match your darshan token slots.'
  },
  {
    id: 'shirdi-aurangabad-ellora',
    title: 'Shirdi ⇄ Chhatrapati Sambhajinagar (Aurangabad) & Ellora',
    from: 'Shirdi',
    to: 'Chhatrapati Sambhajinagar (Ellora, Grishneshwar, Daulatabad)',
    tag: 'Heritage & Jyotirlinga',
    type: 'Full-Day Excursion',
    availableVehicles: ['Swift Dzire', 'Ertiga', 'Innova Crysta', 'Tempo Traveller (17/20S)'],
    highlights: [
      'Darshan at Grishneshwar Jyotirlinga (12th sacred Jyotirlinga)',
      'Explore UNESCO World Heritage Ellora Caves and Kailasa Temple',
      'Optional visit to Daulatabad Fort and Bibi Ka Maqbara',
      'Return back to Shirdi the same night or drop at Sambhajinagar Airport/Station'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Request customized quotation for sightseeing waiting time.'
  },
  {
    id: 'shirdi-airport-transfer',
    title: 'Shirdi Airport (SAG / Kakadi) ⇄ Shirdi Temple / Hotels',
    from: 'Shirdi Airport (Kakadi)',
    to: 'Shirdi Temple Area / Any Hotel',
    tag: 'Punctual Flight Transfer',
    type: 'Pickup or Drop',
    availableVehicles: ['Sedan', 'Ertiga', 'Innova Crysta', 'Tempo Traveller'],
    highlights: [
      'Located approx 14 km southwest of Shirdi temple',
      'Flight-arrival tracking ensures driver is waiting at exit with placard',
      'Zero wait time after collecting your baggage',
      'Assistance with luggage loading directly into vehicle trunk'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Provide flight number for seamless delay adjustments.'
  },
  {
    id: 'kopargaon-manmad-railway',
    title: 'Kopargaon / Manmad Railway Station ⇄ Shirdi',
    from: 'Kopargaon (KPG) / Manmad (MMR)',
    to: 'Shirdi Temple / Hotel',
    tag: 'Train Arrival Pickup',
    type: 'Direct Station Transfer',
    availableVehicles: ['Swift Dzire', 'Ciaz', 'Ertiga', 'Innova Crysta', 'Tempo Traveller'],
    highlights: [
      'Kopargaon (16 km) and Manmad (60 km) main line connections',
      'Midnight and early morning pickups (2:00 AM to 6:00 AM) available with pre-booking',
      'Chauffeur waits outside platform exit gate',
      'Direct doorstep drop at your chosen hotel or Sansthan Bhakta Niwas'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Advance booking recommended for night train arrivals.'
  },
  {
    id: 'shirdi-bhimashankar',
    title: 'Shirdi ⇄ Bhimashankar Jyotirlinga',
    from: 'Shirdi',
    to: 'Bhimashankar Temple (Sahyadri Hills)',
    tag: 'Devotional Jyotirlinga Tour',
    type: 'Full-Day Excursion or 2-Day Tour',
    availableVehicles: ['Swift Dzire', 'Ertiga', 'Innova Crysta', 'Tempo Traveller'],
    highlights: [
      'Sacred Jyotirlinga situated in the Sahyadri wildlife sanctuary',
      'Experienced ghat-road drivers skilled in winding hill terrain',
      'Can be combined with Shirdi and Trimbakeshwar into a multi-temple circuit',
      'Vehicle waits at temple parking while you perform pooja and darshan'
    ],
    fareDisplay: 'Contact for quotation',
    note: 'Inquire for package pricing including toll and driver allowance.'
  }
];
