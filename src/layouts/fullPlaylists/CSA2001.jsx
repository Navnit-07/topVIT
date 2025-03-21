import React from 'react'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

function CSA2001() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://www.youtube.com/watch?v=uB3i-qV6VdM&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default CSA2001