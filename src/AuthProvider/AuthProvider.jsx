import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import auth from "../🔥 Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
//|| PROVIDER ...
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {


  // Course data
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [courseLoading,setCourseLoading] = useState(true)

  //get courses
  useEffect(() => {
    // Fetch courses when the component mounts
    axios.get("Courses.json")
      .then((response) => {
        setCourses(response.data);
        setCourseLoading(false)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [courseLoading]);

    // AUTHENTICATION || 
   // CREATE USER 
    const createUser = (email,password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // UPDATATE PROFILE
    const updateUserProfile = (name,imgUrl) => {
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: imgUrl
      })
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
      const unSubscribe = onAuthStateChanged(auth, (user)=> {
        if(user){
          setUser(user)
        }
        setLoading(false)
      })

      return ()=> unSubscribe()
    },[])


    console.log(courseLoading)

  const data = {
    courses,
    createUser,
    updateUserProfile,
    logIn,
    logOut,
    googleSignIn,
    user,
    courseLoading,
    loading,
  }

  console.log(courseLoading)

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
