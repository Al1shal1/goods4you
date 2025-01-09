import { CartsItem } from "@components/carts-item";
import styles from "./Carts.module.scss";

export const Carts = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__form}>
        <CartsItem />
        <CartsItem />
        <CartsItem />
        <CartsItem />
      </div>
    </div>
  );
};
