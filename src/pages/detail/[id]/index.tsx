import { useFetchJobsById } from "@/lib/features/useFetchJobs";
import Head from "next/head";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const id = router.query.id?.toString();

  const { data, isLoading } = useFetchJobsById(id);

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Join ${data?.company_name} in ${data?.company_city} for a ${
            (data?.job_tenure, data?.job_type)
          } position. Explore this exciting opportunity offering a salary range of ${
            data?.salary_min
          } to ${data?.salary_max} Discover the role of ${
            data?.title
          }, contributing your skills in ${data?.job_type}. Apply now with ${
            data?.company_name
          } and delve into a fulfilling career path encompassing ${
            data?.job_description
          } and qualification of ${data?.job_qualification}.`}
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Detail Jobs | {data?.title}</title>
      </Head>
      <div>
        {isLoading && <p>Loading...</p>}
        {/* <p>{JSON.stringify(data)}</p> */}
        <p>{data?.title}</p>
        <p>{JSON.stringify(data)}</p>
      </div>
    </>
  );
};

export default DetailPage;
