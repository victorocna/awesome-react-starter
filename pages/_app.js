import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContext, AppHead, Toaster } from '../components';
import * as context from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <AppContext.Provider value={context}>
      <QueryClientProvider client={queryClient}>
        <AppHead />
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </AppContext.Provider>
  );
};

export default Root;
