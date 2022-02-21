import React from 'react'
import Logo from '../media/logo.svg'

export default function header() {
  return (
    <div className="header m-auto absolute z-20 bg-black w-full">
      <img className="w-64 " src={Logo}></img>
    </div>
  )
}
