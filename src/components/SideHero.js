import React from 'react'

const SideHero = ({children, imgUrl, rowReverse}) => {
  return (
    <div className={`sideHero-wrapper container mx-auto flex flex-col justify-center items-center ${rowReverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className='img-side flex-1'>
            <img src={imgUrl} alt='hero' className={`aspect-square object-cover w-4/5 px-5 mx-auto ${rowReverse ? "md:float-right" : "md:float-left"}`} />
        </div>
        <div className='info-side flex-1 px-5'>
            {children}
        </div>
    </div>
  )
}

export default SideHero