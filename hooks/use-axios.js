import { useQuery as query } from 'react-query';
import { axios } from '../services/api';

const useAxios = (url) => {
  return query(url, axios);
};

export default useAxios;
