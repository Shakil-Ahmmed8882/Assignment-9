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
    speaker,
    learningObjectives,
    reviews,
    //     materials,
    //     calendarDate,
    //     certification,
    //     communitySupport,
  } = selectedCourse;


  if (courseLoading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="px-6">
      <div className="grid space-y-2 grid-cols-2 gap-2 w-full ">
        <div className="flex-1 -rotate-2 ">
          <img className="w-full" src={imageUrl} alt="" />
          <div className="p-2 pb-11 bg-[#f5f5f5]">
            <div className="text-5xl font-bold pb-3 -pt-2">{title}</div>
            <p>
              {description} We are serious about your progress. If you commit
              yourself to never stop learnning we are with you any help you
              need. See in the course. Happy learning 🤞🏼
            </p>
            <p>
              <h1 className="text-1xl font-bold">Syllabus:</h1>
              <p>Daily Modules: {syllabus.modules}</p>
              <p>Quizzes: 10/15</p>
              <p>Assignments: 20</p>
              <p></p>
            </p>
          </div>
        </div>
        <div className="space-y-3 bg-primary-clr rotate-2 p-3 text-white">
          <h1 className="text-6xl font-bold">Course Details</h1>
          <p>
            Duration: <span>{duration}</span>
          </p>
          <p>
            Date: <span>{date}</span>
          </p>
          <p>
            Time: <span>{time}</span>
          </p>
          <p>
            Location: <span>{location}</span>
          </p>
          <div>
            <h1 className="text-2xl font-bold">Learning Objectives</h1>
            {learningObjectives?.map((obj, idx) => (
              <p className="space-y-3" key={idx}>
                {obj}
              </p>
            ))}
          </div>
          {/* topics */}
          <div>
            <h1 className="text-2xl font-bold">Topics</h1>
            <div className="space-y-1">
              {topics?.map((topic, idx) => (
                <p key={idx}>{topic}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* user comment */}
      <div>
        <h1 className="text-3xl font-bold pt-8">Students&apos; Comments</h1>
        <div>
          <div className="flex gap-2 pt-3 pb-8">
            {reviews?.map((review, idx) => {
              const { user, rating, comment } = review;
              return (
                <div
                  className="bg-[#4b4b4b1b] space-y-1 rounded shadow p-3"
                  key={idx}>
                  <h1>{user}</h1>
                  <p>Ratings: {rating}</p>
                  <p>comment: {comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Tutors */}
      <div className=" space-y-2">
        <h1 className="text-3xl font-bold ">Instructors`</h1>
        <div className="flex gap-3 p-3 bg-[#efefef]">
          <img
            className="w-20 rounded-full h-20 object-cover"
            src="https://th.bing.com/th/id/R.edef308ba89f098b02e694b67411be6d?rik=%2fk3%2fC1v8RjKEvQ&pid=ImgRaw&r=0"
            alt=""
          />
          <div>
            <p>Name: {speaker.name}</p>
            <p>Experience: {speaker.experience}</p>
            <p> Graduation: {speaker.graduation}</p>
            <p> Contact: {speaker.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
