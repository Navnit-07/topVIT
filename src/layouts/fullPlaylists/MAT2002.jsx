import React from 'react'
import Card from '../../components/Card'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'

function MAT2002() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://youtube.com/playlist?list=PLT3bOBUU3L9hMSq-XrNXECc8TiGJ7dD9C&si=U0-Q1FvyHngF81Ng' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLU6SqdYcYsfKqtoZ2uDwgMya5m_x6cbOG&si=sfyJjx-71Cbq84DM' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default MAT2002