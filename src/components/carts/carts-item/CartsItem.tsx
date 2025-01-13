import { Link } from 'react-router-dom'
import styles from './CartsItem.module.scss'
import boots_white from "@icons/boots_white.png";
import basket from "@icons/basket.svg";
import { CountBtn } from '@ui-kit/count-btn';
import { RedButton } from '@ui-kit/red-button';
import { useToggleState } from "@hooks/useToggleState";

export const CartsItem = () => {
    const {
        state: isDelete,
        setTrue: handleDelete,
        setFalse: handleAddToCart,
    } = useToggleState();
    return (
        <div className={styles.cart__form_item}>
            <Link to="/product/1" className={styles.cart__form_left}>
                <img
                    src={boots_white}
                    alt="boots"
                    className={styles.cart__form_img}
                />
                <div className={styles.cart__form_about}>
                    <div className={styles.cart__form_about_title}>
                        Essence Mascara Lash Princess
                    </div>
                    <div className={styles.cart__form_about_price}>$110</div>
                </div>
            </Link>
            {!isDelete ? (
                <>
                    <CountBtn onResetToCart={handleDelete} />
                    <button
                        className={styles.cart__form_delete}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </>
            ) : (
                <button onClick={handleAddToCart}>
                    <RedButton imageSrc={basket} size="small" />
                </button>
            )}
        </div>
    )
}