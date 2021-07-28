import { useQuery } from 'react-query';
import { confirm } from '../../api';
import { Loading } from '..';

const Confirm = ({ hash }) => {
  const { status } = useQuery(`confirm/${hash}`, () => confirm(hash));

  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <p className="text-red-600 animated fadeIn">Error! Your account was not confirmed.</p>
      )}
      {status === 'success' && (
        <p className="text-green-700 animated fadeIn">Success! Your account was confirmed.</p>
      )}
    </>
  );
};

export default Confirm;
