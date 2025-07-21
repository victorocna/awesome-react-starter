import { axiosAuth } from '@lib';
import { useInfiniteQuery as infiniteQuery } from '@tanstack/react-query';
import { stringifyUrl } from 'query-string';

/**
 * Custom hook for useInfiniteQuery
 *
 * @param {String} url
 * @param {Object} options
 * @returns {Object} Returns query data, status and others
 * @see https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery
 */
const useInfiniteQuery = (url, options = {}) => {
  const per_page = 30;
  const getNextPageParam = (lastPage) => {
    if (!lastPage?.pageParams?.hasNext) {
      return undefined;
    }
    return lastPage.pageParams.page + 1;
  };

  const queryFn = ({ pageParam = 1 }) => {
    const query = { per_page, page: pageParam, ...options };
    return axiosAuth(stringifyUrl({ url, query }));
  };

  const response = infiniteQuery({
    queryKey: [url, options],
    queryFn,
    getNextPageParam,
    initialPageParam: 1,
    ...options,
  });
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
