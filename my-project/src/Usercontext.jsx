import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const userContext = createContext()
export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user') || null)
    )

    // JSON.parse(localStorage.getItem("user")||null)
    const login = async (input, role) => {
        try {
            const res = await axios.post(
                `http://127.0.0.1:8080/auth/signin/${role}`,
                input
            )
            setCurrentUser(res.data)
            console.log('done')
        } catch (err) {
            console.error(err)
        }
    }
console.log(currentUser)
    const signing = async (input, role) => {
        try {
            const res = await axios.post(
                `http://127.0.0.1:8080/auth/signupgoogle/${role}`,
                input
            )
            setCurrentUser(res.data)
            console.log(currentUser)
        } catch (err) {
            console.error(err)
        }
    }
    const logout = async (input) => {
        await axios.post('http://127.0.0.1:8080/auth/logout')
        setCurrentUser(null)
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])
    return (
        <userContext.Provider value={{ login, logout, currentUser, signing }}>
            {children}
        </userContext.Provider>
    )
}
