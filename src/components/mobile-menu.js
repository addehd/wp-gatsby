import React, {useState} from 'react'
import { Link } from 'gatsby'

export default function MobileMenu() {
  const [menu, showMenu] = useState(true);
  
  function toggleMenu() {
    showMenu(!menu); }

  return (
    <>
      <section className="top visible sm:hidden">
        <div>
          <div className={ menu ? "close": "open" } onClick={toggleMenu} id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <div className={ menu ? "sideoff": "sidemove" }  id="side">
          <nav onClick={toggleMenu}>
          <Link className='text-red m-[0.8rem]' to="/home">Home</Link>
          <Link className='text-red m-[0.8rem]' to="/nfts">NFT's</Link>
          <Link className='text-red m-[0.8rem]' to="/token">Token</Link>
          <Link className='text-red m-[0.8rem]' to="/page">Blog</Link>
          <Link className='text-red m-[0.8rem]' to="/subscribe">Contact</Link>
          </nav>
      </div>
    </>
  )
}
