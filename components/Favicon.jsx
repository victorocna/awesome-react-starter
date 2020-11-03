import React from 'react';
import Head from 'next/head';

const Favicon = () => (
  <Head>
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  </Head>
);

export default Favicon;
