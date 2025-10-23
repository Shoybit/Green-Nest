import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import image1 from '../assets/imgi_18_indoor-plants-studio_23-2151022068.jpg'
import image2 from '../assets/imgi_21_still-life-with-indoor-plants_23-2151024951.jpg'
import image4 from '../assets/imgi_23_indoor-plants-studio_23-2151022053.jpg'
import image3 from '../assets/imgi_73_front-view-potted-plant-wooden-surface_140725-103323.jpg'

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
            <SwiperSlide className="flex items-center justify-center">
                <div className='relative'>
                    <img 
                    src={image1} 
                    alt="Cozy nest atop mountain" 
                    className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
                />
                </div>

                <div className='absolute z'>
                    <h1>hlw mother fakar</h1>
                </div>

            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image2} 
                    alt="Close up bird perching leaf" 
                    className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image3} 
                    alt="Bird nest hanging from tree" 
                    className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image4} 
                    alt="Little bird sitting in nest" 
                    className="w-full h-80 md:h-96 lg:h-[450px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;