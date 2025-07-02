import FormLogin from "@/components/my_ui/auth/formLogin";
import Head from "next/head";
import Image from "next/image";
const LoginPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Securely access your account at JobFinders. Login to your personalized dashboard with ease and manage your profile, settings, and preferences. Your gateway to a seamless and personalized experience awaits – log in now."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Login | JobFinders</title>
        <meta name="robots" content="all" />
        <meta
          name="google-site-verification"
          content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ"
        />
      </Head>
      <main className="grid lg:grid-cols-12 xl:grid-cols-12 grid-cols-6 lg:h-[screen] xl:h-[screen] transition-all">
        <section className="col-start-1 col-span-7 lg:block xl:block hidden bg-slate-300">
          <div className="flex justify-center items-center h-screen">
            <Image src="/vercel.svg" width={200} height={200} alt="img" />
          </div>
        </section>
        <section className="lg:col-start-8 xl:col-start-8 col-start-1 lg:col-span-5 xl:col-span-5 col-span-6 ">
          <FormLogin />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
