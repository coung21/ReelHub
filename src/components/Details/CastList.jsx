import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import placeholder from '../../assets/placeholder3.png';

function CastList({id, path}) {
  
  const [casts, setCasts] = useState([])

  useEffect(() => {
    const fetchCast = async () => {
      const resposne = await fetch(
        `https://api.themoviedb.org/3/${path}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
      );
      const data = await resposne.json()
      setCasts(data.cast)
      // console.log(data.cast)
    }
    fetchCast()
  }, [])

   const breakpoints = {
     // Hiển thị 3 slide trên viewport nhỏ hơn 640px
     640: {
       slidesPerView: 4,
       spaceBetween: 10,
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
    <Swiper spaceBetween={10} slidesPerView={4} breakpoints={breakpoints}>
      {casts ? casts.map((item) => (
        <SwiperSlide key={item.id}>
          <div>
            <div className='inline-block'>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w400${item.profile_path}`
                    : placeholder
                }
                className='rounded-md'
              />
            </div>
            <h3 className='text-white text-center font-montserrat text-sm'>
              {item.name}
            </h3>
            <p className='text-white text-center font-montserrat text-xs opacity-50'>{item.character}</p>
          </div>
        </SwiperSlide>
      )) : ''}
    </Swiper>
  );
}

export default CastList