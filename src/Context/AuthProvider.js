import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading , setLoading] = useState(true)

    // sign in with google 
    const googleLogin = ()=>{
        return signInWithPopup(auth, GoogleProvider)
    }

    // user create with email and password 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login with email and password 
    const loginUser = (email, password )=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile 
    const userProfile = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // user log out 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // user observer 
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
    },[])
    const authInfo = {
        googleLogin,
        createUser,
        loginUser,
        userProfile,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;