import React from 'react'
import styles from "./style.module.css";
import { useIsOpenBasketStore } from '../../store/is-open-basket';
import { X } from 'lucide-react';
import { useBasket } from '../../hooks/basket';
import { BasketCard, Empty, Button } from '@/components';
import { useOrder } from '../../hooks/order';

export const Basket = () => {
    const { isOpen, setIsOpen } = useIsOpenBasketStore()
    const { data } = useBasket()
    const [loading, setLoading] = React.useState(false)
    const { addOrder } = useOrder()
    const [isPaid, SetIsPaid] = React.useState(false)
    const handleOrder = async () => {
        setLoading(true);
        await addOrder(data);
        SetIsPaid(true)
    }
    React.useEffect(() => {
        return () => SetIsPaid(false)
    }, [])
    return (
        <>
            {isOpen &&
                <>
                    <div
                        onClick={() => setIsOpen(false)} className={styles.overlay}></div>
                    <div className={styles.basket}>
                        <div className={styles.kochak}>
                            <h2>Basket</h2>
                            <button className={styles.icon} onClick={() => setIsOpen(false)} ><X /></button>
                        </div>
                        {
                            isPaid && data.length === 0 &&
                            <Empty
                                className={styles.empty}
                                imgUrl={"zakaz.png"}
                                text={"Ваш заказ #18 скоро будет передан курьерской доставке"}
                                title={" Заказ оформлен!"} />
                        }
                        {
                            data.length === 0 && !isPaid ? <Empty
                                className={styles.empty}
                                imgUrl={"empty.png"}
                                text={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                title={"Корзина пустая"} /> :
                                <>
                                    <ul className={styles.ul}>
                                        {data.map(el => (
                                            <li className={styles.li}>
                                                <BasketCard {...el} />
                                            </li>
                                        ))}
                                    </ul>
                                    {data.length > 0 && <Button className={loading && styles.active}
                                        onClick={handleOrder}>Oformit Zakaz</Button>} </>
                        }
                    </div>
                </>
            }
        </>
    )
}
