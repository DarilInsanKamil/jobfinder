import FormRegister from "@/components/my_ui/auth/formRegister";

const RegisterPage = () => {
  return (
    <main className="grid grid-cols-12 h-screen">
      <section className="col-start-1 col-span-7 bg-slate-300"></section>
      <FormRegister />
    </main>
  );
};
export default RegisterPage;
