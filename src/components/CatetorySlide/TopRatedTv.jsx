import React, { useEffect, useState } from 'react';
import Catetory from './CatetoryCell/Catetory';

function TopRatedTv() {
  const [topTvShows, setTopTvShows] = useState([]);
  useEffect(() => {
    const getTopTv = async () => {
      const resposne = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&language=en-US&page=1`
      );
      const data = await resposne.json();
      setTopTvShows(data.results.slice(5));
    };
    getTopTv();
  }, []);
  return (
    <>
      <Catetory moviesList={topTvShows} catetory='Top Rated TV Shows' />
    </>
  );
}

export default TopRatedTv;
