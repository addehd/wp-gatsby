import React from 'react'
import { useState, useRef } from 'react'
import Line from "../media/buchecha-lines.png"
import Fighter from "../media/buchecha.png"
import Circle from "../components/circle"

export default function Hero() {
  return (
    <div className='bg-bjjblue'>
      <section className='container flex flex-col-reverse sm:flex-row m-auto min-h-full sm:min-h-screen justify-center'>
          <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full sm:w-1/2">

            <h5 className='font-light text-white lg:text-2xl'><span className='text-gradient'>#</span>getbjjtoken</h5>
            <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">Crypto & NFT's backed by the BJJ community</h1>
            <p className='text-white lg:text-xl pb-11'> We are proud to present bjjtoken.io that is founded by experienced BJJ Black belts, for the needs and benefits of the BJJ community.</p>

          </div>

          <div className="block sm:relative w-full sm:w-1/2  min-h-[33rem] top-0">
            <img className="top-[4rem] sm:top-[9rem] bottom-auto sm:bottom-[9rem] right-0  left-0 m-auto h-auto absolute max-w-[20rem] sm:max-w-md xl:max-w-lg" src={Fighter}></img>
            <img className="pulse  top-[4rem] sm:top-[9rem] bottom-auto sm:bottom-[9rem] right-0  left-0 m-auto h-auto absolute max-w-[20rem] sm:max-w-md xl:max-w-lg" src={Line}></img>
            <Circle />
          </div>
      </section>
    </div>
  )
}