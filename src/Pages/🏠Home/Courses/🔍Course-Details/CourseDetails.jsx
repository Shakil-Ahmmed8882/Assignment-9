import { useParams } from "react-router-dom";
// import useAuth from "../../../../utils/UseContext";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseDetails = () => {
  // const { courses} = useAuth();
  const { id } = useParams();
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
  
  console.log(courses)

console.log(courseLoading)


  if(courseLoading){
    return <p>loading....</p>
  }


  const selectedCourse = courses?.find((course) => course.id == id);
  const {
    title,
    description,
    imageUrl,
    duration,
    topics,
    date,
    syllabus,
    time,
    location,
    learningObjectives,
    //     materials,
    //     calendarDate,
    //     certification,
    //     communitySupport,
  } = selectedCourse;


  if (courseLoading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="md:px-6 md:p-7">
      <div className="grid space-y-2 grid-cols-1 lg:grid-cols-2 pt-8 md:pt-0 gap-2 w-full ">
        <div className="flex-1 lg:-rotate-2 p-3 ">
          <img className="w-full" src={imageUrl} alt="" />
          <div className="p-2 pb-11 bg-[#f5f5f5]">
            <div className="text-3xl md:text-5xl font-bold pb-3 -pt-2">{title}</div>
            <p>
              {description} We are serious about your progress. If you commit
              yourself to never stop learnning we are with you any help you
              need. See in the course. Happy learning 🤞🏼
            </p>
            <p>
              <h1 className="text-2xl pt-2 pb-1 font-bold">Syllabus:</h1>
              <p>Daily Modules: {syllabus.modules}</p>
              <p>Quizzes: 10/15</p>
              <p>Assignments: 20</p>
              <p></p>
            </p>
          </div>
        </div>
        <div className="space-y-3 bg-[#000] lg:rotate-2 p-4 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pt-3">Course Details</h1>
          <p className="text-[#adadad]">
            Duration: <span>{duration}</span>
          </p>
          <p className="text-[#adadad]">
            Date: <span>{date}</span>
          </p>
          <p className="text-[#adadad]">
            Time: <span>{time}</span>
          </p>
          <p className="text-[#adadad]">
            Location: <span>{location}</span>
          </p>
          <div>
            <h1 className="text-2xl font-bold mb-2">Learning Objectives</h1>
            {learningObjectives?.map((obj, idx) => (
              <p className="space-y-3 text-[#adadad]" key={idx}>
                {obj}
              </p>
            ))}
          </div>
          {/* topics */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Topics</h1>
            <div className=" text-[#adadad]">
              {topics?.map((topic, idx) => (
                <p key={idx}>{topic}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CourseDetails;
