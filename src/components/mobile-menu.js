import React, {useState} from 'react'
import { Link } from 'gatsby'

export default function MobileMenu() {
  const [menu, showMenu] = useState(true);
  
  function toggleMenu() {
    showMenu(!menu);
    console.log(menu); }

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
          <nav>
          <Link className='text-white pl-[5%]' to="/home">Home</Link>
          <Link className='text-white pl-[5%]' to="/">NFT's</Link>
          <Link className='text-white pl-[5%]' to="/">Blockchain</Link>
          <Link className='text-white pl-[5%]' to="/">Blog</Link>
          <Link className='text-white pl-[5%]' to="/">Contact</Link>
          </nav>
      </div>
    </>
  )
}
