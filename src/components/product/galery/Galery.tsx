import React, { useState, useCallback, useRef } from "react";
import styles from "./Galery.module.scss";
import { IProduct } from "../../../models/Product";

interface GaleryProps {
  content: IProduct;
}

export const Galery: React.FC<GaleryProps> = ({ content }) => {
  const images = Array.isArray(content.images) ? content.images : [];
  const initialImg = images.length > 0 ? images[0] : content?.thumbnail ?? '';

  const [stateImg, setStateImg] = useState(initialImg);
  const [activeImg, setActiveImg] = useState(initialImg);

  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleClick = useCallback((img: string) => {
    setStateImg(img);
    setActiveImg(img); 
  }, []);

  return (
    <div className={styles.galery}>
      {images.length > 1 ? (
        <>
          <div className={styles.galery__main_image_wrapper}>
            <img
              src={stateImg}
              alt="Main product"
              className={styles.galery__main_image}
            />
          </div>
          <ul className={styles.galery__scroll_list}>
            {images.map((img, index) => (
              <li
                className={styles.galery__scroll_item}
                key={img}
              >
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={img}
                  className={`${styles.galery__scroll_image} ${
                    img === activeImg ? styles.active : ''
                  }`}
                  alt="Thumbnail"
                  onClick={() => handleClick(img)}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={styles.galery__main_image_wrapper}>
          <img src={stateImg} alt="Main product" className={styles.galery__main_image} />
        </div>
      )}
    </div>
  );
};