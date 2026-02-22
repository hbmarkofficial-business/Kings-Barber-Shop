import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Kings Barber Shop Bonn | Ihr Premium Herrenfriseur</title>
        <meta
          name="description"
          content="Besuche unseren Premium Kings Barber Shop in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn"
        />
        <link rel="canonical" href="https://kingsbarbershop-bonn.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Kings Barber Shop | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingsbarbershop-bonn.de" />
        <meta property="og:image" content="https://kingsbarbershop-bonn.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kings Barber Shop | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://kingsbarbershop-bonn.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Kings Barber Shop",
            "image": "https://kingsbarbershop-bonn.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bonner Str. 77",
              "addressLocality": "Bonn",
              "postalCode": "53173",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.6845",
              "longitude": "7.1558"
            },
            "url": "https://kingsbarbershop-bonn.de",
            "telephone": "+49 176 84426137",
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/kingsbarbershop",
              "https://www.instagram.com/kingsbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

