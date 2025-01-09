import cn from "classnames";
import styles from "./RedButton.module.scss";

interface BtnProps {
  text?: string;
  className?: string;
  imageSrc?: string;
  size?: "big" | "small";
  onClick?: () => void;
}

export const RedButton: React.FC<BtnProps> = ({
  text,
  imageSrc,
  className,
  size = "big",
  onClick,
}) => {

  return (
    <>
      <button className={cn(className, styles.red_btn, styles[size])} onClick={onClick}>
        {imageSrc && <img src={imageSrc} alt="button icon" />}
        {text}
      </button>
    </>
  );
};
