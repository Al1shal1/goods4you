import cn from "classnames";
import styles from "./RedButton.module.scss";

interface BtnProps {
  text?: string;
  className?: string;
  imageSrc?: string;
  size?: "big" | "small";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const RedButton: React.FC<BtnProps> = ({
  text,
  imageSrc,
  className,
  size = "big",
  onClick,
  disabled = false,
  loading
}) => {

  return (
    <>
      {loading === true ? (
        <button className={cn(className, styles.red_btn, styles[size])} onClick={onClick} disabled={disabled}>
          <div className={styles.loader} />
        </button>
      ) :
        (
          <button className={cn(className, styles.red_btn, styles[size])} onClick={onClick} disabled={disabled}>
            {imageSrc && <img src={imageSrc} alt="button icon" />}
            {text}
          </button>
        )}
    </>
  );
};
