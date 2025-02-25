import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';
import { LogoImg } from '@icons/LogoImg.js';
export const HeaderLogin = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <Link to="/" className={styles.header__logo} aria-label="logo">
                        <div className={styles.header__logo_img}>
                            <LogoImg />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
};