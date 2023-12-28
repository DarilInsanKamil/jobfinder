import { CardSkeletonData } from "@/lib/placehodler";

export default function CardSkeleton() {
  return (
    <>
      {CardSkeletonData.map((res) => {
        return (
          <div className="animate-pulse bg-slate-300 p-5 rounded-md transition-all" key={res.id}>
            <div className="flex gap-3 items-center">
              <div className="animate-pulse bg-slate-100 w-[40px] h-[40px] rounded-full "></div>
              <div>
                <div className="animate-pulse bg-slate-100 w-[180px] h-[15px] "></div>
                <div className="animate-pulse bg-slate-100 w-[120px] h-[15px] mt-2"></div>
              </div>
            </div>
            <div className="animate-pulse bg-slate-100 w-[200px] h-[12px] mt-5"></div>
            <div className="animate-pulse bg-slate-100 w-[200px] h-[12px] mt-2"></div>
            <div className="flex justify-between mt-3 items-center">
              <div className="flex gap-2">
                <div className="animate-pulse bg-slate-100 w-[80px] h-[15px] "></div>
                <div className="animate-pulse bg-slate-100 w-[80px] h-[15px] "></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
