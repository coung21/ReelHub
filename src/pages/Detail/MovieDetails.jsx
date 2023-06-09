import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { SiImdb } from 'react-icons/si';
import minTohr from '../../utils/minTohr'
import CastList from '../../components/Details/CastList';
import Trailers from '../../components/Details/Trailers';
import Similar from '../../components/Details/Similar';
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from '../../components/Footer/Footer';

function MovieDetails() {
  const data = useLoaderData()
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const castVariants = {
    offscreen: {
      x: 50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
    }
  };
  const imgVariants = {
    offscreen: {
      y: -50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])
  // console.log(data)
  return (
    <>
      <motion.div
        className='fixed top-0 left-0 right-0 h-2 bg-red-500 transform origin-left z-50 rounded-xl'
        style={{ scaleX }}
      />
      <div
        className='relative
      w-full
      bg-no-repeat
      bg-cover
      h-[50vh]
      bg-center
      before:content-[""]
      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:bg-overlay
      after:content-[""]
      after:absolute
      after:bottom-0
      after:left-0
      after:w-full
      after:h-[100px]
      after:bg-gradient-to-t from-bg to-transparent'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
        }}
      ></div>

      <div className='flex items-start justify-start max-w-[1260px] mx-auto mt-[-200px] relative px-8'>
        <div className='flex-1'>
          <motion.div
            variants={imgVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.1 }}
            style={{
              backgroundImage: data.poster_path
                ? `url('https://image.tmdb.org/t/p/original${data.poster_path}')`
                : `url('https://cringemdb.com/img/movie-poster-placeholder.png')`,
            }}
            className='bg-center bg-no-repeat bg-cover rounded-xl pt-[165%]'
          ></motion.div>
        </div>

        <div className='relative w-full pl-0 md:w-[70%] md:pl-8'>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.1 }}
            className='text-white font-montserrat font-bold text-6xl mb-4 text-center md:text-left leading-tight'>
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.2 }}
            className='font-light text-2xl font-montserrat tracking-wide text-white mb-4'>
            {data.release_date.split('-')[0]}
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.3 }}
            className='text-white text-sm font-light mb-4'>
            {minTohr(data.runtime)} |{' '}
            {data.genres.map((item, i) => (
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ type: "spring", delay: 0.2 * i }}
                className='text-white font-montserrat font-semibold text-sm ml-2 hover:underline hover:cursor-pointer'
                key={item.id}
              >
                {item.name}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.4 }}
            className='mb-4'>
            <SiImdb color='yellow' size={25} className='inline' />
            <span className='ml-2 text-white text-xl font-semibold opacity-100'>
              {data.vote_average.toFixed(1)}
              <span className='text-sm opacity-50'>/10</span>
            </span>
          </motion.div>
          {/* <div className='mb-8'>{data.genres.map(item => <span className=' px-2 py-1 text-sm md:px-3 md:py-2 border-2 border-white bg-transparent font-montserrat text-white md:ml-2 ml-1 rounded-2xl'>{item.name}</span>)}</div> */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.5 }}
            className='font-montserrat text-md md:leading-normal text-white mb-9 md:px-8'>
            {data.overview}
          </motion.p>

          <motion.div
            variants={castVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.2 }}
            transition={{ type: "spring", delay: 0.1 }}
            className=''>
            <h2 className='text-white text-lg font-semibold font-montserrat mb-2'>
              Casts
            </h2>
            <CastList id={data.id} path='movie' />
          </motion.div>
        </div>
      </div>

      <div className='md:px-20 px-2 mt-[100px]'>
        <h2 className='text-white font-montserrat font-semibold text-md mb-4 sm:text-xl relative ml-4 before:content-[""] before:absolute before:h-full before:w-1 before:bg-primary before:left-[-1rem]'>
          Trailer
        </h2>
        <Trailers id={data.id} />
      </div>

      <div className='md:px-20 px-2 mt-[100px]'>
        <Similar id={data.id} />
      </div>
      <Footer />
    </>
  );
}

export default MovieDetails

export async function loader({ request, params }) {
  const id = params.id
  const resposne = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY
    }`
  );
  const data = await resposne.json()
  return data
}