import styles from "./CountBtn.module.scss";
import minus from "@icons/minus.svg";
import plus from "@icons/plus.svg";

interface CountBtnProps {
  maxQuantity: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const CountBtn: React.FC<CountBtnProps> = ({
  maxQuantity,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className={styles.controls}>
      <div className={styles.controls__left} onClick={onDecrease}>
        <button className={styles.controls_btn} disabled={quantity <= 0}>
          <img src={minus} alt="minus" />
        </button>
      </div>

      <div className={styles.controls__items}>
        {quantity} {quantity === 1 ? "item" : "items"}
      </div>

      <div className={styles.controls__right} onClick={onIncrease}>
        <button
          className={styles.controls_btn}
          disabled={quantity >= maxQuantity}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
