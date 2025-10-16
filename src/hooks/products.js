import useSWR from "swr"
import { ApiRoutes } from "../services/constants"
import { fetcher } from "../helpers/fetcher"

export const useProducts = () => {
    const { data: products, error, isLoading } = useSWR(ApiRoutes.PRODUCTS, fetcher)
    const data = error || isLoading ? [] : products

    return {
        data,
        error,
        isLoading,
    }
}
