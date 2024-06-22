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
        <FaHtml5 size={96} />
        <FaCss3Alt size={96} />
        <FaJs size={96} />
        <FaReact size={96} />
        <FaNode size={96} />
        <FaGithub size={96} />
        <SiExpress size={96} />
        <RiTailwindCssLine size={96} />
        <SiMongodb size={96} />
      </div>
      <h2 className='text-[30px] mt-10 mb-8 text-gray-300'>TOOLS AND SOFTWARE</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-16 md:gap-20'>
        <FaChrome size={96} />
        <FaWindows size={96} />
        <TbBrandMongodb size={96} />
        <VscVscodeInsiders size={96} />
      </div>
      {/* <h2 className='text-[30px] mt-10 mb-8 text-gray-300'>Additional skills</h2>
      <div className='flex justify-between'>
        <div>
          <p className='font-semibold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:left-72  before:mt-1 before:absolute left-5'>Analytical thinking</p>
        </div>
        <div>
          <p>Strong Communication</p>
        </div>
        <div>
          <p>Problem solving</p>
        </div>
        <div>
          <p>Time management</p>
        </div>
      </div> */}

    </div>
  );
};
