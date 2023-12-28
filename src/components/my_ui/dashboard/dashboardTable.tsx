import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import TableRowSkeleton from "../skeleton/tableSkeleton";
import Link from "next/link";
import { schemaResponseDataJobs } from "@/lib/schema";
import { z } from "zod";
import { useFetchJobs } from "@/lib/features/useFetchJobs";
import { useDeleteJob } from "@/lib/features/useDeleteJob";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import AlertDialogDelete from "./dialogDelete";
import { ResponseJob } from "@/lib/definitions";

type SchemaResponseDataJobs = z.infer<typeof schemaResponseDataJobs>;

export default function DashboardTable() {
  const { toast } = useToast();
  const { data, isLoading, refetch: refetchJob } = useFetchJobs(1);

  const { mutate: deleteJobs } = useDeleteJob({
    onSuccess: () => {
      toast({
        title: "Success delete job",
      });
      refetchJob();
    },
  });

  return (
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
        {data?.data.map((value: any, idx: number) => {
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
  );
}
