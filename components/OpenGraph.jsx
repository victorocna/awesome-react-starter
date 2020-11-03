import React, { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '.';

const OpenGraph = () => {
  const { sitename, title, description, image, baseurl } = useContext(AppContext);

  return (
    <Head>
      <meta property="og:site_name" content={sitename} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={baseurl} />
      <meta property="og:type" content="website" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </Head>
  );
};

export default OpenGraph;
