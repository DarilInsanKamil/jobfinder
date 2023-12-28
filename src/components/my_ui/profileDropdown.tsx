import { useGetProfile } from "@/lib/features/useGetProfile";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { DropdownNavigation, NavigationContent } from "@/lib/placehodler";
import { useSignOut } from "@/lib/features/useLogout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const DropdowMenu = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();
  const { mutate: SignOut } = useSignOut({
    onSuccess: () => {
      console.log("logout success");
      refetch();
    },
  });

  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild type="button" aria-label="dropdown-button">
        <Avatar className="cursor-pointer w-[43px] h-[43px] hover:ring-offset-2 hover:ring-2 ring-blue-200">
          <AvatarImage
            src={userProfile?.image_url}
            alt="dropdown-button"
            className="object-cover "
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5 text-neutral-600">
        <DropdownMenuLabel>Hi, {userProfile?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="xl:hidden lg:hidden block">
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
        </div>
        <DropdownMenuSeparator />
        {DropdownNavigation.map((link) => {
          const LinkIcons = link.icon;
          return (
            <DropdownMenuItem className="py-2" key={link.id}>
              <LinkIcons className="w-4 h-4 mr-2" />
              <Link href={link.link} className="w-full">
                {link.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button
            variant="secondary"
            size={"sm"}
            className="w-full hover:bg-red-500 transition-all hover:text-white text-neutral-600 font-normal"
            type="submit"
            onClick={() => SignOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdowMenu;
