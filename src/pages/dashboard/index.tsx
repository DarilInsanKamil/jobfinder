import DashboardTable from "@/components/my_ui/dashboard/dashboardTable";
import DashboardLayout from "./layout";
import Head from "next/head";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Efficiently manage job data on our customizable dashboard. Edit, delete, and streamline job listings effortlessly. Take control of your hiring process with our user-friendly interface designed to simplify data management for a seamless recruitment experience."
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <title>Dashboard | JobFinders</title>
        <meta
          name="google-site-verification"
          content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ"
        />
      </Head>
      <DashboardLayout>
        <section className="mb-5 w-full p-2 bg-white z-10 flex gap-3 items-center">
          <div className="w-full relative">
            <input
              className="border  border-neutral-300 rounded-md px-3 py-2 w-full outline-blue-300"
              name="search"
              type="text"
              placeholder="Search"
            />
            <Search className="w-4 h-4 absolute end-0 right-4 top-3 text-neutral-400" />
          </div>
          <Button asChild variant={"default"}>
            <Link href="/dashboard/create-job">
              <Plus className="w-4 h-4 xl:mr-2 lg:mr-2 m-0  " />
              <p className="xl:block lg:block md:block hidden">Upload Job</p>
            </Link>
          </Button>
        </section>
        <DashboardTable />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
