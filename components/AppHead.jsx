import * as config from '../site.config';
import { Favicon, OpenGraph } from '.';

const AppHead = () => {
  const { sitename, description, stylesheets, scripts } = config;
  const showStylesheets = (href) => {
    return <link key={href} rel="stylesheet" href={href} />;
  };
  const showScripts = (src) => {
    return <script key={src} type="text/javascript" src={src}></script>;
  };

  return (
    <>
      <title>{sitename}</title>
      <meta name="description" content={description} />
      {stylesheets.map(showStylesheets)}
      {scripts.map(showScripts)}
      <Favicon />
      <OpenGraph />
    </>
  );
};

export default AppHead;
