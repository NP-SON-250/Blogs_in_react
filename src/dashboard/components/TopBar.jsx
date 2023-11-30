import { Link } from "react-router-dom";
import Admins from "../../components/AdminNav";
import "./style/topbar.css";

const TopBar = () => {
  return (
    <>
      <nav id="mynavbar"> 
        <Link to="/dashboard" className="tag logo">
          <h1>Sandra<span className="span"> -Her</span>Majesty.</h1>
          </Link>
        <div>
        <ul id="navbar">
          <li>
        <Link to="/dashboard">
        <div className="tag active">
          <div className="tag active">Dashboard</div>
        </div>
      </Link>
      </li>
      <li>
      <Link to="/post">
        <div className="tag">
          <div className="tag">Post</div>
        </div>
      </Link>
      </li>
      <li>
      <Link to="/users">
        <div className="tag">
          <div className="tag">Users</div>
        </div>
      </Link>
      </li>
          </ul>
        </div>
        <div className="getmenu">
        <Admins/>
        </div>
        </nav>
    </>
  );
};
export default TopBar;
