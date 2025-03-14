import React from 'react'
import style from './SectionL.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'

function SectionL({heading, text, image, buttonText, to}) {
  return (
    <div className={style['container']}>
        <div className={style['content-container']}>
            <div className={style['image-container']}>
                <img src={image} alt="" />
            </div>
            <div className={style['heading-container']}>
                <h1 className={style['heading']}>{heading}</h1>
                <p className={style['sub-heading']}>{text}</p>
                <Link to={to}><Button text={buttonText}/></Link>
            </div>
        </div>
    </div>
  )
}

export default SectionL