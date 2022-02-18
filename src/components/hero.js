import React from 'react'
import Line from "../media/lines.png"
import Fighter from "../media/fighter.png"


export default function hero() {
  return (
    <div class="hero">
      <div className="container justify-center m-auto">
        <section className=" h-screen flex justify-center">
          <div className="flex justify-center flex-col basis-full p-11">
            <h5 className='text-white font-extralight'>#getbbjtoken</h5>
            <h1 className="text-white text-8xl mt-11 mb-11 font-bold tracking-wider">Cryptocurrency backed by the BJJ community</h1>
            <p className='text-white'> Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in 
                American crime. Do you believe that shit?
            </p>
          </div>
          <div className="flex justify-center flex-col basis-full">
            <img className="absolute h-screen" src={Fighter}></img>
            <img id="line" className="absolute  h-screen" src={Line}></img>
          </div>
        </section>
      </div>
    </div>
  ) 
}