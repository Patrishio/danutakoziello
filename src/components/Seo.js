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
    "description": "Polski psychoterapeuta w Leeds, specjalizujący się w terapii traumy, podejściu somatycznym i pracy z relacjami. Sesje indywidualne w gabinecie i online.",
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
      <title>Polski psychoterapeuta w Leeds | Danuta Koziełło-Doherty</title>
      <meta
        name="description"
        content="Polski psychoterapeuta w Leeds – Danuta Koziełło-Doherty. Oferuję psychoterapię indywidualną, terapię traumy i pracę z ciałem. Spotkania stacjonarne w Leeds i terapia online."
      />
      <meta name="author" content="Danuta Koziełło-Doherty" />
      <meta name="keywords" content="Psycholog, Psychoterapia indywidualna, Terapia indywidualna, Metody, Terapia z ciałem, Leeds, West Yorkshire, Terapia Online, Polski psychoterapeuta Leeds" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pl-PL" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Polski psychoterapeuta w Leeds – Danuta Koziełło-Doherty" />
      <meta
        property="og:description"
        content="Polski psychoterapeuta w Leeds. Psychoterapia indywidualna, terapia traumy i podejścia somatyczne. Sesje stacjonarne w Leeds i online."
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
