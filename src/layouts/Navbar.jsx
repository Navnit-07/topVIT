import React, { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../assets/logo.png'
import hambIcon from '../assets/hamburger-menu-line-icon.jpg'
import hambCloseIcon from '../assets/close.png'

function Navbar() {
    const [isMenueOpen, setisMenueOpen] = useState(false);
  return (
    <div className={style['nav-container']}>
        <div className={style['nav-left']}>
            <img src={logo} alt="topVIT" />
        </div>
        <div className={style['nav-right']}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className={style['hamburger-container']}>
            {(isMenueOpen)?
            
                (   <div className={style['hamburger-menue']}>
                        <img src={hambCloseIcon} alt="X" onClick={()=>{setisMenueOpen(false)}}/>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact Us</p>
                        </div>
                ) : (
                    
                    <img src={hambIcon} alt="=" onClick={()=>{setisMenueOpen(true)}}/>
                )
            }
            
            
        </div>
    </div>
  )
}

export default Navbar