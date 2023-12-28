import DashboardTable from "@/components/my_ui/dashboard/dashboardTable";
import SideNav from "@/components/my_ui/dashboard/sidenav";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { z } from "zod";
import DashboardLayout from "./layout";
import Head from "next/head";
import { PaginationDemo } from "@/components/my_ui/pagination";

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
        <DashboardTable />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
