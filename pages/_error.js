import createError from '@api/client-error';
import { withAuth } from '@auth';
import { NoSsr } from '@components';
import { ErrorLayout as AdminErrorLayout } from '@components/Admin';
import { ErrorLayout as VisitorErrorLayout } from '@components/Visitor';
import { whoami } from '@functions';
import { useRouter, withRouter } from 'next/router';

const Error = ({ err }) => {
  const router = useRouter();

  // Log the error
  createError({
    pathname: router?.asPath || 'Unknown', // Send the path where the error occurred
    data: `Client side exception caught by Error handler: ${err?.message}`,
  });

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

Error.getInitialProps = ({ err }) => {
  return { err };
};

export default withRouter(Error);
