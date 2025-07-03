import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/lib/schema";
import { useEditJobs } from "@/lib/features/useCreateJobs";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { EditUploadJob, ResponseJob, UploadJob } from "@/lib/definitions";
import { useRouter } from "next/router";
import { useEffect } from "react";

type ValidationSchema = z.infer<typeof validationSchema>;
const FormEdit = ({ res }: { res: any }) => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<EditUploadJob>({
    defaultValues: res ? res : undefined,
  });

  useEffect(() => {
    reset(res); // Reset nilai form jika res berubah
  }, [res, reset]);

  const { mutate, isPending } = useEditJobs(
    {
      onSuccess: () => {
        toast({
          title: "Success edit data",
        });
      },
    },
    res ? res._id : res?._id
  );
  const onSubmit = (data: any) => {
    mutate(data);
    // console.log(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-5 w-full">
        <div className="w-full">
          <label>Job title</label>
          <input
            type="text"
            defaultValue={res ? res.title : res?.id}
            {...register("title")}
            placeholder="Jabatan Pekerjaan"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.title?.message}
        </div>
        <div className="w-full">
          <label>Company name</label>
          <input
            type="text"
            defaultValue={res ? res.company_name : res?.id}
            {...register("company_name")}
            placeholder="Nama perusahaan"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_name?.message}
        </div>
      </div>

      <div className="flex items-end gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <img
            src={watch("company_image_url") || res?.company_image_url}
            alt="image-dummy"
            width={60}
            height={60}
            className="mb-5"
          />
          <label>Company Image</label>
          <input
            type="text"
            defaultValue={res ? res.company_image_url : res?.id}
            placeholder="Image url perusahaan"
            {...register("company_image_url")}
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_image_url?.message}
        </div>
        <div className="w-full">
          <label>Company location</label>
          <input
            type="text"
            defaultValue={res ? res.company_city : res?.id}
            {...register("company_city")}
            placeholder="Lokasi perushaan"
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.company_city?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label>Salary minimal</label>
          <input
            type="number"
            defaultValue={res ? res.salary_min : res?.id}
            {...register("salary_min")}
            placeholder="Gaji minimal"
            min={1000000}
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.salary_min?.message}
        </div>
        <div className="w-full">
          <label>Salary maksimal</label>
          <input
            type="number"
            defaultValue={res ? res.salary_max : res?.id}
            {...register("salary_max")}
            placeholder="Gaji maksimal"
            max={1000000000}
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.salary_max?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label>Job Tenure</label>
          <input
            {...register("job_tenure")}
            type="text"
            name="job_tenure"
            defaultValue={res ? res.job_tenure : res?.id}
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.job_tenure?.message}
        </div>
        <div className="w-full">
          <label>Job Type</label>
          <input
            {...register("job_type")}
            type="text"
            name="job_type"
            defaultValue={res ? res.job_type : res?.id}
            className="border-neutral-200 outline-blue-200 border p-2 w-full rounded-md mt-1"
          />
          {errors.job_type?.message}
        </div>
      </div>

      <div className="flex gap-5 w-full flex-col md:flex-col lg:flex-row xl:flex-row">
        <div className="w-full">
          <label className="block">Job Description</label>
          <textarea
            className="border border-neutral-200 rounded-md px-3 py-2 w-full"
            {...register("job_description")}
            placeholder="Deskripsi pekerjaan"
            // cols={40}
            rows={4}
            defaultValue={res ? res.job_description : res?.id}
          ></textarea>
          {errors.job_description?.message}
        </div>
        <div className="w-full">
          <label className="block">Job Qualification</label>
          <textarea
            {...register("job_qualification")}
            placeholder="Deskripsi pekerjaan"
            // cols={40}
            rows={4}
            defaultValue={res ? res.job_qualification : res?.id}
            className="border border-neutral-200 rounded-md px-3 py-2 w-full"
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
            // checked={res?.job_status == 1 ? true : false}
            // defaultValue={res?.job_status?.toString()}
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
        variant="default"
        className=" aria-disabled:bg-neutral-400 gap-1"
        disabled={isPending}
        aria-disabled={isPending}
      >
        {isPending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
        Edit Submit Job
      </Button>
    </form>
  );
};

export default FormEdit;
