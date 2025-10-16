import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Button } from '@/components';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from "./style.module.css"

const arr = [
    {
        text: "Stan Smith,Forever",
        imgUrl: "/slide1.png"
    },
    {
        text: "Stan Smith,Forever",
        imgUrl: "/slide1.png"
    },
    {
        text: "Stan Smith,Forever",
        imgUrl: "/slide1.png"
    },
    {
        text: "Stan Smith,Forever",
        imgUrl: "/slide1.png"
    }
].map((el, i) => ({ ...el, id: i + 1 }))
export const Slider = () => {
    return (
        <Container className={styles.container}>
            <Swiper
                className={styles.slider}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    arr.map(el => (
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.box}>
                                <div>
                                    <h2>{el.text}</h2>
                                    <Button>Buy</Button>
                                </div>
                                <img src={el.imgUrl} alt="" />
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
}
