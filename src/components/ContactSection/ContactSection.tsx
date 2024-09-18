
// src/components/ContactSection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}
export default function ContactSection({ id }: Props) {
  return (
    <section id={id} className={styles.contact}>
      <h2>Contactanos</h2>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Nombre" />
        <input className={styles.input} type="email" placeholder="Email" />
        <textarea className={styles.textarea} placeholder="Mensaje"></textarea>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
    </section>
  );
}
