import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
        </div>
        <div className={style['hamburger-container']}>
            {(isMenueOpen)?
            
                (   <div className={style['hamburger-menue']}>
                        <img src={hambCloseIcon} alt="X" onClick={()=>{setisMenueOpen(false)}}/>
                        <p><NavLink to='/'>Home</NavLink></p>
                        <p><NavLink to='/notes'>Notes</NavLink></p>
                        <p><NavLink to='/ppt'>PPT</NavLink></p>
                        <p><NavLink to='/playlist'>Playlist</NavLink></p>
                        <p><NavLink to='/about'>About</NavLink></p>
                        <p><NavLink to='/contact'>Contact Us</NavLink></p>
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