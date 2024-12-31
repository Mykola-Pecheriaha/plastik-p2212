import React from 'react'
import Image from 'next/image'

import styles from './BodiAbdominoplastic.module.css'
import CardsPage from '../CardsPage/CardsPage'

const BodiAbdominoplastic: React.FC = () => {
  return (
    <div className={styles.bodiAbdominoplastic}>
      <div className={styles.containerBodiAb}>
        {/* Текстовий блок зліва */}
        <div className={styles.bodiAbText}>
          <h2 className={styles.mainTitle}>Абдомінопластика</h2>
          <h1>ПЛАСТИКА ЖИВОТА</h1>
          <div className={styles.subTitle}>
            <h4>→ Відтворити пружній живіт</h4>
            <h4>→ Усунути обвислу шкіру живота</h4>
            <h4>→ Відтворити струнку фігуру</h4>
          </div>
        </div>

        {/* Зображення справа */}
        <div className={styles.bigImage}>
          <Image
            src="/images/bodi/conturBoda1-removebg-preview.png"
            alt="Bodi"
            width={250}
            height={330}
            priority={true}
          />
        </div>
      </div>
      <CardsPage />
    </div>
  )
}

export default BodiAbdominoplastic
