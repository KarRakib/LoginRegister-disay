import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

 const AuthContext = createContext()
const auth = getAuth()
const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Kar Rakib'})
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const singInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const authInfo = {user,createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;