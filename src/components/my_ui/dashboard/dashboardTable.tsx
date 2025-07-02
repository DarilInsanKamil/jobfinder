import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, PencilIcon, TrashIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import TableRowSkeleton from "../skeleton/tableSkeleton";
import Link from "next/link";
import { schemaResponseDataJobs } from "@/lib/schema";
import { z } from "zod";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { useDeleteJob } from "@/lib/features/useDeleteJob";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import AlertDialogDelete from "./dialogDelete";
import { ResponseJob } from "@/lib/definitions";
import { ScrollTop } from "@/lib/utils";

type SchemaResponseDataJobs = z.infer<typeof schemaResponseDataJobs>;

export default function DashboardTable() {
  const { toast } = useToast();
  const [queryPage, setQueryPage] = useState<number>(1);
  const { data, isLoading, refetch: refetchJob } = useFetchJobs(queryPage);
  const [isRefetching, setIsRefetching] = useState<boolean>(false);
  const { mutate: deleteJobs } = useDeleteJob({
    onSuccess: () => {
      toast({
        title: "Success delete job",
      });
      refetchJob();
    },
  });

  const handleNextPagination = async () => {
    setIsRefetching(true);
    if (queryPage <= data.last_page - 1) {
      await setQueryPage((prevState) => prevState + 1);
      refetchJob().then(() => setIsRefetching(false));
      ScrollTop();
    }
  };

  const handlePrevPagination = async () => {
    setIsRefetching(true);
    if (queryPage > 1) {
      setIsRefetching(true);
      await setQueryPage((prevState) => prevState - 1);
      refetchJob().then(() => setIsRefetching(false));
      ScrollTop();
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>no</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <TableRowSkeleton />}
          {isRefetching && <TableRowSkeleton />}
          {!isRefetching &&
            data?.map((value: any, idx: number) => {
              return (
                <TableRow key={value.id}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell className="font-medium flex gap-2 items-center w-[200px] ">
                    <img
                      src={value.company_image_url}
                      alt={value.title}
                      width={40}
                      height={40}
                    />
                    {value.company_name}
                  </TableCell>
                  <TableCell className="font-medium">{value.title}</TableCell>

                  <TableCell className="font-medium">
                    {value.job_status == 1 ? (
                      <Badge variant="secondary">tersedia</Badge>
                    ) : (
                      <Badge variant="outline">tidak tersedia</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-medium flex gap-1">
                    <Button variant="outline" className="mr-2" asChild>
                      <Link href={`/dashboard/edit-job/${value.id}`}>
                        <PencilIcon className="w-4 h-4" />
                      </Link>
                    </Button>
                    <AlertDialogDelete
                      type="submit"
                      variant="outline"
                      size="icon"
                      onClick={() => deleteJobs(value.id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 flex justify-center mt-10 gap-2">
        <Button
          disabled={queryPage === 1 ? true : false}
          variant="outline"
          type="button"
          onClick={handlePrevPagination}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Prev
        </Button>
        <p className="bg-neutral-100 px-4 py-2 rounded-md">{queryPage}</p>
        <Button
          disabled={data?.last_page > queryPage ? false : true}
          variant="outline"
          type="button"
          onClick={handleNextPagination}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </section>
    </>
  );
}
