import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/🟢 Root/Root";
import Home from "../Pages/🏠Home/Home";
import CourseDetails from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetails";
import DetailLayout from "../Pages/🏠Home/Courses/🔍Course-Details/CourseDetailLayout/DetailLayout";

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
        element:<DetailLayout></DetailLayout>,
        children:[
          {
            path:'/course/:id',
            element:<CourseDetails></CourseDetails>
          }
        ]
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
