// src/components/Testimonials.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}

export default function Testimonials({ id }: Props) {
  return (
    <section id={id} className={styles.testimonials}>
      <h2>Que dicen los clientes de nosotros</h2>
      <div className={styles.testimonial}>
        <p>“La rehabilitación pulmonar que recibí ha sido un cambio de vida para mí. Desde que comencé el programa, he notado una gran mejora en mi capacidad para respirar y en mi energía diaria. Los ejercicios y la atención personalizada realmente hicieron una diferencia. Me siento mucho más activo y mi calidad de vida ha mejorado significativamente.”</p>
        <p>— Cliente Satisfeito</p>
      </div>
      <div className={styles.testimonial}>
        <p>“La rehabilitación pulmonar que recibí ha sido un cambio de vida para mí. Desde que comencé el programa, he notado una gran mejora en mi capacidad para respirar y en mi energía diaria. Los ejercicios y la atención personalizada realmente hicieron una diferencia. Me siento mucho más activo y mi calidad de vida ha mejorado significativamente.”</p>
        <p>— Cliente Satisfeito</p>
      </div>
      <div className={styles.testimonial}>
        <p>“La rehabilitación pulmonar que recibí ha sido un cambio de vida para mí. Desde que comencé el programa, he notado una gran mejora en mi capacidad para respirar y en mi energía diaria. Los ejercicios y la atención personalizada realmente hicieron una diferencia. Me siento mucho más activo y mi calidad de vida ha mejorado significativamente.”</p>
        <p>— Cliente Satisfeito</p>
      </div>
      {/* Más testimonios aquí */}
    </section>
  );
}
