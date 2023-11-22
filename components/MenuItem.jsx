import { Link } from '@components';
import { classnames } from '@lib';
import { useRouter } from 'next/router';

const MenuItem = ({ href, children, level = 1 }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link
      href={href}
      className={classnames(
        'menu-item cursor-pointer px-8 py-2 hover:bg-gray-100',
        'text-gray-900 no-underline',
        level == 1 ? 'pl-8' : 'pl-12',
        pathname === href && 'font-semibold text-primary'
      )}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
