import React, { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()
export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user') || null)
    )

    const login = async (input) => {
        try {
            const res = await axios.post(
                'http://127.0.0.1:5000/api/auth/signin',
                input
            )
            setCurrentUser(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const logout = async (input) => {
        await axios.post('http://127.0.0.1:5000/api/auth/logout')
        setCurrentUser({})
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])
    return (
        <MyContext.Provider value={{ login, logout, currentUser }}>
            {children}
        </MyContext.Provider>
    )
}
