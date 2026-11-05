import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.scss";
import basket from "@icons/basket.svg";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { useScrollToHash } from "@hooks/useScrollToHash";
import { useToggleState } from "@hooks/useToggleState";
import { IProduct } from "@models/IProduct";
import { usePriceCalculation } from "@hooks/usePriceCalculation";
import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { addItemToCart, updateItemQuantity, removeItemFromCart, selectCartItemById } from "@store/userSlice";

interface CatalogItemProps {
  id: number;
  to: string;
  content: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ to, content }) => {
  useScrollToHash();
  const { finalPrice } = usePriceCalculation(content.price, content.discountPercentage);
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector((state) => selectCartItemById(state, content.id));
  const quantityInRedux = cartItem ? cartItem.quantity : 0;

  const [quantity, setQuantity] = useState(quantityInRedux);

  useEffect(() => {
    if (quantity !== quantityInRedux) {
      setQuantity(quantityInRedux);
    }
  }, [quantityInRedux]);
  

  const { state: isBtnClicked, setTrue: markAsAdded, setFalse: markAsRemoved } = useToggleState(quantityInRedux > 0);

  const handleAddToCartClick = () => {
    if (quantity === 0) {
      dispatch(addItemToCart(content));
      markAsAdded();
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
      markAsRemoved();
      setQuantity(0);
    }
  };

  const renderImage = () => {
    if (!content.thumbnail) {
      return <div className={styles.catalog__image}>No Image</div>;
    }
    return <img src={content.thumbnail} alt={content.title} className={styles.catalog__image} />;
  };

  const contentLeftClass = isBtnClicked
    ? `${styles.catalog__content_left} ${styles.catalog__content_left_active}`
    : styles.catalog__content_left;

  return (
    <div className={styles.catalog__item}>
      <Link to={to} className={styles.catalog__link}>
        {renderImage()}
        <div className={styles.catalog__image_text}>Show details</div>
        <div className={styles.catalog__image_overlay} />
      </Link>
      <div className={styles.catalog__content}>
        <div className={contentLeftClass}>
          <h5 className={styles.catalog__name}>{content.title}</h5>
          <div className={styles.catalog__price}>${finalPrice}</div>
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
            imageSrc={basket}
            size="small"
            onClick={handleAddToCartClick}
            className={styles.catalog__basket_btn}
            disabled={content.stock === 0}
          />
        )}
      </div>
    </div>
  );
};
