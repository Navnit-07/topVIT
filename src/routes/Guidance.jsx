import React from 'react'
import style from "./Guidance.module.css"
import { Link } from 'react-router-dom'
import { FaBookOpen, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Guidance() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>🕵🏻‍♂️ Guidance</h1>
      <div className={style.navigation}>
        <li><Link to='/notes'><div>Notes</div></Link></li>
        <li><Link to='/ppt'><div>PPT</div></Link></li>
        <li><Link to='/playlist'><div>Playlist</div></Link></li>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={style.subHeading}
      >
        Learn from the best! Get tips, study techniques, and strategies from
        high-achievers to maximize your academic success.
      </motion.p>

      <div className={style.guidanceCards}>
        <motion.div
          className={style.card}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaBookOpen className={style.icon} />
          <h3>Smart Study Techniques</h3>
          <p>Master time management and effective learning strategies.</p>
        </motion.div>

        <motion.div
          className={style.card}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaChalkboardTeacher className={style.icon} />
          <h3>Personalized Mentorship</h3>
          <p>Get direct guidance from 9+ CGPA achievers.</p>
        </motion.div>

        <motion.div
          className={style.card}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaLightbulb className={style.icon} />
          <h3>Exam Strategies</h3>
          <p>Learn how to tackle exams efficiently and score top marks.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Guidance