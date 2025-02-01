import { Helmet } from "react-helmet";
import { ProductContent } from "@components/product/ProductContent";

export const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
      <ProductContent />
    </>
  );
};
