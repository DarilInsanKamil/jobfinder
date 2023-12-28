import { useGetProfile } from "@/lib/features/useGetProfile";
import DashboardLayout from "../layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings } from "lucide-react";
import Head from "next/head";

const DashboardProfile = () => {
  const { data: userProfile, isLoading, refetch } = useGetProfile();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Manage your account securely at [Website Name]. Access your profile, update information, and change your password effortlessly. Ensure the safety of your account with our user-friendly password management tools."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Profile | JobFinders</title>
        <meta name="google-site-verification" content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ" />
      </Head>
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
    </>
  );
};

export default DashboardProfile;
