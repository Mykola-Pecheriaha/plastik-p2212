// components/Breadcrumb/Breadcrumb.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.css'

const pageTitles: Record<string, string> = {
  services: 'Послуги',
  'face-lift': 'Підтяжка обличчя та шиї',
  'breast-augmentation': 'Збільшення грудей',
  'blefaro-plastic': 'Блефаропластика',
  'chino-plasty': 'Пластика підборіддя',
  'flap-correction': 'Корекція клаповухості',
  'lapp-otto': 'Пластика дольки вуха',
  'breast-reduction': 'Зменшення грудей',
  'breast-lift': 'Підтяжка грудей',
  'areola-correction': 'Корекція соска та ареоли',
  'breast-asymmetry-correction': 'Корекція асиметрії грудей',
  abdominoplasty: 'Абдомінопластика',
  liposuction: 'Ліпосакція',
  'leg-plastic': 'Пластика ніг',
  'cervical-hump': 'Видалення шийного горба',
  'buttock-augmentation': 'Збільшення сідниць',
  gallery: 'Галерея',
  operating: 'Відділення',
  operatingRoom: 'Операційна',
  reviews: 'Підготовка до операції',
  preparation: 'Операційні моменти',
  postoperative: 'Післяопераційні моменти',
  rehabilitation: 'Реабілітація',
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname()

  if (pathname === '/') return null // Не відображати на головній сторінці

  const segments = pathname.split('/').filter(Boolean) // Розділяємо шлях на частини

  return (
    <div className={styles.breadcrumb}>
      <Link href="/">Головна</Link>
      {segments.map((segment, index) => {
        const url = '/' + segments.slice(0, index + 1).join('/')
        const isLast = index === segments.length - 1
        const title = pageTitles[segment] || decodeURIComponent(segment)

        return (
          <span key={url}>
            {' / '}
            {isLast ? (
              <span className={styles.active}>{title}</span>
            ) : (
              <Link href={url}>{title}</Link>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb
