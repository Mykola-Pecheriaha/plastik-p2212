import Cards from '../../components/Cards/Cards'
import styles from './CardsPage.module.css'
// import Image from 'next/image'

const CardsPage: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <Cards
        title="Досвідчені хірурги"
        description="Працює команда професіоналів з досвідом більше ніж 16 років"
        imageUrl="/images/iconci/icon7.jpg"
      />
      <Cards
        title="Сучасні методики"
        description="Пропонуємо методики, що полегшують процес реабілітації. Жоден зі знайомих не здогадається, що у вас була операція"
        imageUrl="/images/iconci/cartca3.jpg"
      />
      <Cards
        title="Бездоганна репутація"
        description="Більшість пацієнток приходить по рекомендації від подружок та знайомих"
        imageUrl="/images/iconci/icon8.png"
      />
      <Cards
        title="Онлайн консультація"
        description="Пропонуємо безкоштовну відеоконсультацію пластичного хірурга та постійний супровід медичного координатора"
        imageUrl="/images/iconci/cartca5.jpg"
      />
    </div>
  )
}

export default CardsPage
