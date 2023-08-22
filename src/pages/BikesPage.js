import React from 'react'
import ProductCard from '../components/ProductCard';
// import data from "../data/bikes.json"
import { createFakeBikeDB } from "../data/propsAndSchemas";
const BikesPage = () => {
  const data = createFakeBikeDB(10);
  console.log(data);
  return (
    <div className='container mx-auto'>

      <div className='my-10'>
          <h1 className='w-fit mx-auto mt-24 md:mt-0 text-5xl font-bold'> Our Inventory </h1>
      </div>

      <div className='w-3/4 mx-auto grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {
          data&& data.map((bike, index) => (
            <ProductCard 
              key = {index} 
              imgUrl={bike.thumbnail} 
              name={bike.year + " "+ bike.make + " " + bike.model}
              desc={bike.fuel}
              left={"From $" + bike.basePrice}
              right={bike.reviews + "⭐"}
              />
              
          ))
        }

      </div>

    </div>
  )
}

export default BikesPage