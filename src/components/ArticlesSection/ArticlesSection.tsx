// src/components/ArticlesSection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}
export default function ArticlesSection({ id }: Props) {
  return (
    <section id={id} className={styles.articles}>
      <h2>Articulos<hr/></h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Beneficios de la Rehabilitación Pulmonar en Pacientes con EPOC</h3>
          <p>Explora cómo la rehabilitación pulmonar ayuda a mejorar la capacidad respiratoria, reducir los síntomas y aumentar la calidad de vida en pacientes con enfermedad pulmonar obstructiva crónica (EPOC).</p>
        </div>
        <div className={styles.card}>
          <h3>Técnicas de Respiración para Aliviar el Estrés y la Ansiedad</h3>
          <p>Examina cómo las técnicas de respiración pueden ser utilizadas para reducir el estrés y la ansiedad, promoviendo una mejor salud mental y respiratoria a través de prácticas de relajación y respiración profunda.</p>
        </div>
        {/* Añadir más artículos aquí */}
      </div>
    </section>
  );
}
