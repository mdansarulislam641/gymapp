import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebase/firebase.config';
const AUTH_CONTEXT = createContext();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
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

    // users activity look
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=> unSubscribe();
    },[])
    const authInfo = {
        user , 
        createNewUser,
        loginUser
    }
    console.log(user,"this is user")
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