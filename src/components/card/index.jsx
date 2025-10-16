/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./style.module.css";
import { Plus, Check } from 'lucide-react';
import clsx from 'clsx';
import { useBasket } from '../../hooks/basket';
import { useLocation } from 'react-router';


export const Card = (el) => {
    const { addProduct, isFindProduct } = useBasket()
    const [loading, setLoading] = React.useState(false);
    const location = useLocation()
    const { id, ...rest } = el;
    const handleAdd = async () => {
        setLoading(true);
        await addProduct({ ...rest, productId: el.id, count: 1 });
        setLoading(false);
    };
    return (
        <article>
            <img src={el.imgUrl} alt="" className={styles.img} />
            <h3>{el.title}</h3>
            <div className={styles.priceBox}>
                <span>from{el.price}$</span>
                {location.pathname !== "/account" && <button onClick={handleAdd}
                    className={clsx(styles.button, isFindProduct(el.id) && styles.active, loading && styles.loading)}>
                    {isFindProduct(el.id) ? <Check /> : <Plus />}
                </button>}
            </div>
        </article >
    );
}
