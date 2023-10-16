import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="px-3 ">
      <Navbar></Navbar>
      <div className="max-w-[1300px] mx-auto">
      <Outlet></Outlet>
      </div>
      <Toaster />

    </div>
  );
};

export default Root;
