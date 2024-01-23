import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';

export const AuthContext = createContext('')
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   

    // Register with Email And Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update Profile  
    const updateProfileData = (user, name, photo) => {
        console.log(user, name, photo);
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
           
    };

    // Display last Logged User 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    }, [])



    const userInfo = {
        user,
        createUser,
        updateProfileData,
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;