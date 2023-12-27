import DashboardTable from "@/components/my_ui/dashboard/dashboardTable";
import SideNav from "@/components/my_ui/dashboard/sidenav";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { z } from "zod";
import DashboardLayout from "./layout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardTable />
    </DashboardLayout>
  );
};

export default Dashboard;
