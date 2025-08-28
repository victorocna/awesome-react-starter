import { normalize } from '@functions';
import { axiosAuth } from '@lib';
import { useInfiniteQuery as rqUseInfiniteQuery } from '@tanstack/react-query';
import { stringifyUrl } from 'query-string';

const useInfiniteQuery = (url, params = {}, rqOptions = {}) => {
  const { norm, key } = normalize(params);
  const per_page = 30;

  return rqUseInfiniteQuery({
    queryKey: [url, key],
    queryFn: ({ pageParam = 1, signal }) => {
      const query = { per_page, page: pageParam, ...norm };
      const fullUrl = stringifyUrl({ url, query }, { skipNull: true, skipEmptyString: true });
      return axiosAuth(fullUrl, { signal });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage?.pageParams?.hasNext) {
        return undefined;
      }
      return lastPage.pageParams.page + 1;
    },
    initialPageParam: 1,
    select: (infinite) => {
      if (!infinite?.pages || infinite.pages.length === 0) {
        return { pageParams: {}, pages: [] };
      }

      const last = infinite.pages[infinite.pages.length - 1];
      const pageParams = last?.pageParams || {};

      const pages = [];
      for (let i = 0; i < infinite.pages.length; i++) {
        const p = infinite.pages[i];
        const arr = Array.isArray(p?.pages) ? p.pages : [];
        for (let j = 0; j < arr.length; j++) {
          pages.push(arr[j]);
        }
      }

      return { pageParams, pages };
    },
    ...rqOptions,
  });
};

export default useInfiniteQuery;
