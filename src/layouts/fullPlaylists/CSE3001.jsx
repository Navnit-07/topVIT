import React from 'react'
import Card from '../../components/Card'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'

function CSE3001() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=Ln1uBJ3LiSPs200p' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=ohKCObSyQUoZ1cC4' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLV8vIYTIdSnadFpRMvtA260-3-jkIDFaG&si=9fa7NDKEvdSUYryX' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default CSE3001