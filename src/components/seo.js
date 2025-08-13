import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const siteUrl = 'https://dkdpoc.netlify.app';
  const faviconPath = '/favicon.ico';
  const ogImagePath = '/og-image.webp';

  return (
    <Helmet>
      <html lang="pl" />
      <title>Danuta Koziełło-Doherty – Psychoterapia i wsparcie terapeutyczne</title>
      <meta
        name="description"
        content="Danuta Koziełło-Doherty, psycholog kliniczny i certyfikowany psychoterapeuta. Specjalizuję się w terapii traumy, teorii przywiązania i podejściach somatycznych. Terapia indywidualna online i stacjonarnie."
      />
      <meta name="author" content="Danuta Koziełło-Doherty" />
      <meta name="keywords" content="psychoterapia, trauma, terapia EMDR, terapia Gestalt, terapia online, psycholog kliniczny, terapia somatyczna" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pl-PL" />

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
    </Helmet>
  );
};

export default SEO;
