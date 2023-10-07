import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../utils/UseContext";


const Private = ({children}) => {
      const {user,loading} = useAuth()
      const location = useLocation()

      if(loading){
            return <p>Loading ...</p>
      }
      if(user){
            return children
      }

      return <Navigate state={location.pathname} to='/sign-in'></Navigate>
};

export default Private;