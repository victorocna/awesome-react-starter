import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { objectId } from '../functions';

/**
 * @see https://reactjs.org/docs/higher-order-components.html
 */
export default function withRouter(WrappedComponent) {
  const Router = () => {
    const router = useRouter();
    if (isEmpty(router.query)) {
      return null;
    }

    if (router.query.hash) {
      return <WrappedComponent hash={router.query.hash} />;
    }
    if (router.query.id) {
      return <WrappedComponent id={router.query.id} />;
    }

    const slug = router.query.slug;
    const id = objectId.from(slug);

    return <WrappedComponent id={id} slug={slug} />;
  };

  return Router;
}
