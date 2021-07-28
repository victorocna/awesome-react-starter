import React, { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '.';
import { Favicon, OpenGraph } from '.';

const AppHead = () => {
  const { sitename, description, stylesheets, scripts } = useContext(AppContext);
  const showStylesheets = (href) => {
    return <link key={href} rel="stylesheet" href={href} />;
  };
  const showScripts = (src) => {
    return <script key={src} type="text/javascript" src={src}></script>;
  };

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="description" content={description} />
        {stylesheets.map(showStylesheets)}
        {scripts.map(showScripts)}
      </Head>
      <Favicon />
      <OpenGraph />
    </>
  );
};

export default AppHead;
