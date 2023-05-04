import React, { useEffect, useState } from 'react';
import Catetory from './CatetoryCell/Catetory';

function TopRateMovie() {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const getTopMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`);
      const data = await response.json()
      setTopMovies(data.results)
      // console.log(data.results)
    };
    getTopMovies()
  }, []);

  return (
    <>
      <Catetory moviesList={topMovies} path='movie' catetory='Top Rated Movies' />
    </>
  );
}

export default TopRateMovie;
