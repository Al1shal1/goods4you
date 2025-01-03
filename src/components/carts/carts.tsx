import styles from "./carts.module.scss";
import boots_white from "../../icons/boots_white.png";
import { CountBtn } from "../../ui-kit/count-btn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RedButton } from "../../ui-kit/red-button";
import basket from "../../icons/basket.svg";

export const Carts = () => {
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(true);
  };

  const handleAddToCart = () => {
    setIsDelete(false);
  };

  return (
    <div className={styles.cart}>
      <ul className={styles.cart__form}>
        <li className={styles.cart__form_item}>
          <Link to="/product/1" className={styles.cart__form_left}>
            <img
              src={boots_white}
              alt="boots"
              className={styles.cart__form_img}
            />
            <div className={styles.cart__form_about}>
              <div className={styles.cart__form_about_title}>
                Essence Mascara Lash Princess
              </div>
              <div className={styles.cart__form_about_price}>$110</div>
            </div>
          </Link>
          {!isDelete ? (
            <>
              <CountBtn onResetToCart={handleDelete} />
              <button
                className={styles.cart__form_delete}
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart}>
              <RedButton imageSrc={basket} padding="16px" />
            </button>
          )}
        </li>
        <li className={styles.cart__form_item}>
          <Link to="/product/1" className={styles.cart__form_left}>
            <img
              src={boots_white}
              alt="boots"
              className={styles.cart__form_img}
            />
            <div className={styles.cart__form_about}>
              <div className={styles.cart__form_about_title}>
                Essence Mascara Lash Princess
              </div>
              <div className={styles.cart__form_about_price}>$110</div>
            </div>
          </Link>
          {!isDelete ? (
            <>
              <CountBtn onResetToCart={handleDelete} />
              <button
                className={styles.cart__form_delete}
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart}>
              <RedButton imageSrc={basket} padding="16px" />
            </button>
          )}
        </li>
        <li className={styles.cart__form_item}>
          <Link to="/product/1" className={styles.cart__form_left}>
            <img
              src={boots_white}
              alt="boots"
              className={styles.cart__form_img}
            />
            <div className={styles.cart__form_about}>
              <div className={styles.cart__form_about_title}>
                Essence Mascara Lash Princess
              </div>
              <div className={styles.cart__form_about_price}>$110</div>
            </div>
          </Link>
          {!isDelete ? (
            <>
              <CountBtn onResetToCart={handleDelete} />
              <button
                className={styles.cart__form_delete}
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart}>
              <RedButton imageSrc={basket} padding="16px" />
            </button>
          )}
        </li>
        <li className={styles.cart__form_item}>
          <Link to="/product/1" className={styles.cart__form_left}>
            <img
              src={boots_white}
              alt="boots"
              className={styles.cart__form_img}
            />
            <div className={styles.cart__form_about}>
              <div className={styles.cart__form_about_title}>
                Essence Mascara Lash Princess
              </div>
              <div className={styles.cart__form_about_price}>$110</div>
            </div>
          </Link>
          {!isDelete ? (
            <>
              <CountBtn onResetToCart={handleDelete} />
              <button
                className={styles.cart__form_delete}
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart}>
              <RedButton imageSrc={basket} padding="16px" />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
