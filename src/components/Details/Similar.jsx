import React, { useEffect, useState } from 'react'
import Catetory from '../CatetorySlide/CatetoryCell/Catetory'

function Similar({id}) {
  const [similar, setSimilar] = useState([])
  useEffect(() => {
    const fetchSimilar = async () => {
       const response = await fetch(
         `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
       );
       const data = await response.json();
       console.log(data.results)
       setSimilar(data.results);
    }
    fetchSimilar()
  }, [])
  return (
    <>
      <Catetory catetory='More like this' moviesList={similar} path='movie' />
    </>
  )
}

export default Similar