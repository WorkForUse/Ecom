import { useState } from "react";
import { CiHeart, CiTrash } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowWishList(false);
  };

  const toggleWishList = () => {
    setShowWishList(!showWishList);
    setShowCart(false);
  };

  return (
    <>
      <header className="d-flex justify-content-around align-items-center my-3 position-relative">
        <h1 className="text-one">
          Ecom<span className="text-two">Web</span>
        </h1>

        <input
          className="form-control w-25"
          type="search"
          placeholder="Type to search..."
        />

        {/* Wishlist */}
        <span
          className="fw-bold d-flex align-items-center gap-1 position-relative"
          onClick={toggleWishList}
          style={{ cursor: "pointer" }}
        >
          <CiHeart size={20} />
          Wishlist
          <span className="BG-two px-2 py-1 rounded-circle">1</span>

          {showWishList && (
            <div className="bg-light p-3 rounded wishlist-dropdown">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-3.webp"
                  alt="Wishlist item"
                  style={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <div className="flex-grow-1">
                  <h6 className="fw-semibold mb-1" style={{ fontSize: "15px" }}>
                    White sneakers with blue sole
                  </h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-dark fw-bold">$39.99</span>
                    <span className="d-flex align-items-center gap-1 text-danger" style={{ cursor: "pointer" }}>
                      <CiTrash size={18} />
                      <span className="fw-light">Remove</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </span>

        {/* Cart */}
        <span
          className="fw-bold d-flex align-items-center gap-1 position-relative"
          onClick={toggleCart}
          style={{ cursor: "pointer" }}
        >
          <IoCartOutline size={20} />
          Cart
          <span className="BG-two px-2 py-1 rounded-circle">1</span>

          {showCart && (
            <div className="bg-light p-3 rounded cart-dropdown">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp"
                  alt="Cart item"
                  style={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <div className="flex-grow-1">
                  <h6 className="fw-semibold mb-1" style={{ fontSize: "15px" }}>
                    Leather brown color hand bag
                  </h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-dark fw-bold">$19.99</span>
                    <span className="d-flex align-items-center gap-1 text-danger" style={{ cursor: "pointer" }}>
                      <CiTrash size={18} />
                      <span className="fw-light">Remove</span>
                    </span>
                  </div>
                  <div className="btn-group mt-2" role="group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">+</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">1</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">-</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </span>
      </header>

      {/* Navigation */}
      <nav className="nv my-5">
        <ul className="d-flex justify-content-around list-unstyled m-0 p-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/product">Product Details</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;