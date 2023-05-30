import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function HeroSlideItem({ background, title, overview, poster, id }) {

  const [ytTrailer, setYtTrailer] = useState('');
  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&language=en-US`
      );
      const data = await response.json();
      const trailers = data.results.find(
        (movie) =>
          movie.site === 'YouTube' &&
          (movie.type === 'Trailer' || movie.type === 'Teaser')
      );
      // console.log(trailers)
      setYtTrailer(trailers.key);
    };
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className={`relative 
      w-full
      bg-no-repeat
      bg-cover
      bg-center 
      h-screen 
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
      after:bg-gradient-to-t from-bg to-transparent`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${background}')`,
        }}
      >
        <div className='flex justify-center items-center relative px-4 sm:px-12 h-full'>
          <div className='w-full md:w-1/2 px-2 sm:px-12'>
            <h2 className='font-montserrat text-white font-bold text-3xl sm:text-4xl text-center md:text-left'>
              {title}
            </h2>
            <div className='font-montserrat font-normal text-white mt-7 md:mt-12 text-center md:text-left'>
              {overview}
            </div>
            <div className='mt-7 md:mt-12 flex justify-center md:justify-start gap-5'>
              <Button
                className={
                  'bg-primary hover:shadow-primary text-xl hover:shadow-sm'
                }
              >
                <Link to={`/ReelHub/movie/${id}`}>Details</Link>
              </Button>
              <Button
                className={'bg-transparent border-2 border-white text-xl'}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${ytTrailer}`}
                  target='_blank'
                >
                  Trailer
                </a>
              </Button>
            </div>
          </div>
          <div className='md:flex-1 flex justify-center items-start'>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt=''
              className='hidden md:inline-block w-80 rounded-xl drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlideItem;
