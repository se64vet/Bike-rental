import React from 'react'

const ProductCard = ({imgUrl, name, desc, left, right }) => {
  return (
   
    <div classNameName="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className ="h-2/3 w-full object-cover object-center" src={imgUrl} alt="Bike" />
        <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{desc}</p>
            <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{left}</p>
            <p className="ml-auto text-base font-medium text-yellow-400">{right}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard