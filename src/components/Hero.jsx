import "../components/style/Hero.css";
import helloImage from "../Images/Hero_image.jpg"
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div id="hero" className="hero-section">
        <div className="container">
          <p>Hello and welcome to Sandra Her Majesty!</p>
          <h1>Sandra<span className="span"> -Her</span>Majesty.</h1>
          <p>
          We're delighted to have you here. Whether you're <br />
          exploring our latest blog posts or seeking valuable <br />
          insights, we hope your journey with us is both informativebr
           and enjoyable. If you have any questions or if there's anything <br />
           specific you're looking for, feel free to reach out. Happy reading!
          </p>
          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
          <Link to="/contact">
              <button className="btns login">Contact Us</button>
            </Link>
        </div>
        <div className="image">
          <img src={helloImage} alt="" />
        </div>
      </div>
    </>
  );
}
