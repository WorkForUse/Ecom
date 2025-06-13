import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { VscRefresh } from "react-icons/vsc";
import { CiTrash } from "react-icons/ci";

const CartPage = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* LEFT - CART PRODUCTS */}
        <div className="col-md-8">
          <div className="p-4 shadow-sm rounded bg-white overflow-auto" style={{ height: '75vh' }}>
            <h3 className="border-bottom pb-3 mb-4">Your Cart</h3>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="d-flex gap-3 align-items-center border-bottom py-3">
                <img
                  src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp"
                  alt="product"
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                  className="rounded"
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">Leather Brown Handbag</h5>
                  <p className="mb-1 text-muted">Color: Brown | Size: M</p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <CiTrash size={18} className="text-danger" style={{ cursor: "pointer" }} />
                    <span className="text-danger" style={{ cursor: "pointer" }}>Remove</span>
                  </div>
                  <div className="btn-group btn-group-sm" role="group">
                    <button type="button" className="btn btn-outline-dark">-</button>
                    <button type="button" className="btn btn-outline-dark">1</button>
                    <button type="button" className="btn btn-outline-dark">+</button>
                  </div>
                </div>
                <div className="text-end">
                  <p className="mb-0 fw-bold">$47.00</p>
                  <p className="text-decoration-line-through text-muted">$59.00</p>
                  <p className="fw-bold">Total: $47.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white mb-4">
            <h4 className="border-bottom pb-3 mb-4">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>$141.00</span>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="delivery" id="standard" defaultChecked />
              <label className="form-check-label" htmlFor="standard">Standard Delivery - $4.99</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="delivery" id="express" />
              <label className="form-check-label" htmlFor="express">Express Delivery - $12.99</label>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="radio" name="delivery" id="free" />
              <label className="form-check-label" htmlFor="free">Free Shipping (Orders over $300)</label>
            </div>
            <div className="d-flex justify-content-between border-top pt-3">
              <strong>Total</strong>
              <strong>$145.99</strong>
            </div>
            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-dark">
                Proceed to Checkout <IoIosArrowRoundForward size={22} />
              </button>
              <button className="btn btn-outline-dark">
                <IoIosArrowRoundBack size={22} /> Continue Shopping
              </button>
            </div>
          </div>

          {/* COUPON & ACTION BUTTONS */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your coupon code..."
            />
            <button className="btn btn-outline-secondary">Apply</button>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-danger w-100">
              <CiTrash size={18} className="me-1" /> Clear Cart
            </button>
            <button className="btn btn-outline-secondary w-100">
              <VscRefresh size={18} className="me-1" /> Update Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
