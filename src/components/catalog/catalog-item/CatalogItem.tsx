import styles from "./CatalogItem.module.scss";
import basket from "@icons/basket.svg";
import { Link } from "react-router-dom";
import { useScrollToHash } from "@hooks/useScrollToHash";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { useToggleState } from "@hooks/useToggleState";
import { IProduct } from "models/Product";
import { usePriceCalculation } from "@hooks/usePriceCalculation";

interface CatalogItemProps {
  id: number;
  to: string;
  content: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({
  to = "/product/1",
  content
}) => {

  useScrollToHash();
  const { finalPrice } = usePriceCalculation(content.price, content.discountPercentage);

  const {
    state: isBtnClicked,
    setTrue: handleClick,
    setFalse: handleResetToCart,
  } = useToggleState();


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
          <h5 className={styles.catalog__name}>
            {content.title}
          </h5>
          <div className={styles.catalog__price}>${finalPrice}</div>
        </div>
        {!isBtnClicked ? (
          <div className={styles.catalog__basket_btn} onClick={handleClick}>
            <RedButton imageSrc={basket} size="small" />
          </div>
        ) : (
          <CountBtn onResetToCart={handleResetToCart} />
        )}
      </div>
    </div>
  );
};
