import React from 'react'
import Logo from '../media/logo.svg'

export default function header() {
  return (
    <div className="header m-auto absolute left-40 z-20">
      <img className="w-64 " src={Logo}></img>
    </div>
  )
}
