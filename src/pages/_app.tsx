import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SidebarProvider } from "../context/SideBarContext";
import { makeServer } from "../services/mirage";
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProviderFuntion } from "../services/query/queryClient";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <QueryClientProviderFuntion>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProviderFuntion>
      </SidebarProvider>
    </ChakraProvider>
  );
}

export default MyApp;
