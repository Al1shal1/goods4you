import { Galery } from "src/components/galery";
import { Footer } from "../ui-kit/footer";
import { Headers } from "../ui-kit/header";
import { Info } from "src/components/info";
import { Helmet } from "react-helmet";

export const Product = () => {
  return (
    <>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
      <div className="page">
        <Headers />
        <div className="container">
          <div className="products">
            <Galery />
            <Info />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
