import { confirm } from '@api/identity';
import { Loading } from '@components';
import { useQuery } from '@tanstack/react-query';

const Confirm = ({ hash }) => {
  const {
    data,
    error,
    isPending, // v5
    isError, // v5
    isSuccess, // v5
    fetchStatus, // 'idle' | 'fetching' | 'paused'
  } = useQuery({
    queryKey: ['confirm', hash],
    queryFn: () => confirm(hash),
    enabled: Boolean(hash), // avoid running with undefined hash
    retry: 1, // optional
    staleTime: 0, // optional
  });

  return (
    <>
      {isPending && <Loading />}
      {isError && (
        <p className="animated fadeIn text-red-600">Error! Your account was not confirmed.</p>
      )}
      {isSuccess && (
        <p className="animated fadeIn text-green-700">Success! Your account was confirmed.</p>
      )}
    </>
  );
};

export default Confirm;
