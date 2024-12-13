
import { Hero } from "src/components/hero/hero"
import { Footer } from "../components/footer/footer"
import { Headers } from "../components/header/header"
import { FAQ } from "src/components/FAQ/FAQ"
import { Catalog } from "src/components/catalog/catalog"

export const Home = () => {
    return (
        <>
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