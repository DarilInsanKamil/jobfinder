import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { PencilIcon, TrashIcon } from "lucide-react";
import { CardSkeletonData } from "@/lib/placehodler";

const TableRowSkeleton = () => {
  return (
    <>
      {CardSkeletonData.map((res) => (
        <TableRow key={res.id} className="animate-pulse bg-neutral-300 w-[20px] h-[10px]">
          <TableCell className="w-[10px] h-[10px]">
          <div className="animate-pulse bg-neutral-200 w-[40px] h-[40px]">
          </div>
          </TableCell>
          <TableCell className="w-[80px] h-[10px]">
          <div className="animate-pulse bg-neutral-200 w-[320px] h-[40px]">
          </div>
          </TableCell>
          <TableCell className="w-[80px] h-[10px]">
          <div className="animate-pulse bg-neutral-200 w-[320px] h-[40px]">
          </div>
          </TableCell>
          <TableCell className="w-[60px] h-[10px]">
          <div className="animate-pulse bg-neutral-200 w-[80px] h-[40px]">
          </div>
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
      ))}
    </>
  );
};
export default TableRowSkeleton;
