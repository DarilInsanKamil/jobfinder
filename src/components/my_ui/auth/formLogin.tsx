import { useState } from "react";
import { useAuthLogin } from "@/lib/features/useAuthLogin";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";
import { DataLogin, Root } from "@/lib/definitions";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const FormLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [inputData, setInputData] = useState<DataLogin>({
    email: "",
    password: "",
  });
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;
    setInputData({ ...inputData, [name]: value });
  };

  const { mutate: SubmitLogin, isPending } = useAuthLogin({
    onSuccess: (data: any) => {
      if (data !== undefined) {
        toast({
          variant: "default",
          title: "Login Success",
        });
        const user = data?.data.user;
        Cookies.set("token", data?.data.token, { secure: true, expires: 1 });
        Cookies.set("user", JSON.stringify(user), {
          secure: true,
          expires: 1,
        });
        inputData.email = "";
        inputData.password = "";
        router.push("/job-vacancy");
      } else {
        toast({
          variant: "destructive",
          title: "Login Error",
          description: "something wrong in email or password",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    },
  });

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputData.email) {
      SubmitLogin(inputData);
    }
  };

  return (
    <section className="flex justify-center flex-col lg:px-20 xl:px-20 px-5 lg:py-0 xl:py-0 py-10 h-screen">
      <div className="flex flex-col justify-center w-full items-center mb-5">
        <Image
          src="./vercel.svg"
          width={60}
          height={60}
          alt="image"
          className="mb-10"
        />
        <h2 className="text-xl font-semibold">Welocome Back</h2>
        <p className="text-neutral-400">Login into your account!</p>
      </div>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
            value={inputData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={!show ? "password" : "text"}
              name="password"
              className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
              value={inputData.password}
              onChange={handleChange}
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
          disabled={isPending}
          aria-disabled={isPending}
          className=" aria-disabled:bg-blue-500 mt-5 gap-1"
        >
          {isPending && <Loader2 className="animate-spin w-4 h-4" />}
          Login
        </Button>
        <p>
          Belum punya akun?{" "}
          <Link href="./register" className="text-blue-500">
            Daftar
          </Link>
        </p>
      </form>
      {/* {JSON.stringify(data)} */}
      {/* {isError && <p>{error.message}</p>} */}
    </section>
  );
};

export default FormLogin;
