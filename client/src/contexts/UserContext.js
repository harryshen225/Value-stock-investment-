import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();
export default function UserContextProvider(props) {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        venderId: '',
        error: null,
        authenticated: false
    });

    useEffect(() => {
        fetch("/auth/login", {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }).then(res => {
            if (res.status === 200) return res.json();
            throw new Error("failed to authenticate user with vendor")
        }).then(responseJson => {
            console.log('responseJson');
            console.log(responseJson);
            setUser({
                venderId: responseJson.venderId,
                email: responseJson.email,
                error: null,
                fullName: responseJson.fullName,
                authenticated: true
            })
        }).catch(err => {

            console.log(err);
            setUser({
                ...user,
                error: "failed to login",
                authenticated: false
            })
        })
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    )
}
