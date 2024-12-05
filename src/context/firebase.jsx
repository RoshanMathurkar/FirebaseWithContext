import { initializeApp } from "firebase/app";
import { createContext } from "react";
import { useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIVLl2tE-LtSj653248CGzEwXPYOKD0Hs",
  authDomain: "fir-context-4422b.firebaseapp.com",
  projectId: "fir-context-4422b",
  storageBucket: "fir-context-4422b.firebasestorage.app",
  messagingSenderId: "448977240693",
  appId: "1:448977240693:web:fe8cf16f89521a2cc4ee3c",
  measurementId: "G-S0BQETE7ZS",
  databaseURL: "https://fir-context-4422b-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase();
//console.log(database);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const putData = (key, data) => set(ref(database, key), data);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password).then(
      (value) => console.log("Success")
    );
  };
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
