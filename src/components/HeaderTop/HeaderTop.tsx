'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from './HeaderTop.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const HeaderTop: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isBurgerVisible, setIsBurgerVisible] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev) // Toggle між відкритим і закритим станом
  }

  const handleResize = (): void => {
    if (headerRef.current) {
      const headerWidth = headerRef.current.offsetWidth
      const contentWidth = headerRef.current.scrollWidth
      setIsBurgerVisible(contentWidth > headerWidth) // Показуємо бургер, коли вміст не вміщується
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.headerTopContainer}>
      {/* Контактна стрічка */}
      <div
        className={`${styles.headerTop} ${
          isBurgerVisible ? styles.hidden : ''
        }`}
        ref={headerRef}
      >
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
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Бургер-кнопка */}
      {isBurgerVisible && (
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      )}

      {/* Бургер-меню */}
      {isBurgerVisible && isMenuOpen && (
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.show : ''}`}
        >
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
              корпус 1 вул.Героїв Майдану 226, (вхід з вул.Рівенська),
              Chernivtsi, Ukraine
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
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      )}
    </div>
  )
}

export default HeaderTop
