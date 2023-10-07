import { NavLink } from "react-router-dom";
import useAuth from "../../utils/UseContext";

const Navbar = () => {
  const {user,logOut} = useAuth()


  const handleLogOut = () => {
    logOut()
    .then(()=> console.log('logOut'))
    .catch(err => console.error(err))
  }


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
           user? <NavLink onClick={handleLogOut} to='/sign-in' className='btn bg-primary-clr text-[#fff]'>Logout</NavLink>
            : <NavLink to='/sign-in' className='btn bg-primary-clr text-[#fff]'>Sign in</NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
