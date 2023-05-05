import React from 'react';
import Button from '../Button/Button';
import { Transition } from 'react-transition-group';

function HeroSlideItem({ background, title, overview, poster }) {
  return (
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
                Details
              </Button>
              <Button
                className={'bg-transparent border-2 border-white text-xl'}
              >
                Trailer
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
  );
}

export default HeroSlideItem;
