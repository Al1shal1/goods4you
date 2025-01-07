import { RedButton } from "@ui-kit/red-button";
import styles from "./Hero.module.scss";
import { UseScrollToSection } from "@hooks/UseScrollToSection";

export const Hero = () => {
  const { handleScrollToSection } = UseScrollToSection();

  const handleBtnClick = () => {
    handleScrollToSection("catalog");
  };

  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1 className={styles.hero__content_text}>
            Any products from famous brands with worldwide delivery
          </h1>
          <h3 className={styles.hero__content_subtitle}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </h3>
        </div>
        <RedButton text="Go to shopping" onClick={handleBtnClick} />
      </div>
    </div>
  );
};
