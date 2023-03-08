import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      // need clean up funtion to avoid mem leak if you're listening a realtime db
      unsubscribe();
    };
  }, []);
  const updateAdminRole = (role) => {
    setIsAdmin(role);
    console.log("is admin: ", role);
  };
  return (
    <AuthContext.Provider value={{ user, updateAdminRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
