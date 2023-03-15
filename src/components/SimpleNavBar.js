import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize'



const SimpleNavBar = (props) => {
  const [isMobileView, setMobileView] = useState(true)
  const windowSize = useWindowSize();
  
  useEffect(()=>{
    windowSize.width < 768
      ?setMobileView(true)
      :setMobileView(false)
  }, [windowSize])
  
  return (
    <>
      {isMobileView
        ?<MobileNavBar navContent={props.navContent}/>
        :<LargeScreenNavbar navContent={props.navContent}/>
      }
    </>
  )
}


const LargeScreenNavbar = (props) =>{
  const {navContent} = props
    return (
        <div className='navBarContainer container mx-auto flex flex-row justify-evenly gap-10 p-10'>
          <div className='navBarLogo'>
            {navContent.isTextLogo 
              ? <Link to='/' className='h-full flex items-center'><span className='font-bold text-2xl'>{navContent.textLogoContent}</span></Link>
              : <div><img src ={navContent.imgLogoUrl} alt='logo'/></div>
            }
          </div>
            
          <div className='navBarMainElements flex-1'>
            <ul className='h-full flex flex-row justify-center items-center gap-5 my-auto'>
              {navContent.mainElements&&
                navContent.mainElements.map((item, index)=>(
                <Link to={item.url} key={index}>
                  <li className='hover:text-red-700 hover:font-bold'>{item.content}</li>
                </Link> 
              ))
              }
            </ul>
          </div>

          {navContent.callToAction && 
          <div className='navBarCallToActionBtns'>
              <div className='btnGroup'>
                {navContent.callToActionBtns &&
                  navContent.callToActionBtns.map((item, index)=>(
                    <div className="border-2 rounded-md cursor-pointer p-2 bg-gray-300 hover:scale-105" key={index} 
                      style={item.primary && {color: "white", background: "black"}}>
                      {item.content}
                    </div>
                  ))
                }
              </div>
          </div>
          }

        </div>
    )
}

const MobileNavBar = (props) =>{
  const [menuActive, setMenuActive] = useState(false)
  const {navContent} = props
    return (
        <>
        <div className='fixed top-0 flex flex-row p-5 w-full bg-white'>
          <div className='hamburgerMenu text-4xl' onClick={()=>setMenuActive(!menuActive)}>☰</div>
        </div>
        <div className='navBarContainer fixed z-10 w-2/3 h-screen flex flex-col gap-5 py-10 px-5 bg-slate-300 ease-in-out duration-300 ' 
         style={menuActive ? {transform: "translateX(0)"} : {transform: "translateX(-100%)"}} >
          <div className='absolute top-0 right-0 aspect-square text-center text-3xl text-gray-500 w-fit p-2 cursor-pointer'
            onClick={()=> setMenuActive(!menuActive)}>
            &#10005;
          </div>
          <div className='navBarLogo'>
            {navContent.isTextLogo 
              ? <Link to='/'><span className='text-4xl font-bold'>{navContent.textLogoContent}</span></Link>
              : <div><img src ={navContent.imgLogoUrl} alt='logo'/></div>
            }
          </div>
            
          <div className='navBarMainElements'>
            <ul className='flex flex-col gap-5 px-1'>
              {navContent.mainElements&&
                navContent.mainElements.map((item, index)=>(
                <Link to={item.url} key={index}>
                  <li className='text-xl'>{item.content}</li>
                </Link> 
              ))
              }
            </ul>
          </div>

          {navContent.callToAction && 
            <div className='navBarCallToActionBtns'>
              <div className='btnGroup'>
                {navContent.callToActionBtns &&
                  navContent.callToActionBtns.map((item, index)=>(
                    <div className="text-xl py-2 px-5 border-2 w-fit rounded-sm" key={index}
                      style={item.primary && {color: "white", background: "black"}}>
                      {item.content}
                    </div>
                  ))
                }
              </div>
            </div>
          }
        </div>
        </>
    )
}

export default SimpleNavBar