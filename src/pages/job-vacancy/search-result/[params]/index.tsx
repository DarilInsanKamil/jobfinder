import Card from "@/components/my_ui/job-vacancy/card";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const SearchResult = () => {
  const router = useRouter();
  const pagination = Cookies.get("pagination")
  const params = router.query.params?.toString();
  const { data, isLoading } = useFetchJobs(pagination != undefined ? parseInt(pagination) : 1);
  const result = data?.filter((word: any) =>
    word.title.toLowerCase().includes(params?.toLocaleLowerCase())
  );
  return (
    <main className="xl:p-10 lg:p-10 p-5 grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 gap-5">
      <div className="col-start-1 col-span-12">
        <h3 className="font-semibold text-[24px]">
          Search Result: <span className="font-normal text-base">{params}</span>
        </h3>
      </div> 
      <div className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-12 grid xl:grid-cols-3 lg:xl:grid-cols-3 grid-cols-1 gap-5 ">
        {result?.map((res: any) => (
          <Card {...res} key={res.id} />
        ))}
      </div>
    </main>
  );
};

export default SearchResult;
