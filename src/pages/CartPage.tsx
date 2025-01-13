import { Helmet } from "react-helmet";
import { Cart } from "@components/cart";

export const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
        <Cart />
    </>
  );
};
