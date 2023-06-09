import React  from 'react'
import { Outlet } from 'react-router-dom'
import { SimpleNavBar, Footer } from "../components/index";

const Layout = ({children}) => {
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
    <>
        <SimpleNavBar navContent = {navBarProps}/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout