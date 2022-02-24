import React from 'react'
// import gridBG from '../images/grid-bg.png'

export default function grid() {
  return (
    <section className='container mx-auto mt-20 mb-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        <div className="col-span-1 h-60 w-full bg-cover hue-rotate-15 bg-[url('../media/grid.webp')]">
          <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-60 w-full bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-60 w-full bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-60 w-full bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-60 w-full bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-60 w-full bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
      </div>
    </section>
  )
}
