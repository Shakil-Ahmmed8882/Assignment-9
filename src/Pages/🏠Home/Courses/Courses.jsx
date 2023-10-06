import useAuth from "../../../utils/UseContext";
import Course from "./Course";
import './course.css'

const Courses = () => {
      const {courses} = useAuth()

      return (
            <div className="grid grid-cols-4 w-full gap-2 bg-gray-100">
                  <div className="col-span-1 bg-white hidden md:block">
                  {courses?.map(course => <p className="p-3 bg-[#f4f4ff] my-4 mx-3 rounded" key={course.id}>{course.title}</p>)}
                  </div>
                  <div className={`cols-3-auto col-span-4 md:col-span-3`}>
                        {
                              courses?.map(course => <Course key={course.id} course={course}></Course>)
                        }
                  </div>
            </div>
      );
};

export default Courses;