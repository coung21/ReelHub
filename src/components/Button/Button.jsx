import React from 'react'

function Button(props) {
  return (
    <button
      onClick={props.clickEvent}
      className={`py-0.5 px-9 font-montserrat font-medium rounded-2xl text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button