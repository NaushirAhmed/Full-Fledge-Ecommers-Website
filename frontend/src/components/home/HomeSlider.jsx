import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination,} from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
  return (
    <div className="slider py-5">
      <div className='container'>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="SliderHome"
      >
        <SwiperSlide>
          <div className='item rounded-[20px] overflow-hidden'>
          <Link to='/products'><img src="/sliderimg.png" alt="Slider1" /></Link>
          </div>
          </SwiperSlide>
         <SwiperSlide>
          <div className='item rounded-[20px] overflow-hidden'>
         <Link to='/products'><img src="/sliderimg2.png" alt="Slider2" /></Link>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='item rounded-[20px] overflow-hidden'>
         <Link to='/products'><img src="/sliderimg3.png" alt="Slider3" /></Link>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='item rounded-[20px] overflow-hidden'>
          <Link to='/products'><img src="/sliderimg4.png" alt="Slider4" /></Link>
          </div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider