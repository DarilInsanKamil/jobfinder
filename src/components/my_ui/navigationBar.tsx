import Link from "next/link";
import { Button } from "../ui/button";
import { useGetProfile } from "@/lib/features/useGetProfile";
import DropdowMenu from "./profileDropdown";
import Image from "next/image";
import { NavigationContent } from "@/lib/placehodler";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NavigationDropDown from "./navigationDropwon";

const NavigationBar = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center lg:px-10 xl:px-10 px-3 py-2 sticky top-0 bg-white z-50 shadow-sm">
      <Link href={"/"}>
        <Image src={"/vercel.svg"} alt="img" width={80} height={80} />
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
        </ul>
      </nav>
      {userProfile ? <DropdowMenu /> : <NavigationDropDown />}
    </header>
  );
};
export default NavigationBar;
