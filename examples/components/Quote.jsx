import { useQuery } from '@hooks';
import { QuoteError, QuoteLoading, QuoteSuccess } from '.';

const Quote = () => {
  const { data, status } = useQuery(`https://api.quotable.io/random`);

  return (
    <article className="mb-4 rounded-lg border border-gray-400 bg-white py-4 lg:py-8">
      <div className="mb-4 flex items-center px-4 lg:px-8">
        <h1 className="text-xl font-bold">Random quote</h1>
      </div>

      {status === 'loading' && <QuoteLoading />}
      {status === 'error' && <QuoteError />}
      {status === 'success' && <QuoteSuccess {...data} />}
    </article>
  );
};

export default Quote;
