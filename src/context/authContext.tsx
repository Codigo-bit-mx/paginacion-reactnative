import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: 'undefined',
    favoriteIcon: 'undefined'
}

export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
    logout: () => void
    changeName:( name:string ) => void
    changeNameIcon: (iconName: string) => void   
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any ) => {

const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }
    
    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    const changeName = (name: string) => {
        dispatch({
            type: 'changeName',
            payload: name
        })
    }

    const changeNameIcon = (iconName: string) => {
        dispatch({
            type: 'changeNameIcon',
            payload: iconName
        })
    }


     return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeName,
            changeNameIcon,
        }}>
            {children}
        </AuthContext.Provider>
     )
}
