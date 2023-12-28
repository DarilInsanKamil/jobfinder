import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardData } from "@/lib/definitions";
import { formatCurrencyIDR } from "@/lib/utils";
import { CircleDollarSign, MapPin } from "lucide-react";
import Link from "next/link";

const Card = ({
  title,
  id,
  salary_min,
  salary_max,
  company_image_url,
  job_tenure,
  job_type,
  company_name,
  company_city,
}: CardData) => {
  return (
    <div className="border border-neutral-300 rounded-md p-3 hover:bg-neutral-50 transition-all">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage
            src={company_image_url}
            alt={title}
            width={60}
            height={60}
            className="object-cover"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-neutral-500">{company_name}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center text-neutral-500 text-sm mt-3">
        <MapPin className="w-4 h-4" />
        <p>{company_city}</p>
      </div>
      <div className="flex gap-2 items-center text-neutral-500 text-sm mt-1">
        <CircleDollarSign className="w-4 h-4" />
        <p>
          {formatCurrencyIDR(salary_min)} - {formatCurrencyIDR(salary_max)}
        </p>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div>
          <Badge variant="outline" className="mr-2">
            {job_type}
          </Badge>
          <Badge variant="secondary">{job_tenure}</Badge>
        </div>
        <Button variant="outline" size="sm" className="font-normal text-xs" asChild>
          <Link href={`/detail/${id}`}>See Detail</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;
