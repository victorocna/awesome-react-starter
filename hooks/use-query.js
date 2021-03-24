import { useQuery as query } from 'react-query';
import { axios } from '../services/api';

const useQuery = (url) => {
  return query(url, ({ queryKey }) => {
    return axios(queryKey[0]);
  });
};

export default useQuery;
