import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { schemaProfileUser } from "../schema"

export const useGetProfile = () => {
    return useQuery({
        queryKey: ["fetch.profile"],
        queryFn: async () => {
            const user = Cookies.get("user")
            if (user) {
                try {
                    const parsedData = schemaProfileUser.parse(JSON.parse(user));
                    return parsedData;
                } catch (error) {
                    console.error("erro while getting profile: ", error)
                }
            }
            return null;
        },
    })
}