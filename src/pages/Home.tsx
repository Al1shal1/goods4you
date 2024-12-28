
import { Hero } from "src/components/hero/hero"
import { Footer } from "../components/footer/footer"
import { Headers } from "../components/header/header"
import { FAQ } from "src/components/FAQ/FAQ"
import { Catalog } from "src/components/catalog/catalog"
import { Helmet } from 'react-helmet';

export const Home = () => {
    return (
        <>
        <Helmet> 
        <title>Catalog | Goods4you</title>
        <meta name="description" content="“Any products from famous brands with worldwide delivery”" />
        </Helmet>
            <div className="page">
                <Headers />
                <Hero />
                <Catalog />
                <FAQ />
                <Footer />
            </div>
        </>

    )
}

