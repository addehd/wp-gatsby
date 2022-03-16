import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import Logo from '../media/logo.svg'
import MobileMenu from './mobile-menu';

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
    <div style={ visible ? { background:'#000000e8', transition: 'background-color 0.2s ease-in' } : {}} className="fadein header m-auto fixed z-20 w-full flex">
      <Link className='z-[3]' to="/"><img className="w-[15rem] sm:w-[25rem] px-7 sm:px-11" src={Logo}></img></Link>
      <nav className="hidden sm:flex items-center w-full justify-end px-11">
          <Link className='text-white pl-[5%]' to="/">Home</Link>
          <Link className='text-white pl-[5%]' to="/nfts">NFT's</Link>
          <Link className='text-white pl-[5%]' to="/token">Token</Link>
          <Link className='text-white pl-[5%]' to="/page">Blog</Link>
          <Link className='text-white pl-[5%]' to="/subscribe">Contact</Link>
      </nav>
      <MobileMenu />
    </div>
  )
}