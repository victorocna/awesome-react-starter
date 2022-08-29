import { useQuery as query } from 'react-query';
import { axiosAuth } from '../lib';
import { stringifyUrl } from 'query-string';

const useQuery = (url, options) => {
  const queryFn = ({ queryKey }) => {
    return axiosAuth(stringifyUrl({ url: queryKey, query: options }));
  };

  return query(url, queryFn, options);
};

export default useQuery;
