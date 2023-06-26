import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../components';
import '../css/index.css';
import { sitename } from '../site.config';

const Root = (props) => {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
};

export default Root;
