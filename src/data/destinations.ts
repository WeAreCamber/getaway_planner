import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    budgetTier: 'High',
    description: 'Iconic white-washed buildings with blue domes overlooking the crystal clear Aegean Sea. Perfect for romance and relaxation.',
    highlights: ['Sunset in Oia', 'Volcanic beaches', 'Wine tasting', 'Boat tour'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Iconic%20white-washed%20buildings%20with%20blue%20domes%20overlooking%20the%20crystal%20clear%20Aegean%20Sea%20in%20Santorini%2C%20Greece%2C%20sunny%20day%2C%20vibrant%20colors&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/jtr',
      hotel: 'https://www.booking.com/searchresults.html?ss=Santorini',
      activity: 'https://www.viator.com/Santorini/d959-ttd'
    },
    estimatedCost: '£1500 - £2500',
    flightPrice: 200,
    hotelPricePerNight: 150
  },
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    budgetTier: 'Low',
    description: 'A tropical paradise with lush rice terraces, vibrant culture, and world-class surfing beaches. An affordable escape to paradise.',
    highlights: ['Ubud Monkey Forest', 'Uluwatu Temple', 'Surfing in Canggu', 'Rice Terraces'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Tropical%20paradise%20in%20Bali%20Indonesia%20with%20lush%20green%20rice%20terraces%20and%20traditional%20temples%2C%20sunset%20light&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/dps',
      hotel: 'https://www.booking.com/searchresults.html?ss=Bali',
      activity: 'https://www.viator.com/Bali/d98-ttd'
    },
    estimatedCost: '£600 - £1000',
    flightPrice: 600,
    hotelPricePerNight: 50
  },
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    budgetTier: 'Medium',
    description: 'The cultural heart of Japan, famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
    highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Grove', 'Gion District'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20Kyoto%20Japan%20street%20with%20wooden%20houses%20and%20cherry%20blossoms%20and%20a%20view%20of%20a%20pagoda&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/osa',
      hotel: 'https://www.booking.com/searchresults.html?ss=Kyoto',
      activity: 'https://www.viator.com/Kyoto/d332-ttd'
    },
    estimatedCost: '£1200 - £1800',
    flightPrice: 800,
    hotelPricePerNight: 100
  },
  {
    id: 'costa-rica',
    name: 'Guanacaste',
    country: 'Costa Rica',
    region: 'Americas',
    budgetTier: 'Medium',
    description: 'A rugged rainforested Central American country with coastlines on the Caribbean and Pacific. Known for its beaches, volcanoes, and biodiversity.',
    highlights: ['Zip-lining in Monteverde', 'Arenal Volcano', 'Manuel Antonio National Park', 'Sloth watching'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Lush%20rainforest%20in%20Costa%20Rica%20with%20a%20waterfall%20and%20tropical%20birds%20and%20volcano%20in%20background&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/sjo',
      hotel: 'https://www.booking.com/searchresults.html?ss=Guanacaste',
      activity: 'https://www.viator.com/Costa-Rica/d747-ttd'
    },
    estimatedCost: '£1000 - £1600',
    flightPrice: 700,
    hotelPricePerNight: 120
  },
  {
    id: 'marrakech-morocco',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    budgetTier: 'Low',
    description: 'A major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire.',
    highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Bahia Palace', 'Souks shopping'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Vibrant%20market%20in%20Marrakech%20Morocco%20with%20colorful%20spices%20and%20textiles%20and%20traditional%20architecture&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/rak',
      hotel: 'https://www.booking.com/searchresults.html?ss=Marrakech',
      activity: 'https://www.viator.com/Marrakech/d5408-ttd'
    },
    estimatedCost: '£400 - £800',
    flightPrice: 100,
    hotelPricePerNight: 80
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik',
    country: 'Iceland',
    region: 'Europe',
    budgetTier: 'High',
    description: 'The world\'s northernmost capital of a sovereign state. Famous for the Blue Lagoon, Northern Lights, and stunning volcanic landscapes.',
    highlights: ['Blue Lagoon', 'Golden Circle', 'Northern Lights', 'Whale Watching'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Stunning%20Icelandic%20landscape%20with%20northern%20lights%20aurora%20borealis%20over%20snowy%20mountains%20and%20a%20cozy%20cabin&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/kef',
      hotel: 'https://www.booking.com/searchresults.html?ss=Reykjavik',
      activity: 'https://www.viator.com/Reykjavik/d905-ttd'
    },
    estimatedCost: '£1200 - £2000',
    flightPrice: 150,
    hotelPricePerNight: 200
  },
  // New destinations (Departure countries)
  {
    id: 'london-uk',
    name: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    budgetTier: 'High',
    description: 'A vibrant metropolis blending rich history with modern culture. Famous for the Tower of London, Buckingham Palace, and world-class museums.',
    highlights: ['British Museum', 'Tower of London', 'West End Theatre', 'London Eye'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=London%20skyline%20with%20Big%20Ben%20and%20Parliament%20at%20sunset%20from%20across%20the%20Thames&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/lond', // Placeholder
      hotel: 'https://www.booking.com/searchresults.html?ss=London',
      activity: 'https://www.viator.com/London/d737-ttd'
    },
    estimatedCost: '£1000 - £1800',
    flightPrice: 100, // Assumed low intra-region or domestic
    hotelPricePerNight: 200
  },
  {
    id: 'new-york-usa',
    name: 'New York City',
    country: 'United States',
    region: 'Americas',
    budgetTier: 'High',
    description: 'The city that never sleeps. Iconic skyscrapers, Central Park, Broadway shows, and diverse neighborhoods make it a global cultural hub.',
    highlights: ['Central Park', 'Statue of Liberty', 'Broadway Show', 'Times Square'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=New%20York%20City%20skyline%20with%20Empire%20State%20Building%20at%20night%20and%20city%20lights&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/nyc',
      hotel: 'https://www.booking.com/searchresults.html?ss=New+York',
      activity: 'https://www.viator.com/New-York-City/d687-ttd'
    },
    estimatedCost: '£1500 - £2500',
    flightPrice: 400,
    hotelPricePerNight: 250
  },
  {
    id: 'berlin-germany',
    name: 'Berlin',
    country: 'Germany',
    region: 'Europe',
    budgetTier: 'Medium',
    description: 'A city of history and cutting-edge culture. Known for its art scene, modern landmarks like the Berlin Wall memorial, and vibrant nightlife.',
    highlights: ['Brandenburg Gate', 'Berlin Wall Memorial', 'Museum Island', 'Reichstag Building'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Brandenburg%20Gate%20in%20Berlin%20Germany%20at%20twilight%20with%20warm%20lighting&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/ber',
      hotel: 'https://www.booking.com/searchresults.html?ss=Berlin',
      activity: 'https://www.viator.com/Berlin/d488-ttd'
    },
    estimatedCost: '£800 - £1400',
    flightPrice: 100,
    hotelPricePerNight: 120
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    budgetTier: 'High',
    description: 'The City of Light. World-renowned for its art, fashion, gastronomy, and culture. A romantic destination with iconic landmarks.',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Seine River Cruise'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Eiffel%20Tower%20in%20Paris%20France%20viewed%20from%20a%20charming%20street%20with%20cafes&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/par',
      hotel: 'https://www.booking.com/searchresults.html?ss=Paris',
      activity: 'https://www.viator.com/Paris/d479-ttd'
    },
    estimatedCost: '£1000 - £1800',
    flightPrice: 80,
    hotelPricePerNight: 180
  },
  {
    id: 'vancouver-canada',
    name: 'Vancouver',
    country: 'Canada',
    region: 'Americas',
    budgetTier: 'High',
    description: 'A bustling west coast seaport in British Columbia, surrounded by mountains and nature. Popular for outdoor activities and film production.',
    highlights: ['Stanley Park', 'Granville Island', 'Capilano Suspension Bridge', 'Grouse Mountain'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Vancouver%20skyline%20with%20mountains%20in%20background%20and%20water%20in%20foreground%20sunny%20day&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/yvr',
      hotel: 'https://www.booking.com/searchresults.html?ss=Vancouver',
      activity: 'https://www.viator.com/Vancouver/d616-ttd'
    },
    estimatedCost: '£1200 - £2000',
    flightPrice: 600,
    hotelPricePerNight: 180
  },
  {
    id: 'sydney-australia',
    name: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    budgetTier: 'High',
    description: 'Capital of New South Wales and one of Australia\'s largest cities. Best known for its harbourfront Sydney Opera House and Bondi Beach.',
    highlights: ['Sydney Opera House', 'Bondi Beach', 'Sydney Harbour Bridge', 'Taronga Zoo'],
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sydney%20Opera%20House%20and%20Harbour%20Bridge%20sunny%20day%20blue%20water&image_size=landscape_16_9',
    affiliateLinks: {
      flights: 'https://www.skyscanner.net/transport/flights/lond/syd',
      hotel: 'https://www.booking.com/searchresults.html?ss=Sydney',
      activity: 'https://www.viator.com/Sydney/d357-ttd'
    },
    estimatedCost: '£1800 - £3000',
    flightPrice: 1000,
    hotelPricePerNight: 200
  }
];
