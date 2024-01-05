import Head from "next/head";
import DashboardLayout from "../../layout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChangePassword } from "@/lib/features/useChangePassword";
import { useToast } from "@/components/ui/use-toast";

type ChangePassword = {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
};

const ChangePasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ChangePassword>();
  const { toast } = useToast();

  const { mutate, isPending } = useChangePassword({
    onSuccess: () => {
      toast({
        title: "Success change password",
      });
    },
  });
  const onSubmit = (data: any) => {
    mutate(data);
  };

  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="EZISjGy1e9DpQ73BQVtxYzTNRu52tzPBDMz9IKsXVGQ"
        />
        <meta name="description" content="Change password page" />
        <title>Change Password | Job Finders</title>
      </Head>
      <DashboardLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="current_password" className="mb-3">
              Current password
            </label>
            <div className="relative">
              <input
                type={!show ? "password" : "text"}
                className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
                {...register("current_password", { required: true })}
                required
                min={1}
                max={8}
              />
              <button
                type="button"
                className="absolute top-3 right-3 transition-all text-neutral-400"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="new_password" className="mb-3">
              New password
            </label>
            <div className="relative">
              <input
                type={!show ? "password" : "text"}
                className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
                {...register("new_password", { required: true })}
                required
                min={1}
                max={8}
              />
              <button
                type="button"
                className="absolute top-3 right-3 transition-all text-neutral-400"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="new_confirm_password" className="mb-3">
              New confirm password
            </label>
            <div className="relative">
              <input
                type={!show ? "password" : "text"}
                className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
                {...register("new_confirm_password", { required: true })}
                required
                min={1}
                max={8}
              />
              <button
                type="button"
                className="absolute top-3 right-3 transition-all text-neutral-400"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white aria-disabled:bg-blue-300 w-full mt-10"
            disabled={isPending}
            aria-disabled={isPending}
          >
            {isPending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            Submit New Password
          </Button>
        </form>
      </DashboardLayout>
    </>
  );
};

export default ChangePasswordPage;
