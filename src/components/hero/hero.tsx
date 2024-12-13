import { RedButton } from "../RedButton/RedButton"
import styles from './hero.module.scss'

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__content_text}>Any products from famous brands with worldwide delivery</h1>
                    <h3 className={styles.hero__content_subtitle}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</h3>
                </div>
                <RedButton text="Go to shopping" targetId="catalog"/>
            </div>
        </div>
    )
}