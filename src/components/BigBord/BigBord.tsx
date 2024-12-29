import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BigBord.module.css'

const BigBord: React.FC = () => {
  return (
    <div className={styles.bigBord}>
      <div className={styles.containerBig}>
        {/* Основний заголовок */}
        <div className={styles.bigText}>
          <h1 className={styles.mainTitle}>Печеряга Микола Миколайович</h1>
          <h4 className={styles.subTitle}>
            Лікар пластичної та загальної хірургії
          </h4>

          {/* Кнопка "Зв'язатися з нами" */}
          {/* Використовуємо Link для кнопки */}
          <Link href="/hospital/contacts" passHref>
            <button className={styles.contactButton}>Зв`язатися з нами</button>
          </Link>
        </div>
        <div className={styles.bigImage}>
          <Image
            src="/images/bigBort/IMG_79941-removebg-preview.png" // Шлях до зображення з папки public
            alt="Doctor"
            width={450}
            height={430}
          />
        </div>
      </div>
    </div>
  )
}

export default BigBord
