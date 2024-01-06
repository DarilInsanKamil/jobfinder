import { Button } from "@/components/ui/button";
import { ContentWorkflow } from "@/lib/placehodler";
import Link from "next/link";

type ContentWorkflowType = {
  id: number;
  title: string;
  desc: string;
  cta: string;
  icon: string;
};

const WorkFlow = () => {
  return (
    <section className="bg-neutral-900 text-white xl:p-10 lg:p-10 p-5 flex justify-center flex-col items-center">
      <div className="mb-10 xl:text-center lg:text-center">
        <h2 className="text-4xl font-bold -tracking-[2px]">How it works</h2>
        <p className="text-neutral-400 xl:w-[500px] lg:w-[500px] mt-3 break-words">
          Ikuti langkah-langkah mudah ini untuk meningkatkan peluang Anda
          mendapatkan pekerjaan
        </p>
      </div>
      <div className="flex xl:gap-60 lg:gap-60 gap-5 xl:flex-row lg:flex-row flex-col">
        {ContentWorkflow.map((res, idx: number) => (
          <div className="border-l-2 border-neutral-200 pl-5">
            <h4 className="font-bold text-3xl">{res.id}</h4>
            <p className="font-semibold text-xl">{res.title}</p>
            <p className="text-neutral-400 mb-5">{res.desc}</p>
            <Link href="#" className="text-blue-500 hover:underline transition-all">{res.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkFlow;
