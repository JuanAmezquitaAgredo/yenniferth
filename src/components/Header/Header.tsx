'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image className={styles.logoImg} src="/terapia_respiratoria.png" alt="No Image" width={100} height={100} />
      </div>
      <button className={styles.menuButton} onClick={toggleNav}>
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
      </button>
      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#articles">Artículos</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className={styles.button}>Agende su consulta</button>
    </header>
  );
}
