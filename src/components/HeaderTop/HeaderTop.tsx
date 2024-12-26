'use client' // Додаємо для використання станів у Next.js (потрібно в app-папці)

import { useState } from 'react'
import styles from './HeaderTop.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
// import Image from 'next/image';

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.headerTopContainer}>
      {/* Бургер-меню */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Контактна стрічка */}
      <div className={`${styles.headerTop} ${isMenuOpen ? styles.show : ''}`}>
        <p>
          Телефон: <a href="tel:+38(050) 7575411">+38(050) 75 75 411</a>
        </p>
        <p>
          Email: <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
        </p>
        <p>
          <a
            href="https://goo.gl/maps/youraddress"
            target="_blank"
            rel="noopener noreferrer"
          >
            корпус 1 вул.Героїв Майдану 226, (вхід з вул.Рівенська), Chernivtsi,
            Ukraine
          </a>
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100003098763675"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        {/* <a
          href="https://telegram.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a> */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
      </div>
    </div>
  )
}
