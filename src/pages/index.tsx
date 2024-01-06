import { Inter } from "next/font/google";
import RootLayout from "./layout";
import Head from "next/head";
import HeroSection from "@/components/my_ui/landingpage/hero-section";
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
        <meta
          name="google-site-verification"
          content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ"
        />
        <meta
          name="keywords"
          content="Discover your dream job with job finders"
        />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
      <RootLayout>
        <main
          className={`${inter.className}`}
        >
          <HeroSection />
        </main>
      </RootLayout>
    </>
  );
}

export default Home;
