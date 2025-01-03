import React, { useState } from "react";
import styles from "./RedButton.module.scss";

interface BtnProps {
  text?: string;
  imageSrc?: string;
  padding?: string;
  targetId?: string;
}

export const RedButton: React.FC<BtnProps> = ({
  text,
  imageSrc,
  targetId = "",
  padding = "20px 50px",
}) => {
  const BtnStyle = {
    padding: padding,
  };

  const handle = () => {
    handleScrollToSection();
    handleAddToCart();
  };

  const handleScrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  };

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const handleAddToCart = () => {
    if (!isAddedToCart) {
      setIsAddedToCart(true);
    }
  };

  return (
    <>
      <button className={styles.red_btn} style={BtnStyle} onClick={handle}>
        {imageSrc && <img src={imageSrc} alt="button icon" />}
        {text}
      </button>
    </>
  );
};
