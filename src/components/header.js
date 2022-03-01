import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby'
import Logo from '../media/logo.svg'
//import Scrolly from '../components/scrolly'

export default function Header() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (offset > 69) {
      setVisible(true); } 
    else {
      setVisible(false); }
  }, [offset]);

  return (
    <div style={ visible ? { background:'#000000d9', transition: 'background-color 0.2s ease-in' } : {}} className="fadein header m-auto fixed z-20 w-full flex">
      <Link to="/"><img className="w-[15rem] sm:w-[25rem] px-7 sm:px-11" src={Logo}></img></Link>
      <nav className="hidden sm:flex items-center w-full inline-block justify-end px-11">
        <Link className='text-white px-11' to="/home">Home</Link>
        <Link className='text-white px-11' to="/">NFT's</Link>
        <Link className='text-white px-11' to="/">Blockchain</Link>
        <Link className='text-white px-11' to="/">Blog</Link>
        <Link className='text-white px-11' to="/">Contact</Link>
        {/* <Scrolly /> */}
      </nav>
    </div>
  )
}