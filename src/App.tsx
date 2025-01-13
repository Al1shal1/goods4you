import { Routes, Route } from "react-router-dom";
import Layout from "@hooks/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./styles.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
