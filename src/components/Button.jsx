import React from 'react'
import style from './Button.module.css'

function Button({text}) {
  return (
    <div className={style['button']}>
        {text}
    </div>
  )
}

export default Button