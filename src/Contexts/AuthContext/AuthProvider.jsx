import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

// Context -Compnent --- AuthProvider -----
const AuthProvider = ({ children }) => {

  //Loader ,,,,,,,,,,,,,
  const[loading,setLoading]=useState(true)

  // get current user State -------sign Up ----03
  const [user, setUser] = useState(null);
  console.log(user);

  //Create User --------------------- Sign up-------- 01
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in or Login ---------------login----01
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //User signOut/Logout--------------login---02
  const logOut = () => {
    return signOut(auth);
  };

  // Update User ----------------------SignUp ---------04
  const updateUser = (updatingUser) => {
    return updateProfile(auth.currentUser, updatingUser);
  };
  console.log(user, 'line 444');

  // Getting Current user/Observe Who is loged in or sign in ---------SignUp ---- 02
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user observe ');
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    updateUser,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
