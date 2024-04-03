import { baseurl, description, image, sitename, title } from '@site.config';
import Head from 'next/head';

const OpenGraph = () => {
  // The key property is used to prevent duplicate meta tags
  // https://nextjs.org/docs/api-reference/next/head#multiple-instances

  return (
    <Head>
      <meta property="og:site_name" key="og:site_name" content={sitename} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:image" key="og:image" content={image} />
      <meta property="og:url" key="og:url" content={baseurl} />
      <meta property="og:type" key="og:type" content="website" />

      <meta itemProp="name" key="itepProp:name" content={title} />
      <meta itemProp="description" key="itemProp:description" content={description} />
    </Head>
  );
};

export default OpenGraph;
