import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Product } from './pages/Product'
import "./styles.css"
import { Cart } from "./pages/Cart";

export default function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
            );
}

