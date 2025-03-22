import React from 'react';
import style from './Features.module.css';
import image from '../assets/2.jpg';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Features({ heading = 'Key Features', text = '"Whether you’re struggling with concepts or aiming for top grades or have back, our tailored approach helps you succeed. Join a community dedicated to learning smarter and harder."' }) {

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <div className={style['container']}>
            <div className={style['content-container']}>

                {/* Heading Section */}
                <motion.div className={style['heading-container']}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } } // Smoother stagger
                    }}
                >
                    <motion.h1 className={style['heading']} variants={textVariants}>
                        {heading}
                    </motion.h1>
                    <motion.p className={style['sub-heading']} variants={textVariants}>
                        {text}
                    </motion.p>
                </motion.div>

                <div className={style['sub-container']}>

                    {/* Image Section */}
                    <div className={style['image-container']}>
                        <motion.img src={image} alt="Features"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        />
                    </div>

                    {/* Cards Section */}
                    <motion.div className={style['card-container']}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { 
                                transition: { 
                                    delayChildren: 0.5, // Adds delay before stagger starts
                                    staggerChildren: 0.25 // Smoother animations
                                } 
                            }
                        }}
                    >

                        {/* Card 1 */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                            <Link to="/notes">
                                <Card color='#29b7dd' image='📝' heading='Notes' text="Toppers' Notes" width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer' />
                            </Link>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                            <Link to="/guidance">
                                <Card color='#8b72ee' image='🕵🏻‍♂️' heading='Guidance' text='from 9+ CGPA Achievers' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer' />
                            </Link>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                            <Link to="/last-minute-playlist">
                                <Card color='#5d3be7' image='💀' heading='Playlist' text='for Last-Minute Study' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer' />
                            </Link>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                            <Link to="/playlist">
                                <Card color='#bd72ef' image='👨🏻‍🏫' heading='Playlist' text='followed by Toppers' width='285' height='240' colorHeading='#FFFFFF' colorText='#FFFFFF' cursor='pointer' />
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Features;
