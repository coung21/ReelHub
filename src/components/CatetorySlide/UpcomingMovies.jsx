import React, { useEffect, useState } from 'react'
import Catetory from './CatetoryCell/Catetory';

function UpcomingMovies() {
  const [upcomingList, setUpcomingList] = useState([])
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
      );
      const data = await response.json()
      setTimeout(() => {
        setUpcomingList(data.results)
      }, 700)
    }
    getUpcomingMovies()
  }, [])
  return (
    <>
      <Catetory moviesList={upcomingList} path='movie' catetory='Upcoming Movies' />
    </>
  )
}

export default UpcomingMovies