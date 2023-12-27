import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";

const SubmitJobPage = () => {
  return (
    <main className="p-10">
      <section className="text-center mb-10 font-semibold text-[20px]">
        <h3>Add New Job</h3>
      </section>
      <FormSubmitJob />
    </main>
  );
};

export default SubmitJobPage;
