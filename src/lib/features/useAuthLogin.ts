import { useMutation } from "@tanstack/react-query";
import { DataLogin } from "../definitions";
import { schemaDataLogin } from "../schema";

export const useAuthLogin = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationFn: async (data: DataLogin) => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data?.email,
            password: data?.password,
          }),
        });
        if (res.status !== 400) {
          const datas = await res.json();
          const parsedData = schemaDataLogin.safeParse(datas)
          return parsedData;
        }
      } catch (error) {
        console.error("Something error in server:", error)
      }
    },
    onSuccess,
    onError
  });
};
