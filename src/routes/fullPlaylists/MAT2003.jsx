import React from 'react'
import Card from '../../components/Card'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'

function MAT2003() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://youtube.com/playlist?list=PLT3bOBUU3L9i9Ysvmznuawv1mR1r6ml0R&si=nUG_rq59jxWPOlLS' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLNKD1qB9pptvuTsTNK3prWATEXz4FcaDq&si=bxIkMwiB2Jr0VK5B' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&si=H8cQSPyiZReDwZb5' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 3' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default MAT2003