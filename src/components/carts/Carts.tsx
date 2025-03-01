import { CartsItem } from "./carts-item";
import styles from "./Carts.module.scss";
import { CartPrice } from "./carts-price";
import { useCartData } from "@hooks/useCartData";
import { IProduct } from "@models/IProduct";

export const Carts = () => {
  const { cart, removedProducts, productsStock, isLoading, error } = useCartData();

  const renderContent = () => {
    if (isLoading) return <h1 className="title_informational">Loading...</h1>;
    if (error) return <h1 className="title_informational">Failed to load cart</h1>;
    if (!cart) return <div className={styles.cart__title_informational}>No items</div>;

    return (
      <div className={styles.carts__container}>
        <div className={styles.cart}>
          <div className={styles.cart__form}>
          {cart.products.map((product: IProduct) => {
              const productStock = productsStock[product.id] ?? 5;
              return <CartsItem key={product.id} content={product} stock={productStock} />;
            })}
            {removedProducts.map((product: IProduct) => {
              return <CartsItem key={product.id} content={product} stock={0} />;
            })}
          </div>
        </div>
        <CartPrice cart={cart} />
      </div >
    );
  };

return (
  <div className={styles.carts}>
    <div className="container">
      <h1 className="title">My cart</h1>
      {renderContent()}
    </div>
  </div>
);
};