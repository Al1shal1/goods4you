
import { Galery } from "src/components/galery/galery"
import { Footer } from "../components/footer/footer"
import { Headers } from "../components/header/header"
import { Info } from "src/components/info/info"

export const Product = () => {
    return (
        <>
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

    )
}