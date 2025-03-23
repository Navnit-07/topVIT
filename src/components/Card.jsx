import React from 'react'
import style from './Card.module.css'
import { motion } from 'framer-motion'

function Card({ color, image, heading, text, width, height, colorHeading, colorText, cursor }) {

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (

    <motion.div
      className={style['card-container']}
      style={{
        backgroundColor: color,
        width: width + 'px',
        height: height + 'px',
        cursor: cursor,
        '--boxShadow': color
      }}

      variants={cardVariants}
      viewport={{once: true}}
      initial='hidden'
      whileInView='visible'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <span className={style['card-image']}>{image}</span>
      <span className={style['card-heading']} style={{ color: colorHeading }}>{heading}</span>
      <span className={style['card-text']} style={{ color: colorText }}>{text}</span>
    </motion.div>
  )
}

export default Card