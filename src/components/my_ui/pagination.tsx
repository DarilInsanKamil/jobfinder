import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "../ui/button";

function PaginationDemo({paginationClick}:any) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button type="button" variant={"ghost"} size={"icon"} onClick={paginationClick}>
            Next
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationDemo;
