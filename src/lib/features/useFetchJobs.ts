import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { schemaDataJobs } from "../schema";

export const useFetchJobs = (queryPage?: number) => {
  return useQuery({
    queryKey: ["fetch.jobs", queryPage],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
      const data = await response.json();
      // const parsedData = schemaDataJobs.parse(data)
      return data
      // return parsedData
    },
  });
};


export const useFetchJobsById = (id?: string): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ["fetch.jobById", id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/jobs/${id?.toString()}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return data;
    },
  });
};
