import DetailSkeleton from "@/components/my_ui/skeleton/detailSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFetchJobsById } from "@/lib/features/useFetchJobs";
import {
  formatCurrencyIDR,
  hitungSelisihHari,
  splitter,
  updateHari,
} from "@/lib/utils";
import RootLayout from "@/pages/layout";
import {
  Bookmark,
  Briefcase,
  Building,
  Clock,
  Coins,
  MapPin,
  SendHorizonal,
  Share2,
} from "lucide-react";
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
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Detail Jobs | {data?.title}</title>
      </Head>
      <RootLayout>
        <div>
          {isLoading && <DetailSkeleton />}
          {!isLoading && (
            <main className="relative xl:p-10 lg:p-10 p-5">
              <section>
                <div className="flex gap-2 items-center">
                  <img
                    src={data?.company_image_url}
                    alt={data?.title}
                    className="md:w-40 md:h-20 w-20 h-10 object-cover"
                  />
                  <div>
                    <p className="text-xl font-bold">{data?.title}</p>
                    <div className="flex gap-2 items-center mt-1">
                      <p className="text-neutral-400">{data?.company_name}</p>
                      <Badge variant="outline">
                        {data?.job_status === 1
                          ? "tersedia"
                          : "tidak buka lowongan"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between md:items-center my-10 md:flex-row flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <MapPin className="w-5 h-5" />
                    <p>{data?.company_city}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Coins className="w-5 h-5" />
                    <div>
                      <p>{formatCurrencyIDR(data?.salary_min)}</p>
                      <p>{formatCurrencyIDR(data?.salary_max)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Briefcase className="w-5 h-5" />
                    <p>{data?.job_tenure}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Building className="w-5 h-5" />
                    <p>{data?.job_type}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-blue-300 my-5 text-sm items-center">
                  <Clock className="w-4 h-4 " />
                  <p>Tayang {hitungSelisihHari(data?.created_at)}</p> -
                  <p>Diperbarui {updateHari(data?.updated_at)}</p>
                </div>
                <div className="flex gap-5 justify-between">
                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                      <Share2 className="w-4 h-4" /> Share
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Bookmark className="w-4 h-4" /> Tandai
                    </Button>
                  </div>
                  <Button
                    variant="default"
                    className="transition-all gap-2 items-center"
                  >
                    Send <SendHorizonal className="w-4 h-4" />
                  </Button>
                </div>

                <hr className="my-5" />
                <div className="mt-10">
                  <h4 className="font-bold text-xl">Job Qualification</h4>
                  {splitter(data?.job_qualification)?.map(
                    (res: any, idx: number) => {
                      return (
                        <ul className="ml-5" key={idx}>
                          <li className="list-disc">{res}</li>
                        </ul>
                      );
                    }
                  )}
                </div>
                <div className="mt-10">
                  <h4 className="font-bold text-xl">Job Description</h4>
                  {splitter(data?.job_description)?.map(
                    (res: any, idx: number) => {
                      return (
                        <ul className="ml-5" key={idx}>
                          <li className="list-disc">{res}</li>
                        </ul>
                      );
                    }
                  )}
                </div>
              </section>
            </main>
          )}
        </div>
      </RootLayout>
    </>
  );
};

export default DetailPage;
