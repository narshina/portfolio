import React, { useState } from 'react'

export const Navbar = () => {
  const[nav,setNav]=useState(true)

  let Toggle=()=>{
    setNav(!nav)
  }
  let ToggleTrue=()=>{
    setNav(true)
  }


  return (
    <div className='p-7 bg-black text-white flex justify-between'>
        <div className='font-bold text-black text-[20px]'><i>NARSHINA K </i></div>
        <button onClick={Toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {nav &&
        <div className='flex flex-wrap gap-6 cursor-pointer'>
         <button className='bg-black text-white  hover:text-blue-500 rounded-xl '>About</button>
         <div className='bg-black text-white  hover:text-blue-500 rounded-xl '>Contact</div>
         <div className='bg-black text-white  hover:text-blue-500 rounded-xl '>Projects</div>
  
         <div className='bg-black text-white  hover:text-blue-500 rounded-xl '>Skills</div>
         <div className='bg-black text-white  hover:text-blue-500 rounded-xl '>Certification</div>


        </div>
        }
       
    </div>
  )
}
