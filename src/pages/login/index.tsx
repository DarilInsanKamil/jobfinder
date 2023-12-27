import FormLogin from "@/components/my_ui/auth/formLogin";

const LoginPage = () => {
  return (
    <main className="grid grid-cols-12">
      <section className="col-start-1 col-span-7 bg-slate-300"></section>
      <FormLogin />
    </main>
  );
};

export default LoginPage;
