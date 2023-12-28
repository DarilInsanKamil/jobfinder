import { Inter } from "next/font/google";
import { useFetchJobs } from "../lib/features/useFetchJobs";
import { ReactElement } from "react";
import RootLayout from "./layout";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover your dream job with ease. Our comprehensive job finder platform connects you to a myriad of career opportunities across industries. Streamline your job search, explore diverse roles, and take the next step towards your professional aspirations."
        />
        <title>JobFinders</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
      <RootLayout>
        <main
          className={`${inter.className} h-screen flex justify-center items-center`}
        >
          <p>Hello there</p>
        </main>
      </RootLayout>
    </>
  );
}

export default Home;
