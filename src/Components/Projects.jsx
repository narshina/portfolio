import React from 'react'
import pr from './pr1.png'
import h from './house.png'
import b from './bnk.png'

export const Projects = () => {
  return (
<div className='bg-black text-white pt-9'>
        <div className='text-center'>
          <div className='text-gray-400 text-[15px]'>MY WORK</div>
          <div className='font-bold text-[35px]'>PROJECTS</div>
            <div className='flex flex-wrap justify-center gap-4'>
          <div className='border-2 border-indigo-600 rounded-xl h-[500px] w-[400px] mt-4 flex justify-center m-auto flex-col'>
        
            <img className='h-64 w-[380px] mt-3 rounded-xl m-auto' src={pr} alt='' ></img>
          <div className=' font-semibold mt-4'>PANCHAYAT PORTAL</div>
          <div className='text-left px-3'>The Ulliyeri-E-Panchayath portal simplifies Panchayat services for Ulliyeri residents via online accessibility.It offers services like application tracking and complaint lodging, fostering transparent communication.</div>
          <div className='text-fuchsia-600 mt-3'>HTML, CSS, React.js, Node.js, Express.js, MongoDB, JavaScript</div>
          </div>
          <div className='border-2 border-indigo-600 rounded-xl h-[500px] w-[400px] mt-4 flex justify-center m-auto flex-col'>
        
        <img className='h-64 w-[380px] mt-3 rounded-xl m-auto' src={b} alt='' ></img>
      <div className=' font-semibold mt-4'>SMART BANKING</div>
      <div className='text-left px-3'>Smart Banking offers a secure and user-friendly online banking platform designed to simplify financial management for individuals.It ensures a reliable and efficient banking experience.</div>
      <div className='text-fuchsia-600 mt-3'>HTML, CSS, React.js, Node.js, Express.js, MongoDB, JavaScript</div>
      </div>
      <div className='border-2 border-indigo-600 rounded-xl h-[500px] w-[400px] mt-4 flex justify-center m-auto flex-col'>
        
        <img className='h-64 w-[380px] mt-3 rounded-xl m-auto' src={h} alt='' ></img>
      <div className=' font-semibold mt-4'>HOUSE RENTAL MANAGEMENT SYSTEM</div>
      <div className='text-left px-3'>The house rental management system simplifies finding rental accommodations by categorizing them into modern homes, rooms, and apartments.Tenants can easily browse available houses online based on their preferences and budget.</div>
      <div className='text-fuchsia-600 mt-3'>Tools: HTML, CSS, MYSQL, python, Django, PyCharm</div>
      </div>
      </div>

        </div>
    </div>  
    )
}
