import { axiosAuth } from '@lib';
import axios from 'axios';
import { stringifyUrl } from 'query-string';
import { useQuery as query } from 'react-query';

const useQuery = (url, options) => {
  const fullUrl = stringifyUrl({ url, query: options });

  const queryFn = () => {
    // Handle external API calls
    if (url.startsWith('http')) {
      return axios.get(fullUrl).then((res) => res.data);
    }

    // Handle internal API calls
    return axiosAuth(fullUrl);
  };

  return query(fullUrl, queryFn, options);
};

export default useQuery;
