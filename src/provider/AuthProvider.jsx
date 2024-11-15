import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user , setUser] = useState(null)

    const [loading , setLoading] = useState(true)
    console.log(loading,user);

    const createNewUser = (email , password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth , email , password)
    }

    const userLogin = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = ()=> {
        setLoading(true)
       return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
    }

    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    },[auth])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;