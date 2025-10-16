export const getOrderDetails = (data) => {
    return data
        ?.map((el) => {
            return Object.values(el)
        }).flat().filter(el => typeof el === "object");
};