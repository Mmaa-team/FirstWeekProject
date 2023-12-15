import React, { createContext, useEffect, useState } from 'react'
import { storage } from './firebase/firebaseImg'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

export const MyContext = createContext()
export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [url, setUrl] = useState('')
    console.log(url)
    // JSON.parse(localStorage.getItem("user")||null)
    const login = async (input, role) => {
        try {
            const res = await axios.post(
                `http://127.0.0.1:8080/auth/signin/${role}`,
                input
            )
            setCurrentUser(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const logout = async (input) => {
        await axios.post('http://127.0.0.1:8080/auth/logout')
        setCurrentUser({})
    }
    //    useEffect(()=>{
    //     localStorage.setItem("user",JSON.stringify(currentUser))
    //     },[currentUser])

    /////////////////////////////upload Image Firebase///////////////////////////////////////:
    const uploadImage = async (imgUpload) => {
        if (imgUpload === null) return
        const imageRef = ref(storage, `img/${imgUpload.name + v4()}`)
        await uploadBytes(imageRef, imgUpload)

        const downloadurl = await getDownloadURL(imageRef)
        console.log(downloadurl, 'brgb')
        setUrl(downloadurl)
        return downloadurl
    }
    return (
        <MyContext.Provider
            value={{ login, logout, currentUser, uploadImage, url }}
        >
            {children}
        </MyContext.Provider>
    )
}
