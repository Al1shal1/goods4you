
import { Footer } from "../components/footer"
import { Headers } from "../components/header"
import { RedButton } from "../components/RedButton"

export const Home = () =>{
    return(
        <>
        <Headers />
        <div className="hero">
            <div className="hero__content">
                <h1 className="hero__content-text">Any products from famous brands with worldwide delivery</h1>
                <h3 className="hero__content-subtitle">We sell smartphones, laptops, clothes, shoes and many other products at low prices</h3>
                <RedButton></RedButton>
            </div>
        </div>
        <Footer />
        </>
    
    )
}