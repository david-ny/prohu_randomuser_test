import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const axiosClient = axios.create({
    baseURL: "https://randomuser.me/api",
    headers: {
        "Content-type": "application/json",
    },
});

export default function useAPI(apiPageNum, apiPageSize, onSuccess) {

    const usersQuery = useQuery({
        queryKey: ["locations", apiPageNum],
        queryFn: async () =>
            await axiosClient.get(
                `?seed=2023-01-17_prohu&page=${apiPageNum}&inc=login,picture,name,gender,location&results=${apiPageSize}`
            ),
        staleTime: Infinity,
        cacheTime: Infinity,
        onSuccess,
    });

    const { status, isFetching, error } = usersQuery;

    return {
        status,
        isFetching,
        error,
    };
}