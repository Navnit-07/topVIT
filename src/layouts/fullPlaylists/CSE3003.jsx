import React from 'react'
import Card from '../../components/Card'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'

function CSE3003() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=AGUEGRV8fDsba-66' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLOFT81gfMi5WXJW4J0v-tCqm4QsclUJYK&si=eZMpoeO5bJ-RRKRB' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLYxtR5WtqBD20zL95DzephYBu1TBCJAfT&si=bh56yNH4cMquOMUH' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 3' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default CSE3003