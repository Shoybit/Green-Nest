import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config.js"; 
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const updateUserProfile = async (newData) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, newData);
    setUser({ ...auth.currentUser });
  };

  const value = { user, loading, updateUserProfile };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
