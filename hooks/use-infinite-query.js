import { stringifyUrl } from 'query-string';
import { useInfiniteQuery as infiniteQuery } from 'react-query';
import { axios } from '../services/api';

const useInfiniteQuery = (url, options) => {
  const limit = 30;
  const getNextPageParam = ({ hasNext, offset }) => {
    return hasNext && offset;
  };

  const fetcher = ({ pageParam: offset }) => {
    return axios(stringifyUrl({ url, query: { limit, ...options, offset } }));
  };
  const config = { getNextPageParam, limit, ...options };

  const response = infiniteQuery(url, fetcher, config);
  if (response.status !== 'success') {
    return response;
  }

  const data = {
    pageParams: {},
    pages: [],
  };
  for (const page of response.data.pages) {
    const { documents, ...paginated } = page;
    data.pageParams = paginated;
    data.pages.push(documents);
  }

  return { ...response, data };
};

export default useInfiniteQuery;
