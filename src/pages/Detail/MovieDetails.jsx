import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { SiImdb } from 'react-icons/si';
import minTohr from '../../utils/minTohr'
import CastList from '../../components/Details/CastList';
import Trailers from '../../components/Details/Trailers';
import Similar from '../../components/Details/Similar';
import { motion, useScroll, useSpring } from "framer-motion";

function MovieDetails() {
  const data = useLoaderData()
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


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
          <div
            style={{
              backgroundImage: data.poster_path
                ? `url('https://image.tmdb.org/t/p/original${data.poster_path}')`
                : `url('https://cringemdb.com/img/movie-poster-placeholder.png')`,
            }}
            className='bg-center bg-no-repeat bg-cover rounded-xl pt-[165%]'
          ></div>
        </div>

        <div className='relative w-full pl-0 md:w-[70%] md:pl-8'>
          <h1 className='text-white font-montserrat font-bold text-6xl mb-4 text-center md:text-left leading-tight'>
            {data.title}
          </h1>
          <p className='font-light text-2xl font-montserrat tracking-wide text-white mb-4'>
            {data.release_date.split('-')[0]}
          </p>
          <p className='text-white text-sm font-light mb-4'>
            {minTohr(data.runtime)} |{' '}
            {data.genres.map((item) => (
              <span
                className='text-white font-montserrat font-semibold text-sm ml-2 hover:underline hover:cursor-pointer'
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </p>
          <div className='mb-4'>
            <SiImdb color='yellow' size={25} className='inline' />
            <span className='ml-2 text-white text-xl font-semibold opacity-100'>
              {data.vote_average}
              <span className='text-sm opacity-50'>/10</span>
            </span>
          </div>
          {/* <div className='mb-8'>{data.genres.map(item => <span className=' px-2 py-1 text-sm md:px-3 md:py-2 border-2 border-white bg-transparent font-montserrat text-white md:ml-2 ml-1 rounded-2xl'>{item.name}</span>)}</div> */}
          <p className='font-montserrat text-md md:leading-normal text-white mb-9 md:px-8'>
            {data.overview}
          </p>

          <div className=''>
            <h2 className='text-white text-lg font-semibold font-montserrat mb-2'>
              Casts
            </h2>
            <CastList id={data.id} path='movie' />
          </div>
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