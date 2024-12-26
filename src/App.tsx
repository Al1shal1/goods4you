import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Product } from './pages/Product'
import "./styles.scss"
import { Cart } from "./pages/Cart";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
            );
}

