import React from 'react'
import Hero from './Hero'
import style from './MainLayout.module.css'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import img3 from '../assets/5.jpg'
import img4 from '../assets/6.jpg'
import SectionR from '../components/SectionR'
import SectionL from '../components/SectionL'
import Footer from './Footer'
import Features from './Features'

function MainLayout() {
  return (
    <div>
      <Hero />
      <Features />
      <div className={style['line']}></div>
      <SectionL heading="Video of Modules" text="Explore handpicked video playlists that have been used by toppers to excel in their studies. These playlists are carefully compiled to provide you with the best resources available, ensuring you learn from the most effective content." image={img1} buttonText="Go to Playlist" to="/playlist" />
      <div className={style['line']}></div>
      <SectionR heading="Professor's Slides" text="Access lecture slides and PowerPoint presentations directly from professors. Get structured, high-quality notes straight from the classroom to enhance your understanding." image={img2} buttonText="View PPTs" to="/ppt" />
      <div className={style['line']}></div>
      <SectionL heading="Toppers' Notes" text="Access high-quality notes from top performers. These well-organized and concise notes are tailored to help you understand complex topics and retain key information, making your study sessions more productive." image={img3} buttonText="Get Notes" to="/notes" />
      <div className={style['line']}></div>
      <SectionR heading="Guidance from 9+ CGPA Achievers" text="Get personalized guidance and tips directly from students who have excelled with 9+ CGPA. Learn their study strategies, time management techniques, and get answers to your questions to boost your academic journey." image={img4} buttonText="Get Expert Guidance" to="/guidance" />
    </div>
  )
}

export default MainLayout