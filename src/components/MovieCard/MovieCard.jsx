import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const { title, poster, path, id } = props;
  return (
    <button
      className='hover:cursor-pointer duration-300 hover:scale-95'
    >
      <Link to={`${path}/${id}`}>
        <div
          className='
      inline-block'
        >
          <img
            className='rounded-xl'
            src={`https://image.tmdb.org/t/p/w400${poster}`}
            alt=''
          />
        </div>
        <h3 className='text-center text-white font-montserrat text-md font-semibold mt-2'>
          {title}
        </h3>
      </Link>
    </button>
  );
}

export default MovieCard;
