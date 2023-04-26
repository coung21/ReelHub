import React from 'react'

function Button(props) {
  return (
    <button className={`py-0.5 px-9 font-montserrat font-medium rounded-2xl text-xl text-white ${props.className}`}>{props.children}</button>
  )
}

export default Button