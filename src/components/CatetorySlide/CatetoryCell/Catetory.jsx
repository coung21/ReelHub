import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css'
import SmallButton from '../../Button/SmallButton';
import MovieCard from '../../MovieCard/MovieCard';

SwiperCore.use([Navigation]);


function Catetory(props) {
  const {catetory, moviesList} = props

  const breakpoints = {
    // Hiển thị 3 slide trên viewport nhỏ hơn 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // Hiển thị 4 slide trên viewport từ 768px đến 1024px
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // Hiển thị 6 slide trên viewport lớn hơn 1024px
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  };

  return (
    <div className='w-full mb-9'>
      <div className='block w-full flex justify-between items-center'>
        <h2 className='text-white font-montserrat font-semibold text-xl'>
          {catetory}
        </h2>
        <SmallButton>View More</SmallButton>
      </div>
      <div className='w-full mt-4'>
        <Swiper spaceBetween={15} breakpoints={breakpoints} slidesPerView={2} navigation>
          {moviesList.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard
                title={item.original_title || item.name}
                poster={item.poster_path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Catetory