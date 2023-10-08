import { Link, NavLink } from "react-router-dom";
import useAuth from "../../utils/UseContext";
import menu from '../../../src/assets/img/menu.png'
import { useState } from "react";
import bell from '../../../src/assets/img/notification-bell.png'
const Navbar = () => {
  const {user,logOut} = useAuth()
  const [openMenu, setOpenMenu] = useState(false)


  const handleLogOut = () => {
    logOut()
    .then(()=> console.log('logOut'))
    .catch(err => console.error(err))
  }

  console.log(user)

  return (
    <div>
      <div className="md:flex items-center border-b h-14 py-8 justify-between px-3">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">Skil<span className="text-primary-clr text-3xl">lery</span></h1>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          {
            user && <>
              <NavLink to='/course/my-bookings'>My-Bookings</NavLink> 
              <div className="flex gap-1 items-center">
               <img src={bell} className="w-6" alt="" />
              <NavLink to='/course/notifications'>Notifications</NavLink> 
              </div>
            </>
          }
          {
            user ? <div className="dropdown hidden md:flex">
            <label className="" tabIndex="0"><img className="w-[40px] h-[40] object-cover rounded-full" src={user?.photoURL} alt="" /></label>
            <div className="dropdown-menu">
              <a tabIndex="-1" className="dropdown-item text-sm">{user.displayName}</a>
              <Link to='/course/profile' className="dropdown-item text-sm">Profile</Link>
              <a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
            <NavLink onClick={handleLogOut} to='/sign-in' className='btn bg-primary-clr text-[#fff]'>Logout</NavLink>
            </div>
          </div>: <NavLink to='/sign-in' className='btn bg-primary-clr text-[#fff]'>Sign in</NavLink>
          }
        </div>
      </div>
      <div onClick={()=> setOpenMenu(!openMenu)} className=" md:hidden flex absolute top-5 right-2">
          <img className="w-8" src={menu} alt="" />
          </div>
          <div className={`flex flex-col md:hidden absolute right-0 bg-black w-[300px] text-white z-20 justify-evenly items-center space-y-11 py-8 ${openMenu?'block':'hidden'}`}>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          {
            user && <>
            <NavLink to='/course/profile'>Profile</NavLink> 
              <NavLink to='/course/my-bookings'>My-Bookings</NavLink> 
              <NavLink to='/course/notifications'>Notifications</NavLink> 
            </>
          }
          {
            user?<NavLink onClick={handleLogOut} to='/sign-in' >Logout</NavLink>:
            <NavLink to='/sign-in'>Sign-in</NavLink>  

          }
          
          </div>
    </div>
  );
};

export default Navbar;
