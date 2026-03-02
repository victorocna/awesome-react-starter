import { confirm } from '@api/identity';
import { Loading } from '@components';
import { Recaptcha } from '@components/Fields';
import { useMutation } from '@hooks';
import { useEffect, useRef } from 'react';

const Confirm = ({ hash }) => {
  const ref = useRef(null);

  // We need to use reCAPTCHA since it's a public endpoint
  const { status, mutate } = useMutation(() => confirm(ref, hash));

  // Initialize the mutation on component mount
  useEffect(() => mutate(), [mutate]);

  return (
    <>
      {status === 'pending' && <Loading />}
      {status === 'error' && (
        <p className="animated fadeIn text-red-600">Error! Your account was not confirmed.</p>
      )}
      {status === 'success' && (
        <p className="animated fadeIn text-green-700">Success! Your account was confirmed.</p>
      )}
      <Recaptcha ref={ref} />
    </>
  );
};

export default Confirm;
