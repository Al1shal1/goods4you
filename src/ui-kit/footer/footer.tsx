import { Link } from "react-router-dom";
import { LogoImg } from "@icons/LogoImg.js";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <Link to="/" className={styles.footer__logo}>
            <LogoImg />
          </Link>
          <ul className={styles.footer__navigation}>
            <li className={styles.footer__navigation_item}>
              <Link to="/#catalog">Catalog</Link>
            </li>
            <li className={styles.footer__navigation_item}>
              <Link to="/#faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
