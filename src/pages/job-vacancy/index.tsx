import Card from "@/components/my_ui/job-vacancy/card";
import SearchBar from "@/components/my_ui/searchBar";
import { ResponseJob } from "@/lib/definitions";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import RootLayout from "../layout";
import { ReactElement } from "react";
import Head from "next/head";

const JobVacancy = () => {
  const { data, isLoading } = useFetchJobs();
  return (
    <>
      <Head>
        <meta name="description" content="Explore exciting career opportunities at JobFinders. Browse our latest job vacancies across various departments and apply to join a dynamic team dedicated to innovation and growth. Find your next career move with us today!" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Job Vacancy | JobFinders</title>
      </Head>
      <RootLayout>
        <main className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 lg:p-10 xl:p-10 p-5">
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 mb-5">
            <SearchBar />
          </section>
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5">
            {isLoading && <p>Loading...</p>}
            {data?.data.map((res: ResponseJob, idx:number) => (
              <Card {...res} key={idx} />
            ))}
          </section>
        </main>
      </RootLayout>
    </>
  );
};

export default JobVacancy;
