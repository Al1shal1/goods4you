import { ChangeEventHandler } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder = "Search by title",
  type = "text",
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
      value={value}
    />
  );
};
