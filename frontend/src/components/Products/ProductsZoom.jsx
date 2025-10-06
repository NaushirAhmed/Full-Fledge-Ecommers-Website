import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState,useRef } from "react";


const ProductsZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const zoomSliderBig = useRef();
    const zoomSliderSmall = useRef();


    const goto=(index)=>{
        setSlideIndex(index);
        zoomSliderSmall.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }
    
  return (
    <>
      <div className="flex gap-2 ">
        <div className="slider w-[20%]">
          <Swiper 
          ref={zoomSliderSmall}
            direction={'vertical'}
            slidesPerView={4}
            spaceBetween={10}
            className="productszoomslider h-[388px] overflow-hidden"
          >
            <SwiperSlide>
                <div className={`items rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 0 ? 'opacity-100%': 'opacity-50'}`} onClick={()=>goto(0)}>
                    <img src="	https://carpetplanet.in/cdn/shop/files/61RbxfaejhL.jpg?crop=center&height=100&v=1755761997&width=100"/>
                </div>
            </SwiperSlide>

             <SwiperSlide>
                <div className={`items rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 1 ? 'opacity-100%': 'opacity-50'}`} onClick={()=>goto(1)}>
                    <img src="https://carpetplanet.in/cdn/shop/files/81xMeIYr_4L._SL1411.jpg?v=1755761997"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={`items rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 2 ? 'opacity-100%': 'opacity-50'}`} onClick={()=>goto(2)}>
                    <img src="	https://carpetplanet.in/cdn/shop/files/61RbxfaejhL.jpg?crop=center&height=100&v=1755761997&width=100"/>
                </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className={`items rounded-md overflow-hidden cursor-pointer group 
                ${slideIndex === 3 ? 'opacity-100%': 'opacity-50'}`} onClick={()=>goto(3)}>
                    <img src="https://carpetplanet.in/cdn/shop/files/61kF_7xbzIL.jpg?crop=center&height=100&v=1755761944&width=100"/>
                </div>
            </SwiperSlide>
            
          </Swiper>
        </div>

        <div className="zoomContainer w-[88%] h-[400px] overflow-hidden">
            <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
          >
            <SwiperSlide>
          <InnerImageZoom
            zoomType="hover"
            zoomScale={1}
            height={400}
            src="https://carpetplanet.in/cdn/shop/files/61RbxfaejhL.jpg?v=1755761997&width=500"
          />
          </SwiperSlide>
           <SwiperSlide>
          <InnerImageZoom
            zoomType="hover"
            zoomScale={1}
            height={400}
            src="https://carpetplanet.in/cdn/shop/files/81xMeIYr_4L._SL1411.jpg?v=1755761997&width=950"
          />
          </SwiperSlide>
           <SwiperSlide>
          <InnerImageZoom
            zoomType="hover"
            zoomScale={1}
            height={400}
            src="https://carpetplanet.in/cdn/shop/files/61RbxfaejhL.jpg?v=1755761997&width=500"
          />
          </SwiperSlide>
           <SwiperSlide>
           <InnerImageZoom
            zoomType="hover"
            zoomScale={1}
            height={400}
            src="https://carpetplanet.in/cdn/shop/products/81PfM3YWwyL._SX679__1.jpg?v=1755761984"
          />
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductsZoom;
