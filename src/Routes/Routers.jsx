import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/🟢 Root/Root";
import Home from "../Pages/🏠Home/Home";
import CourseDetails from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetails";
import DetailLayout from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetailLayout/DetailLayout";
import SignIn from "../Pages/Form/SignIn";
import Register from "../Pages/Form/Register";
import Private from "../Pages/🔒Private-Route/Private";
import Profile from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Profile/Profile";
import MyCourses from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/My-courses/MyCourses";
import Syllabus from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Syllabus/Syllabus";
import Events from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Events/Events";
import Blog from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Blog/Blog";
import Instructors from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Instructors/Instructors";
import Certification from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Certification/Certification";
import Feedback from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Feedback/Feedback";
import HelpCenter from "../Pages/🏠Home/Courses/🔍Course-Details/detail-Container/Help-Center/HelpCenter";
import Courses from "../Pages/🏠Home/Courses/Courses";
import FAQ from "../Pages/🏠Home/FAQ";
import MyBookings from "../Pages/🔒Private-Route/My-Bookings/MyBookings";
import Notifications from "../Pages/🔒Private-Route/Notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement:<h1>404</h1>
      },
      {
        path:'/course',
        element:<Private><DetailLayout></DetailLayout></Private>,
        children:[
          {
            path:'/course/:id',
            element:<Private><CourseDetails></CourseDetails></Private>
          },
          {
            path:'/course/profile',
            element:<Profile></Profile>
          },
          {
            path:'/course/myCourse',
            element:<MyCourses></MyCourses>
          },
          {
            path:'/course/syllabus',
            element:<Syllabus></Syllabus>
          },
          {
            path:'/course/events',
            element:<Events></Events>
          },
          {
            path:'/course/blog',
            element:<Blog></Blog>
          },
          {
            path:'/course/instructors',
            element:<Instructors></Instructors>
          },
          {
            path:'/course/FAQ',
            element:<FAQ></FAQ>
          },
          {
            path:'/course/certification',
            element:<Certification></Certification>
          },
          {
            path:'/course/feedback',
            element:<Feedback></Feedback>
          },
          {
            path:'/course/help-center',
            element:<HelpCenter></HelpCenter>
          },
          {
            path:'/course/profile',
            element:<Profile></Profile>
          },
          {
            path:'/course/my-bookings',
            element:<Private><MyBookings></MyBookings></Private>
          },
          {
            path:'/course/notifications',
            element:<Private><Notifications></Notifications></Private>
          },
        ]
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
      // Authenticaton
      {
        path:'/sign-in',
        element:<SignIn></SignIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },

    ],
    
  },

  // 404
  {
    path:'*',
    element:<h1 className="text-9xl font-bold">404</h1>
  }
]);

export default router;
