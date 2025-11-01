import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/config";

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
           
                setFirebaseUser(user)
                setLoading(false)
                // ...
            } else {
               setFirebaseUser(null)
                
            }
            setLoadin(true)
        });

        return unsubscribe
    }, [])


    return (
        <AuthContext.Provider value={{ firebaseUser, loading }}>
            {children}
        </AuthContext.Provider>
    )   
}


export { AuthProvider }
