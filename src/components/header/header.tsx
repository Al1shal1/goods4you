import { LogoImg } from "../../icons/LogoImg.js"
import { Cart } from "../../icons/Cart.js"
import styles from './header.module.scss'

export const Headers = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <a href="/" className={styles.header__logo}>
                        <LogoImg />
                    </a>
                    <ul className={styles.header__navigation}>
                        <li className={styles.header__navigation_item}>
                            <a href="#catalog" >Catalog</a></li>
                        <li className={styles.header__navigation_item}>
                            <a href="#faq">FAQ</a>
                            </li>
                        <li className={styles.header__navigation_item}>
                            <a href="" className={styles.header__navigation_busket}>Cart</a>
                            <Cart />
                        </li>
                        <li className={styles.header__navigation_item}>
                            <a href="">Johnson Smith</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}