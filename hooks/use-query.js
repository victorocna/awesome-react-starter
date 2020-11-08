import { useQuery as query } from 'react-query';
import { fetch } from '../functions';

const useQuery = (url) => {
  return query(url, fetch);
};

export default useQuery;
