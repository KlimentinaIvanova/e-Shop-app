import { createContext, useState, useEffect } from "react";
import { firebaseConfig } from "../../src/firebase"
import firebase from "../../src/firebase";
import "../../src/firebase";

firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setCurrentUser(user); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const register = async (username, email, password, repass) => {
    if (password !== repass) {
      console.log("Passwords do not match");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
    
      await currentUser.updateProfile({
        displayName: username
      });
      setCurrentUser(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      setCurrentUser(currentUser); // set currentUser state to current user
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};