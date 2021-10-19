import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext(); //create context

const AuthProvider = ({ children }) => {
  const allContext = useFirebase(); // get all firebase auth-providers settings
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
