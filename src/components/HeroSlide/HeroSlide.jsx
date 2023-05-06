import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import HeroSlideItem from './HeroSlideItem';

function HeroSlide() {
  SwiperCore.use([Autoplay]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 6));
      // console.log(data.results.slice(0, 6));
    };
    getPopularMovies();
  }, []);
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{ delay: 4000 }}
        loop={true}
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
    </div>
  );
}

export default HeroSlide;
