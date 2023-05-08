import axios from 'axios';
import { stringifyUrl } from 'query-string';
import { useQuery as query } from 'react-query';
import { axiosAuth } from '../lib';

const useQuery = (url, options) => {
  const queryFn = () => {
    // Handle external API calls
    if (url.startsWith('http')) {
      return axios.get(url).then((res) => res.data);
    }

    // Handle internal API calls
    return axiosAuth(stringifyUrl({ url, query: options }));
  };

  return query(url, queryFn, options);
};

export default useQuery;
