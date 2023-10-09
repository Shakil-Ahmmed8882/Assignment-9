import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="px-3">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />

    </div>
  );
};

export default Root;
