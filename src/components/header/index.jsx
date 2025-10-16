import React from 'react'
import { Container, Nav, Logo } from '@/components'
import styles from "./style.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>

                <Logo />
                <Nav />

            </Container>
        </header>
    )
}
