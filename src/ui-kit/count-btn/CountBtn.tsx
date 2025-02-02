import { useQuantity } from "@hooks/useQuantity";
import styles from "./CountBtn.module.scss";
import minus from "@icons/minus.svg";
import plus from "@icons/plus.svg";

interface CountBtnProps {
  onResetToCart: () => void;
}

export const CountBtn: React.FC<CountBtnProps> = ({ onResetToCart }) => {
  const { quantity, increaseQuantity, decreaseQuantity } =
  useQuantity(onResetToCart);

  return (
    <div className={styles.controls}>
      <div className={styles.controls__left} onClick={decreaseQuantity}>
        <button className={styles.controls_btn}>
          <img src={minus} alt="minus" />
        </button>
      </div>
      <div className={styles.controls__items}>{quantity} item</div>
      <div className={styles.controls__right} onClick={increaseQuantity}>
        <button className={styles.controls_btn}>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
