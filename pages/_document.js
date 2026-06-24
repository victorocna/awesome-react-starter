import { AppHead } from '@components';
import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Root Document component for the Next.js application.
 * Renders HTML structure and includes the suppressHydrationWarning attribute.
 * 
 * @returns {React.ReactElement} The HTML document structure.
 */
const Document = () => {
  return (
    <Html suppressHydrationWarning>
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

