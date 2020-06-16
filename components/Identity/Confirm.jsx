import { useQuery } from 'react-query';
import { Loading } from '..';

const Confirm = ({ hash }) => {
  const { status } = useQuery(`confirm/${hash}`, () => confirm(hash));

  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <p className="text-red-600 animated fadeIn">
          Eroare! Contul nu a fost confirmat. Te rugăm să ne contactezi pentru rezolvarea problemei
          și confirmarea contului.
        </p>
      )}
      {status === 'success' && (
        <p className="text-green-700 animated fadeIn">
          Succes! Contul tău pe platforma <strong>ichessclub</strong> a fost confirmat.
        </p>
      )}
    </>
  );
};

export default Confirm;
