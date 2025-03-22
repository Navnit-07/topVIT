import React from 'react'
import Card from '../components/Card'
import style from './PlaylistFull.module.css'
import { Link } from 'react-router-dom'

function PlaylistFull() {
  const subjects = [
    {
      id:'1',
      to : '/full-playlists-eee1001',
      color: '#29b7dd',
      image: '⚡',
      heading: 'EEE1001',
      text: 'EEE1001'
    },
    {
      id:'2',
      to : '/full-playlists-ece2002',
      color: '#bd72ef',
      image: '🖥️',
      heading: 'ECE2002',
      text: 'DIGITAL LOGIC DESIGN'
    },
    {
      id:'3',
      to : '/full-playlists-mat1001',
      color: '#8b72ee',
      image: '∭',
      heading: 'MAT1001',
      text: 'CALCULAS AND LAPLACE TRANSFORM'
    },
    {
      id:'4',
      to : '/full-playlists-csa2001',
      color: '#5d3be7',
      image: '🤖',
      heading: 'CSA2001',
      text: 'FUNDAMENTALS IN AI & ML'
    },
    {
      id:'5',
      to : '/full-playlists-mat2003',
      color: '#5d3be7',
      image: '🕵🏻‍♂️',
      heading: 'MAT2003',
      text: 'APPLIED NUMERICAL METHODS'
    },
    {
      id:'6',
      to : '/full-playlists-phy1001',
      color: '#bd72ef',
      image: '👨🏻‍🔬',
      heading: 'PHY1001',
      text: 'ENGINEERING PHYSICS'
    },
    {
      id:'7',
      to : '/full-playlists-cse1021',
      color: '#8b72ee',
      image: '👨🏻‍💻',
      heading: 'CSE1021',
      text: 'INTRODUCTION TO PROBLEM SOLVING AND PROGRAMMING'
    },
    {
      id:'8',
      to : '/full-playlists-mat2002',
      color: '#bd72ef',
      image: '⩝',
      heading: 'MAT2002',
      text: 'DISCRETE MATHEMATICS AND GRAPH THEORY'
    },
    {
      id:'9',
      to : '/full-playlists-cse2001',
      color: '#bd72ef',
      image: '👨🏻‍💻',
      heading: 'CSE2001',
      text: 'OBJECT ORINTED PROGRAMMING WITH C++'
    },
    {
      id:'10',
      to : '/full-playlists-cse3003',
      color: '#bd72ef',
      image: '🖥️',
      heading: 'CSE3003',
      text: 'OPERATING SYSTEM'
    },
    {
      id:'11',
      to : '/full-playlists-cse3001',
      color: '#bd72ef',
      image: '🖥️',
      heading: 'CSE3001',
      text: 'DATABASE MANAGEMENT SYSTEM'
    },
  ]
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