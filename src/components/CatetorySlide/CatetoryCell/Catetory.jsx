import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import SmallButton from '../../Button/SmallButton';
import MovieCard from '../../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import MovieCardLoading from '../../MovieCard/MovieCardLoading';
import { motion } from 'framer-motion';


function Catetory(props) {
  const { catetory, moviesList, path } = props

  const breakpoints = {
    // Hiển thị 3 slide trên viewport nhỏ hơn 640px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
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
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
    }
  };
  const catetoryVariants = {
    offscreen: {
      x: 50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
    }
  };
  return (
    <div className='w-full mb-9'>
      <div className='w-full flex justify-between items-center'>
        <motion.h2
          variants={catetoryVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.1 }}
          transition={{ type: "spring" }}
          className='text-white font-montserrat font-semibold text-xl relative ml-4 before:content-[""] before:absolute before:h-full before:w-1 before:bg-primary before:left-[-1rem]'>
          {catetory}
        </motion.h2>
        <SmallButton>
          <Link to={`/ReelHub/${path}`}>View More</Link>
        </SmallButton>
      </div>
      <div className='w-full mt-4'>
        {moviesList.length > 0 &&
          <Swiper spaceBetween={15} breakpoints={breakpoints} slidesPerView={4}>
            {moviesList.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ amount: 0.2 }}
                  transition={{ type: "spring", delay: 0.1 * i }}
                >
                  <MovieCard
                    title={item.title || item.name}
                    poster={item.poster_path}
                    path={path}
                    id={item.id}
                  />
                </motion.div>

              </SwiperSlide>
            ))
            }
          </Swiper>
        }
        {moviesList.length <= 0 &&
          <Swiper spaceBetween={15} breakpoints={breakpoints} slidesPerView={4}>
            {Array(6).fill(0).map((item, i) => (
              <SwiperSlide key={i}>
                <MovieCardLoading />
              </SwiperSlide>
            ))
            }
          </Swiper>
        }

      </div>
    </div>
  );
}

export default Catetory