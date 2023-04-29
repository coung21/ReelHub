import React from 'react'
import HeroSlide from '../components/HeroSlide/HeroSlide';
import UpcomingMovies from '../components/CatetorySlide/UpcomingMovies';
import TopRateMovie from '../components/CatetorySlide/TopRateMovie';
import PopularTv from '../components/CatetorySlide/PopularTv';
import TopRatedTv from '../components/CatetorySlide/TopRatedTv';
import Buttongoup from '../components/Button/Buttongoup';

function Home() {
  return (
    <div className='scroll-smooth'>
      <HeroSlide />
      <div className='px-12 sm:px-24 py-6 mt-16 w-full'>
        <UpcomingMovies />
        <TopRateMovie />
        <PopularTv />
        <TopRatedTv />
        <Buttongoup />
      </div>
    </div>
  )
}

export default Home