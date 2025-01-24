import styles from "./Catalog.module.scss";
import { RedButton } from "@ui-kit/red-button";
import { Input } from "@ui-kit/input";
import { CatalogItem } from "./catalog-item";
import { useCallback, useState } from "react";
import { useGetCatalogQuery } from "../../api/catalogApi";
import { IProduct } from "models/Product";
import { useDebounceCallback } from "usehooks-ts";

export const Catalog = () => {
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);

  const { data: content, error, isLoading, isFetching } = useGetCatalogQuery(
    { query: search, limit, skip: 0 },
    { refetchOnFocus: true }
  );

  const debouncedSearch = useDebounceCallback((value: string) => setSearch(value), 200);
  
  const loadMoreProducts = useCallback(() => {
    setLimit((prevLimit) => prevLimit + 12);
  }, []);
  
  const canLoadMore = content?.products && content.products.length < content.total;

  const renderLoading = () =>
    <h1 className="title_informational">
      Loading...
    </h1>;

  const renderFetching = () => (
    <h1 className="title_informational">Fetching more products...</h1>
  );

  const renderError = () => (
    <h1 className="title_informational">
      Failed to load items, please try again later.
    </h1>
  );
  const renderNoProducts = () =>
    <h1 className="title_informational">
      No products found
    </h1>;

  const renderProducts = () => (
    <div className={styles.catalog__list}>
      {content?.products.map((product: IProduct) => (
        <CatalogItem
          key={product.id}
          id={product.id}
          to={`/product/${product.id}`}
          content={product} />
      ))}
    </div>
  );


  return (
    <div id="catalog" className={styles.catalog}>
      <div className="container">
        <h2 className="title">Catalog</h2>
        <Input
          onChange={(e) => debouncedSearch(e.target.value)}
        />

        {isLoading && renderLoading()}
        {isFetching && !isLoading && renderFetching()}
        {error && renderError()}
        {content?.products.length === 0 && renderNoProducts()}

        {content?.products && content.products.length > 0 && renderProducts()}

        {canLoadMore && (
          <div className={styles.catalog__show_btn}>
            <RedButton text="Show more" size="big" onClick={loadMoreProducts} />
          </div>
        )}

      </div>
    </div>
  );
};
