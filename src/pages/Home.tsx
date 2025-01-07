import { Hero } from "@components/hero";
import { Footer } from "@ui-kit/footer";
import { Headers } from "@ui-kit/header";
import { FAQ } from "@components/FAQ";
import { Catalog } from "@components/catalog";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
      <div className="page">
        <Headers />
        <Hero />
        <Catalog />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};
