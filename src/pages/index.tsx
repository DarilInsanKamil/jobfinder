import { Inter } from "next/font/google";
import { useFetchJobs } from "../lib/features/useFetchJobs";
import { ReactElement } from "react";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { data, isLoading, refetch: refetchJobs } = useFetchJobs();
  return (
    <main className={`${inter.className}`}>
      {isLoading && <p>Loading...</p>}
      {JSON.stringify(data)}
    </main>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
