import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/Firebase.init";


export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Kar Rakib' });
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
            setLoading(false)
            setUser(presentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { user, singInUser, createUser, loading, logOut, singInWithGoogle }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;