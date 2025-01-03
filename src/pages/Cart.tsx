import { Total } from "src/components/total";
import { Footer } from "../ui-kit/footer";
import { Headers } from "../ui-kit/header";
import { Carts } from "src/components/carts";
import { Helmet } from "react-helmet";

export const Cart = () => {
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
      <div className="page">
        <Headers />
        <div className="container">
          <h1 className="title">My cart</h1>
          <div className="cart_container">
            <Carts />
            <Total />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
