import React, {useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsStarHalf } from 'react-icons/bs';
import minTohr from '../../utils/minTohr'

function MovieDetails() {
  const data = useLoaderData()

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  console.log(data)
  return (
    <>
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
              backgroundImage: `url('https://image.tmdb.org/t/p/original${data.poster_path}')`,
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
            <BsStarHalf color='yellow' size={20} className='inline' />
            <span className='ml-2 text-white text-xl font-semibold opacity-100'>
              {data.vote_average}
              <span className='text-sm opacity-50'>/10</span>
            </span>
          </div>
          {/* <div className='mb-8'>{data.genres.map(item => <span className=' px-2 py-1 text-sm md:px-3 md:py-2 border-2 border-white bg-transparent font-montserrat text-white md:ml-2 ml-1 rounded-2xl'>{item.name}</span>)}</div> */}
          <p className='font-montserrat text-md md:leading-normal text-white mb-9 md:px-8'>
            {data.overview}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieDetails

export async function loader({request, params}){
  const id = params.id
  const resposne = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  const data = await resposne.json()
  return data
}