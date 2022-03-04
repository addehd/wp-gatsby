import React from 'react'
// import gridBG from '../images/grid-bg.png'
export default function grid() {
  return (
    <section className='container mx-auto mb-20 p-2 sm:p-11'>
       <h2 className="text-[red] text-5xl mt-5 mb-5 tracking-wider mx-auto text-center">NEWS – TEAM</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-4 mx-auto">
        <div className="col-span-1 h-[11rem] w-100 bg-cover hue-rotate-15 bg-[url('../media/grid.webp')]">
          <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-[11rem] w-100 bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-[11rem] w-100 bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-[11rem] w-100 bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-[11rem] w-100 bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
        <div className="col-span-1 h-[11rem] w-100 bg-cover bg-[url('../media/grid.webp')]">
           <div className="h-full w-full gradient-bg"></div>
        </div>
      </div>
    </section>
  )
}
