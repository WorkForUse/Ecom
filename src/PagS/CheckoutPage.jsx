import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className="container py-5">
      <div className="row gx-5">
        {/* Left Section */}
        <div className="col-md-8">
          {/* Step Progress */}
          <div className="checkout-steps mb-5" data-aos="fade-up">
            <div className="stepper-wrapper">
              {['Information', 'Shipping', 'Payment', 'Review'].map((step, index) => (
                <div
                  className={`stepper-item ${index === 0 ? 'completed' : ''}`}
                  key={step}
                >
                  <div className="step-counter">{index + 1}</div>
                  <div className="step-name">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Info */}
          <h3 className="text-two fw-light">Customer Information</h3>
          <p className="text-secondary mb-4">Please enter your contact details</p>

          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" placeholder="Enter your first name..." />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter your last name..." />
            </div>
            <div className="col-12">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email..." />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn bg_First">Continue to Shipping</button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="border rounded p-4 shadow-sm">
            <h5 className="text-two border-bottom pb-2 mb-3">Order Summary</h5>

            {[1, 2].map((item) => (
              <div className="d-flex align-items-start gap-3 mb-3" key={item}>
                <img
                  src="https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-1.webp"
                  style={{ width: '60px' }}
                  alt="product"
                />
                <div>
                  <h6 className="fw-light mb-1">Lorem ipsum dolor</h6>
                  <small className="d-block">Color: Black | Size: M</small>
                  <small className="text-secondary">
                    1 x <span className="text-two">$49.99</span>
                  </small>
                </div>
              </div>
            ))}

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between text-secondary">
                <span>Subtotal</span>
                <span>$200.00</span>
              </div>
              <div className="d-flex justify-content-between text-secondary">
                <span>Shipping</span>
                <span>$40.00</span>
              </div>
              <div className="d-flex justify-content-between text-secondary">
                <span>Tax</span>
                <span>$10.00</span>
              </div>
              <h5 className="text-two d-flex justify-content-between mt-3">
                <span>Total</span>
                <span>$250.00</span>
              </h5>
              <div className="d-flex mt-3 gap-2">
                <input type="text" className="form-control" placeholder="Promo Code" />
                <button className="btn btn-outline-secondary">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
