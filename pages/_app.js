import { ErrorBoundary, ScreenSizeInfo, Toaster } from '@components';
import { queryClientConfig } from '@constants/query-client';
import { sitename } from '@site.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import '../css/index.css';

const queryClient = new QueryClient(queryClientConfig);

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <Toaster />
        <ScreenSizeInfo />
      </ErrorBoundary>
    </>
  );
};

export default Root;
