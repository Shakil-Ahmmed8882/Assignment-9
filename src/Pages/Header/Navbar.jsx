import { Link, NavLink } from "react-router-dom";
import useAuth from "../../utils/UseContext";

const Navbar = () => {
  const {user,logOut} = useAuth()


  const handleLogOut = () => {
    logOut()
    .then(()=> console.log('logOut'))
    .catch(err => console.error(err))
  }

  console.log(user)

  return (
    <div>
      <div className="flex items-center border-b h-14 py-8 justify-between px-3">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">Skil<span className="text-primary-clr text-3xl">lery</span></h1>
        </div>
        <div className="flex gap-5 items-center">
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          {
            user && <>
              <NavLink to='/course/my-bookings'>My-Bookings</NavLink> 
              <NavLink to='/course/notifications'>Notifications</NavLink> 
            </>
          }
          {
            user ? <div className="dropdown">
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
    </div>
  );
};

export default Navbar;
