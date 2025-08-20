import { normalize } from '@functions';
import { axiosAuth } from '@lib';
import { useInfiniteQuery as rqUseInfiniteQuery } from '@tanstack/react-query';
import { stringifyUrl } from 'query-string';

const useInfiniteQuery = (url, filters = {}, rqOptions = {}) => {
  const norm = normalize(filters);
  const key = JSON.stringify(norm);
  const per_page = 30;

  return rqUseInfiniteQuery({
    queryKey: ['inf', url, key],
    queryFn: ({ pageParam = 1 }) => {
      const query = { per_page, page: pageParam, ...norm };
      return axiosAuth(stringifyUrl({ url, query }));
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage?.pageParams?.hasNext) {
        return undefined;
      }
      return lastPage.pageParams.page + 1;
    },
    initialPageParam: 1,
    staleTime: 30000,
    select: (infinite) => {
      const data = { pageParams: {}, pages: [] };
      for (const p of infinite.pages) {
        if (p?.pageParams) {
          data.pageParams = p.pageParams;
        }
        if (p?.pages) {
          data.pages.push(p.pages);
        }
      }
      return data;
    },
    ...rqOptions,
  });
};

export default useInfiniteQuery;
