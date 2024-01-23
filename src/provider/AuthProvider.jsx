import React, { createContext } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const AuthContext = createContext('')
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  

    // Register with Email And Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        createUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;