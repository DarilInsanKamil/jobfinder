import { useState } from "react";
import { DataRegister } from "@/lib/definitions";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAuthRegister } from "@/lib/features/useAuthRegister";
import { useToast } from "@/components/ui/use-toast";

const FormRegister = () => {
  const { toast } = useToast();
  const [inputData, setInputData] = useState<DataRegister>({
    email: "",
    password: "",
    image_url: "",
    name: "",
  });

  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    let name = event.currentTarget.name;
    setInputData({ ...inputData, [name]: value });
  };

  const {
    mutate: SubmitLogin,
    isPending,
    data,
  } = useAuthRegister({
    onSuccess: () => {
      if (data.token) {
        toast({
          title: "Register Success",
        });
      } else {
        toast({
          variant: 'destructive',
          title: "Login Erorr",
          description: "invalid email or password",
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
    <section className="col-start-8 col-span-5 flex justify-center flex-col px-20">
      <div className="flex flex-col justify-center w-full items-center mb-5">
        <Image
          src="./vercel.svg"
          width={60}
          height={60}
          alt="image"
          className="mb-10"
        />
        <h2 className="text-xl font-semibold">Hi there!!</h2>
        <p className="text-neutral-400">Register for make your account</p>
      </div>
      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3 ">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="name"
            name="name"
            className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
            value={inputData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="image-url" className="block mb-1">
            Image Url
          </label>
          <input
            type="url"
            name="image_url"
            className="border border-neutral-200 text-neutral-600 py-2 px-2 rounded-md w-full outline-blue-200"
            value={inputData.image_url}
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
        <button
          disabled={isPending}
          aria-disabled={isPending}
          className="px-4 py-2 bg-blue-500 flex gap-2 items-center justify-center rounded-md text-white font-semibold hover:bg-blue-600 aria-disabled:bg-blue-300 mt-5"
        >
          {isPending && <Loader2 className="animate-spin w-4 h-4" />}
          Register
        </button>
        <p>
          Sudah punya akun?{" "}
          <Link href="./login" className="text-blue-500">
            Masuk
          </Link>
        </p>
      </form>
    </section>
  );
};

export default FormRegister;
