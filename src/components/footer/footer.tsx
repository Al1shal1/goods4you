import { LogoImg } from "../../icons/LogoImg.js"
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__content}>
                <a href="/" className={styles.footer__logo}>
                    <LogoImg />
                </a>
                <ul className={styles.footer__navigation}>
                    <li className={styles.footer__navigation_item}>
                        <a href="">Catalog</a></li>
                    <li className={styles.footer__navigation_item}><a href="">FAQ</a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}