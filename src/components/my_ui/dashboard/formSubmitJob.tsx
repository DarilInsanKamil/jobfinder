import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/lib/schema";
import { useCreateJobs } from "@/lib/features/useCreateJobs";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

type ValidationSchema = z.infer<typeof validationSchema>;
const FormSubmitJob = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const { mutate, isPending } = useCreateJobs({
    onSuccess: () => {
      toast({
        description: "Succses add new job",
        variant: "success",
      }),
        reset();
    },
  });
  const onSubmit = (data: ValidationSchema) => {
    mutate(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-5 w-full">
        <div className="w-full">
          <label htmlFor="title">Job title</label>
          <input
            {...register("title", { required: true })}
            type="text"
            name="title"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.title?.message}
        </div>
        <div className="w-full">
          <label htmlFor="company_name">Company name</label>
          <input
            {...register("company_name", { required: true })}
            type="name"
            name="company_name"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_name?.message}
        </div>
      </div>

      <div className="flex items-end gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <img
            src={"/vercel.svg" || watch("company_image_url")}
            alt="image-dummy"
            width={60}
            height={60}
            className="mb-5"
          />
          <label htmlFor="company_image_url">Company Image</label>
          <input
            {...register("company_image_url", { required: true })}
            type="url"
            name="company_image_url"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_image_url?.message}
        </div>
        <div className="w-full">
          <label htmlFor="company_city">Company location</label>
          <input
            {...register("company_city", { required: true })}
            type="text"
            name="company_city"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_city?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label htmlFor="salary_min">Salary minimal</label>
          <input
            {...register("salary_min", { required: true })}
            type="number"
            name="salary_min"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.salary_min?.message}
        </div>
        <div className="w-full">
          <label htmlFor="salary_max">Salary maksimal</label>
          <input
            {...register("salary_max", { required: true })}
            type="number"
            name="salary_max"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.salary_max?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label htmlFor="job_tenure">Job Tenure</label>
          <input
            {...register("job_tenure", { required: true })}
            type="text"
            name="job_tenure"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {/* <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a timezone" {...register("job_tenure", { required: true })} />
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            </SelectContent>
          </Select> */}
          {errors.job_tenure?.message}
        </div>
        <div className="w-full">
          <label htmlFor="job_type">Job experience</label>
          <input
            {...register("job_type", { required: true })}
            type="text"
            name="job_type"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {/* <Select >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a timezone" {...register("job_type", { required: true })}/>
            </SelectTrigger>
            <SelectContent >
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            </SelectContent>
          </Select> */}

          {errors.job_type?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label htmlFor="job_description" className="block">
            Job Description
          </label>
          <textarea
            {...register("job_description", { required: true })}
            className="border border-neutral-200 rounded-md px-3 py-2 w-full"
            placeholder="input text"
            rows={5}
          ></textarea>
          {errors.job_description?.message}
        </div>
        <div className="w-full">
          <label htmlFor="job_qualification" className="block">
            Job Qualification
          </label>
          <textarea
            {...register("job_qualification", { required: true })}
            cols={60}
            className="border border-neutral-200 rounded-md px-3 py-2 w-full"
            placeholder="input text"
            rows={5}
          ></textarea>
          {errors.job_qualification?.message}
        </div>
      </div>

      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            {...register("job_status")}
            type="checkbox"
            name="job_status"
            // checked
            className="sr-only peer w-fit"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Tersedia
          </span>
        </label>
        {errors.job_status?.message}
      </div>

      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white aria-disabled:bg-blue-300"
        disabled={isPending}
        aria-disabled={isPending}
      >
        {isPending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
        Submit Job
      </Button>
    </form>
  );
};

export default FormSubmitJob;
