import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../utils/UseContext";
import menu from "../../../src/assets/img/menu.png";
import bell from "../../../src/assets/img/notification-bell.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [isLogout, setIsLogOut] = useState(!user);

  useEffect(() => {
    if (!user) {
      setIsLogOut(true);
    } else {
      setIsLogOut(false);
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setIsLogOut(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="md:flex items-center border-b h-14 py-8 justify-between px-3">
        <div className="relative -top-5 md:static md:navbar-start">
          <h1 className="text-2xl font-bold">
            Skil<span className="text-primary-clr text-3xl">lery</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>

          {user && !isLogout ? (
            <>
              <NavLink to="/course/my-bookings">Bookings</NavLink>
              <div className="flex gap-1 items-center">
                <img src={bell} className="w-6" alt="" />
                <NavLink to="/course/notifications">Notifications</NavLink>
              </div>
            <div className="dropdown hidden md:flex">
              <label className="" tabIndex="0">
                <img
                  className="w-[40px] h-[40] object-cover rounded-full"
                  src={user.photoURL ? user.photoURL : 'https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?pid=ImgDet&rs=1'}
                  alt=""
                  />
              </label>
              <div className="dropdown-menu p-5">
                <Link to="/course/profile" className="dropdown-item text-sm">
                  Profile
                </Link>
                <NavLink onClick={handleLogOut} to="/sign-in">
                  Logout
                </NavLink>
              </div>
            </div>
                  </>
          ) : (
            <NavLink to="/sign-in">Sign in</NavLink>
          )}
        </div>
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden cursor-pointer flex absolute top-5 right-6">
        <img className="w-6" src={menu} alt="" />
      </div>
      <div
        className={`flex flex-col md:hidden absolute right-0 bg-black w-[300px] rounded text-white z-20 justify-evenly items-center space-y-11 py-8 ${
          openMenu ? "block" : "hidden"
        }`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>

        {user && !isLogout ? (
          <>
            <NavLink to="/course/profile">Profile</NavLink>
            <NavLink to="/course/my-bookings">Bookings</NavLink>
            <NavLink to="/course/notifications">Notifications</NavLink>
          <NavLink onClick={handleLogOut} to="/sign-in">
            Logout
          </NavLink>
          </>
        ) : (
          <NavLink to="/sign-in">Sign in</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
