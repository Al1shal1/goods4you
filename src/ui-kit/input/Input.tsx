import { ChangeEventHandler } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder = "Search by title",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
};
