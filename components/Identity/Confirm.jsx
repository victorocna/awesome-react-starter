import { confirm } from '@api/identity';
import { Loading } from '@components';
import { useQuery } from 'react-query';

const Confirm = ({ hash }) => {
  const { status } = useQuery(`confirm/${hash}`, () => confirm(hash));

  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <p className="animated fadeIn text-red-600">Error! Your account was not confirmed.</p>
      )}
      {status === 'success' && (
        <p className="animated fadeIn text-green-700">Success! Your account was confirmed.</p>
      )}
    </>
  );
};

export default Confirm;
