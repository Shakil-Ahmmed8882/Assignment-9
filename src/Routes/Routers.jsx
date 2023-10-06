import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";

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