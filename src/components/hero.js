import React from 'react'
import Line from "../media/lines.png"
import Fighter from "../media/fighter.png"

export default function hero() {
  return (
    <div className='hero'>
      <section className='container flex m-auto h-screen'>
          
          <div className="flex justify-center flex-col p-11 w-1/2">
            <h5 className='font-extralight text-white'><span className='text-gradient'>#</span>getbbjtoken</h5>
            <h1 className="text-white text-7xl mt-11 mb-11 font-bold tracking-wider">Cryptocurrency backed by the BJJ community</h1>
            <p className='text-white'> Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in 
                American crime. Do you believe that shit?
            </p>
          </div>
          
          <div className="relative w-1/2">
            <img className="w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Fighter}></img>
            <img className="pulse-slow w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Line}></img>
            <img className="pulse w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Line}></img>
          </div>
        
      </section>
    </div>
  )
}
