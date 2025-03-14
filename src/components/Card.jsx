import React from 'react'
import style from './Card.module.css'

function Card({color, image, heading, text, width, height, colorHeading, colorText, cursor}) {
  return (
    <div className={style['card-container']} style={{backgroundColor: color, width: width+'px', height: height+'px', cursor: cursor}}>
      <span className={style['card-image']}>{image}</span>
      <span className={style['card-heading']} style={{color: colorHeading}}>{heading}</span>
      <span className={style['card-text']} style={{color: colorText}}>{text}</span>
    </div>
  )
}

export default Card