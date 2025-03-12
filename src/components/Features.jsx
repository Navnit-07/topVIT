import React from 'react'
import style from './Features.module.css'
import image from '../assets/2.jpg'
import Card from './Card'

function Features({heading='Key Features', text='"Whether you’re struggling with concepts or aiming for top grades or have back, our tailored approach helps you succeed. Join a community dedicated to learning smarter and harder."'}) {
  return (
    <div className={style['container']}>
        <div className={style['content-container']}>
            <div className={style['heading-container']}>
                <h1 className={style['heading']}>{heading}</h1>
                <p className={style['sub-heading']}>{text}</p>
            </div>
            <div className={style['sub-container']}>
                <div className={style['image-container']}>
                    <img src={image} alt="" />
                </div>
                <div className={style['card-container']}>
                    <Card color='#29b7dd' image='📝' heading="Toppers' Notes" text='' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
                    <Card color='#8b72ee' image='🕵🏻‍♂️' heading='Guidance from 9+ CGPA Achievers' text='' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
                    <Card color='#5d3be7' image='💀' heading='Playlists for Last-Minute Study' text='' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
                    <Card color='#bd72ef' image='👨🏻‍🏫' heading='Playlists followed by Toppers' text='' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features