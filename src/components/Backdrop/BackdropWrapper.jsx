import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useClickState, useToggle } from '../../context/backdropProvider';

function BackdropWrapper({ children }) {
  const isClick = useClickState();
  const toggleBackdrop = useToggle();
  return (
    isClick &&
    createPortal(
      <div
        className='w-screen h-screen px-10 py-10 flex items-center justify-center bg-black opacity-90 top-0 left-0 fixed z-50 cursor-pointer before:content-["x"] before:text-white before:absolute before:left-4 before:top-2 before:text-2xl before:md:text-3xl before:font-mono before:font-bold'
        onClick={toggleBackdrop}
      >
        {children}
      </div>,
      document.getElementById('backdrop')
    )
  );
}

export default BackdropWrapper;
