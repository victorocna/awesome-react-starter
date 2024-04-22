import { Favicon, NoIndex, OpenGraph } from '@components';
import { description, scripts, stylesheets } from '@site.config';

const AppHead = () => {
  const showStylesheets = (href) => {
    return <link key={href} rel="stylesheet" href={href} />;
  };
  const showScripts = (src) => {
    return <script key={src} type="text/javascript" src={src}></script>;
  };

  // Order of the meta tags is important, do NOT change the order
  // Loading image must be after the stylesheets

  return (
    <>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {stylesheets.map(showStylesheets)}
      {scripts.map(showScripts)}
      <img src="/icons/loading.gif" alt="loading" className="hidden" />
      <Favicon />
      <OpenGraph />
      <NoIndex />
    </>
  );
};

export default AppHead;
