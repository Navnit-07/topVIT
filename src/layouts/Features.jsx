import React from 'react'
import style from './Features.module.css'
import image from '../assets/2.jpg'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

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
                    <Link to="/notes">
                        <Card color='#29b7dd' image='📝' heading='Notes' text="Toppers' Notes" width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
                    </Link>
                    <Link to="/guidance">
                        <Card color='#8b72ee' image='🕵🏻‍♂️' heading='Guidance' text='from 9+ CGPA Achievers' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
                    </Link>
                    <Link to="/last-minute-playlist">
                        <Card color='#5d3be7' image='💀' heading='Playlist' text='for Last-Minute Study' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
                    </Link>
                    <Link to="/playlist">
                        <Card color='#bd72ef' image='👨🏻‍🏫' heading='Playlist' text='followed by Toppers' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features