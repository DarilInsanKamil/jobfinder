import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import NextNProgress from "nextjs-progressbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <SpeedInsights />
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
      <NextNProgress height={5} color="#fde047" />
      <Toaster />
    </QueryClientProvider>
  );
}
