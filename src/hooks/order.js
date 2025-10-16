import useSWR, { mutate } from "swr"
import { ApiRoutes } from "../services/constants"
import { fetcher } from "../helpers/fetcher"
import { axiosInstance } from "../services/instance";
import { useBasket } from "./basket"
import { getOrderDetails } from "../lib/get-order-details";
export const useOrder = () => {
    const { data: orders, error, isLoading } = useSWR(ApiRoutes.ORDER, fetcher);
    const data = error || isLoading ? [] : getOrderDetails(orders);
    const { clearBasket } = useBasket()

    const addOrder = async (order) => {
        const updateData = (await axiosInstance.post(ApiRoutes.ORDER, order)).data
        await clearBasket()
        mutate(updateData);
    };
    return {
        addOrder,
        data,
        error,
        isLoading
    }
}