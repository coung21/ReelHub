import React, { useEffect, useState } from 'react'

function Trailers({id}) {
  const [trailer , setTrailer] = useState('')
  useEffect(() => {
    const fetchVideo = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
        );
        const data = await response.json();
        const trailers = data.results.find((movie) => movie.site === 'YouTube' && (movie.type === 'Trailer' || movie.type === 'Teaser'));
        // console.log(trailers)
        setTrailer(trailers.key);
    }
    fetchVideo()
  }, [])
  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer}`}
      width='100%'
      height={'600px'}
      title='Teaser'
    ></iframe>
  );
}

export default Trailers