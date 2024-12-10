import { LogoImg } from "../icons/LogoImg.js"
import { Cart } from "../icons/Cart.js"

export const Headers = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href="/" className="header__logo">
                        <LogoImg />
                    </a>
                    <ul className="header__navigation">
                        <li className="header__navigation-item">
                            <a href="">Catalog</a></li>
                        <li className="header__navigation-item"><a href="">FAQ</a></li>
                        <li className="header__navigation-item">
                            <a href="" className="header__navigation-busket">Cart</a>
                            <Cart/>
                        </li>
                        <li className="header__navigation-item">
                            <a href="">Johnson Smith</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}