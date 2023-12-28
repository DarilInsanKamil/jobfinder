import FormSubmitJob from "@/components/my_ui/dashboard/formSubmitJob";
import DashboardLayout from "../layout";
import Head from "next/head";

const SubmitJobPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Effortlessly manage and streamline your job uploads with our intuitive dashboard. Simplify the process of posting job vacancies, track submissions, and optimize your recruitment strategy efficiently. Elevate your hiring experience with our user-friendly upload job dashboard."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Upload Job | JobFinders</title>
      </Head>
      <DashboardLayout>
        <section className="text-center mb-10 font-semibold text-[20px]">
          <h3>Add New Job</h3>
        </section>
        <FormSubmitJob />
      </DashboardLayout>
    </>
  );
};

export default SubmitJobPage;
