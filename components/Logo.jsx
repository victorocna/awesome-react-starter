import { useContext } from 'react';
import { AppContext, Link } from '.';

const Logo = () => {
  const { sitename } = useContext(AppContext);

  return (
    <Link href="/">
      <div className="logo flex items-start mb-12 cursor-pointer">
        <img src="/images/logo.png" alt={sitename} />
      </div>
    </Link>
  );
};

export default Logo;
