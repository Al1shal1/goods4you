import { Link } from "react-router-dom";
import { RedButton } from "../../ui-kit/red-button";
import styles from "./catalog.module.scss";
import boots from "../../icons/boots.png";
import basket from "../../icons/basket.svg";
import { useScrollToHash } from "src/hooks/useScrollToHash";
import { useState } from "react";
import { CountBtn } from "../../ui-kit/count-btn";

export const Catalog = () => {
  useScrollToHash();
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleClick = () => {
    setIsBtnClicked(true);
  };

  const handleResetToCart = () => {
    setIsBtnClicked(false);
  };

  return (
    <main id="catalog" className={styles.catalog}>
      <div className="container">
        <h2 className={styles.catalog__title}>Catalog</h2>
        <input
          type="text"
          placeholder="Search by title"
          className={styles.catalog__search}
        />
        <ul className={styles.catalog__list}>
          <li id="1" className={styles.catalog__list_item}>
            <Link to="/product/1" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="2" className={styles.catalog__list_item}>
            <Link to="/product/2" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="3" className={styles.catalog__list_item}>
            <Link to="/product/3" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="4" className={styles.catalog__list_item}>
            <Link to="/product/4" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="5" className={styles.catalog__list_item}>
            <Link to="/product/5" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="6" className={styles.catalog__list_item}>
            <Link to="/product/6" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="7" className={styles.catalog__list_item}>
            <Link to="/product/7" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="8" className={styles.catalog__list_item}>
            <Link to="/product/8" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="9" className={styles.catalog__list_item}>
            <Link to="/product/9" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="10" className={styles.catalog__list_item}>
            <Link to="/product/10" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="11" className={styles.catalog__list_item}>
            <Link to="/product/11" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
          <li id="12" className={styles.catalog__list_item}>
            <Link to="/product/12" className={styles.catalog__link}>
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
                <div
                  className={styles.catalog__basket_btn}
                  onClick={handleClick}
                >
                  <RedButton imageSrc={basket} padding="16px" />
                </div>
              ) : (
                <CountBtn onResetToCart={handleResetToCart} />
              )}
            </div>
          </li>
        </ul>
        <div className={styles.catalog__show_btn}>
          <RedButton text="Show more" />
        </div>
      </div>
    </main>
  );
};
