import React from 'react'
import { useState, useRef } from 'react'
import Line from "../media/buchecha-lines.png"
import Fighter from "../media/buchecha.png"
import Circle from "../media/bu-circle.svg"
import mFight from "../media/mfight.gif"

export default function Hero() {
  const [show, setShow] = React.useState(false)
  const [btn] = React.useRef(null)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='bg-bjjblue'>
      <section className='container flex flex-col-reverse sm:flex-row m-auto h-screen justify-center'>
          <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full sm:w-1/2">
            <h5 className='font-light text-white lg:text-2xl'><span className='text-gradient'>#</span>getbbjtoken</h5>
            <h1 className="text-white text-4xl sm:text-7xl lg:text-8xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">Crypto & NFT's backed by the BJJ community</h1>
            <p className='text-white lg:text-2xl'> We are proud to present bjjtoken.io that is founded by experienced BJJ Black belts, for the needs and benefits of the BJJ community.
            </p>
          </div>

          <div className="relative w-full sm:w-1/2  h-full top-9">
            
            <img className="top-0 bottom-0 right-0  left-0 m-auto h-auto absolute max-w-[23rem] sm:max-w-xl" src={Fighter}></img>
            <img className="pulse  top-0 bottom-0 right-0  left-0 m-auto h-auto absolute max-w-[23rem] sm:max-w-xl" src={Line}></img>

            <img onClick={handleClick}  className="rotate top-20 left-40 bottom-0 right-0 m-auto h-auto absolute max-w-[4rem] sm:max-w-[5rem]" src={Circle}></img>
            <div  onClick={handleClick} style={ show ? { visibility:'visible', transition: 'background-color 0.2s ease-in' } : {visibility:'hidden'}} className="bottom-0 top-20 left-40 right-0 m-auto h-auto absolute w-[11rem] h-[8rem] right-[10rem] bottom-[7rem] buchecha">
            <table className="infobox vcard">
              <tbody>
              <tr>
                <th className="infobox-label" scope="row">Name</th>
                <td className="infobox-data">Buchecha</td>
              </tr>
              <tr>
              <th className="infobox-label" scope="row">Nationality</th>
              <td className="infobox-data"><a title="Brazil" href="https://en.wikipedia.org/wiki/Brazil">Brazilian</a><br /><a title="United States" href="https://en.wikipedia.org/wiki/United_States">American</a></td>
              </tr>
              <tr>
              <th className="infobox-label" scope="row">Rank</th>
              <td className="infobox-data">1st degree black belt</td>
              </tr>
              <tr>
              <th className="infobox-label" scope="row">Mundials</th>
              <td className="infobox-data">13 gold</td>
              </tr>
              <tr>
              <th className="infobox-label" scope="row">Division</th>
              <td className="infobox-data"><a title="Heavyweight (MMA)" href="https://en.wikipedia.org/wiki/Heavyweight_(MMA)">Heavyweight</a></td>
              </tr>
              </tbody>
              </table>
            </div>
          </div>
      </section>
    </div>
  )
}
