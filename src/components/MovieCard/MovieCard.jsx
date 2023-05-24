import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/movieph.png'

function MovieCard(props) {
  const { title, poster, path, id } = props;
  return (
    <button className='hover:cursor-pointer duration-300 hover:scale-95'>
      <Link to={`/${path}/${id}`}>
        <div className='inline-block'>
          <img
            className='rounded-xl'
            src={
              poster
                ? `https://image.tmdb.org/t/p/w400${poster}`
                : placeholder
            }
            alt=''
          />
        </div>
        <h3 className='text-center text-white font-montserrat text-sm font-semibold mt-1 overflow-hidden'>
          {title}
        </h3>
      </Link>
    </button>
  );
}

export default MovieCard;
