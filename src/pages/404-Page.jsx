import "../components/style/notfound.css";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <>
      <div className="notfound-section container">
        <div>
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-sub-title">Page not found</h2>
        </div>
        <div>
          <p className="notfound-text">
            Take me back to{" "}
            <Link to="/" className="web-link">
              Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Notfound;
