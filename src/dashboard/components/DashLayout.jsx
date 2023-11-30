import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DashLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, []);

  return (
    <div>
      <TopBar />
      <SideBar />
      <Outlet /> 
    </div>
  );
};
export default DashLayout;
