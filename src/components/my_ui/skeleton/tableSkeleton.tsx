import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { PencilIcon, TrashIcon } from "lucide-react";

const TableRowSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="font-medium w-[80px] animate-pulse bg-neutral-300">
        <p className="bg-neutral-200 h-[40px]"></p>
      </TableCell>
      <TableCell className="font-medium animate-pulse bg-neutral-300">
        <p className="bg-neutral-200 h-[40px]"></p>
      </TableCell>
      <TableCell className="font-medium animate-pulse bg-neutral-300">
        <p className="bg-neutral-200 h-[40px]"></p>
      </TableCell>

      <TableCell className="font-medium animate-pulse bg-neutral-300">
        <p className="bg-neutral-200 h-[40px]"></p>
      </TableCell>
      <TableCell className="font-medium animate-pulse bg-neutral-300">
        <Button variant="outline" className="mr-2">
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <TrashIcon className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default TableRowSkeleton;
