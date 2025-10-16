import { useState } from "react";
import styles from "./style.module.css";
import { Container, Card, Search } from "@/components";

// const product = [
// {
//     "id": "1",
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "imgUrl": "/item1.jpg",
//     "price": 12999
// },
// {
//     "id": "2",
//     "title": "Мужские Кроссовки Nike Air Max 270",
//     "imgUrl": "/item2.jpg",
//     "price": 12999
// },
// {
//     "id": "3",
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "imgUrl": "/item3.jpg",
//     "price": 8499
// },
// {
//     "id": "4",
//     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     "imgUrl": "/item4.jpg",
//     "price": 12999
// },
// {
//     "id": "5",
//     "title": "Мужские Кроссовки Under Armour Curry 8",
//     "imgUrl": "/item2.jpg",
//     "price": 15199
// },
// {
//     "id": "6",
//     "title": "Мужские Кроссовки Nike Kyrie 7",
//     "imgUrl": "/item2.jpg",
//     "price": 11299
// },
// {
//     "id": "7",
//     "title": "Мужские Кроссовки Jordan Air Jordan 11",
//     "imgUrl": "/item1.jpg",
//     "price": 10799
// },
// {
//     "id": "8",
//     "title": "Мужские Кроссовки Nike LeBron XVIII",
//     "imgUrl": "/item2.jpg",
//     "price": 16499
// },
// {
//     "id": "9",
//     "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//     "imgUrl": "/item4.jpg",
//     "price": 13999
// },
// {
//     "id": "10",
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "imgUrl": "/item1.jpg",
//     "price": 8499
// },
// {
//     "id": "11",
//     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     "imgUrl": "/item3.jpg",
//     "price": 8999
// },
// {
//     "id": "12",
//     "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//     "imgUrl": "/item2.jpg",
//     "price": 11299
// }
// ]
export const Catalog = ({ data, isOrder }) => {
    const [search, setSearch] = useState("")
    return (
        <Container>
            <div className={styles.btn}>  <h2 className={styles.title}>{isOrder ? " My products " : "Sneakers"}</h2> {!isOrder && <Search search={search} setSearch={setSearch} />}</div>
            <ul className={styles.divv}>
                {data.filter(el => el.title.toLowerCase().includes(search.toLowerCase())).map((el) => (
                    <li key={el.id}>
                        <Card {...el} />
                    </li>))}
            </ul>
        </Container>
    )
}
