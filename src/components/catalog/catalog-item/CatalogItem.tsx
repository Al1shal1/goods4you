import styles from "./CatalogItem.module.scss";
import boots from "@icons/boots.png";
import basket from "@icons/basket.svg";
import { Link } from "react-router-dom";
import { useScrollToHash } from "@hooks/useScrollToHash";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { useToggleState } from "@hooks/useToggleState";

interface CatalogItemProps {
  id: string;
  to: string;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({
  id = "1",
  to = "/product/1",
}) => {
  useScrollToHash();
  const {
    state: isBtnClicked,
    setTrue: handleClick,
    setFalse: handleResetToCart,
  } = useToggleState();

  return (
    <div id={id} className={styles.catalog__item}>
      <Link to={to} className={styles.catalog__link}>
        <img src={boots} alt="boots" className={styles.catalog__image} />
        <div className={styles.catalog__image_text}>Show details</div>
        <div className={styles.catalog__image_overlay} />
      </Link>
      <div className={styles.catalog__content}>
        <div
          className={styles.catalog__content_left}
          style={{ maxWidth: !isBtnClicked ? "70%" : "49%" }}
        >
          <h5 className={styles.catalog__name}>
            Essence Mascara Lash Princess
          </h5>
          <div className={styles.catalog__price}>$110</div>
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
