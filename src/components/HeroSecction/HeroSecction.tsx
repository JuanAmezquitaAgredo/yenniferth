// src/components/HeroSection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}

export default function HeroSection({ id }: Props) {
  return (
    <section id={id} className={styles.hero}>
      <div className={styles.text}>
        <h1>¡Respira con Confianza! 🌟</h1>
        <p>Descubre el poder de una respiración saludable con YENNIFERTH AGREDO,
          tu experta en terapia respiratoria. Con un enfoque personalizado
          y técnicas avanzadas, te ayudamos a mejorar tu bienestar respiratorio,
          aliviar la ansiedad y optimizar tu capacidad pulmonar. Recupera tu ritmo
          vital y vive con más energía y libertad. ¡Agenda tu consulta hoy y comienza
          a respirar mejor mañana!</p>
      </div>
      <div className={styles.image}>
        <img src="/Respira_img1.png" alt="Fisioterapeuta" />
      </div>
    </section>
  );
}
