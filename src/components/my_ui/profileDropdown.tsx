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
import { Files, LayoutDashboard, LogOut, UserRound } from "lucide-react";
import { useSignOut } from "@/lib/features/useLogout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const DropdowMenu = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();
  const { mutate: SignOut } = useSignOut({
    onSuccess: () => {
      console.log("logout success");
      refetch();
    },
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer w-[43px] h-[43px]">
          <AvatarImage src={userProfile?.image_url} alt="img-profile" className="object-cover"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5">
        <DropdownMenuLabel>Hi, {userProfile?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-2">
          <LayoutDashboard className="w-4 h-4 mr-2" />
          <Link href={"/dashboard"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2">
          <Files className="w-4 h-4 mr-2" />
          <Link href={"/dashboard/create-job"}>Upload Job</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2">
          <UserRound className="w-4 h-4 mr-2" />
          <Link href={"/dashboard/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant="secondary"
            size={"sm"}
            className="w-full hover:bg-red-500 transition-all hover:text-white"
            type="submit"
            onClick={() => SignOut()}
          >
            <LogOut className="w-4h-4 mr-2" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdowMenu;
