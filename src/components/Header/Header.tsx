import React from 'react';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}> 
        <img className={styles.logoImg} src="/terapia_respiratoria.png" alt="No Image" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#articles">Articulos</a></li>
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
