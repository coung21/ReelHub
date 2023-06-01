import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import HeroSlideItem from './HeroSlideItem';
import { Virtual } from 'swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroSlideItemLoading from './HeroSlideItemLoading';

function HeroSlide() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);

  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {

    const getPopularMovies = async () => {
      setisLoading(true)
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      setTimeout(() => {
        setMovies(data.results.slice(0, 6));
        // console.log(data.results.slice(0, 6));
        setisLoading(false)
      }, 700)
    };
    setisLoading(false)
    getPopularMovies();
  }, []);
  return (
    <div>
      {!isLoading && movies.length > 0 && (
        <Swiper
          className='swiper-container'
          modules={[Autoplay, Pagination, Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          virtual
        >
          {movies.map((item, i) => (
            <SwiperSlide key={i}>
              <HeroSlideItem
                background={item.backdrop_path}
                title={item.original_title}
                overview={item.overview}
                poster={item.poster_path}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isLoading && movies.length <= 0 && (
        <Swiper
          className='swiper-container'
          modules={[Autoplay, Pagination, Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          virtual
        >
          <SwiperSlide>
            <HeroSlideItemLoading />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}

export default HeroSlide;
