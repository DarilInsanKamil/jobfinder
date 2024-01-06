import { ContentContact } from "@/lib/placehodler";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 items-center xl:p-10 lg:p-10 p-5">
      <div className="mb-10 col-start-1 col-span-12 flex items-start xl:items-center lg:items-center flex-col">
        <h2 className="text-4xl font-bold -tracking-[2px]">Our Companies</h2>
        <p className="text-neutral-400 xl:w-[600px] lg:w-[600px] mt-3 break-words">
          Portal job kami memiliki berbagai keunggulan yang akan membantu Anda
          menemukan pekerjaan impian Anda dengan lebih mudah dan cepat.
        </p>
      </div>
      <div className="col-start-2 col-span-5 xl:block lg:block hidden">
        <Image
          src="/career.jpg"
          width={500}
          height={500}
          className="object-cover"
          alt="career"
        />
      </div>
      <div className="xl:col-start-8 xl:col-span-5 col-start-1 lg:col-span-5 col-span-6 flex flex-col gap-5">
        {ContentContact.map((res, idx) => (
          <div className="pl-5 border-l-2 border-neutral-900 " key={idx}>
            <h4 className="text-2xl font-bold">{res.cta}</h4>
            <p className="text-xl font-semibold">{res.title}</p>
            <p>{res.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
