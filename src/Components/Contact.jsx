import React from 'react'
import './Style.css'
import Lottie from 'lottie-react'
import ms from './msg.json'

export const Contact = () => {
  return (
    <div className='h-[600px] bg-black pt-36 flex justify-center flex-col text-center'>
      <h1 className='text-white font-bold text-[35px] contact'>CONTACT</h1>
      <div className='h-[400px] w-[1450px] bg-[#06142E] m-auto mt-4'>
      <div className='h-80 w-80'><Lottie animationData={ms} size={3}/></div>
      </div>
      </div>
  )
}
