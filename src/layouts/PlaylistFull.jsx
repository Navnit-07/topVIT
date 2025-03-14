import React from 'react'
import Card from '../components/Card'
import style from './PlaylistFull.module.css'
import { Link } from 'react-router-dom'

function PlaylistFull() {
  return (
    <div className={style['container']}>
        <div className={style['card-container']}>
            <Link to='/full-playlists-eee1001'><Card color='#29b7dd' image='⚡' heading='EEE1001' text='EEE' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
            <Link to='/full-playlists-ece2002'><Card color='#bd72ef' image='🖥️' heading='ECE2002' text='DIGITAL LOGIC DESIGN' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
            <Link to='/full-playlists-mat1001'><Card color='#8b72ee' image='∭' heading='MAT1001' text='CALCULAS AND LAPLACE TRANSFORM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
            <Link to='/full-playlists-csa2001'><Card color='#5d3be7' image='🤖' heading='CSA2001' text='FUNDAMENTALS IN AI & ML' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
            <Card color='#5d3be7' image='🕵🏻‍♂️' heading='MAT2003' text='APPLIED NUMERICAL METHODS' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>

            <Card color='#bd72ef' image='👨🏻‍🔬' heading='PHY1001' text='ENGINEERING PHYSICS' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='🧪' heading='CHY1001' text='ENGINEERING CHEMISTRY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#5d3be7' image='🧬' heading='CHY1005' text='INTRODUCTION TO COMPUTATIONAL CHEMISTRY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#8b72ee' image='👨🏻‍🏫' heading='PHY1003' text='INTRODUCTION TO COMPUTATIONAL PHYSICS' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>

            <Card color='#29b7dd' image='👨🏻‍💻' heading='CSE2002' text='DATA STRUCTURES AND ALGORITHM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#29b7dd' image='👨🏻‍💻' heading='CSE3004' text='DESIGN AND ANALYSIS OF ALGORITHM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#8b72ee' image='👨🏻‍💻' heading='CSE1021' text='INTRODUCTION TO PROBLEM SOLVING AND PROGRAMMING' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='⩝' heading='MAT2002' text='DISCRETE MATHEMATICS AND GRAPH THEORY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>

            <Card color='#bd72ef' image='🪛' heading='MEE2014' text='ENGINEERING DESIGN AND MODELLING' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='🌳' heading='CHY1006' text='ENVIRONMENTAL SUSTAINABILITY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='👨🏻‍💻' heading='CSE2001' text='OBJECT ORINTED PROGRAMMING WITH C++' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>

            <Card color='#bd72ef' image='👨🏻‍💻' heading='CSE3011' text='PYTHON PROGRAMMING' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='🖥️' heading='CSE3003' text='OPERATING SYSTEM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='👨🏻‍💻' heading='CSE2006' text='PROGRAMMING IN JAVA' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
            <Card color='#bd72ef' image='🖥️' heading='CSE3001' text='DATABASE MANAGEMENT SYSTEM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/>
          </div>
    </div>
  )
}

export default PlaylistFull