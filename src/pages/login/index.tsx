import FormLogin from "@/components/my_ui/auth/formLogin";

const LoginPage = () => {
  return (
    <main className="grid lg:grid-cols-12 xl:grid-cols-12 grid-cols-6 lg:h-[screen] xl:h-[screen]">
      <section className="col-start-1 col-span-7 lg:block xl:block hidden bg-slate-300"></section>
      <FormLogin />
    </main>
  );
};

export default LoginPage;
