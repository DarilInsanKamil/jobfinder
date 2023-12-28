import FormRegister from "@/components/my_ui/auth/formRegister";
import Head from "next/head";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Join our community at JobFinders! Register now to unlock exclusive access, personalized services, and stay updated with the latest news. Sign up hassle-free and be part of a vibrant network tailored to your interests." />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Register | JobFinders</title>
        <meta name="robots" content="all" />
        <meta name="google-site-verification" content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ" />
      </Head>
      <main className="grid grid-cols-12 h-screen">
        <section className="col-start-1 col-span-7 bg-slate-300"></section>
        <FormRegister />
      </main>
    </>
  );
};
export default RegisterPage;
