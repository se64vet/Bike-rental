import React from 'react'
import { Hero } from "../components";

const ContactPage = () => {
  return (
    <div className='about-page container mx-auto'>
      <div className='banner'>
        <Hero heroImgUrl={contact.banner.imgUrl}>
          <h1 className='text-white font-bold text-7xl text-center'>{contact.banner.leadText}</h1>
        </Hero>
      </div>

      <hr />

      <div className='my-20'>
       <div className='text-xl flex flex-col gap-10'>
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

const contact = {
  banner: {
    imgUrl: "https://images.unsplash.com/photo-1453054816408-58d6209d9a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    leadText: "Help center & Contact information"
  },
  content: {
    intro: "We pride ourselves on our commitment to the motorcycle community, and because of this, we do our best to make ourselves available for you.",
    support: {link: "#" ,text:"We offer a self-help area on the website so you can find information on common questions and situations."},
    email: {address: "info@motorent.com", text:"You can also contact us through email at "}
  }
}

export default ContactPage