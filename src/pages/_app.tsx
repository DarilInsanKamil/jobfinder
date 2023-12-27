import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster"
import Layout from "./layout";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            // staleTime: 60 * 1000,
            refetchOnWindowFocus: false
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </QueryClientProvider>
  );
}
