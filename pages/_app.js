import React from 'react';
import { AppContext, AppHead } from '../components';
import * as context from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <AppContext.Provider value={context}>
      <AppHead />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default Root;
