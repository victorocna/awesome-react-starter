import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

/**
 * @see https://reactjs.org/docs/higher-order-components.html
 */
export default function withRouter(WrappedComponent) {
  const Router = () => {
    const router = useRouter();
    const { query } = router;
    if (isEmpty(query)) {
      return null;
    }

    return <WrappedComponent {...query} />;
  };

  return Router;
}
