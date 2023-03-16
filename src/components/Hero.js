import React from 'react'

const Hero = ({children, heroImgUrl}) => {
  return (
    <div className='hero-wrapper container mx-auto h-[70vh] md:h-[50vh] py-20 md:p-20 flex flex-col justify-center' 
        style={heroImgUrl&& {
            backgroundImage: `Url(${heroImgUrl})`, 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center"}}>

        <div className='hero-content-container'>
            <div className='hero-main-content'>
               {children} 
            </div>
        </div>
    </div>
  )
}

export default Hero