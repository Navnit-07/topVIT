import React from 'react'
import style from './Hero.module.css'
import Button from '../components/Button'

function Hero() {
  return (
    <div className={style['hero-container']}>
        <div className={style['content-container']}>
            <div className={style['heading-container']}>
            {/* heading */}
                <motion.h1 className={style['heading']}
                >
                  Excel in Your Studies
                </motion.h1>

                {/* sub-heading */}
                <motion.p className={style['sub-heading']}
                >
                  Unlock your academic potential with personalized study resources, tips, and support from 9 + CGPA achievers. Empowering students like you to achieve more, for less.
                </motion.p>
                <Button text='Explore More'/>
            </div>

            {/* image */}
            <motion.div className={style['image-container']}
              
            >
                {/* <img src={image} alt="" /> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Hero