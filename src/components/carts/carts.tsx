import styles from './carts.module.scss'
import boots_white from '../../icons/boots_white.png'
import { CountBtn } from '../CountBtn/CountBtn'
import { Link } from 'react-router-dom'


export const Carts = () => {
    return (
        <div className={styles.cart}>
            <ul className={styles.cart__form}>
                <li className={styles.cart__form_item}>
                    <Link to='/product/1' className={styles.cart__form_left}>
                        <img src={boots_white} alt="boots" className={styles.cart__form_img} />
                        <div className={styles.cart__form_about}>
                            <div className={styles.cart__form_about_title}>Essence Mascara Lash Princess</div>
                            <div className={styles.cart__form_about_price}>$110</div>
                        </div>
                    </Link>
                    <CountBtn />
                    <div className={styles.cart__form_delete}>Delete</div>
                </li>
                <li className={styles.cart__form_item}>
                    <Link to='/product/2' className={styles.cart__form_left}>
                        <img src={boots_white} alt="boots" className={styles.cart__form_img} />
                        <div className={styles.cart__form_about}>
                            <div className={styles.cart__form_about_title}>Essence Mascara Lash Princess</div>
                            <div className={styles.cart__form_about_price}>$110</div>
                        </div>
                    </Link>
                    <CountBtn />
                    <div className={styles.cart__form_delete}>Delete</div>
                </li>
                <li className={styles.cart__form_item}>
                    <Link to='/product/3' className={styles.cart__form_left}>
                        <img src={boots_white} alt="boots" className={styles.cart__form_img} />
                        <div className={styles.cart__form_about}>
                            <div className={styles.cart__form_about_title}>Essence Mascara Lash Princess</div>
                            <div className={styles.cart__form_about_price}>$110</div>
                        </div>
                    </Link>
                    <CountBtn />
                    <div className={styles.cart__form_delete}>Delete</div>
                </li>
                <li className={styles.cart__form_item}>
                    <Link to='/product/4' className={styles.cart__form_left}>
                        <img src={boots_white} alt="boots" className={styles.cart__form_img} />
                        <div className={styles.cart__form_about}>
                            <div className={styles.cart__form_about_title}>Essence Mascara Lash Princess</div>
                            <div className={styles.cart__form_about_price}>$110</div>
                        </div>
                    </Link>
                    <CountBtn />
                    <div className={styles.cart__form_delete}>Delete</div>
                </li>
            </ul>
        </div>
    )
}