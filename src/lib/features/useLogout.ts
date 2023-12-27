import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
export const useSignOut = ({ onSuccess }: any) => {
    return useMutation({
        mutationFn: async () => {
            Cookies.remove("token")
            Cookies.remove("user")
        },
        onSuccess
    });
}