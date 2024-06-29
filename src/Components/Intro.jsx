import React from 'react'
import './Style.css'
import Lottie from 'lottie-react'
import girl from './gg.json'


export const Intro = () => {
  return (
    <div className='intro-container '>
      <div>
      <div className='intro-heading text-bl'>Hello, I'm Narshina k</div>
      <div className='intro-subheading gradiant-text'>Mern full stack developer</div>
      <div className='intro-description'>
        Passionate MERN stack developer with a strong foundation in building scalable and responsive web applications. 
        Proficient in HTML, CSS, React.js, MongoDB, Node.js, Express.js, with hands-on experience in full-stack development.
      </div>
      </div>
      <div className='h-72 w-72'><Lottie animationData={girl} size={3}/></div>
    </div>
  )
}
