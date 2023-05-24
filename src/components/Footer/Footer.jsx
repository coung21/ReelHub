import React from 'react'
import bg from '../../assets/bg.jpg'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div
      className='relative bg-top bg-cover bg-no-repeat py-24 px-8 h-[674px] mt-9
     before:content-[""]
      before:absolute 
      before:bottom-0 
      before:left-0 
      before:w-full 
      before:h-full
      before:bg-overlay'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex justify-center items-center relative mt-14'>
        <div className='flex items-center gap-2 hover:cursor-pointer'>
          <img src={logo2} alt='logo' className='w-20 h-20' />
          <h1 className='text-white font-montserrat text-3xl font-bold'>
            ReelHub
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-2 relative justify-center items-center text-center mt-[10rem] px-10 md:px-[15rem] lg:px-[20rem]'>
        <div className='flex flex-col text-white font-montserrat font-semibold font-xl gap-y-5'>
          <Link className='hover:underline' to={'/ReelHub'}>
            Home
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            Contact
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            Term of Services
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            About Us
          </Link>
        </div>
        <div className='flex flex-col text-white font-montserrat font-semibold font-xl gap-y-5'>
          <Link className='hover:underline' to={'/ReelHub'}>
            Live
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            FAQ
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            Contributors
          </Link>
          <Link className='hover:underline' to={'/ReelHub'}>
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer