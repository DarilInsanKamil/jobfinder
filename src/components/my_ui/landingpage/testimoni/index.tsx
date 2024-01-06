import { CarouselSize } from "../../carousel";

const Testimoni = () => {
  return (
    <section className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 bg-neutral-900 text-white p-5 xl:p-10 lg:p-10">
      <div className="mb-10 col-start-1 col-span-12 items-center flex justify-center flex-col">
        <h2 className="text-4xl font-bold -tracking-[2px]">
          2 Juta talenta telah dapat kerja via JobFinders
        </h2>
        <p className="text-neutral-400 xl:w-[500px] lg:w-[500px] mt-3 break-words">
          Simak kisah mereka dapat pekerjaan via Glints. Kini giliranmu!
        </p>
      </div>
      <div className="xl:col-start-2 lg:col-start-2 col-start-1 xl:col-span-10 lg:col-span-10 col-span-6">
        <CarouselSize />
      </div>
    </section>
  );
};

export default Testimoni;
