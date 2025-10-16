import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router'

export const Logo = () => {
    return (
        <Link className={styles.logo} to="/">
            <img className={styles.img} src="/logo.png" alt="logo" />
            <b className={styles.b} >React Sneakers</b>
            <strong className={styles.strong} >the best sneaker store</strong>
        </Link>
    )
}
