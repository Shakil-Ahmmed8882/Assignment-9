import axios from "axios";
import Course from "./Course";
import "./course.css";
import courseBg from "../../../assets/img/Course-icon.png";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [courseLoading,setCourseLoading] = useState(true)


  useEffect(() => {
    // Fetch courses when the component mounts
    axios.get("/Courses.json")
    .then((response) => {
      setCourses(response.data);
      setCourseLoading(false)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);




  if(courseLoading){
    return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> 
  }
  return (
    <div className="relative">
      
      <div className="grid grid-cols-4 w-full gap-2 bg-gray-100">
        <div className="col-span-1 bg-[#161616] hidden md:block">
          {courses?.map((course) => (
            <p
              className="p-3 bg-[#222222] text-white rounded py-5 m-4 "
              key={course.id}>
              {course.title}
            </p>
          ))}
        </div>
        <div className={`cols-3-auto col-span-4 md:col-span-3 px-4 py-8`}>
          {courses?.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
