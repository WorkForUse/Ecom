import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquarePinterest,
  FaSquareYoutube,
  FaTiktok
} from "react-icons/fa6";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaApple,
  FaGooglePlay
} from "react-icons/fa6";

import './Footer.css'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f4f6" }} className="pt-5">
      <div className="container text-dark">
        <div className="row">

          {/* Brand + Social */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold" style={{ color: "#3e0925" }}>EcomWeb</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam in nibh vehicula, facilisis magna ut, consectetur lorem.
              Proin eget tortor risus.
            </p>
            <h6 className="mt-3">Connect With Us</h6>
            <div className="d-flex gap-2 mt-2">
              <FaSquareFacebook size={30} />
              <FaSquareInstagram size={30} />
              <FaSquareXTwitter size={30} />
              <FaTiktok size={30} />
              <FaSquarePinterest size={30} />
              <FaSquareYoutube size={30} />
            </div>
          </div>

          {/* Shop */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom pb-1" style={{ color: "#3e0925", width: "fit-content" }}>Shop</h6>
            <ul className="list-unstyled">
              <li>→ New Arrivals</li>
              <li>→ Bestsellers</li>
              <li>→ Women's Clothing</li>
              <li>→ Men's Clothing</li>
              <li>→ Accessories</li>
              <li>→ Sale</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom pb-1" style={{ color: "#3e0925", width: "fit-content" }}>Support</h6>
            <ul className="list-unstyled">
              <li>→ Help Center</li>
              <li>→ Order Status</li>
              <li>→ Shipping Info</li>
              <li>→ Returns & Exchanges</li>
              <li>→ Size Guide</li>
              <li>→ Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom pb-1" style={{ color: "#3e0925", width: "fit-content" }}>Contact Information</h6>
            <ul className="list-unstyled">
              <li><FaLocationDot className="me-2" />123 Fashion Street, New York, NY 10001</li>
              <li><FaPhone className="me-2" />+1 (555) 123-4567</li>
              <li><FaEnvelope className="me-2" />hello@example.com</li>
              <li><FaClock className="me-2" />Mon-Fri: 9am-6pm</li>
              <li className="ms-4">Sat: 10am-4pm</li>
              <li className="ms-4">Sun: Closed</li>
            </ul>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-light border shadow-sm">
                <FaApple className="me-2" /> App Store
              </button>
              <button className="btn btn-light border shadow-sm">
                <FaGooglePlay className="me-2" /> Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-3 border-top mt-4 small" style={{ backgroundColor: "#f8f4f6" }}>
        © Copyright <strong>OneStream It Solution</strong>. All Rights Reserved. <br />
      </div>
    </footer>
  );
};

export default Footer;