import Link from "next/link";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useGetProfile } from "@/lib/features/useGetProfile";
import DropdowMenu from "./profileDropdown";
import Image from "next/image";

const NavigationBar = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();

  return (
    <header className="flex justify-between items-center lg:px-10 xl:px-10 px-3 py-2 sticky top-0 bg-white z-50 shadow-sm">
      <Image src={"./vercel.svg"} alt="img" width={80} height={80} />
      <nav className="lg:inline xl:inline hidden">
        <ul className="flex gap-10 items-center">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/job-vacancy">Job Vacancy</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      {userProfile ? (
        <DropdowMenu />
      ) : (
        <Button variant={"default"} asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </header>
  );
};
export default NavigationBar;
