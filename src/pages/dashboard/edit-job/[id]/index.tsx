import { useRouter } from "next/router";
import DashboardLayout from "../../layout";
import Head from "next/head";
import { useFetchJobsById } from "@/lib/features/useFetchJobs";
import FormEdit from "@/components/my_ui/dashboard/formEdit";
import { useEffect, useState } from "react";

const EditJobPage = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { data } = useFetchJobsById(id);
  return (
    <>
      <Head>
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
        <FormEdit res={data} />
      </DashboardLayout>
    </>
  );
};

export default EditJobPage;
