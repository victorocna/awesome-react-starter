import { normalize } from '@functions';
import { axiosAuth } from '@lib';
import { useQuery as rqUseQuery } from '@tanstack/react-query';
import axios from 'axios';
import { stringifyUrl } from 'query-string';

const useQuery = (url, params = {}, rqOptions = {}) => {
  const { norm, key } = normalize(params);

  return rqUseQuery({
    queryKey: [url, key],
    queryFn: async ({ signal }) => {
      const fullUrl = stringifyUrl({ url, query: norm }, { skipNull: true, skipEmptyString: true });

      if (/^https?:\/\//i.test(url)) {
        const r = await axios.get(fullUrl, { signal });
        return r.data;
      }

      return axiosAuth(fullUrl, { signal });
    },
    ...rqOptions,
  });
};

export default useQuery;
