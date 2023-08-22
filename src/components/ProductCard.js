import React from 'react'

const ProductCard = ({imgUrl, name, desc, left, right }) => {
  return (
   
    <div className="mx-auto mt-11 w-full h-full transform rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className ="w-full aspect-square object-cover object-center rounded-md" src={imgUrl} alt="Bike" />
        <div className="p-4 flex flex-col justify-around">
            <h2 className="mb-2 text-lg font-medium  text-gray-900">{name}</h2>
            <p className="mb-2 text-base text-gray-700">{desc}</p>
            <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 ">{left}</p>
            <p className="ml-auto text-base font-medium text-yellow-400">{right}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard