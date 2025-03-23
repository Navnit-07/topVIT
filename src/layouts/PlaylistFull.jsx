import React from 'react'
import Card from '../components/Card'
import style from './PlaylistFull.module.css'
import { Link } from 'react-router-dom'
import Subjects from '../components/Subjects'

function PlaylistFull() {
  const subjects = Subjects
  
  return (
    <div className={style['container']}>
        <div className={style['card-container']}>
            {subjects.map((subject)=>{
              return(<Link key={subject.id} to={subject.to}><Card color={subject.color} image={subject.image} heading={subject.heading} text={subject.text} width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>)
            })}
            
            

            {/* <Link to='/full-playlists-chy1001'><Card color='#bd72ef' image='🧪' heading='CHY1001' text='ENGINEERING CHEMISTRY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
            {/* <Link to='/full-playlists-chy1005'><Card color='#5d3be7' image='🧬' heading='CHY1005' text='INTRODUCTION TO COMPUTATIONAL CHEMISTRY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
            {/* <Link to='/full-playlists-phy1003'><Card color='#8b72ee' image='👨🏻‍🏫' heading='PHY1003' text='INTRODUCTION TO COMPUTATIONAL PHYSICS' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}

            {/* <Link to='/full-playlists-cse2002'><Card color='#29b7dd' image='👨🏻‍💻' heading='CSE2002' text='DATA STRUCTURES AND ALGORITHM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
            {/* <Link to='/full-playlists-cse3004'><Card color='#29b7dd' image='👨🏻‍💻' heading='CSE3004' text='DESIGN AND ANALYSIS OF ALGORITHM' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
           
            {/* <Link to='/full-playlists-mee2014'><Card color='#bd72ef' image='🪛' heading='MEE2014' text='ENGINEERING DESIGN AND MODELLING' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
            {/* <Link to='/full-playlists-chy1006'><Card color='#bd72ef' image='🌳' heading='CHY1006' text='ENVIRONMENTAL SUSTAINABILITY' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}

            {/* <Link to='/full-playlists-cse3011'><Card color='#bd72ef' image='👨🏻‍💻' heading='CSE3011' text='PYTHON PROGRAMMING' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
            {/* <Link to='/full-playlists-cse2006'><Card color='#bd72ef' image='👨🏻‍💻' heading='CSE2006' text='PROGRAMMING IN JAVA' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link> */}
          </div>
    </div>
  )
}

export default PlaylistFull