import React from 'react'

const Footer = () => {
  return (
    <div className='footer-wrapper w-screen fixed flex flex-col bottom-0 text-white'>
        <div className='footer-ad-wrapper container self-center translate-y-20 p-10 bg-blue-400 text-center'>
            <div className='ad-content-block flex flex-col gap-7 items-center'>
                <p className='text-4xl font-bold'>{footerText.adLead}</p>
                <p className='text-clip font-light md:w-2/3'>{footerText.adDesc}</p>
                <div className='footer-ad-btn-group flex flex-col md:flex-row gap-5 justify-center'>
                    <button className='px-3 py-5 bg-black rounded-lg'>{footerText.adBtn1}</button>
                    <button className='px-3 py-5 bg-black rounded-lg'>{footerText.adBtn2}</button>
                </div>
            </div>
        </div>
        <div className='footer-content-container flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between px-10 pt-32 pb-10 bg-black'>
            <div className='footer-infos text-center'>
                <span className='text-2xl font-bold'>{footerText.brandText}</span>
                <p className='italic'>{footerText.brandSlogan}</p>
            </div>
            <div className='infos text-center'>
                <span>{footerText.infoText}</span>
            </div>
            <div className='links '>
                <ul className='flex flex-row justify-center gap-3'>
                    {footerText.links.map((item, index)=>(
                    <a key={index} href={item.url} rel="noreferrer" target={"_blank"}><li>{item.text}</li></a>
                    ))}
                </ul>
            </div>

        </div>
    </div>
  )
}
const footerText = {
    adLead: "Let's ride with us today!",
    adDesc: "Get the app to explore the world of premium motorbikes, get fast and safe transaction to help you find your dream rent.",
    adBtn1: "Download on the App Store",
    adBtn2: "Get it on Google Play",

    brandText: "Motor.ent",
    brandSlogan: "Easy motor rental",
    infoText: "2023. Made by Lukas",
    links: [
        {
            text: "Portfolio/Resume",
            url: "https://www.dantemai.com",
        },
        {
            text: "Linkedin",
            url: "https://www.linkedin.com/in/dantemai/",
        },
        {
            text: "Github",
            url: "https://www.github.com/se64vet",
        }
    ]
}
export default Footer