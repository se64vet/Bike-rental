import React from 'react'
import SimpleNavBar from '../components/SimpleNavBar'

const HomePage = () => {
  const navBarProps = {
    isTextLogo: true,
    textLogoContent: "Motor.ent",
    imgLogoUrl: "",
    mainElements: [
      {content: "About", url: "/about"},
      {content: "Pricing", url: "/pricing"},
      {content: "Inventory", url: "/bikes"},
      {content: "Contact", url: "/contact"},
    ],
    callToAction: true,
    callToActionBtns: [
      {content: "Book now", primary: true}
    ]
  }
  return (
    <div>
        <SimpleNavBar navContent={navBarProps}/>
    </div>
  )
}

export default HomePage