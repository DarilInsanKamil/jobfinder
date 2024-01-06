import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ContentTestimoni } from "@/lib/placehodler";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full:"
    >
      <CarouselContent>
        {ContentTestimoni.map((res, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 ">
            <div
              className=" border border-neutral-400 p-2 rounded-md flex aspect-auto flex-col bg-neutral-900 shadow-md"
              key={idx}
            >
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="https://i.pinimg.com/564x/db/ba/dd/dbbadd7934173a89d8f0a43241f4367e.jpg"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <p className="font-semibold">{res.name}</p>
              </div>
              <p className="line-clamp-4">{res.message}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="xl:block lg:block hidden bg-slate-700">
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel>
  );
}
