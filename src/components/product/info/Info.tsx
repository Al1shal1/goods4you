import { RedButton } from "@ui-kit/red-button";
import styles from "./Info.module.scss";
import { CountBtn } from "@ui-kit/count-btn";
import { useToggleState } from "@hooks/useToggleState";
import ReactStars from "react-rating-stars-component";
import { IProduct } from "@models/IProduct";
import { usePriceCalculation } from "@hooks/usePriceCalculation";
import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { useEffect, useMemo, useState } from "react";
import { selectCartItemById, addItemToCart, updateItemQuantity, removeItemFromCart } from "@store/userSlice";

interface InfoProps {
  content: IProduct;
}

export const Info: React.FC<InfoProps> = ({ content }) => {
  const dispatch = useAppDispatch();
  const { setFalse: handleResetToCart } = useToggleState();
  const { formattedPrice } = usePriceCalculation(content.price, content.discountPercentage);
  const tagsText = useMemo(() => Array.isArray(content?.tags) ? content.tags.join(", ") : content?.tags, [content?.tags]);
  const rating = useMemo(() => Math.round(content.rating), [content.rating]);

  const cartItem = useAppSelector((state) => selectCartItemById(state, content.id));
  const quantityInRedux = cartItem ? cartItem.quantity : 0;

  const [quantity, setQuantity] = useState(quantityInRedux);

  useEffect(() => {
    if (quantity !== quantityInRedux) {
      setQuantity(quantityInRedux);
    }
  }, [quantityInRedux]);

  const handleAddToCartClick = () => {
    if (quantity === 0) {
      dispatch(addItemToCart(content));
      setQuantity(1);
    }
  };

  const handleUpdateQuantityClick = (newQuantity: number) => {
    if (newQuantity > content.stock) return;

    if (newQuantity > 0) {
      dispatch(updateItemQuantity({ id: content.id, quantity: newQuantity }));
      setQuantity(newQuantity);
    } else {
      dispatch(removeItemFromCart(content.id));
      handleResetToCart();
      setQuantity(0);
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.info__title}>{content.title}</div>
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
          <p className={styles.info_category_text}>{tagsText}</p>
        </div>
      </div>
      <div className={styles.info__stock}>In Stock - Only {content.stock} left!</div>
      <div className={styles.info__description}>{content.description}</div>
      <ul className={styles.info__other_list}>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>{content.warrantyInformation}</div>
        </li>
        <li className={styles.info__other_item}>
          <div className={styles.info__other_text}>{content.shippingInformation}</div>
        </li>
      </ul>
      <div className={styles.info__buy}>
        <div className={styles.info__buy_info}>
          <div className={styles.info__buy_prices}>
            <div className={styles.info__buy_price}>${formattedPrice}</div>
            <div className={styles.info__buy_discount}>${content.price}</div>
          </div>
          <div className={styles.info__buy_texts}>
            <div className={styles.info__buy_text}>Your discount:</div>
            <div className={styles.info__buy_percent}>{content.discountPercentage}%</div>
          </div>
        </div>
        {quantity > 0 ? (
          <CountBtn
            quantity={quantity}
            maxQuantity={content.stock}
            onIncrease={() => handleUpdateQuantityClick(quantity + 1)}
            onDecrease={() => handleUpdateQuantityClick(quantity - 1)}
          />
        ) : (
          <RedButton
            text="Add to cart"
            size="big"
            onClick={handleAddToCartClick}
            disabled={content.stock === 0}
          />
        )}
      </div>
    </div>
  );
};
