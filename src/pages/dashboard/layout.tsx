import SideNav from "@/components/my_ui/dashboard/sidenav";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <section className="w-full flex-none md:w-64">
        <SideNav />
      </section>
      <section className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
