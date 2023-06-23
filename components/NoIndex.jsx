import React from 'react';

const NoIndex = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Tells search engines not to include the page in search results for beta environments
  return <meta name="robots" content="noindex, nofollow" />;
};

export default NoIndex;
