import React from 'react'
import style from './MAT1001.module.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

function MAT1001() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://www.youtube.com/watch?v=_T7rcF1mrIw&list=PLT3bOBUU3L9iRoyhs8V1Io-xEsjfq4zI0' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://www.youtube.com/watch?v=swF628VHQDo&list=PLT3bOBUU3L9iJduBlC3tcC6RN2TvUwAno' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://www.youtube.com/watch?v=NAJuuEKwOIQ&list=PLT3bOBUU3L9hvSQJ1XqJIcxZPyo5sNwj_' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 3' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://www.youtube.com/watch?v=TH4Kd9mfIgI&list=PLT3bOBUU3L9g0aergP43HK9ihc_UG7Kbx' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 4' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://www.youtube.com/watch?v=pthhx1P1gEg&list=PLT3bOBUU3L9hVIB2YDskrj6L91FgGnenU' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 5' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://www.youtube.com/watch?v=PG_-ax_HmS0&list=PLMHumCF-ao8aF0f5aPS0GmUD5UhFV-T0J' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 6' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default MAT1001