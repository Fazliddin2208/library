import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on focus
      retry: 1, // Retry failed queries once
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});
