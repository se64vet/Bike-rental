import React from 'react'

const GridDisplay = ({children, content}) => {
  return (
    <div className='container mx-auto flex flex-col gap-10'>
        <div className='grid-header flex flex-col items-center gap-7'>
            <p className='small text-xl font-bold text-white bg-yellow-500 px-5 py-2'>{content.small}</p>
            <h3 className='large text-5xl font-bold'>{content.h3}</h3>
        </div>
        <div className='grid-filter'>{children}</div>
        <div className='w-3/4 mx-auto grid-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {content.collection.map((item, idx) => (
                idx<6? <Card bike={item} key = {idx}/> : <></>
            ))}
        </div>
    </div>
  )
}

const Card = ({bike})=> {
    return (
        <div className='flex flex-col items-center gap-3 sm:shadow-lg py-5 px-10 sm:px-5'>
            <div className='w-full'> <img className='w-full object-cover' src={bike.thumbnail} alt={bike.model}/></div>
            <div className='w-full flex flex-row justify-between gap-5'>
                <span className='text-xl font-light'>starting from <span className='font-bold'>${bike.basePrice} /day</span></span>
                <span className='text-xl'>{bike.reviews}⭐</span>
            </div>
            <div className='place-self-start flex-1'><span className='text-2xl font-bold'>{bike.year + " " + bike.make + " " + bike.model}</span></div>
            <div className='w-full'>
                <button className='w-full py-3 border-2 border-yellow-500 rounded-lg text-xl font-semibold text-yellow-500
                                    hover:bg-yellow-500 hover:text-white'>
                    Book now
                </button>
            </div>
        </div>

    )
}



export default GridDisplay