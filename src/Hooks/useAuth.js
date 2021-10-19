import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => useContext(AuthContext); //must return useContext

export default useAuth;
