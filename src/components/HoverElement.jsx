import React from 'react'

const HoverElement = ({data}) => {
  return (
    <div className='hoverElement z-[999] rounded-lg w-52 h-40 absolute bg-zinc-800 text-white flex flex-col justify-center items-center shadow-lg shadow-teal-900 translate-x-[90px] -translate-y-[190px]'>
        <h4>Label Name : {data.label}</h4>
        <h4>Label Color : {data.color}</h4>
    </div>
  )
}

export default HoverElement