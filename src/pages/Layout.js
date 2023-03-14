import React  from 'react'
import { Outlet } from 'react-router-dom'
import SimpleNavBar from '../components/SimpleNavBar'

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
        <footer>made by Dante</footer>
    </>
  )
}

export default Layout