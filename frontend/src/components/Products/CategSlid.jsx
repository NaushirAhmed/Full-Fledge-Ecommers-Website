import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CategSlid = (props) => {
  return (
    <div>
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/shaggy">
                <img
                  src="/catsha.jpg"/>
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Shaggy Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/tufted">
                <img
                  src="catTuf.jpeg"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Tufted Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/hedset">
                <img
                  src="cathan.jpg"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Persian hedset
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/knotted">
                <img
                  src="catkno.jpg"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Handknotted Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/rounded">
                <img
                  src="catrou.jpg"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Rounded Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/runner">
                <img
                  src="catrunn.jpg"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Runner Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>





       <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/">
                <img
                  src="https://carpetplanet.in/cdn/shop/files/IMG_4750.jpg?crop=center&height=375&v=1752323224&width=300"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Shaggy Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/">
                <img
                  src="https://carpetplanet.in/cdn/shop/files/IMG_4750.jpg?crop=center&height=375&v=1752323224&width=300"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Shaggy Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
            <div className=" group imagewrapper w-[100%] h-[180px] overflow-hidden rounded-md relative">
              <Link to="/">
                <img
                  src="https://carpetplanet.in/cdn/shop/files/IMG_4750.jpg?crop=center&height=375&v=1752323224&width=300"
                />
              </Link>
            </div>
            <div className="info p-3">
              <h6 className="text-[14px]  font-[500]">
                <Link to="/" className="link  ">
                  Shaggy Carpet
                </Link>
              </h6>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default CategSlid;
