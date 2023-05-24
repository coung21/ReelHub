import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/logo2.png';
import { NavLink, Link } from 'react-router-dom';


function Header() {
  const [trans, setTrans] = useState('')
  useEffect(() => {
    function handleScroll(){
      if(window.scrollY >= 200){
        setTrans(
          'transition-all duration-700 bg-bg'
        );
      } else {
        setTrans('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={`${trans} w-full h-16 sm:h-24 fixed z-50 flex justify-between items-center`}>
      <div className='items-center gap-2 ml-6 md:ml-20 hover:cursor-pointer'>
        <Link to='/'>
        <img src={logo2} alt='logo' className='w-14 h-14 inline-block mr-0 md:mr  -2' />
        <h1 className='text-white font-montserrat text-xl font-bold hidden sm:inline'>
          ReelHub
        </h1>
        </Link>
      </div>
      <ul className='flex text-white text-sm sm:text-lg font-montserrat font-semibold gap-4 sm:gap-7 mr-6 md:mr-20'>
        <li className=''>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'text-primary'
                : 'relative py-1 after:content-[""] after:absolute after:h-[2px] after:bg-primary after:w-0 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-width after:duration-200 after:ease-in after:hover:w-full hover:text-primary'
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className=''>
          <NavLink
            to={'/movie'}
            className={({ isActive }) =>
              isActive
                ? 'text-primary'
                : 'relative py-1 after:content-[""] after:absolute after:h-[2px] after:bg-primary after:w-0 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-width after:duration-200 after:ease-in after:hover:w-full hover:text-primary'
            }
            end
          >
            Movies
          </NavLink>
        </li>
        <li className=''>
          <NavLink
            to={'/tvshow'}
            className={({ isActive }) =>
              isActive
                ? 'text-primary'
                : 'relative py-1 after:content-[""] after:absolute after:h-[2px] after:bg-primary after:w-0 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-width after:duration-200 after:ease-in after:hover:w-full hover:text-primary'
            }
            end
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
      {/* <div className='mr-4 md:mr-14 flex gap-1 sm:gap-3'>
        <Button className='text-sm md:text-lg bg-primary px-[0.5rem] py-[1px]'>Signup</Button>
        <Button className='text-sm md:text-lg bg-transparent border-2 border-white px-[0.8rem] py-[1px]'>Login</Button>
      </div> */}
    </div>
  );
}

export default Header;
