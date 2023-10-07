import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import auth from "../🔥 Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
//|| PROVIDER ...
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {


  // Course data
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //get courses
  useEffect(() => {
    // Fetch courses when the component mounts
    axios.get("Courses.json")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

    // AUTHENTICATION || 
   // CREATE USER 
    const createUser = (email,password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // || SIGN IN
    const logIn = (email,password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // || SIGN IN WITH GOOGLE
    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }

      // || SIGN OUT
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }

    // || TRACK USER
    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        if(currentUser){
          setUser(currentUser)
        }
        setLoading(false)
      })

      return ()=> unSubscribe()
    },[])



  const data = {
    courses,
    createUser,
    logIn,
    logOut,
    googleSignIn,
    user,
    loading
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
