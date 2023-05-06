import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import SmallButton from '../../Button/SmallButton';
import MovieCard from '../../MovieCard/MovieCard';
import { Link } from 'react-router-dom';



function Catetory(props) {
  const {catetory, moviesList, path} = props

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
        <h2 className='text-white font-montserrat font-semibold text-xl relative ml-4 before:content-[""] before:absolute before:h-full before:w-1 before:bg-primary before:left-[-1rem]'>
          {catetory}
        </h2>
        <SmallButton><Link to={`/${path}`}>View More</Link></SmallButton>
      </div>
      <div className='w-full mt-4'>
        <Swiper spaceBetween={15} breakpoints={breakpoints} slidesPerView={4}>
          {moviesList ? moviesList.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard
                title={item.title || item.name}
                poster={item.poster_path}
                path={path}
                id={item.id}
              />
            </SwiperSlide>
          )) : ''}
        </Swiper>
      </div>
    </div>
  );
}

export default Catetory