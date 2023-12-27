import Card from "@/components/my_ui/job-vacancy/card";
import SearchBar from "@/components/my_ui/searchBar";
import { ResponseJob } from "@/lib/definitions";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import RootLayout from "../layout";
import { ReactElement } from "react";

const JobVacancy = () => {
  const { data, isLoading } = useFetchJobs();
  return (
    <RootLayout>
      <main className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 lg:p-10 xl:p-10 p-5">
        <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 mb-5">
          <SearchBar />
        </section>
        <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5">
          {isLoading && <p>Loading...</p>}
          {data?.data.map((res: ResponseJob, idx) => (
            <Card {...res} key={idx} />
          ))}
        </section>
      </main>
    </RootLayout>
  );
};

export default JobVacancy;
