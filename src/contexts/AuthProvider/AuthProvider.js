import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
const AUTH_CONTEXT = createContext();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    // its booking modal data send state 
    const [modalData , setModalData] = useState({});
    // firebase auth
    const auth = getAuth(app)
    // for user registration
    const createNewUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth, email , password)
    }
    // user login
    const loginUser = (email , password) =>{
        return signInWithEmailAndPassword(auth,email ,password);
    }
    // reset user password
    const resetUserPassword = (email) =>{
        return sendPasswordResetEmail(auth , email)
    }

    // sign out user
    const logOutCurrentUser = () =>{
        return signOut(auth);
    }

    // users activity look
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=> unSubscribe();
    },[])
    // auth information for share anymore
    const authInfo = {
        user , 
        modalData,
        setModalData,
        createNewUser,
        loginUser,
        logOutCurrentUser,
        resetUserPassword
    }
    return (
        <AUTH_CONTEXT.Provider value={authInfo}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export const useUserContext = ()=>{
   const context = useContext(AUTH_CONTEXT)
   return context;
}

export default AuthProvider;