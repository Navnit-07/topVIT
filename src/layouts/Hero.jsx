import React from "react";
import style from "./Hero.module.css";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } }
};

function Hero() {
  return (
    <div className={style["hero-container"]}>
      <div className={style["content-container"]}>
        <motion.div
          className={style["heading-container"]}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } } // Stagger animations
          }}
        >
          {/* Heading */}
          <motion.h1 className={style["heading"]} variants={textVariants}>
            Excel in Your Studies
          </motion.h1>

          {/* Sub-heading */}
          <motion.p className={style["sub-heading"]} variants={textVariants}>
            Unlock your academic potential with personalized study resources, tips, and support from 9+ CGPA achievers. Empowering students like you to achieve more, for less.
          </motion.p>

          {/* Button Animation */}
          <motion.div variants={buttonVariants}>
            <Link to='/playlist'><Button text="Explore More" /></Link>
          </motion.div>
        </motion.div>

        {/* Image Animation */}
        <motion.div className={style["image-container"]} variants={imageVariants} initial="hidden" animate="visible">
          {/* <img src={image} alt="" /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
