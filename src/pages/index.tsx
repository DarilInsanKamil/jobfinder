import { Inter } from "next/font/google";
import { useFetchJobs } from "../lib/features/useFetchJobs";
import { ReactElement } from "react";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <RootLayout>
      <main className={`${inter.className} h-screen flex justify-center items-center`}>
        <p>Hello there</p>
      </main>
    </RootLayout>
  );
}

export default Home;
