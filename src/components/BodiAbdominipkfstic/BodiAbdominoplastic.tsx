import React from 'react'
import Image from 'next/image'

import styles from './BodiAbdominoplastic.module.css'
import CardsPage from '../CardsPage/CardsPage'
import ExamplesWorkAbdomin from '../ExamplesWorkAbdomin/ExamplesWorkAbdomin'
import BodiAbdominSteps from '../BodiAbdominSteps/BodiAbdominSteps'

const BodiAbdominoplastic: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Верхній блок */}
      <div className={styles.containerBodiAb}>
        <div className={styles.bodiAbText}>
          <h2 className={styles.mainTitle}>Абдомінопластика</h2>
          <h1>ПЛАСТИКА ЖИВОТА</h1>
          <div className={styles.subTitle}>
            <h4>→ Усунути обвислу шкіру живота </h4>
            <h4>→ Відтворити пружній живіт</h4>
            <h4>→ Відтворити струнку фігуру</h4>
          </div>
        </div>
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

      {/* Карточки */}
      <div className={styles.section}>
        <CardsPage />
      </div>

      {/* Описовий текст */}
      <div className={styles.bodiAbSectorText}>
        <p>
          Пластика живота (абдомінопластика) – затребувана пластична операція,
          яка дозволяє отримати ідеально рівний животик і гарну талію після
          пологів та різкого схуднення. Це стає можливим за рахунок позбавлення
          від надлишків шкіри та підшкірного жиру (так званий «фартух»).
        </p>
        <p>
          <br />
          Абдомінопластика повертає фігурі стрункість і пропорційність та
          гармонійні контури.
        </p>
        <p>
          <br />
          Під час абдомінопластика усуваються такі дефекти живота, як грижі
          (пупкові, надпупкові та пахові), а також розходження (діастаз) прямих
          мязів живота, яке часто зявляється під час вагітності. Також
          прибираються всі старі рубці (якщо вони є після попередніх операцій та
          травм).
        </p>
      </div>

      {/* Кроки та галерея */}
      <div className={styles.section}>
        <ExamplesWorkAbdomin />
      </div>
      <div className={styles.section}>
        <BodiAbdominSteps />
      </div>
    </div>
  )
}

export default BodiAbdominoplastic
