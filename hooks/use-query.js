import axios from 'axios';
import { stringifyUrl } from 'query-string';
import { useQuery as query } from 'react-query';
import { axiosAuth } from '../lib';

const useQuery = (url, options) => {
  const queryFn = () => {
    const fullUrl = stringifyUrl({ url, query: options });

    // Handle external API calls
    if (url.startsWith('http')) {
      return axios.get(fullUrl).then((res) => res.data);
    }

    // Handle internal API calls
    return axiosAuth(fullUrl);
  };

  return query(url, queryFn, options);
};

export default useQuery;
