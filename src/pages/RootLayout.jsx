import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Buttongoup from '../components/Button/Buttongoup';


function RootLayout() {

  return (
    <div className='scroll-smooth'>
      <Header />
      <Outlet />
      <Buttongoup />
    </div>
  );
}

export default RootLayout