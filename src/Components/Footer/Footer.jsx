import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Whether you want to explore the most beautiful cities in the
              world, go on expeditions, or relax on the most spectacular
              beaches, we are here to offer you the best recommendations and
              create an itinerary tailored to your interests.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <ul className="alist">
              <li>
                <a href="#">
                  <FaEnvelope /> E-mail: 9NineCruiseS@support.com
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPhone /> Phone: +393179905351
                </a>
              </li>
              <li>
                <a href="#">
                  <FaMapMarkerAlt /> Address: Viale Giosuè Carducci, 27, 57122
                  Livorno LI, Italy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="social">
              <li>
                <a href="#">
                  <FaSquareFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaXTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} 9NineCruiseS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
