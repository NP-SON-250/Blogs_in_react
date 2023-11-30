import "../components/style/Admins.css";
import { Component } from "react";
import { Link } from "react-router-dom";
class Admins extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          
          <div>
            <ul
              id="navbaradmins"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
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
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Admins;
