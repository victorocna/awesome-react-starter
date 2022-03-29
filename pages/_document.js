import { Html, Head, Main, NextScript } from 'next/document';
import { AppHead } from '../components';

const Document = () => {
  return (
    <Html>
      <Head>
        <AppHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
