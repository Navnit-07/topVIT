import React from 'react'
import style from './Hero.module.css'
import Button from '../components/Button'

function Hero() {
  return (
    <div className={style['hero-container']}>
        <div className={style['content-container']}>
            <div className={style['heading-container']}>
                <h1 className={style['heading']}>Excel in Your Studies</h1>
                <p className={style['sub-heading']}>Unlock your academic potential with personalized study resources, tips, and support from 9 + CGPA achievers. Empowering students like you to achieve more, for less.</p>
                <Button text='Explore More'/>
            </div>
            <div className={style['image-container']}>
                {/* <img src={image} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Hero