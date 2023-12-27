import { Inter } from "next/font/google";
import { useFetchJobs } from "../lib/features/useFetchJobs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading, refetch: refetchJobs } = useFetchJobs();
  return (
    <main className={`${inter.className}`}>
      {isLoading && <p>Loading...</p>}
      {JSON.stringify(data)}
    </main>
  );
}
