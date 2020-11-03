import React, { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '.';
import { Favicon, OpenGraph } from '.';

const AppHead = () => {
  const { sitename, description, googleFonts, fontAwesome, bootstrap } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
        {googleFonts && <link rel="stylesheet" href={googleFonts} />}
        {fontAwesome && <link rel="stylesheet" href={fontAwesome} />}
        {bootstrap && <link rel="stylesheet" href={bootstrap} />}
      </Head>
      <Favicon />
      <OpenGraph />
    </>
  );
};

export default AppHead;
