import React from 'react'

function Card() {
  return (
    <>
        
  <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
    <div className="w-28 h-28 bg-blue-500 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
      <img className="w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </div>
    <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
      <span className="text-2xl font-semibold">George Johnson</span>
      <p>Support Specialist</p>
    </div>
    <a className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Follow</a>
  </div>


    </>
  )
}

export default Card