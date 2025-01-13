import { Galery } from "@components/galery";
import { Info } from "@components/info";
import { Helmet } from "react-helmet";

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
        <div className="container">
          <div className="products">
            <Galery />
            <Info />
          </div>
        </div>
    </>
  );
};
