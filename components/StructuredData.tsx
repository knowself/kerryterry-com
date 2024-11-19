import Head from 'next/head';

interface LocalBusinessData {
  name: string;
  description: string;
  image: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  priceRange: string;
  openingHours: string[];
}

const DEFAULT_BUSINESS_DATA: LocalBusinessData = {
  name: 'Kerry Terry Piano',
  description: 'Professional piano instruction for all levels in Portland, Oregon. Traditional methods combined with modern techniques.',
  image: 'https://kerryterry.com/images/kerry-terry.png',
  telephone: '+1-503-555-0123', // Replace with actual phone number
  address: {
    streetAddress: '1234 SE Portland Street', // Replace with actual address
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97214', // Replace with actual postal code
    addressCountry: 'US',
  },
  geo: {
    latitude: 45.5155, // Replace with actual coordinates
    longitude: -122.6789,
  },
  priceRange: '$$',
  openingHours: [
    'Monday 09:00-17:00',
    'Tuesday 09:00-17:00',
    'Wednesday 09:00-17:00',
    'Thursday 09:00-17:00',
    'Friday 09:00-17:00',
  ],
};

export default function StructuredData({
  data = DEFAULT_BUSINESS_DATA,
}: {
  data?: Partial<LocalBusinessData>;
}) {
  const businessData = { ...DEFAULT_BUSINESS_DATA, ...data };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    '@id': 'https://kerryterry.com',
    name: businessData.name,
    description: businessData.description,
    image: businessData.image,
    telephone: businessData.telephone,
    address: {
      '@type': 'PostalAddress',
      ...businessData.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...businessData.geo,
    },
    priceRange: businessData.priceRange,
    openingHours: businessData.openingHours,
    sameAs: [
      'https://www.facebook.com/kerryterrypiano', // Replace with actual social media links
      'https://www.instagram.com/kerryterrypiano',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Piano Lessons',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Beginner Piano Lessons',
            description: 'Piano lessons for beginners of all ages',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced Piano Lessons',
            description: 'Piano lessons for advanced students',
          },
        },
      ],
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
