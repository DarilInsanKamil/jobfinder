import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";
import { useRouter } from "next/router";
import DashboardLayout from "../../layout";

const EditJobPage = () => {
  const router = useRouter();
  const id = router.query.editJobId;
  return (
    <DashboardLayout>
      <section className="text-center mb-10 font-semibold text-[20px]">
        <h3>Edit Job</h3>
        <p>{id}</p>
      </section>
      <FormSubmitJob />
    </DashboardLayout>
  );
};

export default EditJobPage;
