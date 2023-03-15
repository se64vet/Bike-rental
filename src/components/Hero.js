import React from 'react'

const Hero = ({children, heroImgUrl}) => {
  return (
    <div className='hero-wrapper container'>
        <div className='hero-content-container'>
            <div className='hero-main-content'>
               {children} 
            </div>
        </div>
    </div>
  )
}

export default Hero