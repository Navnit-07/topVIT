import React from 'react'
import Card from '../../components/Card'
import style from './fullPlaylist.module.css'
import { Link } from 'react-router-dom'

function PHY1001() {
  return (
    <div className={style['container']}>
      <p className={style['para']}>Mostly follow 1st playlist but if you find difficulty in understanding then you can refer to 2nd playlist. For other modules that are not in these playlist simply watch any video or use AI chatbot of your choice to cover syllabus as they are theory portions.</p>
      <div className={style['container-card']}>
        <Link to='https://youtube.com/playlist?list=PLDN15nk5uLiAcwK1Fz4n7KVF7yUlBlqaC&si=t9uTayKZ4SHQ1z9Y' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 1' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLHMNREd8J-Boiz_EU3nEJ-dAi0FjiP3Pf&si=vXnRIpKGvzxmLdnZ' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 2' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLHMNREd8J-Bq-pJArTqkZ2kQYllfpHoDh&si=4f9Wb_w5kaDFA4rX' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 3' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLHMNREd8J-Boz6mlRmKcJSNpqsa1rXo-S&si=oZkWs59PRYK_WRzP' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 4' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLIMZ_ikE8L_eJn_MTMfxrwtJaFpfuE24l&si=PgoGsb_DaRxRlVeU' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 5' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLO1URmIbkyNuT_PY3KPEXeCyZ_pgeKJAT&si=B9w9KpS5484zvZEj' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 6' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLAPKGqvQGg6o8SJVVeZ3zdqaj37vdwR9j&si=m4EfY8u3-jcSCwzZ' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 7' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
        <Link to='https://youtube.com/playlist?list=PLQzUXa8lZVq-tYb-kl0_1hU_ICJtXKj2J&si=eOawiqlzZH2Dklnm' target='_blank'><Card color='#8b72ee' image='⚡' heading='Playlist 8' text='Take syllabus with you and study topic wise' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer'/></Link>
      </div>
    </div>
  )
}

export default PHY1001