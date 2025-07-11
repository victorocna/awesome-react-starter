export const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
};
