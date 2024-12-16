
import { Total } from "src/components/total/total"
import { Footer } from "../components/footer/footer"
import { Headers } from "../components/header/header"
import { Carts } from "src/components/carts/carts"

export const Cart = () => {
    return (
        <>
            <div className="page">
                <Headers />
                <div className="container">
                    <h1 className='title'>My cart</h1>
                    <div className="cart_container">
                        <Carts />
                        <Total />
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}