import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import image1 from '../../public/imgi_15_cozy-nest-atop-mountain-where-adorable-baby-dragons-play-generative-ai_21085-40596.jpg'
import image2 from '../../public/imgi_25_close-up-bird-perching-leaf_1048944-12684313.jpg'
import image3 from '../../public/imgi_36_bird-s-nest-is-hanging-from-tree-bird-is-hanging-from-it_709698-104.jpg'
import image4 from '../../public/imgi_47_little-bird-sitting-its-nest-wooden-table_494250-253040.jpg'

const Slider = () => {
    return (
        <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
            className="w-full max-w-7xl mx-auto mt-7"
        >
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image1} 
                    alt="Cozy nest atop mountain" 
                    className="w-full h-80 md:h-96 lg:h-[650px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image2} 
                    alt="Close up bird perching leaf" 
                    className="w-full h-80 md:h-96 lg:h-[650px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image3} 
                    alt="Bird nest hanging from tree" 
                    className="w-full h-80 md:h-96 lg:h-[650px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <img 
                    src={image4} 
                    alt="Little bird sitting in nest" 
                    className="w-full h-80 md:h-96 lg:h-[650px] object-cover mx-auto rounded-lg"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;