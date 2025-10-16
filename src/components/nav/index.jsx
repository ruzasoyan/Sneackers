import { Heart, ShoppingCart, UserCircle } from "lucide-react"
import styles from "./style.module.css"
import { Link } from "react-router"
import { useIsOpenBasketStore } from "../../store/is-open-basket"
import { useBasket } from '../../hooks/basket';


export const Nav = () => {
    const { setIsOpen } = useIsOpenBasketStore()
    const { totalAmount } = useBasket();
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link onClick={() => setIsOpen(true)} className={styles.button}>
                        <ShoppingCart className={styles.icon} />
                        <span className={styles.price}>{totalAmount}$</span>
                    </Link>
                </li>
                <li>
                    <Link to="/account"><UserCircle /> Account </Link>
                </li>
            </ul>
        </nav>

    )
}
