const DetailSkeleton = () => {
  return (
    <main className="relative xl:p-10 lg:p-10 p-5">
      <section>
        <div className="flex gap-2 items-center">
          <div>
            <div className="flex gap-2 items-start mt-1 ">
              <div className="bg-neutral-300 animate-pulse h-[120px] w-[120px]"></div>
              <div>
                <div className="animate-pulse bg-neutral-200 w-[200px] h-[40px] mb-5"></div>
                <div className="animate-pulse bg-neutral-200 w-[120px] h-[32px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:items-center my-10 md:flex-row flex-col gap-3">
          <div className="animate-pulse bg-neutral-200 w-[200px] h-[32px]"></div>
          <div className="animate-pulse bg-neutral-200 w-[200px] h-[32px]"></div>
          <div className="animate-pulse bg-neutral-200 w-[200px] h-[32px]"></div>
          <div className="animate-pulse bg-neutral-200 w-[200px] h-[32px]"></div>
        </div>
        <div className="animate-pulse bg-neutral-200 w-[400px] h-[32px]"></div>
        <div className="flex gap-5 justify-between mt-5">
          <div className="flex gap-3">
            <div className="animate-pulse bg-neutral-200 w-[100px] h-[40px]"></div>
            <div className="animate-pulse bg-neutral-200 w-[100px] h-[40px]"></div>
          </div>
          <div className="animate-pulse bg-neutral-200 w-[100px] h-[40px]"></div>
        </div>

        <hr className="my-5" />
        <div className="mt-10">
          <div className="animate-pulse bg-neutral-200 w-[400px] h-[120px]"></div>

        </div>
        <div className="mt-10">
          <div className="animate-pulse bg-neutral-200 w-[400px] h-[120px]"></div>

        </div>
      </section>
    </main>
  );
};

export default DetailSkeleton;
