import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SiImdb } from 'react-icons/si';
import CastList from '../../components/Details/CastList';

function TvDetails() {
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  // console.log(data)
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
              backgroundImage: data.poster_path
                ? `url('https://image.tmdb.org/t/p/original${data.poster_path}')`
                : `url('https://cringemdb.com/img/movie-poster-placeholder.png')`,
            }}
            className='bg-center bg-no-repeat bg-cover rounded-xl pt-[165%]'
          ></div>
        </div>

        <div className='relative w-full pl-0 md:w-[70%] md:pl-8'>
          <h1 className='text-white font-montserrat font-bold text-6xl mb-4 text-center md:text-left leading-tight'>
            {data.name}
          </h1>
          <p className='font-light text-2xl font-montserrat tracking-wide text-white mb-4'>
            {data.first_air_date.split('-')[0]}
          </p>
          <p className='text-white text-sm font-light mb-4'>
            {data.last_episode_to_air.episode_number} Episode |{' '}
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
          <p className='font-montserrat text-md md:leading-normal text-white mb-9 md:px-8'>
            {data.overview}
          </p>

          <div className=''>
            <h2 className='text-white text-lg font-semibold font-montserrat mb-2'>
              Casts
            </h2>
            <CastList id={data.id} path='tv' />
          </div>
        </div>
      </div>

      <div className='md:px-20 px-2 my-[100px]'>
        <a href={data.homepage}>
          <h2 className='font-montserrat text-white text-xl font-semibold hover:text-primary hover:underline hover:cursor-pointer mb-4'>
            Go to Tv Show Page
          </h2>
          <div
            className='w-full h-screen bg-center bg-no-repeat bg-cover'
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
            }}
          ></div>
        </a>
      </div>
    </>
  );
}

export default TvDetails;

export async function loader({ request, params }) {
  const id = params.id;
  const resposne = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  );
  const data = await resposne.json();
  return data;
}
