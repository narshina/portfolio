import React from 'react';
import './Style.css';
import Lottie from 'lottie-react';
import ms from './msg.json';
import { CgProfile, CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className='min-h-[600px] bg-black pt-36 flex flex-col items-center text-center'>
      <h1 className='text-white font-bold text-[35px] contact'>CONTACT</h1>
      <div className='bg-[#06142E] m-auto mt-4 p-6 w-11/12 max-w-[1450px] flex '>
        <div className='w-full  mb-6 flex '>
          <div className='h-72 w-72'>
            <Lottie animationData={ms} size={2}/>
          </div>
        </div>
        <div className='text-white text-center text-[20px] w-full max-w-lg'>
          <div className='flex gap-4 items-center justify-start mb-4'>
            <CgProfile size={30} />
            <h2>Narshina K</h2>
          </div>
          <div className='flex gap-4 items-center justify-start mb-4'>
            <CgMail size={30} />
            <h2>narshina2001@gmail.com</h2>
          </div>
          <div className='flex gap-4 items-center justify-start mb-4'>
            <FaLocationDot size={25} />
            <h2>Kozhikode</h2>
          </div>
          <div className='flex gap-4 items-center justify-start mb-4'>
            <FaPhoneAlt size={25} />
            <h2>9539246119</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
