import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '../components';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toaster />
    </QueryClientProvider>
  );
};

export default Root;
