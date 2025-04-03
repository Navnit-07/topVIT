import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Connect with Me!</h1>
        <p className={styles.subtitle}>Share your thoughts with me!</p>
      </div>
      <div className={styles.icons}>
        <Link to="https://github.com/Navnit-07" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/navnit-kumar-35969729b" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin />
        </Link>
        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTwitter />
        </Link>
        <Link to="mailto:navnit.23bce11827@vitbhopal.ac.in" className={styles.icon}>
          <FaEnvelope />
        </Link>
      </div>
      <div className={styles.credit}>Made by ME</div>
    </footer>
  );
}

export default Footer;
