import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                navigate(from, {replace: true})
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const gitHubProvider = new GithubAuthProvider();
    const signInWithGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const updateProfileData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGitHub,
        updateProfileData,
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
