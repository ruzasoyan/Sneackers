import { X } from 'lucide-react'
import React from 'react'
import { useBasket } from '../../hooks/basket'
import clsx from 'clsx'
import styles from "./style.module.css";

export const BasketCard = ({ id, price, imgUrl }) => {
    const { removeProduct } = useBasket()
    const [loading, setLoading] = React.useState(false);
    const handleRemove = async () => {
        setLoading(true)
        await removeProduct(id)
    }

    return (
        <article className={clsx(loading && styles.active, styles.card)}>
            <img src={imgUrl} alt="" />

            <span>
                {price}$
            </span>
            <button onClick={handleRemove}>
                <X />
            </button>
        </article>
    )
}
