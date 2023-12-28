import Link from "next/link";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useGetProfile } from "@/lib/features/useGetProfile";
import DropdowMenu from "./profileDropdown";
import Image from "next/image";
import { SheetDemo } from "./sidebar";
import { Suspense } from "react";
import { NavigationContent } from "@/lib/placehodler";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center lg:px-10 xl:px-10 px-3 py-2 sticky top-0 bg-white z-50 shadow-sm">
      <Link href={"/"}>
        <Image src={"./vercel.svg"} alt="img" width={80} height={80} />
      </Link>
      <nav className="lg:inline xl:inline hidden">
        <ul className="flex gap-10 items-center">
          {NavigationContent.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link
                href={link.link}
                className={clsx("py-4", {
                  "border-b-[3px] border-blue-300 ": pathname === link.link,
                })}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/job-vacancy">Job Vacancy</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li> */}
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
