import { RedButton } from "@ui-kit/red-button";
import styles from "./Info.module.scss";
import { CountBtn } from "@ui-kit/count-btn";
import { useToggleState } from "@hooks/useToggleState";
import ReactStars from "react-rating-stars-component"

export const Info = () => {
  const {
    state: addToCart,
    setTrue: handleAddToCart,
    setFalse: handleResetToCart,
  } = useToggleState();

  return (
    <div className={styles.info}>
      <div className={styles.info__title}>Essence Mascara Lash Princess</div>
      <div className={styles.info__rating}>
        <ReactStars
        classNames={styles.info__rating_item}
          count={5}
          value={4}
          size={24}
          activeColor={"#F14F4F"}
          color={"#D5D5D5"}
          edit={true}
        />
        <div className={styles.info_category}>
          <p className={styles.info_category_text}>
            electronics, selfie accessories
          </p>
        </div>
      </div>
      <div className={styles.info__stock}>In Stock - Only 5 left!</div>
      <div className={styles.info__description}>
        The Essence Mascara Lash Princess is a popular mascara known for its
        volumizing and lengthening effects. Achieve dramatic lashes with this
        long-lasting and cruelty-free formula.
      </div>
      <ul className={styles.info__other_list}>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>1 month warranty</div>
        </li>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>Ships in 1 month</div>
        </li>
      </ul>
      <div className={styles.info__buy}>
        <div className={styles.info__buy_info}>
          <div className={styles.info__buy_prices}>
            <div className={styles.info__buy_price}>$7.17</div>
            <div className={styles.info__buy_discount}>$9.99</div>
          </div>
          <div className={styles.info__buy_texts}>
            <div className={styles.info__buy_text}>Your discount:</div>
            <div className={styles.info__buy_percent}>14.5%</div>
          </div>
        </div>
        {!addToCart ? (
          <button onClick={handleAddToCart}>
            <RedButton text="Add to cart" size="big" />
          </button>
        ) : (
          <CountBtn onResetToCart={handleResetToCart} />
        )}
      </div>
    </div>
  );
};
