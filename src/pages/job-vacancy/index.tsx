import Card from "@/components/my_ui/job-vacancy/card";
import SearchBar from "@/components/my_ui/searchBar";
import { ResponseJob } from "@/lib/definitions";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import RootLayout from "../layout";
import { useState } from "react";
import Head from "next/head";
import CardSkeleton from "@/components/my_ui/skeleton/cardSkeleteon";
import { Button } from "@/components/ui/button";
import { ScrollTop } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

const JobVacancy = () => {
  const [queryPage, setQueryPage] = useState<number>(1);
  const [isRefetching, setIsRefetching] = useState<boolean>(false);
  const searhParams = useSearchParams();
  const params = searhParams?.get("search");
  const { data, isLoading, refetch: refetchPage } = useFetchJobs(queryPage);

  const handleNextPagination = async () => {
    setIsRefetching(true);
    if (queryPage <= data.last_page - 1) {
      await setQueryPage((prevState) => prevState + 1);
      refetchPage().then(() => setIsRefetching(false));
      ScrollTop();
    }
  };

  const handlePrevPagination = async () => {
    setIsRefetching(true);
    if (queryPage > 1) {
      await setQueryPage((prevState) => prevState - 1);
      refetchPage().then(() => setIsRefetching(false));
      ScrollTop();
    }
  };
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore exciting career opportunities at JobFinders. Browse our latest job vacancies across various departments and apply to join a dynamic team dedicated to innovation and growth. Find your next career move with us today!"
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Job Vacancy | JobFinders</title>
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="Discover your dream job with job finders"
        />
      </Head>
      <RootLayout>
        <main className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 lg:p-10 xl:p-10 p-5 transition-all">
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 mb-5">
            <SearchBar />
          </section>
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5">
            {isLoading && <CardSkeleton />}
            {isRefetching && <CardSkeleton />}
            {!isRefetching &&
              data?.data.map((res: any, idx: number) => (
                <Card {...res} key={idx} />
              ))}
          </section>
          <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 flex justify-center mt-10 gap-2">
            <Button
              disabled={queryPage === 1 ? true : false}
              variant="outline"
              type="button"
              onClick={handlePrevPagination}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Prev
            </Button>
            <p className="bg-neutral-100 px-4 py-2 rounded-md">{queryPage}</p>
            <Button
              disabled={data?.last_page > queryPage ? false : true}
              variant="outline"
              type="button"
              onClick={handleNextPagination}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </section>
        </main>
      </RootLayout>
    </>
  );
};

export default JobVacancy;
