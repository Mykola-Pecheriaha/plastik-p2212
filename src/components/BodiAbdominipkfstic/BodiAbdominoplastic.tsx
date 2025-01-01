import React from 'react'
import Image from 'next/image'

import styles from './BodiAbdominoplastic.module.css'
import CardsPage from '../CardsPage/CardsPage'
import ExamplesWorkAbdomin from '../ExamplesWorkAbdomin/ExamplesWorkAbdomin'

const BodiAbdominoplastic: React.FC = () => {
  return (
    <div className={styles.bodiAbdominoplastic}>
      <div className={styles.containerBodiAb}>
        {/* Текстовий блок зліва */}
        <div className={styles.bodiAbText}>
          <h2 className={styles.mainTitle}>Абдомінопластика</h2>
          <h1>ПЛАСТИКА ЖИВОТА</h1>
          <div className={styles.subTitle}>
            <h4>→ Усунути обвислу шкіру живота </h4>
            <h4>→ Відтворити пружній живіт</h4>
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
      <div className={styles.bodiAbSectorText}>
        <p>
          Пластика живота (абдомінопластика) – затребувана пластична операція,
          яка дозволяє отримати ідеально рівний животик і гарну талію після
          пологів та різкого схуднення. Це стає можливим за рахунок позбавлення
          від надлишків шкіри та підшкірного жиру (так званий «фартух»).
          Абдомінопластика повертає фігурі стрункість і пропорційність,
          гармонійні контури.
        </p>
      </div>

      <ExamplesWorkAbdomin />
    </div>
  )
}

export default BodiAbdominoplastic
