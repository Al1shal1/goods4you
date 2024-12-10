import { LogoImg } from "../icons/LogoImg.js"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                <a href="/" className="footer__logo">
                    <LogoImg />
                </a>
                <ul className="footer__navigation">
                    <li className="footer__navigation-item">
                        <a href="">Catalog</a></li>
                    <li className="footer__navigation-item"><a href="">FAQ</a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}