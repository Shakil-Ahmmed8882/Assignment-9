import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Root = () => {
  return (
    <div className="px-3">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
