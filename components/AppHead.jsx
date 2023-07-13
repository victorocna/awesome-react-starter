import { Favicon, NoIndex, OpenGraph } from '@components';
import { description, scripts, stylesheets } from '@site.config';

const AppHead = () => {
  const showStylesheets = (href) => {
    return <link key={href} rel="stylesheet" href={href} />;
  };
  const showScripts = (src) => {
    return <script key={src} type="text/javascript" src={src}></script>;
  };

  return (
    <>
      <meta name="description" content={description} />
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
