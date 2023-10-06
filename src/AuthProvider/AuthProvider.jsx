import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // Course data
  const [courses, setCourses] = useState([]);

  //get courses
  useEffect(() => {
    // Fetch courses when the component mounts
    axios
      .get("Courses.json")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const data = {
    courses,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
