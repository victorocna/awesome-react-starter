import React from 'react';
import Head from 'next/head';
import { AppHead, OpenGraph } from '../components';
import config from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <AppHead {...config} />
        <OpenGraph {...config} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Root;
