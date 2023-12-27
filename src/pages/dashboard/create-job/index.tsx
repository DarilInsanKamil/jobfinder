import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";
import DashboardLayout from "../layout";

const SubmitJobPage = () => {
  return (
    <DashboardLayout>
      <section className="text-center mb-10 font-semibold text-[20px]">
        <h3>Add New Job</h3>
      </section>
      <FormSubmitJob />
    </DashboardLayout>
  );
};

export default SubmitJobPage;
