import { Link } from '.';
import { sitename } from '../site.config';

const Logo = () => {
  return (
    <Link href="/">
      <div className="logo flex items-start mb-12 cursor-pointer">
        <img src="/images/logo.png" alt={sitename} />
      </div>
    </Link>
  );
};

export default Logo;
