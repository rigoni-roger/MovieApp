import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppProvider;

// const queryConfig = {
//   queries: {
//     useErrorBoundary: true,
//     refetchOnWindowFocus: false,
//     retry(failureCount: number, error: any) {
//       if (error.status === 404) return false;
//       else if (failureCount < 2) return true;
//       else return false;
//     },
//   },
// };
