// src/components/GallerySection.js
import React from 'react';
import styles from './styles.module.css';

interface Props {
  id?: string;
}

export default function GallerySection({ id }: Props) {
  return (
    <section id={id} className={styles.gallery}>
      <h2>Conheça nosso espaço</h2>
      <div className={styles.images}>
        <img src="/images/gallery1.jpg" alt="Espaço 1" />
        {/* Más imágenes de galería */}
      </div>
    </section>
  );
}
