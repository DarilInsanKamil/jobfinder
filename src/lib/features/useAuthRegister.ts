import { useMutation } from "@tanstack/react-query";
import { DataRegister } from "../definitions";

export const useAuthRegister = ({ onSuccess }: any) => {
    return useMutation({
        mutationFn: async (data: DataRegister) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data?.email,
                    password: data?.password,
                    image_url: data.image_url,
                    name: data.name
                }),
            });
            const datas = await res.json();
            return datas;
        },
        onSuccess,
    });
};
