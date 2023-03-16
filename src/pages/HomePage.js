import React from 'react'
import {Hero, SideHero, Search, HeroWithCards } from '../components'
import GridDisplay from '../components/GridDisplay'
import { homePage } from '../data/pagedata'
const HomePage = () => {

  return (
    <div className='homePage'>
      {/* Banner */}
       <Hero heroImgUrl={homePage.heroBackgroundUrl}>
          <div className='hero-lead text-center w-4/5 md:w-2/3 mx-auto mt-20 md:mt-0 text-white'>
            <p className='text-xl md:text-2xl italic'>Motorcycle Renting &amp; Sharing</p>
            <h1 className='text-5xl md:text-7xl font-bold mb-5'>Rent a bike. <br/> Ride the world</h1>
            <Search /> 
          </div>
        </Hero> 

        {/* About us */}
        <div className='my-20'>
          <SideHero imgUrl={homePage.aboutUsSection.imgUrl}>
            <div className='flex-1 flex flex-col gap-7 p-7 md:p-0'>
                <div className='small-title text-xl text-yellow-500 font-bold'><span>{homePage.aboutUsSection.small}</span></div>
                <div className='large-title font-bold text-5xl'><h2>{homePage.aboutUsSection.large}</h2></div>
                <div className='info-desc text-xl'><span>{homePage.aboutUsSection.desc}</span></div>
                <div className='call-to-action'>
                    <button className='bg-yellow-500 text-white font-bold px-10 py-3'>{homePage.aboutUsSection.actionBtn} &#8594;</button>
                </div>
            </div>
          </SideHero> 
        </div>

        <hr/>
        
        {/* How it works */}
        <div className='my-20'>
          <SideHero imgUrl={homePage.howItWorks.imgUrl} rowReverse>
            <div className='flex flex-col items-center pt-5 md:pt-0'>
              <h2 className='font-bold text-4xl text-white bg-yellow-500 px-5 py-3 mb-5'>How It Works ?</h2>
              {
                homePage.howItWorks.steps.map((item, index)=>(
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

        <hr />

        {/* inventory */}
        <div className='my-20'>
              <GridDisplay content={homePage.inventory}>
                <div className='filter-bar'>
                  <ul className='flex flex-row justify-center gap-10 text-xl underline-offset-8 '>
                    <li className='hover:underline cursor-pointer'>Popular</li>
                    <li className='hover:underline cursor-pointer'>Ducati</li>
                    <li className='hover:underline cursor-pointer'>BMW</li>
                    <li className='hover:underline cursor-pointer'>Harley</li>
                  </ul>
                </div>
              </GridDisplay>
              <div className='mt-20 text-center cursor-pointer'>
                <span className='text-xl text-white bg-yellow-500 px-10 py-5 text-center'>See all bikes &#8594;</span>
              </div>
        </div>

        <hr />
    </div>
  )
}


export default HomePage