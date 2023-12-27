import DashboardTable from "@/components/my_ui/dashboard/dashboardTable";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { z } from "zod";

const Dashboard = () => {
  return (
    <main className="md:p-10">
      {/* {isLoading && <p>Loading...</p>} */}
      <DashboardTable  />
    </main>
  );
};

export default Dashboard;
