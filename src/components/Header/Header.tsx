import React from 'react'
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import styles from './Header.module.css' // стилі для цього компонента

// Компонент Header з типами
const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <HeaderTop />
      <HeaderMenu />
      <Breadcrumb />
    </header>
  )
}

export default Header
