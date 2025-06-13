import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="row g-4 align-items-stretch">
        {/* Google Map */}
        <div className="col-md-4">
          <div className="rounded overflow-hidden shadow-sm h-100">
            <iframe
              className="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20960446.704837564!2d-28.240662499999985!3d50.111590000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8cb385a2507e5%3A0x958ea5ecf0ba7223!2sOneStream%20Software%20-%20German%20Office!5e0!3m2!1sen!2s!4v1748708885624!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white h-100">
            <h4 className="text-center mb-4 text-one">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <input type="text" placeholder="Your Name" className="form-control rounded-pill" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Your Email" className="form-control rounded-pill" />
              </div>
              <div className="mb-3">
                <textarea placeholder="Your Message" className="form-control" rows="4" />
              </div>
              <button
                type="submit"
                className="btn w-100 text-white rounded-pill"
                style={{ backgroundColor: '#8c0d4f' }}
              >
                Send Now
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-white h-100">
            <h4 className="mb-4 text-one">Contact Information</h4>

            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '50px',
                  backgroundColor: '#8c0d4f',
                  borderRadius: '50%',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                <IoLocationOutline />
              </div>
              <div>
                <strong>Address</strong>
                <p className="mb-0">Große Gallusstraße 16-18, 60311 Frankfurt am Main, Germany</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#8c0d4f',
                  borderRadius: '50%',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                <IoCallOutline />
              </div>
              <div>
                <strong>Call Us</strong>
                <p className="mb-0">07642 97 16 68</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div
                className="me-3 d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#8c0d4f',
                  borderRadius: '50%',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                <CiMail />
              </div>
              <div>
                <strong>Email Us</strong>
                <p className="mb-0">OneStreamXEcomWeb@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
