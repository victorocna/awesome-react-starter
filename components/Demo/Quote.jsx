import { useQuery } from '../../hooks';
import { QuoteSuccess, QuoteError, QuoteLoading } from '.';

const Quote = () => {
  const { data, status } = useQuery(`https://api.quotable.io/random`);

  return (
    <article className="bg-white border border-gray-400 rounded-lg py-4 lg:py-8 mb-4">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <h1 className="font-bold text-xl">Random quote</h1>
      </div>

      {status === 'loading' && <QuoteLoading />}
      {status === 'error' && <QuoteError />}
      {status === 'success' && <QuoteSuccess {...data} />}
    </article>
  );
};

export default Quote;
