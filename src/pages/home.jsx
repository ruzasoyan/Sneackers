import React from 'react'
import { Slider, Catalog } from '@/components'
import { useProducts } from '../hooks/products'

export const HomePage = () => {
    const { data } = useProducts()
    return (
        <>
            <Slider />
            <Catalog data={data} />
        </>
    )
}
