import { LogoImg } from "../../icons/LogoImg.js"
import { Cart } from "../../icons/Cart.js"
import styles from './header.module.scss'
import { Link } from "react-router-dom"

export const Headers = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <Link to="/" className={styles.header__logo}>
                        <div className={styles.header__logo_img}>
                            <LogoImg />
                            </div>
                    </Link>
                    <ul className={styles.header__navigation}>
                        <li className={styles.header__navigation_item}>
                            <a href="#catalog" >Catalog</a></li>
                        <li className={styles.header__navigation_item}>
                            <a href="#faq">FAQ</a>
                            </li>
                        <li className={styles.header__navigation_item}>
                            <Link to="/cart" className={styles.header__navigation_busket}>Cart</Link>
                            <div className={styles.header__busket_img}>
                                <Cart />
                                </div>
                        </li>
                        <li className={styles.header__navigation_item}>
                            <a href="/">Johnson Smith</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}