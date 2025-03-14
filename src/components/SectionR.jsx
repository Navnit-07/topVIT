import React from 'react'
import style from './SectionR.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'

function SectionR({heading, text, image, buttonText, to}) {
  return (
    <div className={style['container']}>
        <div className={style['content-container']}>
            <div className={style['heading-container']}>
                <h1 className={style['heading']}>{heading}</h1>
                <p className={style['sub-heading']}>{text}</p>
                <Link to={to}><Button text={buttonText}/></Link>
            </div>
            <div className={style['image-container']}>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionR