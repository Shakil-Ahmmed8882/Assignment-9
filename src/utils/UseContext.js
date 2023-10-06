import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

const useAuth = () => {
      const contexts = useContext(AuthContext)
      return contexts
}


export default useAuth;