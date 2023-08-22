import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { useParams } from 'react-router-dom'
import data from "../data/bikes.json"

const BikePage = () => {
  const {bikeId} = useParams();
  const bike = data.find(item => item._id === bikeId );

  console.log(bike)
  return (
    <>
      {bike 
        ? <ProductDetails
            name={bike.make +" "+bike.model}
            desc={`Year: ${bike.year} <br/> Engine Size: ${bike.engine_size} <br/> Type of Fuel: ${bike.fuel}`}
            price={bike.basePrice}
            review={bike.reviews}
            img_url={bike.imgs}
            btn_label={"Book now"}/> 
        : <h2> Product not found !</h2>}
    </>
  )
}

export default BikePage