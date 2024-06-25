import React from 'react';
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaChrome, FaUbuntu } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center py-10'>
      <h2 className='text-[35px] font-bold mb-8'>SKILLS</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-6 sm:gap-8 md:gap-10'>
        <div className='flex flex-col items-center'>
          <FaHtml5 size={96} />
          <p className='mt-2'>HTML5</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaCss3Alt size={96} />
          <p className='mt-2'>CSS3</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaJs size={96} />
          <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaReact size={96} />
          <p className='mt-2'>React.js</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaNode size={96} />
          <p className='mt-2'>Node.js</p>
        </div>
       
        <div className='flex flex-col items-center'>
          <SiExpress size={96} />
          <p className='mt-2'>Express.js</p>
        </div>
        <div className='flex flex-col items-center'>
          <RiTailwindCssLine size={96} />
          <p className='mt-2'>Tailwind CSS</p>
        </div>
        <div className='flex flex-col items-center'>
          <SiMongodb size={96} />
          <p className='mt-2'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaGithub size={96} />
          <p className='mt-2'>GitHub</p>
        </div>
      </div>
      <h2 className='text-[30px] mt-10 mb-8 text-gray-300'>TOOLS AND SOFTWARE</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-16 md:gap-20'>
        <div className='flex flex-col items-center'>
          <FaChrome size={96} />
          <p className='mt-2'>Chrome</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaWindows size={96} />
          <p className='mt-2'>Windows</p>
        </div>
        <div className='flex flex-col items-center'>
          <TbBrandMongodb size={96} />
          <p className='mt-2'>MongoDB Atlas</p>
        </div>
        <div className='flex flex-col items-center'>
          <VscVscodeInsiders size={96} />
          <p className='mt-2'>VS Code</p>
        </div>
      </div>
    </div>
  );
};
