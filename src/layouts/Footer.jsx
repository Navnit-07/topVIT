import React from 'react'
import style from './Footer.module.css'
import Card from '../components/Card'

function Footer() {
  return (
    <div className={style['footer-container']}>
        <div className={style['footer-content']}>
            <h1>Get in Touch!</h1>
            <p>Have questions or ready to start your journey? Contact us now for personalized guidance and support. Let's make it happen!</p>
            <div className={style['contact-card']}>
                <Card color='white' image='📩' heading='Email' text='navnit.23bce11827@vitbhopal.ac.in' width='350' height='250' colorHeading='#999999' colorText='#111111'/>
                <Card color='white' image='📞' heading='Message' text='+91 6205506500' width='350' height='250' colorHeading='#999999' colorText='#111111'/>
            </div>
        </div>
        <div>
            Made By 
        </div>
    </div>
  )
}

export default Footer