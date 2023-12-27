import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";
import { useRouter } from "next/router";

const EditJobPage = () => {
  const router = useRouter()
  const id = router.query.editJobId
  return (
    <main className="p-10">
      <section className="text-center mb-10 font-semibold text-[20px]">
        <h3>Edit Job</h3>
        <p>{id}</p>
      </section>
      <FormSubmitJob />
    </main>
  );
};

export default EditJobPage;
