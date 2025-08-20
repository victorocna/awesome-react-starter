import { isRequestCanceled } from '@functions';

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (isRequestCanceled(error)) {
          return false;
        }
        return failureCount < 2;
      },
      retryDelay: 500,
      refetchOnWindowFocus: false,
      staleTime: 30000,
      gcTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: 1,
    },
  },
};
