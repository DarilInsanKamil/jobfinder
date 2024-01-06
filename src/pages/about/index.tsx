import Head from "next/head";
import RootLayout from "../layout";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover your dream job with ease. Our comprehensive job finder platform connects you to a myriad of career opportunities across industries. Streamline your job search, explore diverse roles, and take the next step towards your professional aspirations. thank you for visiting -daril insan kamil"
        />
        <title>About | JobFinders</title>
        <meta
          name="keywords"
          content="Daril insan kamil portofolio website"
        />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
      <RootLayout>
        <main className="grid grid-cols-6 xl:grid-cols-12 lg:grid-cols-12  h-screen">
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">
              Thank You for visiting my portofolio website
            </p>
          </section>
        </main>
      </RootLayout>
    </>
  );
};
export default AboutPage;
