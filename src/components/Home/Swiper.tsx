import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function HeroSwiper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[50vh]"
      >
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://source.unsplash.com/2000x700/?comic"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/2000x700/?comic" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/2000x700/?comic" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSwiper;
