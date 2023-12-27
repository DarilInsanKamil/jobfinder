import { useQuery } from "@tanstack/react-query";
import { schemaDataJobs } from "../schema";

export const useFetchJobs = () => {
  return useQuery({
    queryKey: ["fetch.jobs"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-vacancy`);
      const data = await response.json();
      const parsedData = schemaDataJobs.parse(data)
      return parsedData
    },
  });
};
