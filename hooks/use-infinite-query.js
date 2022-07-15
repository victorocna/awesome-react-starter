import { stringifyUrl } from 'query-string';
import { useInfiniteQuery as infiniteQuery } from 'react-query';
import { axiosAuth } from '../lib';

/**
 * Custom hook for useInfiniteQuery
 *
 * @param {String} url
 * @param {Object} options
 * @returns {Object} Returns query data, status and others
 * @see https://react-query.tanstack.com/reference/useInfiniteQuery
 */
const useInfiniteQuery = (url, options = {}) => {
  const per_page = 30;
  const getNextPageParam = ({ pageParams }) => {
    if (!pageParams?.hasNext) {
      return false;
    }
    return pageParams?.page + 1;
  };

  const fetcher = ({ pageParam: page }) => {
    const query = { per_page, ...options };
    if (page) {
      query.page = page;
    }
    return axiosAuth(stringifyUrl({ url, query }));
  };
  const config = { getNextPageParam, per_page, ...options };

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

export default useInfiniteQuery;
