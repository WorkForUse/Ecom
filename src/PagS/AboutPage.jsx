import './AboutPage.css';
import { TfiFaceSmile } from "react-icons/tfi";
import { FaBook, FaHeadset } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";

const AboutPage = () => {

  return (
    <>
      <div className="container m-auto d-flex justify-content-around">
        <div className="col-md-6 column_corner">
          <h1 className="h5 fw-bold text-two">ABOUT OUR COMPANY</h1>
          <p className="h3 fs-1 text-one">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <p className="mx-5 px-2 h3 fs-4 about_text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="text-center pgr px-5 py-5 my-5 d-flex justify-content-center align-items-center">
        <div className="col">
          <h1><TfiFaceSmile /> <span>232</span></h1>
          <h5>Happy Clients</h5>
        </div>
        <div className="col">
          <h1><FaBook /> <span>521</span></h1>
          <h5>Projects</h5>
        </div>
        <div className="col">
          <h1><FaHeadset /> <span>24/7</span></h1>
          <h5>Hours of Support</h5>
        </div>
        <div className="col">
          <h1><AiOutlineTeam /> <span>150+</span></h1>
          <h5>Workers</h5>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
