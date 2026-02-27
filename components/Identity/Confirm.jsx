import { confirm } from '@api/identity';
import { Loading } from '@components';
import { useQuery } from '@tanstack/react-query';

const Confirm = ({ hash }) => {
  const { isPending, isError, isSuccess } = useQuery({
    queryKey: ['confirm', hash],
    queryFn: () => confirm(hash),
    enabled: Boolean(hash),
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
