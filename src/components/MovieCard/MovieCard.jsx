import React from 'react'

function MovieCard(props) {
  const {title, poster} = props
  return (
    <button className='hover:cursor-pointer'>
      <div
        className='
      inline-block
      before:rounded-xl 
      relative 
      before:content-[""]
      before:text-white 
      before:font-semibold
      before-text-md
      before:font-montserrat
      before:underline
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-full 
      before:h-0
      before:flex
      before:justify-center
      before:items-center 
      before:bg-overlay
      before:transition-height
      before:duration-300
      hover:before:h-full
      hover:before:content-["Detail"]'
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
    </button>
  );
}

export default MovieCard