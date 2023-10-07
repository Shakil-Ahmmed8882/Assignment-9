import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/🟢 Root/Root";
import Home from "../Pages/🏠Home/Home";
import CourseDetails from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetails";
import DetailLayout from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetailLayout/DetailLayout";
import SignIn from "../Pages/Form/SignIn";
import Register from "../Pages/Form/Register";
import Private from "../Pages/🔒Private-Route/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>Error</div>,
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
            element:<CourseDetails></CourseDetails>
          }
        ]
      },
      // Authenticaton
      {
        path:'/sign-in',
        element:<SignIn></SignIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
    
  },
  // 404
  {
    path:'*',
    element:<h1 className="text-9xl font-bold">404</h1>
  }
]);

export default router;
