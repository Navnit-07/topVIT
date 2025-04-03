import React from 'react'
import style from './Contact.module.css'
import Card from '../components/Card'
import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={style["heading"]}

      >
        CONTACT US
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={style["sub-heading"]}
      >
        Want to contribute or have questions or ready to start your journey? Contact us now for guidance and support. Let's make it happen!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={style['contact-card']}
      >
        <Card color='#29b7dd' image={<FaEnvelope />} heading='Email' text='navnit.23bce11827@vitbhopal.ac.in' width='350' height='250' colorHeading='#FFFFFF' colorText='#FFFFFF' />
        <Card color='#5d3be7' image={<FaWhatsapp />}  heading='Message' text='+91 6205506500' width='350' height='250' colorHeading='#FFFFFF' colorText='#FFFFFF' />
      </motion.div>
    </>
  )
}

export default Contact