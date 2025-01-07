import styles from "./Galery.module.scss";
import boots_white from "@icons/boots_white.png";

export const Galery = () => {
  return (
    <div className={styles.galery}>
      <img
        src={boots_white}
        alt="boots"
        className={styles.galery__main_image}
      />
      <ul className={styles.galery__scroll_list}>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
        <li className={styles.galery__scroll_item}>
          <img
            src={boots_white}
            alt="boots"
            className={styles.galery__scroll_image}
          />
        </li>
      </ul>
    </div>
  );
};
