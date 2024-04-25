import React from 'react';

const Favicon = () => {
  // Favicon must be in the root of the public folder, subfolders are not supported
  // https://github.com/vercel/next.js/discussions/50704

  return (
    <>
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </>
  );
};

export default Favicon;
