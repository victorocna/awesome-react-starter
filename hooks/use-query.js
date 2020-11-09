import { useQuery as query } from 'react-query';
import { fetch } from '../services/api';

const useQuery = (url) => {
  return query(url, fetch);
};

export default useQuery;
