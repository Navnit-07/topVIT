import React from 'react'
import style from './Button.module.css'
import { motion } from 'framer-motion'

function Button({text}) {
  return (
    <motion.div className={style['button']}
      whileTap={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20, duration: 0.15 }}
    >
        {text}
    </motion.div>
  )
}

export default Button