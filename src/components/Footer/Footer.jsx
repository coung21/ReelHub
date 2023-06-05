import React from 'react';
import bg from '../../assets/bg.jpg';
import logo2 from '../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { optionFooter } from './utils';
import { AiFillWindows, AiFillApple } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
export default function Footer() {
  const renderColumn = (column) => {
    return (
      <div className='column'>
        <ul>
          {optionFooter[column].map((item, index) => (
            <li
              key={index}
              className=' transition-all hover:scale-125 hover:before:content-[">"]  hover:before:mr-[6px]'
            >
              <Link href='#' className='hover:underline'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div
        className='relative bg-top bg-cover bg-no-repeat pt-24 pb-3h-[674px] mt-9 
       before:content-[""]
        before:absolute 
        before:bottom-0 
        before:left-0 
        before:w-full 
        before:h-full
        before:bg-overlay'
        style={{ backgroundImage: `url(${bg})`, height: 'auto' }}
      >
        <div className='relative flex justify-between px-8 mobile:flex-col'>
          <div className='w-[40%] mobile:w-[100%]'>
            <div className='flex items-center gap-2 hover:cursor-pointer'>
              <img src={logo2} alt='logo' className='w-[50px] h-[50px]' />
            </div>
            <div className='my-3'>
              <h1 className='text-white font-montserrat text-3xl font-bold'>
                Unlocking customer happiness, unlocking company potential.
              </h1>
            </div>
            <p className='text-white'>Reelhub,2023</p>
          </div>
          <div className='w-[40%] mobile:w-[100%] grid grid-cols-footer-4 text-white gap-3'>
            {optionFooter.map((column, index) => renderColumn(index))}
            <div className='flex flex-col items-center gap-3'>
              <p>Get the App</p>
              <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'>
                <AiFillWindows className='mr-2' /> Windows
              </button>
              <button className='flex items-center justify-center w-[120px] h-[40px] border-[#717171] border rounded-[20px]'>
                <AiFillApple className='mr-2' /> macOs
              </button>
            </div>
          </div>
        </div>
        <div className='h-20 bg-transparent backdrop-blur-lg flex items-center justify-center sm:justify-between px-8 text-white relative mt-2'>
          <div>
            <p className='flex items-center'>
              <BiCopyright /> 2023 ReelHub Inc, All rights reversed.
            </p>
          </div>
          <div>
            <ul className='hidden sm:flex gap-0 sm:gap-4'>
              <li>Term of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
