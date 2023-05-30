import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';

function TVShowPage() {
  const [tvList, setTvList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchTvs = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&page=${page}`
      );
      const data = await response.json();
      setTvList((prevTvs) => [...prevTvs, ...data.results]);
    };
    fetchTvs();
  }, [page]);

  function loadMoreHanlder() {
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <div
        className='relative
      w-full
      bg-no-repeat
      bg-cover
      h-[50vh]
      bg-center
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
      after:bg-gradient-to-t from-bg to-transparent'
        style={{
          backgroundImage: `url('/ReelHub/src/assets/bg.jpg')`,
        }}
      >
        <div className='h-full w-full flex items-center justify-center relative'>
          <h1 className='text-white font-montserrat font-bold text-4xl'>
            TV SHOWS
          </h1>
        </div>
      </div>

      <div className='mt-11 px-6 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 md:gap-3'>
        {tvList.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            title={item.name}
            poster={item.poster_path}
            path='tvshow'
          />
        ))}
      </div>
      {page < 6 ? (
        <div className='w-full flex items-center justify-center my-5'>
          <button
            className='text-white bg-transparent border-white border-2 px-3 py-2 rounded-md mx-auto'
            onClick={loadMoreHanlder}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}

export default TVShowPage;
