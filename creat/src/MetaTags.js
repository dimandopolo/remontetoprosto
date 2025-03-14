import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="%PUBLIC_URL%/logo.png" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="%PUBLIC_URL%/logo.png" />
    </Helmet>
  );
};

export default MetaTags;