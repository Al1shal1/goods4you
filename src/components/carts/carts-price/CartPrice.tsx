import { ICart } from "@models/ICart";
import styles from "./CartPrice.module.scss";

interface CartPriceProps {
  cart: ICart;
}

export const CartPrice: React.FC<CartPriceProps> = ({ cart }) => {
  return (
    
      <ul className={styles.cart_price}>
        <li className={styles.cart_price__item}>
          <div className={styles.cart_price__text}>Total count</div>
          <div className={styles.cart_price__items}>{cart.totalProducts} items</div> 
        </li>
        <li className={styles.cart_price__item}>
          <div
            className={`${styles.cart_price__text} ${styles.cart_price__text_bold}`}
          >
            Price without discount
          </div>
          <div className={styles.cart_price__price}>${cart.total.toFixed(1)}</div> 
        </li>
        <li className={styles.cart_price__item}>
          <div className={styles.cart_price__main_text}>Total price</div>
          <div className={styles.cart_price__main_price}>${cart.discountedTotal.toFixed(1)}</div>
        </li>
      </ul>
    
  );
};
