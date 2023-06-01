import React, { useEffect } from 'react';
import HeroSlide from '../components/HeroSlide/HeroSlide';
import UpcomingMovies from '../components/CatetorySlide/UpcomingMovies';
import TopRateMovie from '../components/CatetorySlide/TopRateMovie';
import PopularTv from '../components/CatetorySlide/PopularTv';
import TopRatedTv from '../components/CatetorySlide/TopRatedTv';
import { motion, useScroll, useSpring } from "framer-motion";
function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div>
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-red-500 transform origin-left z-50 rounded-xl" style={{ scaleX }} />
      <HeroSlide />
      <div className='px-12 sm:px-24 py-6 mt-16 w-full'>
        <UpcomingMovies />
        <TopRateMovie />
        <PopularTv />
        <TopRatedTv />
      </div>
    </motion.div>


  );
}

export default Home;
