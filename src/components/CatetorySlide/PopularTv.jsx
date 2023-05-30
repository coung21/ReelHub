import React, { useEffect, useState } from 'react'
import Catetory from './CatetoryCell/Catetory';

function PopularTv() {
  const [pTvShows, setpTvShows] = useState([])
  useEffect(() => {
    const getPopularTv = async () => {
      const resposne = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=2`)
      const data = await resposne.json()
      setpTvShows(data.results)
    }
    getPopularTv()
  }, [])
  return (
    <>
      <Catetory moviesList={pTvShows} path='tvshow' catetory='Popular TV Shows'/>
    </>
  )
}

export default PopularTv