export const services = [
  { icon: "car", title: "One-Way Cab", text: "Door-to-door pickup and drop across India with a simple WhatsApp enquiry." },
  { icon: "repeat", title: "Round Trip", text: "Flexible return journeys for families, pilgrimages and outstation travel." },
  { icon: "plane", title: "Airport Transfer", text: "Planned airport pickup and drop with luggage-friendly vehicles." },
  { icon: "train", title: "Railway Transfer", text: "Sainagar Shirdi, Manmad, Kopargaon and other station transfers." },
  { icon: "hotel", title: "Hotel Assistance", text: "Share your dates and requirements and we coordinate suitable options." },
  { icon: "access", title: "Special Assistance", text: "Wheelchair and senior-citizen travel assistance can be requested in advance." }
];

export const tours = [
  { title: "Shirdi Darshan", tag: "Pilgrimage", places: "Temple area • Local darshan • Pickup & drop" },
  { title: "Nashik & Trimbakeshwar", tag: "Temple Tour", places: "Shirdi • Nashik • Trimbakeshwar • Return" },
  { title: "Shani Shingnapur", tag: "Day Trip", places: "Shirdi • Shani Shingnapur • Comfortable return" },
  { title: "Lonavala & Khandala", tag: "Leisure", places: "Hill stations • Viewpoints • Full-day travel" }
];

export const fleet = [
  { name: "Toyota Innova Crysta", type: "Premium SUV", passengers: "6–7", note: "AC • Premium comfort • Long-distance", image: "https://static-cdn.cars24.com/prod/new-car-cms/Toyota_Innova_Crysta_exterior_10_182ffbab99.png?dpr=3&format=auto&optimize=low&quality=50&w=640" },
  { name: "Maruti Swift Dzire", type: "Sedan", passengers: "4", note: "AC • Comfortable • Economical", image: "https://cdn-s3.autocarindia.com/legacy/cdni/News/Maruti-Dzire.jpg?c=0&w=700" },
  { name: "Hyundai Verna", type: "Premium Sedan", passengers: "4", note: "AC • Spacious • Smooth ride", image: "https://img.gaadicdn.com/images/car-images/930x620/Hyundai/Verna/8703/1679389577362/224_atlas-white_c0c1c5.jpg" },
  { name: "Maruti Ciaz", type: "Sedan", passengers: "4–5", note: "AC • Spacious • Family travel", image: "https://content.carlelo.com/media/models/489/colour_options/Qg4i3zN1asqYoINTkPtl3sHsNPLudjrf3Ke4sTXG.webp" },
  { name: "Maruti Ertiga", type: "Family MPV", passengers: "6–7", note: "AC • Family • Luggage space", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=88" },
  { name: "Tempo Traveller 17 Seater", type: "Group Traveller", passengers: "17", note: "AC • Groups • Long journeys", image: "https://gourbanride.com/wp-content/uploads/2025/01/17tempo-travelle.png" },
  { name: "Tempo Traveller 20 Seater", type: "Large Group", passengers: "20", note: "AC • Large groups • Comfortable", image: "https://s1.rdbuz.com/busoperatorimages/1613374220892_cr.jpeg" }
];

export const hotels = [
  { name: "Budget Stay", distance: "Shirdi", features: ["AC options", "Family rooms", "Parking"] },
  { name: "Family Stay", distance: "Shirdi", features: ["Family rooms", "Hot water", "Breakfast options"] },
  { name: "Premium Stay", distance: "Shirdi", features: ["Comfort rooms", "Parking", "Pickup assistance"] }
];

export const gallery = fleet.map(v => v.image);
