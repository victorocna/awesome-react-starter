import { Link } from '@components';
import { sitename } from '@site.config';

const Logo = () => {
  return (
    <Link href="/">
      <div className="logo mb-12 flex cursor-pointer items-start">
        <img src="/images/logo.png" alt={sitename} />
      </div>
    </Link>
  );
};

export default Logo;
