import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const siteUrl = 'https://danutakoziello-doherty.co.uk';
  const faviconPath = '/favicon.ico';
  const ogImagePath = '/og-image.webp';

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Danuta Koziełło-Doherty",
    "jobTitle": "Psycholog, Psychoterapeuta",
    "description": "Psycholog i psychoterapeuta specjalizujący się w terapii traumy, teorii przywiązania i podejściach somatycznych.",
    "url": siteUrl,
    "image": `${siteUrl}${ogImagePath}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "addressRegion": "West Yorkshire",
      "addressCountry": "UK"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": siteUrl,
    "name": "Danuta Koziełło-Doherty",
    "logo": `${siteUrl}/logo.png`
  };

  return (
    <Helmet>
      <html lang="pl" />
      <title>Psychoterapia – Danuta Koziełło-Doherty</title>
      <meta
        name="description"
        content="Danuta Koziełło-Doherty – psycholog i psychoterapeuta. Oferuję terapię traumy, pracę z relacjami i wsparcie online oraz w gabinecie w Leeds."
      />
      <meta name="author" content="Danuta Koziełło-Doherty" />
      <meta name="keywords" content="Psycholog, Psychoterapia indywidualna, Terapia indywidualna, Metody, Terapia z ciałem, Leeds, West Yorkshire, Terapia Online, Polski psychoterapeuta Leeds" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pl-PL" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Danuta Koziełło-Doherty – Psychoterapia i wsparcie terapeutyczne" />
      <meta
        property="og:description"
        content="Psycholog kliniczny i certyfikowany psychoterapeuta specjalizujący się w pracy z traumą i podejściami somatycznymi. Terapia indywidualna online i stacjonarnie."
      />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:image" content={`${siteUrl}${ogImagePath}`} />
      <meta property="og:locale" content="pl_PL" />

      {/* Favicon */}
      <link rel="icon" href={`${faviconPath}`} type="image/x-icon" />

      {/* JSON-LD Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default Seo;
