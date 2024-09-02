import React from 'react'
import mypic from '../../assets/3.jpeg'
const Sidebar = () => {
  return (
    <div className='md:w-1/3 m-7 rounded border-2 p-6   '>
        <div>
            <img 
            src={mypic} 
            className='object-cover filter grayscale h-64 w-64' 
            alt="author's photograph" />
        </div>
    <div className='m-2 '>
    <p href="" className='text-2xl text-slate-800 '>Supriya Singh</p>
            <div className='text-right text-sm text-gray-400'>
            <a href="">~LinkedIn</a>/<a href=''>Insta</a>

            </div>
    </div>
            
        
    </div>
  )
}

export default Sidebar