import React from 'react'
import style from './SectionL.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function SectionL({ heading, text, image, buttonText, to }) {

  const textVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.7, ease: "easeOut" } }
  }

  return (
    <div className={style['container']}>
      <div className={style['content-container']}>
        {/* image */}
        <motion.div className={style['image-container']}
          variants={imageVariants}
          initial = 'hidden'
          whileInView = 'visible'
          viewport={{ once: true }}
        >
          <img src={image} alt="" />
        </motion.div>
        <motion.div className={style['heading-container']}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } } // Stagger animations
          }}
        >
          {/* heading */}
          <motion.h1 className={style['heading']} variants={textVariants}>{heading}</motion.h1>
          {/* sub-heading */}
          <motion.p className={style['sub-heading']} variants={textVariants}>{text}</motion.p>
          {/* button */}
          <motion.div variants={buttonVariants}><Link to={to}><Button text={buttonText} /></Link></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionL