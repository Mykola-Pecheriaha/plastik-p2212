import React from 'react'
import Gallery from '../Gallery/Gallery'
import { abdominoplastyImages } from '../../data/galleryData' // Абсолютний шлях до даних
import styles from './ExamplesWorkAbdomin.module.css'

const ExamplesWorkAbdomin: React.FC = () => {
  return (
    <div className={styles.examplesWorkAbdomin}>
      <div className={styles.containerExamples}>
        {/* Текстовий блок зліва */}
        <div className={styles.examplesText}>
          <h1>ПЛАСТИКА ЖИВОТА</h1>
          <div className={styles.subTitle}>
            <ul>
              <li>Поверну животу плоску форму</li>
              <li>Приберу розтяжки</li>
              <li>Зроблю форму тіла привабливою</li>
              <li>Мінімальний термін реабілітації до 40 днів</li>
            </ul>
          </div>
        </div>

        {/* Галерея справа */}
        <div className={styles.bigImage}>
          <h2 className={styles.examplesTitle}>Пластика тіла</h2>
          <Gallery images={abdominoplastyImages} />
        </div>
      </div>
    </div>
  )
}

export default ExamplesWorkAbdomin
