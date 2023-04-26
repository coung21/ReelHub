import React, { useEffect, useState } from 'react'
import Catetory from './CatetoryCell/Catetory';

function PopularTv() {
  const [pTvShows, setpTvShows] = useState([])
  useEffect(() => {
    const getPopularTv = async () => {
      const resposne = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`)
      const data = await resposne.json()
      setpTvShows(data.results.slice(5))
    }
    getPopularTv()
  }, [])
  return (
    <>
      <Catetory moviesList={pTvShows} catetory='Popular TV Shows'/>
    </>
  )
}

export default PopularTv