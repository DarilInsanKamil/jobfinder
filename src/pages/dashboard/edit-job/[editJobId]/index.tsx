import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";
import { useRouter } from "next/router";
import DashboardLayout from "../../layout";
import Head from "next/head";

const EditJobPage = () => {
  const router = useRouter();
  const id = router.query.editJobId;
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ" />
        <meta
          name="description"
          content="Effortlessly manage and refine job listings with our intuitive job editing dashboard. Streamline your hiring process, update details, and optimize postings swiftly. Elevate your recruitment experience seamlessly."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Upload Job | JobFinders</title>
      </Head>
      <DashboardLayout>
        <section className="text-center mb-10 font-semibold text-[20px] transition-all">
          <h3>Edit Job</h3>
          <p>{id}</p>
        </section>
        <FormSubmitJob />
      </DashboardLayout>
    </>
  );
};

export default EditJobPage;
