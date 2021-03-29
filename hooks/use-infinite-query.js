import { stringifyUrl } from 'query-string';
import { string, object } from 'prop-types';
import { useInfiniteQuery as infiniteQuery } from 'react-query';
import { axios } from '../services/api';

/**
 * Custom hook for useInfiniteQuery
 *
 * @param {String} url
 * @param {Object} options
 */
const useInfiniteQuery = (url, options) => {
  const limit = 30;
  const getNextPageParam = ({ hasNext, offset }) => {
    return hasNext && offset;
  };

  const fetcher = ({ pageParam: offset }) => {
    return axios(stringifyUrl({ url, query: { limit, ...options, offset } }));
  };
  const config = { getNextPageParam, limit, ...options };

  const response = infiniteQuery([url, options], fetcher, config);
  if (response.status !== 'success') {
    return response;
  }

  const data = {
    pageParams: {},
    pages: [],
  };
  for (const page of response.data.pages) {
    const { pages, pageParams } = page;
    data.pageParams = pageParams;
    data.pages.push(pages);
  }

  return { ...response, data };
};

useInfiniteQuery.PropTypes = {
  url: string,
  options: object,
};

useInfiniteQuery.defaultProps = {
  url: '',
  options: {},
};

export default useInfiniteQuery;
