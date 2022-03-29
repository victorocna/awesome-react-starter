import { sitename, title, description, image, baseurl } from '../site.config';

const OpenGraph = () => {
  return (
    <>
      <meta property="og:site_name" content={sitename} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={baseurl} />
      <meta property="og:type" content="website" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </>
  );
};

export default OpenGraph;
