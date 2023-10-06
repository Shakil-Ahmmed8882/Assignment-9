import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/🏠Home/Home";

const router = createBrowserRouter([
      {
        path: "/",
        element:<Root></Root>,
        errorElement:<div>Error</div>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            }
        ]
      },
    ]);
    

export default router