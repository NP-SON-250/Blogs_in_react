import "../components/style/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer container">
        <div className="footer-content">
          <div className="footer-row">
            <div className="readit">
              <div className="title">
                <h4 className="mark">
               Sandra<span className="span"> -Her</span>Majesty.
                </h4>
              </div>
              <div className="readit-body">
                <p>
                We're delighted to have you here.
                 Whether you're exploring our 
                 latest blog posts or seeking 
                 valuable insights, we hope your 
                 journey with us is both 
                 informative and enjoyable. If you
                  have any questions or if there's 
                  anything specific you're looking 
                  for, feel free to reach out. Happy
                   reading! 📖✨
                </p>
              </div>
              <div className="readit-footer">
                <div className="f-social-icons">
                  <div className="twitter">
                    <a href="#">
                      <span>
                        <iconify-icon icon="ri:twitter-fill"></iconify-icon>
                      </span>
                    </a>
                  </div>
                  <div className="facebook">
                    <a href="#">
                      <span>
                        <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                      </span>
                    </a>
                  </div>
                  <div className="instagram">
                    <a href="#">
                      <span>
                        <iconify-icon icon="bi:instagram"></iconify-icon>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest-news">
              <div className="title">
                <h4>Latest News</h4>
              </div>
              <div className="latest-body">
                <p>You can like unlike, and comment on postBut you will need to login first</p>
                <p>If no account register to create new one</p>
              </div>
            </div>
            <div className="info">
              <div className="title">
                <h4>Informtion</h4>
              </div>
              <div className="info-body">
                <ul>
                  <li className="tag">
                    <Link to="/">
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Home
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/team">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      About
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/login">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Join us
                    </Link>
                  </li>
                  <li className="tag">
                    <Link to="/contact">
                      {" "}
                      <span>
                        <iconify-icon icon="grommet-icons:form-next"></iconify-icon>
                      </span>{" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="question">
              <div className="title">
                <h4>Addresses</h4>
              </div>
              <div className="q-body">
                <div className="location flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="mdi:location"></iconify-icon>
                    </span>
                  </div>
                  <div>
                    <p>
                      Byumba, Gicumbi, Umutuzo hotel
                    </p>
                  </div>
                </div>
                <div className="phone flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="mingcute:phone-fill"></iconify-icon>
                    </span>
                  </div>
                  <div>
                    <p>+250783776068</p>
                  </div>
                </div>
                <div className="email flex-content">
                  <div className="icon">
                    <span>
                      <iconify-icon icon="bi:envelope-fill"></iconify-icon>
                    </span>
                  </div>
                  <div>sandrabakundese250@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright ©2023 All rights reserved
            </p>
            <a href="#hero">
              <div className="back-top">
                <iconify-icon icon="mdi:arrow-top-circle"></iconify-icon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
