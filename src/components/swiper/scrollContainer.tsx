import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

interface ScrollContainer {
  children?: React.ReactNode;
}

export const ScrollContainer:FC<ScrollContainer> = ({children}) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          {children}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
