import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useChangePassword = ({ onSuccess }: any) => {
  const token = Cookies.get("token");
  return useMutation({
    mutationFn: async (data: any) => {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/change-password`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
    },
    onSuccess
  });
};
