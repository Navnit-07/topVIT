import React from "react";
import { motion } from "framer-motion";
import style from "./About.module.css";

function About() {
  return (
    <motion.div
      className={style["container"]}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading with fade-in and slide-down effect */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={style["heading"]}
      >
        About Us
      </motion.h1>

      {/* Paragraph animation */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Welcome to topVIT – your ultimate academic companion! <br />
        <br />
        We are a team of passionate learners and achievers who believe that
        success is not just about passing exams but excelling in them. Our
        platform provides high-quality notes, curated playlists, and expert
        guidance from 9+ CGPA achievers, ensuring you have everything you need
        to understand concepts deeply and score top marks.<br />
        <br />
        📚 <strong>What We Offer?</strong> <br />
        ✔️ <strong>High-Quality Notes</strong> – Well-structured and concise
        notes to save your time.<br />
        ✔️ <strong>Curated Playlists</strong> – Best video lectures &
        tutorials for every subject.<br />
        ✔️ <strong>Guidance & Tips</strong> – Strategies from toppers to help
        you stay ahead.<br />
        <br />
        Our goal is simple – to empower our juniors and batchmates with the
        best resources so that you can learn smarter, not harder, and achieve
        academic excellence effortlessly.<br />
        <br />
        🚀 <strong>Join us in this journey to the top!</strong> <br />
      </motion.p>
    </motion.div>
  );
}

export default About;
