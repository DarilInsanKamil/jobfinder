import FormLogin from "@/components/my_ui/auth/formLogin";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Securely access your account at JobFinders. Login to your personalized dashboard with ease and manage your profile, settings, and preferences. Your gateway to a seamless and personalized experience awaits – log in now." />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Login | JobFinders</title>
      </Head>
      <main className="grid lg:grid-cols-12 xl:grid-cols-12 grid-cols-6 lg:h-[screen] xl:h-[screen]">
        <section className="col-start-1 col-span-7 lg:block xl:block hidden bg-slate-300"></section>
        <FormLogin />
      </main>
    </>
  );
};

export default LoginPage;
