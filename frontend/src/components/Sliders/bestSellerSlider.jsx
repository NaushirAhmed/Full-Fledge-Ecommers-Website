import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BestProItem from '../Products/BestProItem';

const bestSellerSlider = (props) => {
  return (<div>
     <Swiper slidesPerView={props.items} spaceBetween={10} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><BestProItem/></SwiperSlide>
          <SwiperSlide><BestProItem/></SwiperSlide>
          <SwiperSlide><BestProItem/></SwiperSlide>
          <SwiperSlide><BestProItem/></SwiperSlide>
          <SwiperSlide><BestProItem/></SwiperSlide>
          <SwiperSlide><BestProItem/></SwiperSlide>
          
     </Swiper>
     </div>
  )
}

export default bestSellerSlider