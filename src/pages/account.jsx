import React from 'react'
import { Catalog } from '../components/catalog'
import { useOrder } from '../hooks/order'

export const AccountPage = () => {
    const { data } = useOrder()
    return (
        <>
            <Catalog data={data} isOrder />
        </>
    )
}
