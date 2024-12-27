'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './HeaderMenu.module.css'

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Стан для бургер-меню

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubMenuToggle = (menuName: string | null) => {
    setActiveSubMenu(menuName)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo/logo4.png"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
        <strong>PlastikP</strong>
      </div>
      <div className={styles.headerRight}>
        <nav className={styles.nav}>
          <Link href="/">Головна</Link>

          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('services')}
            onMouseLeave={() => handleSubMenuToggle(null as string | null)}
          >
            <Link href="/services">Послуги ▼</Link>
            {activeSubMenu === 'services' && (
              <div className={styles.subMenu}>
                <div className={styles.subMenuColumn}>
                  <p>Пластика обличчя</p>
                  <Link href="/services/liftFace">Підтяжка обличчя та шиї</Link>
                  <Link href="/services/blepharoplasty">Блефаропластика</Link>
                  <Link href="/services/chinoplasty">Пластика підборіддя</Link>
                  <Link href="/services/correctionEarFlaps">
                    Корекція клаповухості
                  </Link>
                  <Link href="/services/otoplasty">Отопластика</Link>
                </div>
                <div className={styles.subMenuColumn}>
                  <p>Пластика грудей</p>
                  <Link href="/services/breastAugmentation">
                    Збільшення грудей
                  </Link>
                  <Link href="/services/breastReduction">Зменшення грудей</Link>
                  <Link href="/services/breastLift">Підтяжка грудей</Link>
                  <Link href="/services/areolaCorrection">
                    Корекція соска та ареоли
                  </Link>
                  <Link href="/services/correctionBreastAsymmetry">
                    Корекція асиметрії грудей
                  </Link>
                </div>
                <div className={styles.subMenuColumn}>
                  <p>Пластика тіла</p>
                  <Link href="/services/abdominoplasty">Абдомінопластика</Link>
                  <Link href="/services/liposuction">Ліпосакція</Link>
                  <Link href="/services/legPlasticSurgery">Пластика ніг</Link>
                  <Link href="/services/cervicalHumpRemoval">
                    Видалення шийного горба
                  </Link>
                  <Link href="/services/buttockAugmentation">
                    Збільшення сідниць
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('aboutDoctor')}
            onMouseLeave={() => handleSubMenuToggle(null as string | null)}
          >
            <Link href="/aboutDoctor">Про лікаря ▼</Link>
            {activeSubMenu === 'aboutDoctor' && (
              <div className={styles.subMenu}>
                <Link href="/aboutDoctor/team">Команда</Link>
                <Link href="/aboutDoctor/reviews">Відгуки</Link>
                <Link href="/aboutDoctor/askDoctor">Запитати лікаря</Link>
                <Link href="/aboutDoctor/usefulInformation">
                  Корисна інформація
                </Link>
                <Link href="/aboutDoctor/brieflyAbout">Коротко про нас</Link>
                <Link href="/aboutDoctor/Contacts">Контакти</Link>
              </div>
            )}
          </div>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleSubMenuToggle('operating')}
            onMouseLeave={() => handleSubMenuToggle(null as string | null)}
          >
            <Link href="/operating">Відділення ▼</Link>
            {activeSubMenu === 'operating' && (
              <div className={styles.subMenu}>
                <Link href="/operating/operatingRoom">
                  Переглянути операційну
                </Link>
                <Link href="/operating/preparationOperation">
                  Підготовка до операції
                </Link>
                <Link href="/operating/postoperativeWards">
                  {' '}
                  Післяопераційні палати
                </Link>
                <Link href="/operating/postoperativeRehabilitation">
                  Реабілітація після операції
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.burger} onClick={toggleMenu}>
          ☰ Menu
        </div>

        {isMenuOpen && (
          <div className={styles.burgerMenu}>
            <Link href="/" onClick={toggleMenu}>
              Головна
            </Link>

            <Link href="/services" onClick={toggleMenu}>
              Послуги
            </Link>
            <Link href="/aboutDoctor" onClick={toggleMenu}>
              Про лікаря
            </Link>
            <Link href="/operating/" onClick={toggleMenu}>
              Відділення
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default HeaderMenu
