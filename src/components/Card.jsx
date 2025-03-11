import React from 'react'
import style from './Card.module.css'

function Card({color}) {
  return (
    <div className={style['card-container']} style={{backgroundColor: color}}></div>
  )
}

export default Card