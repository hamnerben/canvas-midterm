import {createContext, useState, useContext} from 'react';
import {useApi} from "../apiV3";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        setIsLoading(true);
        const useApi = useApi('users');

        const fetchedUser = useApi.get(email);
        if (fetchedUser && fetchedUser.password === password) {
            setUser(fetchedUser);
        } else if(!fetchedUser) {
            setError('Invalid email');
        } else {
            setError('Invalid password');
        }
        setIsLoading(false);
    }

    const register = async (email, password) => {
        setIsLoading(true);
        const useApi = useApi('users');
        
        if (useApi.get(email)) {
            setError('Email already exists');
        } else {
            let user = {email, password};
            let id = await useApi.create('users', user);
            user.id = id;
            setUser(user);
        }
        setIsLoading(false);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, error, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
}