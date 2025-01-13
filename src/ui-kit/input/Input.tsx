import styles from "./Input.module.scss";

export const Input = () => {
  return (
    <input type="text" placeholder="Search by title" className={styles.input} />
  );
};
