import { RedButton } from "@ui-kit/red-button";
import styles from "./Info.module.scss";
import { CountBtn } from "@ui-kit/count-btn";
import { useToggleState } from "@hooks/useToggleState";
import ReactStars from "react-rating-stars-component";
import { IProduct } from "../../../models/Product";
import { usePriceCalculation } from "@hooks/usePriceCalculation";

interface InfoProps {
  content: IProduct;
}

export const Info: React.FC<InfoProps> = ({ content }) => {
  const {
    state: addToCart,
    setTrue: handleAddToCart,
    setFalse: handleResetToCart,
  } = useToggleState();

  const { formattedPrice } = usePriceCalculation(content.price, content.discountPercentage);

  const tagsText = Array.isArray(content?.tags) ? content?.tags.join(', ') : content?.tags;

  const rating = Math.round(content.rating)

  return (
    <div className={styles.info}>
      <div className={styles.info__title}>{content?.title}</div>
      <div className={styles.info__rating}>
        <ReactStars
          classNames={styles.info__rating_item}
          count={5}
          value={rating}
          size={24}
          activeColor={"#F14F4F"}
          color={"#D5D5D5"}
          edit={false}
        />
        <div className={styles.info_category}>
          <p className={styles.info_category_text}>
            {tagsText}
          </p>
        </div>
      </div>
      <div className={styles.info__stock}>In Stock - Only {content?.stock} left!</div>
      <div className={styles.info__description}>
        {content?.description}
      </div>
      <ul className={styles.info__other_list}>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>{content?.warrantyInformation}</div>
        </li>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>{content?.shippingInformation}</div>
        </li>
      </ul>
      <div className={styles.info__buy}>
        <div className={styles.info__buy_info}>
          <div className={styles.info__buy_prices}>
            <div className={styles.info__buy_price}>${formattedPrice}</div>
            <div className={styles.info__buy_discount}>${content?.price}</div>
          </div>
          <div className={styles.info__buy_texts}>
            <div className={styles.info__buy_text}>Your discount:</div>
            <div className={styles.info__buy_percent}>{content?.discountPercentage}%</div>
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
