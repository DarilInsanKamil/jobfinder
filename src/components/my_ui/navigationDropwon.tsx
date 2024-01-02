import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavigationContent } from "@/lib/placehodler";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const NavigationDropDown = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="hidden xl:flex lg:flex gap-2 items-center">
        <Button variant={"outline"} asChild>
          <Link className="w-full" href="/login">
            Login
          </Link>
        </Button>
        <Button variant={"secondary"} asChild>
          <Link className="w-full" href="/register">
            Register
          </Link>
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          type="button"
          aria-label="dropdown-button"
          className="xl:hidden lg:hidden flex"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <MenuIcon className="w-5 h-5 hover:bg-neutral-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-5 text-neutral-600 ">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <Button variant={"outline"} asChild>
              <Link className="w-full" href="/login">
                Login
              </Link>
            </Button>
            <Button variant={"secondary"} asChild>
              <Link className="w-full" href="/register">
                Register
              </Link>
            </Button>
          </DropdownMenuItem>
          {NavigationContent.map((link) => {
            const LinkIcon = link.icon;
            return (
              <DropdownMenuItem
                className={clsx("py-2", {
                  "border-l-4 border-blue-400 ": pathname === link.link,
                })}
                key={link.id}
              >
                <Link href={link.link} className="w-full">
                  {link.name}
                </Link>
                <LinkIcon className="w-4 h-4" />
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavigationDropDown;
