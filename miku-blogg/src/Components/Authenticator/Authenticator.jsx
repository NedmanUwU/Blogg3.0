import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const value = {
    currentUser,
    userLoggedIn: !!currentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
