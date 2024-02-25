import { QueryClient } from 'react-query';

export const API_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
