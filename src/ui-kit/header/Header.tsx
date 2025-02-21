import { LogoImg } from "@icons/LogoImg.js";
import cart from "@icons/cart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { resetProducts } from "@store/productSlice";

export const Header = () => {

  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Link to="/" className={styles.header__logo} aria-label="logo">
            <div className={styles.header__logo_img}>
              <LogoImg />
            </div>
          </Link>
          <ul className={styles.header__navigation}>
            <li className={styles.header__navigation_item}>
              <Link to="/#catalog">Catalog</Link>
            </li>
            <li className={styles.header__navigation_item}>
              <Link to="/#faq">FAQ</Link>
            </li>
            <li className={styles.header__navigation_item}>
              <Link to="/cart"
                className={styles.header__navigation_busket}
                onClick={() => {
                  dispatch(resetProducts());
                }}
              >
                Cart
              </Link>
              <img src={cart} className={styles.header__busket} alt="" role="presentation" />
              {carts && carts.totalQuantity > 0 ? (
                <div className={styles.header__busket_counter}>{carts.totalQuantity}</div>
              ) : null}
            </li>
            <li className={styles.header__navigation_item}>
              <a href="/">Johnson Smith</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
