import React, { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const authInfo = {
        shafin: 25
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;