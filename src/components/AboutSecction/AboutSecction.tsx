// src/components/AboutSection.js
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
  id?: string;
}
export default function AboutSection({ id }: Props) {
  return (
    <section id={id} className={styles.about}>
      <div className={styles.content}>
        <Image src="/Yenniferth-img2.png" alt="Sobre mi" width={500} height={500}/>
        <div className={styles.text}>
          <h2>Sobre mi <hr/></h2>
          <p>Hola, soy Yenniferth Agredo, especialista en terapia respiratoria. Mi pasión es ayudarte a respirar mejor y a vivir una vida más saludable. Con una formación sólida en fisioterapia y técnicas avanzadas en terapia respiratoria, ofrezco tratamientos personalizados para mejorar tu capacidad pulmonar y reducir síntomas respiratorios.

Mi enfoque está diseñado para adaptarse a tus necesidades individuales, ya sea para rehabilitación postoperatoria, manejo de afecciones respiratorias crónicas o alivio del estrés. Mi objetivo es proporcionarte herramientas y técnicas que te permitan respirar con facilidad y disfrutar de una mayor calidad de vida.

Déjame ayudarte a alcanzar tu mejor versión respiratoria. ¡Contáctame para agendar tu consulta y comienza a respirar con confianza!</p>
        </div>
      </div>
    </section>
  );
}
