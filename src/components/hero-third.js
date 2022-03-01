import React from 'react'
import Line from "../media/lines.png"
import Fighter from "../media/fighter.png"

export default function test() {
  return (
    <div className='hero'>
      <section className='container flex m-auto h-screen'>
          <div className="flex justify-center flex-col p-11 w-1/2">
            <h2 className="text-white text-3xl mt-3 mb-3 tracking-wider">WHO</h2>
            <p className='text-white'> The target consumer is only ONE of the audiences you'll have to build relationships with. Every brand is influenced by 3-4 groups who often have different priorities or agendas. Who are they? What impact will they have on your ability to grow your brand? What can you do to help them find a place of agreement so you can focus your brand strategy and start growing?
            </p>
            <h2 className="text-white text-3xl mt-3 mb-3 tracking-wider">WHAT</h2>
            <p className='text-white'>What you can uniquely offer in a way that no other brand in the world can is an EXPERIENCE. What will experience do you want your consumer to have?This  impacts every aspect of your business from marketing, sales, operations, staffing, product development or service creation, fulfillment & shipping / providing the service... you name it. The customer experience is EVERYTHING!
            </p>
            <h2 className="text-white text-3xl mt-3 mb-3 tracking-wider">WHY</h2>
            <p className='text-white'> The "why" is your brand's DNA. It's what makes your brand unique. It's the experience you want people to feel from engaging with it. It has a personality. A voice. An attitude. A style. It cares. It engages and is engaging. It has a point of view. 
            </p>
          </div>

          <div className="relative w-1/2">
            <img className="w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Fighter}></img>
            <img className="pulse w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Line}></img>
            <img className="pulse-slow w-full top-0 bottom-0 m-auto h-auto absolute left-0" src={Line}></img>
          </div>
      </section>
    </div>
  )
}
