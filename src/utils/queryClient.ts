import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {},
  // },
  mutationCache: new MutationCache({
    onError: (error) => console.error(error),
  }),
  queryCache: new QueryCache({
    onError: (error) => console.error(error),
  }),
})
