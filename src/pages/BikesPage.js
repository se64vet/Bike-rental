import React from 'react'
// import data from "../data/bikes.json"
import { createFakeBikeDB } from "../data/propsAndSchemas";
const BikesPage = () => {
  const data = createFakeBikeDB(20);
  console.log(data);
  return (
    <div className='container mx-auto'>

      <div>
          <h1 className='text-5xl font-bold'> Our Inventory </h1>
      </div>

      <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {
          data&& data.map((bike, index) => (
            <div key={index}>
              <div>{bike.year + " "+ bike.make + " " + bike.model}</div>
              <div><img src={bike.thumbnail} alt={bike.model}/></div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default BikesPage