import React from 'react'
import { Hero, SideHero } from '../components'
import { about } from "../data/pagedata";
const AboutPage = () => {
  return (
    <div className='about-page container mx-auto'>
      <div className='banner'>
        <Hero heroImgUrl={about.banner.bannerImgUrl}>
          <h1 className='text-white font-bold text-7xl text-center'>{about.banner.leadText}</h1>
        </Hero>
      </div>

      <hr />

      <div className='my-20'>
        <SideHero imgUrl={about.content.imgUrl}>
          <div className='mt-10 md:mt-0 flex flex-col gap-10'>
            <h3 className='text-2xl font-bold'>{about.content.leadText}</h3>
            <div dangerouslySetInnerHTML={{__html:about.content.paragraph}} className='flex flex-col gap-5' />
          </div>

        </SideHero>
      </div>

      <div className='my-20 flex flex-col items-center text-center'>
        <div className='about-btn-group flex flex-col md:flex-row gap-5'>
          <div className='py-2 px-5 bg-yellow-500 text-white font-bold text-2xl cursor-pointer hover:bg-yellow-300'>Book a bike</div>
          <div className='py-2 px-5 text-yellow-500 font-bold text-2xl border-2 border-yellow-300 cursor-pointer hover:bg-yellow-300 hover:text-white'>Check out our inventory</div>
        </div>
        <ul className='mt-20 flex flex-col md:flex-row md:gap-20'>
          <li>Phone: (123)-456-7890</li>
          <li>support@motorent.com</li>
          <li>Help Center</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>

  )
}
export default AboutPage