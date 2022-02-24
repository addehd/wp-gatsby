import React from 'react'
import { Link } from 'gatsby'
import Logo from '../media/logo.svg'

export default function header() {
  return (
    <div className="header m-auto fixed z-20 w-full">
      <Link to="/"><img className="w-64 " src={Logo}></img></Link>
    </div>
  )
}
