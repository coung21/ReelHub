
function SmallButton({children}) {
  return (
    <button className='text-white text-xs sm:text-lg whitespace-nowrap font-montserrat border-2 border-white px-2 sm:px-4 py-0.5 rounded-2xl'>
      {children}
    </button>
  );
}

export default SmallButton