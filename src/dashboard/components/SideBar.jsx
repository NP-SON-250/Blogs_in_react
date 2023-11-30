import { useState } from "react";
import "./style/sidebar.css";
import { useNavigate } from "react-router-dom";
import CreatePost from "./createpost";
const SideBar = () => {
  const [openModal, setOpenModal] = useState(false);
const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div
            className="btn login tag"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            New post
            <span className="plus-icon tag">
              <iconify-icon icon="icons8:plus"></iconify-icon>
            </span>
          </div>
          {openModal && <CreatePost closeModal={setOpenModal} />}
      <div
        className="sidebar-link"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/Login");
        }}
      >
        <div className="sidebar-icon">
          <iconify-icon icon="material-symbols:logout"></iconify-icon>
        </div>
        <div className="sidebar-label">Logout</div>
      </div>
    </div>
  );
};
export default SideBar;
