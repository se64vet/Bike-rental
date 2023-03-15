import React from 'react'
import {Hero, SideHero, Search, HeroWithCards } from '../components'

const HomePage = () => {

  return (
    <div className='homePage'>
      {/* Banner */}
       <Hero heroImgUrl={HomepageProps.heroBackgroundUrl}>
          <div className='hero-lead text-center w-4/5 md:w-2/3 mx-auto mt-20 md:mt-0 text-white'>
            <p className='text-xl md:text-2xl italic'>Motorcycle Renting &amp; Sharing</p>
            <h1 className='text-5xl md:text-7xl font-bold mb-5'>Rent a bike. <br/> Ride the world</h1>
            <Search /> 
          </div>
        </Hero> 

        {/* About us */}
        <div className='my-20'>
          <SideHero imgUrl={HomepageProps.aboutUsSection.imgUrl}>
            <div className='flex-1 flex flex-col gap-7 p-7 md:p-0'>
                <div className='small-title text-xl text-yellow-500 font-bold'><span>{HomepageProps.aboutUsSection.small}</span></div>
                <div className='large-title font-bold text-5xl'><h2>{HomepageProps.aboutUsSection.large}</h2></div>
                <div className='info-desc text-xl'><span>{HomepageProps.aboutUsSection.desc}</span></div>
                <div className='call-to-action'>
                    <button className='bg-yellow-500 text-white font-bold px-10 py-3'>{HomepageProps.aboutUsSection.actionBtn} &#8594;</button>
                </div>
            </div>
          </SideHero> 
        </div>

        <hr/>
        
        {/* How it works */}
        <div className='my-20'>
          <SideHero imgUrl={HomepageProps.howItWorks.imgUrl} rowReverse>
            <div className='flex flex-col items-center pt-5 md:pt-0'>
              <h2 className='font-bold text-4xl text-white bg-yellow-500 px-5 py-3 mb-5'>How It Works ?</h2>
              {
                HomepageProps.howItWorks.steps.map((item, index)=>(
                <div className='flex flex-row gap-2 mt-5 px-5 md:px-0'key={index}>
                  <div className='step-num'><span className='text-3xl font-black text-yellow-500'>0{item.step}.</span></div>
                  <div className='step-detail'>
                    <h3 className='text-3xl font-bold'>{item.title}</h3>
                    <p className='text-xl'>{item.desc}</p>
                  </div>
                </div>
                ))
              }
            </div>
          </SideHero> 
        </div>
        
        <hr />

        {/* Why Us? */}
        <div className='my-20'>
              <HeroWithCards />
        </div>
    </div>
  )
}

const HomepageProps ={
  heroBackgroundUrl : "https://images.unsplash.com/photo-1609204276470-d22da7d40a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  aboutUsSection:{
    imgUrl: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    small: "About us",
    large: "More than 150+ special collection bikes",
    desc: "Get the car of your dream with the installments of your choice. There are various attractive offers from us with various trusted leasing partners.",
    actionBtn: "See all bikes"
  },
  howItWorks: {
    imgUrl:"https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    steps: [
      {
        step: 1,
        title: "Find your bike",
        desc: "Search from thousands of motorcycles all over the country. Looking for a particular brand? We’ve probably got it."
      },
      {
        step: 2,
        title: "Book your days",
        desc: "Pick your days. After a short approval process, you’ll meet the owner to get your keys and inspect your ride."
      },
      {
        step: 1,
        title: "Ride the world",
        desc: "Enjoy the ride of your life. Be safe. Be respectful. Have fun. Don’t forget to leave the owner a stellar review."
      }
    ]
  }
}

export default HomePage