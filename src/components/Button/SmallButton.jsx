
function SmallButton({children}) {
  return (
    <button className='text-white text-xs sm:text-lg font-montserrat border-2 border-white px-4 py-0.5 rounded-2xl'>
      {children}
    </button>
  );
}

export default SmallButton