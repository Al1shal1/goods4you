import { Hero } from "@components/hero";
import { FAQ } from "@components/FAQ";
import { Catalog } from "@components/catalog";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="“Any products from famous brands with worldwide delivery”"
        />
      </Helmet>
        <Hero />
        <Catalog />
        <FAQ />
    </>
  );
};
