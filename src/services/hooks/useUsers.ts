import { useQuery } from "react-query";
import { getUsers } from "../api";

export function useUsers(currentPage: number) {
    const { data, isLoading, error, isFetching } = useQuery(["users", currentPage],
    () => getUsers(currentPage), {
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        data,
        error,
        isFetching,
        isLoading,
    }
}