import React from 'react'
import style from './Contact.module.css'
import Card from '../components/Card'

function Contact() {
  return (
    <div className={style['contact-card']}>
        <Card color='#29b7dd' image='📩' heading='Email' text='navnit.23bce11827@vitbhopal.ac.in' width='350' height='250' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
        <Card color='#5d3be7' image='📞' heading='Message' text='+91 6205506500' width='350' height='250' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
    </div>
  )
}

export default Contact