import React from 'react'

const HeroWithCards = () => {
  return (
    <div className='container mx-auto'>
        <div className='lead-wrapper py-20 bg-black text-white'>
           <div className='lead-content flex flex-col items-center gap-7 text-center'>
                <p className='text-xl font-bold text-yellow-500'>{services.small}</p>
                <h3 className='text-5xl font-bold'>{services.h3}</h3>
                <p className='text-xl italic px-10'>{services.desc}</p>
            </div> 
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap px-10 gap-10 md:gap-5 my-10 md:-translate-y-20 lg:-translate-y-1/4'>
            {services.cards.map((item, idx)=>(
                <Card cardContent={item} key={idx}/>
            ))}
        </div>
    </div>
  )
}

const Card = ({cardContent}) =>{
    return (
        <div className='flex-1 flex flex-col gap-5 shadow-md justify-center items-center p-10 aspect-square bg-white rounded-xl'>
            <div className='max-w-[70px]'> <img alt={cardContent.title} src={cardContent.imgUrl}/> </div>
            <p className='text-2xl font-bold text-center'>{cardContent.title}</p>
            <p className='text-xl italic text-center'>{cardContent.desc}</p>
        </div>
    )
}

const services = {
    small: "Why us?",
    h3: "We have best service for rent Bikes",
    desc: "Things can happen, so we’re covering you.",

    cards: [
        {
            imgUrl: "https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_center,q_auto,f_auto/v1587589897/frontend_assets/homepage-images/insurance-features/resolution.jpg",
            title: "Quality Choice",
            desc: "Search from a wide selection of bikes curated by our partners."
        },{
            imgUrl: "https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_center,q_auto,f_auto/v1587589497/frontend_assets/homepage-images/insurance-features/theif.jpg",
            title: "Exclusive Service",
            desc: "We're ready to help you find your dream bike for your journey."
        },{
            imgUrl: "https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_center,q_auto,f_auto/v1587589497/frontend_assets/homepage-images/insurance-features/money.jpg",
            title: "Fast and Safe",
            desc: "Transaction process is completed within 24 hours."
        }
    ]
}
export default HeroWithCards