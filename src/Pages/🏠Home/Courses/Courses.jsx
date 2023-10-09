import useAuth from "../../../utils/UseContext";
import Course from "./Course";
import "./course.css";
import courseBg from "../../../assets/img/Course-icon.png";

const Courses = () => {
  const { courses } = useAuth();
  return (
    <div className="relative">
      <div className="">
          <img className="w-20" src={courseBg} alt="" />
        <h1 className=" text-3xl md:text-6xl font-bold md:text-center pb-6">
          Courses
        </h1>
      </div>
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
        <div className={`cols-3-auto col-span-4 md:col-span-3 px-4`}>
          {courses?.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
