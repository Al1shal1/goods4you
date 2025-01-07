import styles from "./Total.module.scss";

export const Total = () => {
  return (
    <div className={styles.total}>
      <ul className={styles.total__count}>
        <li className={styles.total__count_item}>
          <div className={styles.total__count_text}>Total count</div>
          <div className={styles.total__count_items}>3 items</div>
        </li>
        <li className={styles.total__count_item}>
          <div
            className={`${styles.total__count_text} ${styles.total__count_text_bold}`}
          >
            Price without discount
          </div>
          <div className={styles.total__count_price}>$700</div>
        </li>
        <li className={styles.total__count_item}>
          <div className={styles.total__count_main_text}>Total price</div>
          <div className={styles.total__count_main_price}>$590</div>
        </li>
      </ul>
    </div>
  );
};
