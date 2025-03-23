import React from 'react'
import style from './Notes.module.css'
import Card from '../components/Card'
import Subjects from '../components/Subjects'
import { Link } from 'react-router-dom';

function Notes() {

  const subjects = Subjects;

  return (
    <div className={style['container']}>
        <div className={style['card-container']}>
            {subjects.map((subject)=>{
              return(<Link key={subject.id}><Card color={subject.color} image={subject.image} heading={subject.heading} text={subject.text} width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>)
            })}
          </div>
    </div>
  )
}

export default Notes