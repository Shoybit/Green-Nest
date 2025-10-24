import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/imgi_18_indoor-plants-studio_23-2151022068.jpg";
import image2 from "../assets/imgi_21_still-life-with-indoor-plants_23-2151024951.jpg";
import image3 from "../assets/imgi_73_front-view-potted-plant-wooden-surface_140725-103323.jpg";
import image4 from "../assets/imgi_23_indoor-plants-studio_23-2151022053.jpg";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full max-w-9/12 mx-auto mt-7"
    >
      <SwiperSlide className="relative">
        <img
          src={image1}
          alt="Cozy nest atop mountain"
          className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg p-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Fresh Indoor Plants
          </h2>
          <p className="text-white text-sm md:text-base font-semibold max-w-md">
            Bring nature inside your home — purify air and elevate your mood with vibrant greenery.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src={image2}
          alt="Close up bird perching leaf"
          className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg p-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Modern Green Aesthetics
          </h2>
          <p className="text-white text-sm md:text-base font-semibold max-w-md">
            Create a peaceful space with our hand-picked indoor plants for every corner of your room.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src={image3}
          alt="Bird nest hanging from tree"
          className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg p-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Potted Plant Collection
          </h2>
          <p className="text-white text-sm md:text-base font-semibold max-w-md">
            Explore our curated collection of easy-to-care plants — perfect for beginners and pros alike.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative">
        <img
          src={image4}
          alt="Indoor Plant Studio"
          className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg p-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
            Natural Studio Vibes
          </h2>
          <p className="text-white text-sm md:text-base font-semibold max-w-md">
            Design your workspace or living room with aesthetic indoor plants for a refreshing environment.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
