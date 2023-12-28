import { Dribbble, Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white w-full -bottom-0 shrink-0">
      <div className="items-start justify-around p-10 w-full xl:flex lg:flex  hidden">
        <div>
          <Image src={"./vercel.svg"} width={200} height={200} alt="img" />
          <h4 className="font-bold mt-5 text-[24px]">JobFinder</h4>
          <p className="break-words w-[300px] mt-1 text-neutral-600">
            Jl. Vila Dago Tol Blk. I No.4 no 11, Serua, Kec. Ciputat, Kota
            Tangerang Selatan, Banten 15414
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3 text-neutral-600">COMPANY</p>
          <ul>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Career</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Brand Center</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3 text-neutral-600">HELP CENTER</p>
          <ul>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Facebook</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Twitter</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3 text-neutral-600">LEGAL</p>
          <ul>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Privacy & Policy</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Licensing</a>
            </li>
            <li className="cursor-pointer hover:underline transition-all mb-2 text-neutral-500">
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 bg-neutral-900 md:flex md:items-center md:justify-between">
        <span className="text-sm text-neutral-200 dark:text-gray-300 sm:text-center">
          © 2023 <a href="https://flowbite.com/">JobFinder</a>. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="#"
            className="text-neutral-200 hover:text-blue-400 dark:hover:text-white"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-neutral-200 hover:text-blue-400 dark:hover:text-white"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            className="text-neutral-200 hover:text-blue-400 dark:hover:text-white"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            className="text-neutral-200 hover:text-blue-400 dark:hover:text-white"
          >
            <Dribbble className="w-6 h-6" />
            <span className="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
