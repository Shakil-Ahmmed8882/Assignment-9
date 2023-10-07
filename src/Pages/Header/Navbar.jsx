import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center h-14">
        <div className="navbar-start">
          <NavLink className="navbar-item">Ripple UI</NavLink>
        </div>
        <div>
          <NavLink to='/' className="navbar-item">Home</NavLink>
          <NavLink className="navbar-item">About</NavLink>
          <NavLink className="navbar-item">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
