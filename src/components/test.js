import React from 'react'
import Line from "../media/fighters-lines.png"
import Fighter from "../media/fighters.png"
import Circle from "../components/circle"

export default function test() {
  return (
    <div className='bg-bjjblue'>
      <section className='container m-auto hb-0 sm:mb-auto sm:h-screen flex flex-col sm:flex-row'>
          <div className="relative w-[100%] sm:w-2/3 h-[27rem] sm:h-[auto]">
            <img className="w-full top-0 bottom-0 mb-0 sm:mb-auto m-auto h-auto absolute left-0" src={Fighter}></img>
            <img className="pulse w-full top-0 bottom-0 mb-0 sm:mb-auto m-auto h-auto absolute left-0" src={Line}></img>
            {/* <img className="pulse-slow w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Line}></img> */}
            <Circle />
          </div>
          
          <div className="flex justify-center flex-col p-5 pb-20  sm:p-11 w-[100%] sm:w-1/3">
            <h2 className="text-white text-3xl mt-3 mb-3 tracking-wider">WHY</h2>
            <p className='text-white'> The "why" is your brand's DNA. It's what makes your brand unique. It's the experience you want people to feel from engaging with it. It has a personality. A voice. An attitude. A style. It cares. It engages and is engaging. It has a point of view. 
            </p>
          </div>
      </section>
    </div>
  )
}
