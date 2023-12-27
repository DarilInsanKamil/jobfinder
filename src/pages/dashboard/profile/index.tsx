import { useGetProfile } from "@/lib/features/useGetProfile";
import DashboardLayout from "../layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings } from "lucide-react";

const DashboardProfile = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();

  return (
    <DashboardLayout>
      <section className="flex lg:flex-row flex-col xl:flex-row xl:justify-between lg:justify-between  xl:items-center lg:items-center gap-10">
        <div className="flex gap-4 items-center">
          <Avatar className="xl:w-[160px] lg:w-[120px] xl:h-[160px] lg:h-[120px] w-[100px] h-[100px] transition-all">
            <AvatarImage
              src={userProfile?.image_url}
              draggable="false"
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-[28px]">{userProfile?.name}</h3>
            <p>{userProfile?.email}</p>
          </div>
        </div>
        <Button variant={"destructive"} asChild>
          <Link href={"/dashboard/change-password"}>
            <Settings className="w-5 h-5 mr-2" />
            Change Password
          </Link>
        </Button>
      </section>
    </DashboardLayout>
  );
};

export default DashboardProfile;
