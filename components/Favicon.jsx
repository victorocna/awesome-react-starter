import React from 'react';

const Favicon = () => {
  // No need for importing Head from next/head

  return (
    <>
      <link rel="apple-touch-icon" href="/images/favicon.png" />
      <link rel="shortcut icon" sizes="any" href="/images/favicon.ico" type="image/png" />
      <link rel="icon" sizes="any" href="/images/favicon.ico" type="image/png" />
    </>
  );
}

export default Favicon;
