import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function QueryClientProviderFuntion({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export { QueryClientProviderFuntion, queryClient };
