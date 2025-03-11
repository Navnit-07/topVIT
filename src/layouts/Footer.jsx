import React from 'react'
import style from './Footer.module.css'
import Card from '../components/Card'

function Footer() {
  return (
    <div className={style['footer-container']}>
        <div className={style['footer-content']}>
            <h1>Get in Touch!</h1>
            <p>Have questions or ready to start your project journey? Contact us now for personalized guidance and support. Let's make it happen!</p>
            <div className={style['contact-card']}>
                <Card color='white'/>
                <Card color='white'/>
            </div>
        </div>
        <div>
            Made By 
        </div>
    </div>
  )
}

export default Footer