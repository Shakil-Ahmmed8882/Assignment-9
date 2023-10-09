import { NavLink, Outlet } from "react-router-dom";
import '../../Course.css'


const DetailLayout = () => {
      return (
            <div className="flex w-full h-[100vh] ">
                        <div className=" hidden md:flex flex-col black-bg-side-bar w-[280px] ">
                        <div className="flex flex-col h-screen overflow-auto justify-evenly p-4 space-y-2">
                        <NavLink to='/course/profile' className='p-3 bg-[#222222] text-white '>Profile</NavLink>
                        <NavLink to='/course/myCourse' className='p-3 bg-[#222222] text-white '>My Courses</NavLink>
                        <NavLink to='/course/syllabus' className='p-3 bg-[#222222] text-white '>Syllabus</NavLink>
                        <NavLink to='/course/events' className='p-3 bg-[#222222] text-white '>Events</NavLink>
                        <NavLink to='/course/blog' className='p-3 bg-[#222222] text-white '>Blog</NavLink>
                        <NavLink to='/course/instructors' className='p-3 bg-[#222222] text-white '>Instructors</NavLink>
                        <NavLink to='/course/FAQ' className='p-3 bg-[#222222] text-white '>FAQ</NavLink>
                        <NavLink to='/course/certification' className='p-3 bg-[#222222] text-white '>Certification</NavLink>
                        <NavLink to='/course/feedback' className='p-3 bg-[#222222] text-white '>Feedback</NavLink>
                        <NavLink to='/course/help-center' className='p-3 bg-[#222222] text-white '>Help Center</NavLink>
                        </div>
                        </div>
                              <div className="flex-1">
                        <Outlet></Outlet>

                        </div>
            </div>
      );
};

export default DetailLayout;