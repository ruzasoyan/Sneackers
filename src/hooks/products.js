// import useSWR from "swr"
// import { ApiRoutes } from "../services/constants"
// import { fetcher } from "../helpers/fetcher"
const products = [
    {
        "id": "1",
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "imgUrl": "/item1.jpg",
        "price": 12999
    },
    {
        "id": "2",
        "title": "Мужские Кроссовки Nike Air Max 270",
        "imgUrl": "/item2.jpg",
        "price": 12999
    },
    {
        "id": "3",
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "imgUrl": "/item3.jpg",
        "price": 8499
    },
    {
        "id": "4",
        "title": "Кроссовки Puma X Aka Boku Future Rider",
        "imgUrl": "/item4.jpg",
        "price": 12999
    },
    {
        "id": "5",
        "title": "Мужские Кроссовки Under Armour Curry 8",
        "imgUrl": "/image5.jpg",
        "price": 15199
    },
    {
        "id": "6",
        "title": "Мужские Кроссовки Nike Kyrie 7",
        "imgUrl": "/image6.jpg",
        "price": 11299
    },
    {
        "id": "7",
        "title": "Мужские Кроссовки Jordan Air Jordan 11",
        "imgUrl": "/image7.jpg",
        "price": 10799
    },
    {
        "id": "8",
        "title": "Мужские Кроссовки Nike LeBron XVIII",
        "imgUrl": "/image8.jpg",
        "price": 16499
    },
    {
        "id": "9",
        "title": "Мужские Кроссовки Nike Lebron XVIII Low",
        "imgUrl": "/image9.jpg",
        "price": 13999
    },
    {
        "id": "10",
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "imgUrl": "/image7.jpg",
        "price": 8499
    },
    {
        "id": "11",
        "title": "Кроссовки Puma X Aka Boku Future Rider",
        "imgUrl": "/image11.jpg",
        "price": 8999
    },
    {
        "id": "12",
        "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
        "imgUrl": "/item1.jpg",
        "price": 11299
    }
];
export const useProducts = () => {
    // const { data: products, error, isLoading } = useSWR(ApiRoutes.PRODUCTS, fetcher)
    // const data = error || isLoading ? [] : products
    return {
        data: products,
    }
}
