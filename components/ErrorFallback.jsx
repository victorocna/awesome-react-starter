import { withAuth } from '@auth';
import NoSsr from './NoSsr';
import { ErrorLayout as AdminErrorLayout } from './Admin';
import { ErrorLayout as VisitorErrorLayout } from './Visitor';
import { whoami } from '@functions';

const ErrorFallback = () => {
  // Switch here between user roles if needed

  // Default error layout
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
