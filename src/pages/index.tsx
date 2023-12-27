import { Inter } from "next/font/google";
import { useFetchJobs } from "../lib/features/useFetchJobs";
import { ReactElement } from "react";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { data, isLoading, refetch: refetchJobs } = useFetchJobs();
  return (
    <RootLayout>
      <main className={`${inter.className} h-screen flex justify-center items-center`}>
        <p>Hello there</p>
      </main>
    </RootLayout>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
