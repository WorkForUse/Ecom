import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import HomePage from "./PagS/HomePage";
import AboutPage from "./PagS/AboutPage";
import CategoryPage from "./PagS/CategoryPage";
import ProductDetailsPAGE from "./PagS/ProductDetailsPAGE";
import CartPage from "./PagS/CartPage";
import CheckoutPage from "./PagS/CheckoutPage";
import ContactPage from "./PagS/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductDetailsPAGE />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
