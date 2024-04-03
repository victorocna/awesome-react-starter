import { withAuth } from '@auth';
import { NoSsr } from '@components';
import { whoami } from '@functions';
import { ErrorLayout as AdminErrorLayout } from './Admin';
import { ErrorLayout as VisitorErrorLayout } from './Visitor';

const ErrorFallback = () => {
  // Switch here between user roles if needed
  let ErrorLayout = VisitorErrorLayout;

  // Admin layout should be wrapped in withAuth for security reasons
  const user = whoami();
  if (user?.role === 'admin') {
    ErrorLayout = withAuth(AdminErrorLayout);
  }
  return (
    <NoSsr>
      <ErrorLayout />
    </NoSsr>
  );
};

export default ErrorFallback;
