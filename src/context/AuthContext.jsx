import { Spinner } from '@nextui-org/react';
import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {},

    });


    const [loading, setLoading] = useState(true)


    // Handle user state changes
    function onAuthChanged(user) {
        if (user) {
            console.log("user =>", user)
            setUser({ isLogin: true, userInfo : {
                name: user?.displayName,
                photoUrl: user?.photoURL,
                email: user?.email,
            } })
        } else {
            setUser({ isLogin: false, userInfo: {} })
        }
        setLoading(false)
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {
                loading ?
                    <div className='w-full h-96 flex justify-center items-center'>
                        <Spinner />
                    </div>
                    : (
                        children
                    )}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;
