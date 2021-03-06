import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper'
import slider_1 from '../../../assets/slider/1.jpg'
import slider_2 from '../../../assets/slider/2.jpg'
import slider_3 from '../../../assets/slider/3.jpg'
import SliderDesign from './SliderDesign';
import './HeroSection.css'

const sliderData = [
    {
        image: slider_1,
        title: "Looking way ahead allows you to imagine anything"
    },
    {
        image: slider_2,
        title: "Looking way ahead allows you to imagine anything"
    },
    {
        image: slider_3,
        title: "Looking way ahead allows you to imagine anything"
    },
]



const HeroSection = () => {
    return (
        <>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <SliderDesign text={sliderData[0].title} img={sliderData[0].image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderDesign text={sliderData[1].title} img={sliderData[1].image}/>
                </SwiperSlide>

                <SwiperSlide>
                    <SliderDesign text={sliderData[2].title} img={sliderData[2].image}/>
                </SwiperSlide>
            </Swiper>



        </>
    );
};

export default HeroSection;


