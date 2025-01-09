import { CatalogItem } from "@components/catalog-item";
import styles from "./Catalog.module.scss";
import { RedButton } from "@ui-kit/red-button";
import { Input } from "@ui-kit/input";

export const Catalog = () => {
  return (
    <main id="catalog" className={styles.catalog}>
      <div className="container">
        <h2 className={styles.catalog__title}>Catalog</h2>
        <Input />
        <ul className={styles.catalog__list}>
          <CatalogItem id="1" to="/product/1" />
          <CatalogItem id="2" to="/product/2" />
          <CatalogItem id="3" to="/product/3" />
          <CatalogItem id="4" to="/product/4" />
          <CatalogItem id="5" to="/product/5" />
          <CatalogItem id="6" to="/product/6" />
          <CatalogItem id="7" to="/product/7" />
          <CatalogItem id="8" to="/product/8" />
          <CatalogItem id="9" to="/product/9" />
          <CatalogItem id="10" to="/product/10" />
          <CatalogItem id="11" to="/product/11" />
          <CatalogItem id="12" to="/product/12" />
        </ul>
        <div className={styles.catalog__show_btn}>
          <RedButton text="Show more" size="big" />
        </div>
      </div>
    </main>
  );
};
