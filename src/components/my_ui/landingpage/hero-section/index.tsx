import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="xl:p-10 lg:p-10 p-5 grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-6 items-center transition-all xl:h-screen lg:h-screen">
      <div className="xl:hidden lg:hidden block col-start-1 col-span-6">
        <Image
          src={"/hero2.png"}
          width={500}
          height={500}
          draggable="false"
          blurDataURL="/hero2.png"
          alt="hero"
          className="object-contain"
        />
      </div>
      <div className="xl:col-start-2 lg:col-start-2 xl:col-span-5 lg:col-span-5 col-start-1 col-span-6 xl:mt-0 lg:mt-0 mt-5">
        <h1 className="font-bold xl:text-6xl lg:text-6xl md:text-6xl text-4xl -tracking-[3px] ">
          Find your dream job easily.
        </h1>
        <p className="text-neutral-600 my-4 font-poppins">
          Kami memiliki tim rekruter profesional yang akan membantu Anda untuk
          menemukan pekerjaan yang sesuai dengan kualifikasi dan minat Anda.
        </p>
        <Button
          asChild
        >
          <Link href="/job-vacancy">See All Job</Link>
        </Button>
      </div>
      <div className="xl:block lg:block hidden col-start-8 col-span-6">
        <Image
          src={"/hero2.png"}
          blurDataURL="/hero2.png"
          width={500}
          height={500}
          draggable="false"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default HeroSection;
