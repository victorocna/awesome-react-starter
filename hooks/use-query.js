import { useQuery as query } from 'react-query';
import { axios } from '../services/api';

const useQuery = (url, options) => {
  const queryFn = ({ queryKey }) => {
    return axios(queryKey);
  };

  return query(url, queryFn, options);
};

export default useQuery;
