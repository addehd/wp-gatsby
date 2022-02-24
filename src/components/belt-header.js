import React from 'react'
import { Link } from 'gatsby'
import Logo from '../media/logo.svg'

export default function header() {
  return (
    <div className="header m-auto fixed z-20 bg-[#000000d9] w-full">
      <Link to="/"><img className="w-[21rem] px-11" src={Logo}></img></Link>
    </div>
  )
}
