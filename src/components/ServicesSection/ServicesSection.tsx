// src/components/ServicesSection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}

export default function ServicesSection({ id }: Props) {
  return (
    <section id={id} className={styles.services}>
      <h2>Nuestros servicios<hr/></h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Rehabilitación Pulmonar</h3>
          <p>Programa integral para mejorar la capacidad pulmonar y calidad de vida en pacientes con enfermedades respiratorias crónicas.</p>
        </div>
        <div className={styles.card}>
          <h3>Terapia de Manejo del Estrés y Ansiedad</h3>
          <p>Técnicas de respiración y relajación para controlar el estrés y la ansiedad que afectan la función respiratoria.</p>
        </div>
        <div className={styles.card}>
          <h3>Rehabilitación Postoperatoria </h3>
          <p>Recuperación especializada para pacientes post-cirugía torácica o abdominal, enfocada en mejorar la función respiratoria y la movilidad.</p>
        </div>
        {/* Añadir más servicios aquí */}
      </div>
    </section>
  );
}
