import React from 'react'
import { Hero } from "../components";
import {contact} from '../data/pagedata'


const ContactPage = () => {
  return (
    <div className='about-page container mx-auto'>
      <div className='banner'>
        <Hero heroImgUrl={contact.banner.imgUrl}>
          <h1 className='text-white font-bold text-5xl md:text-7xl text-center'>{contact.banner.leadText}</h1>
        </Hero>
      </div>

      <hr />

      <div className='my-20'>
       <div className='text-xl flex flex-col gap-10 px-5 md:px-0'>
        <p>{contact.content.intro}</p>
        <div className='flex flex-col gap-5'>
          <p className='font-bold text-2xl'>Support</p>
          <p>{contact.content.support.text}</p>
          <a className='bg-yellow-500 text-white p-3 w-fit rounded-xl' href={contact.content.support.link} rel="noreferrence"> Visit Support Center</a>
        </div>
        <div>
          <p className='font-bold text-2xl'>Email us</p>
          <p>{contact.content.email.text} <a className='text-yellow-500' href={`mailto:${contact.content.email.address}`}>{contact.content.email.address}</a></p>
        </div>
       </div>
      </div>

    </div>


  )
}

export default ContactPage