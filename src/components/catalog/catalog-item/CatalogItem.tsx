import styles from "./CatalogItem.module.scss";
import basket from "@icons/basket.svg";
import { Link } from "react-router-dom";
import { useScrollToHash } from "@hooks/useScrollToHash";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { useToggleState } from "@hooks/useToggleState";
import { IProduct } from "@models/IProduct";
import { usePriceCalculation } from "@hooks/usePriceCalculation";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { addItemToCart, selectCartItemById, updateItemQuantity, removeItemFromCart } from "@store/userSlice";

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
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const {
    state: isBtnClicked,
    setTrue: markAsAdded,
    setFalse: markAsRemoved,
  } = useToggleState(quantityInCart > 0);

  const handleAddToCart = () => {
    dispatch(addItemToCart(content));
    markAsAdded();
  };

  const handleUpdateQuantity = (quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id: content.id, quantity }));
    } else {
      dispatch(removeItemFromCart(content.id));
      markAsRemoved();
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
        {quantityInCart > 0 ? (
          <CountBtn
            quantity={quantityInCart}
            maxQuantity={content?.stock}
            onIncrease={() => handleUpdateQuantity(quantityInCart + 1)}
            onDecrease={() => handleUpdateQuantity(quantityInCart - 1)}
          />
        ) : (
          <div className={styles.catalog__basket_btn} onClick={handleAddToCart}>
            <RedButton imageSrc={basket} size="small" />
          </div>
        )}
      </div>
    </div>
  );
};
