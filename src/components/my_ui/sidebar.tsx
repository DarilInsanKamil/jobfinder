import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="hover:rounded-full hover:bg-neutral-100"
          size={"icon"}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div>
            {/* <img src={} */}
            <p>Mina</p>
        </div>
          <nav>
            <ul className="flex flex-col gap-10">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/job-vacancy">Job Vacancy</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
      </SheetContent>
    </Sheet>
  );
}
