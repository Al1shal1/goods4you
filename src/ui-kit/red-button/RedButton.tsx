import styles from "./RedButton.module.scss";

interface BtnProps {
  text?: string;
  imageSrc?: string;
  padding?: string;
  onClick?: () => void;
}

export const RedButton: React.FC<BtnProps> = ({
  text,
  imageSrc,
  padding = "20px 50px",
  onClick,
}) => {
  const BtnStyle = {
    padding: padding,
  };

  return (
    <>
      <button className={styles.red_btn} style={BtnStyle} onClick={onClick}>
        {imageSrc && <img src={imageSrc} alt="button icon" />}
        {text}
      </button>
    </>
  );
};
