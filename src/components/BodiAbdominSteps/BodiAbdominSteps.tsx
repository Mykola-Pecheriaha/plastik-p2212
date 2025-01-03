'use client'

import styles from './BodiAbdominSteps.module.css'
import Image from 'next/image'
import React, { useState } from 'react'

type Section =
  | 'indication'
  | 'contraindications'
  | 'typeAbdomin'
  | 'stagesAbdomen'
  | 'rehabilAbdomin'
  | 'resultsAbdomin'

export default function BodiAbdominSteps() {
  const [isIndicationsOpen, setIsIndicationsOpen] = useState<boolean>(false)
  const [isContraindicationsOpen, setIsContraindicationsOpen] =
    useState<boolean>(false)
  const [isTypeAbdominOpen, setIsTypeAbdominOpen] = useState<boolean>(false)
  const [isStagesAbdomenOpen, setIsStagesAbdomenOpen] = useState<boolean>(false)
  const [isRehabilAbdominOpen, setIsRehabilAbdominOpen] =
    useState<boolean>(false)
  const [isResultsAbdominOpen, setResultsAbdominOpen] = useState<boolean>(false)

  const toggleSection = (section: Section): void => {
    switch (section) {
      case 'indication':
        setIsIndicationsOpen(!isIndicationsOpen)
        break
      case 'contraindications':
        setIsContraindicationsOpen(!isContraindicationsOpen)
        break
      case 'typeAbdomin':
        setIsTypeAbdominOpen(!isTypeAbdominOpen)
        break
      case 'stagesAbdomen':
        setIsStagesAbdomenOpen(!isStagesAbdomenOpen)
        break
      case 'rehabilAbdomin':
        setIsRehabilAbdominOpen(!isRehabilAbdominOpen)
        break
      case 'resultsAbdomin':
        setResultsAbdominOpen(!isResultsAbdominOpen)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.bodiAbdominStepsContainer}>
      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('indication')}>
          Покази до абдомінопластики{' '}
          <span>{isIndicationsOpen ? '▲' : '▼'}</span>
        </h3>
        {isIndicationsOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>

      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('contraindications')}>
          Протипокази до абдомінопластики{' '}
          <span>{isContraindicationsOpen ? '▲' : '▼'}</span>
        </h3>
        {isContraindicationsOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('typeAbdomin')}>
          Типи абдомінопластики <span>{isTypeAbdominOpen ? '▲' : '▼'}</span>
        </h3>
        {isTypeAbdominOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('stagesAbdomen')}>
          Етапи проведення абдомінопластики{' '}
          <span>{isStagesAbdomenOpen ? '▲' : '▼'}</span>
        </h3>
        {isStagesAbdomenOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('rehabilAbdomin')}>
          реабілітація при абдомінопластики{' '}
          <span>{isRehabilAbdominOpen ? '▲' : '▼'}</span>
        </h3>
        {isRehabilAbdominOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.bodiAbdominStepsSection}>
        <h3 onClick={() => toggleSection('resultsAbdomin')}>
          Результат абдомінопластики{' '}
          <span>{isResultsAbdominOpen ? '▲' : '▼'}</span>
        </h3>
        {isResultsAbdominOpen && (
          <div className={styles.bodiAbdominStepsTitle}>
            <div className={styles.bodiAbdominStepsText}>
              <h2>Кимста печінки</h2>
              <p>
                Кіста на печінці — доброякісна пухлина у вигляді капсули,
                наповненої прозорою або жовтуватою рідиною
              </p>
              <ul>
                <li>корекцыя живота</li>
                <li>Видалення гриж</li>
              </ul>
            </div>
            <div className={styles.bodiAbdominStepsImage}>
              <Image
                src="/images/bodi/bodiContur.jpg" // Шлях до зображення з папки public
                alt="Liver1"
                width={600}
                height={600}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
