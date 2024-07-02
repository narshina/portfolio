import React from 'react'
import './Style.css'
import Lottie from 'lottie-react'
import girl from './gg.json'

export const Intro = () => {
  return (
    <div className='bg-black h-auto min-h-[550px] flex justify-center text-white flex-col md:flex-row pt-[70px] px-4'>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <div className='md:mr-8 text-center md:text-left'>
          <div className='text-[40px] md:text-[50px] font-bold mb-3'>Hello, I'm Narshina k</div>
          <div className='intro-subheading gradiant-text text-[40px] md:text-[50px] font-bold mb-5'>Mern full stack developer</div>
          <div className='text-gray-400 max-w-[650px]'>
            Passionate MERN stack developer with a strong foundation in building scalable and responsive web applications. 
            Proficient in HTML, CSS, React.js, MongoDB, Node.js, Express.js, with hands-on experience in full-stack development.
          </div>
        </div>
        <div className='h-72 w-72 mt-8 md:mt-0'>
          <Lottie animationData={girl} />
        </div>
      </div>
    </div>
  )
}
