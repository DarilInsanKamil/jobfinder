import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie';
export const useDeleteJob = ({ onSuccess }: any) => {
    const token = Cookies.get("token")
    return useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-vacancy/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer${token}`
                },
            });
            if (!res.ok) {
                throw new Error('Failed to delete data');
            }
            // console.log(id)
        },
        onSuccess
    });
}