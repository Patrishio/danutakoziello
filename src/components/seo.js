import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

const SEO = () => {
  const { pathname } = useLocation();

  const siteUrl = 'https://danutakoziello-doherty.co.uk/';
  const faviconPath = '/favicon.ico';
  const ogImagePath = '/og-image.webp';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Danuta Koziełło-Doherty",
    "jobTitle": "Psycholog, Psychoterapeuta",
    "description": "Psycholog i psychoterapeuta specjalizujący się w terapii traumy, teorii przywiązania i podejściach somatycznych.",
    "url": siteUrl,
    "image": `${siteUrl}/og-image.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "addressRegion": "West Yorkshire",
      "addressCountry": "UK"
    }
  }

  return (
    <Helmet>
      <html lang="pl" />
      <title>Danuta Koziełło-Doherty – Psychoterapia i wsparcie terapeutyczne</title>
      <meta
        name="description"
        content="Danuta Koziełło-Doherty – psycholog i psychoterapeuta. Pomagam w terapii traumy, relacjach i rozwoju osobistym. Spotkania online i w gabinecie."
      />
      <meta name="author" content="Danuta Koziełło-Doherty" />
      <meta name="keywords" content="Psycholog, Psychoterapia indywidualna, Terapia indewidualna, Metody, Terapia z cialem, Leeds, WestYorkshire, Terapia Online,Polski psychoterapeta leeds" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pl-PL" />
      <link rel="canonical" href={`${siteUrl}${pathname || ""}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Danuta Koziełło-Doherty – Psychoterapia i wsparcie terapeutyczne" />
      <meta
        property="og:description"
        content="Psycholog kliniczny i certyfikowany psychoterapeuta specjalizujący się w pracy z traumą i podejściami somatycznymi. Terapia indywidualna online i stacjonarnie."
      />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImagePath}`} />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter Card */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Danuta Koziełło-Doherty – Psychoterapia i wsparcie terapeutyczne" />
      <meta
        name="twitter:description"
        content="Psycholog kliniczny i certyfikowany psychoterapeuta specjalizujący się w terapii traumy i podejściach somatycznych. Terapia indywidualna online i stacjonarnie."
      />
      <meta name="twitter:image" content={`${siteUrl}${ogImagePath}`} />
      <meta name="twitter:creator" content="@TwojTwitterHandle" /> */}

      {/* Favicon */}
      <link rel="icon" href={`${siteUrl}${faviconPath}`} type="image/x-icon" />

      {/* JSON-LD Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
