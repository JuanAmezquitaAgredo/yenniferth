// src/components/FAQSection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}
export default function FAQSection({ id }: Props) {
  return (
    <section id={id} className={styles.faq}>
      <h2>Dúvidas Frequentes</h2>
      <ul>
        <li>Preciso de um raio-x antes?</li>
        <li>Quanto tempo dura o tratamento?</li>
        {/* Más preguntas */}
      </ul>
    </section>
  );
}
