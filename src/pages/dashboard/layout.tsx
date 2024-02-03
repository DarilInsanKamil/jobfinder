import SideNav from "@/components/my_ui/dashboard/sidenav";
import { useGetProfile } from "@/lib/features/useGetProfile";
import React, { useEffect } from "react";
import LoginPage from "../login";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: userProfile } = useGetProfile();
  useEffect(() => {
    if (!userProfile) {
      router.push("/login");
    }
  }, [userProfile]);
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {userProfile && (
        <>
          <section className="w-full flex-none md:w-64">
            <SideNav />
          </section>
          <section className="flex-grow md:overflow-y-auto md:p-12 xl:p-12 lg:p-12 p-3 transition-all">
            {children}
          </section>
        </>
      )}
    </main>
  );
};

export default DashboardLayout;
