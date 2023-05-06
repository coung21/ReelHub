import React, { useEffect } from 'react'
import HeroSlide from '../components/HeroSlide/HeroSlide';
import UpcomingMovies from '../components/CatetorySlide/UpcomingMovies';
import TopRateMovie from '../components/CatetorySlide/TopRateMovie';
import PopularTv from '../components/CatetorySlide/PopularTv';
import TopRatedTv from '../components/CatetorySlide/TopRatedTv';
import BackdropProvider from '../context/backdropProvider';

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <>
 <BackdropProvider>
      <HeroSlide />
      <div className='px-12 sm:px-24 py-6 mt-16 w-full'>
        <UpcomingMovies />
        <TopRateMovie />
        <PopularTv />
        <TopRatedTv />
      </div>
 </BackdropProvider>
    </>
  )
}

export default Home