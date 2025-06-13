import { useState } from "react";

const productImages = [
  "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-details-1.webp",
  "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-details-2.webp",
  "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-details-3.webp",
  "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-details-4.webp",
  "https://bootstrapmade.com/content/demo/FashionStore/assets/img/product/product-details-5.webp",
];

const ProductDetailsPAGE = () => {
  const [mainImage, setMainImage] = useState(productImages[2]);

  return (
    <div className="container py-5">
      <div className="row">
        {/* LEFT SIDE: Product Images */}
        <div className="col-lg-6 d-flex">
          <div className="d-flex flex-column align-items-center me-3">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`img-thumbnail mb-2 ${
                  mainImage === img ? "border border-2 border-danger" : ""
                }`}
                style={{ width: "60px", height: "60px", cursor: "pointer" }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          <div className="position-relative flex-grow-1 d-flex align-items-center justify-content-center">
            <img
              src={mainImage}
              alt="Main Product"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            {/* Prev/Next arrows can be connected to logic if needed */}
            <button className="btn btn-light position-absolute start-0 translate-middle-y">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="btn btn-light position-absolute end-0 translate-middle-y">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Product Info */}
        <div className="col-lg-6">
          <p className="text-uppercase text-muted">Headphones</p>
          <h2 className="fw-bold">
            Lorem Ipsum Wireless Noise Cancelling Headphones
          </h2>

          {/* Rating */}
          <div className="mb-3">
            <span className="text-warning fs-5">★★★★★</span>
            <span className="ms-2 fw-bold">4.5</span>
            <span className="text-muted"> (42 Reviews)</span>
          </div>

          {/* Price Info */}
          <div className="bg-light p-3 rounded mb-3">
            <h3 className="text-danger mb-0">$249.99</h3>
            <p className="mb-1 text-decoration-line-through text-muted">
              $299.99
            </p>
            <span className="badge bg-danger mb-2">Save 17%</span>
            <p className="text-success mb-0 fw-semibold">
              <i className="bi bi-check-circle-fill"></i> In Stock
            </p>
            <p className="text-muted">(24 items left)</p>
          </div>

          {/* Description */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at lacus congue, suscipit elit nec, tincidunt orci. Phasellus
            egestas nisi vitae lectus imperdiet venenatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPAGE;