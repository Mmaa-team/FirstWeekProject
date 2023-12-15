import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()
export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [sortedItems, setSortedItems] = useState([])
    const [handleFilter, setHandleFilter] = useState('All')
    const [brands, setBrands] = useState([])
    const [filterBrands, setFilterBrands] = useState('')
    const [collections, setCollections] = useState([])
    const [categorys, setCategorys] = useState([])

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

    // JSON.parse(localStorage.getItem("user")||null)
    //    useEffect(()=>{
    //     localStorage.setItem("user",JSON.stringify(currentUser))
    //     },[currentUser])

    useEffect(() => {
        Filter_W_Status(setSortedItems, handleFilter)
        fetchCollection(setCollections)
        fetchBrand(setBrands, filterBrands, setSortedItems)
        fetchCategory(setCategorys)
    }, [handleFilter, filterBrands])

    return (
        <MyContext.Provider
            value={{
                login,
                logout,
                currentUser,
                setHandleFilter,
                sortedItems,
                setBrands,
                brands,
                collections,
                setFilterBrands,
                filterBrands,
                categorys,
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

const Filter_W_Status = async (setSortedItems, handleFilter) => {
    try {
        if (handleFilter === 'All') {
            const result = await axios.get('http://localhost:8080/items')
            setSortedItems(result.data)
        } else {
            const result = await axios.get(
                `http://localhost:8080/items/item/${handleFilter}`
            )
            setSortedItems(result.data)
        }
    } catch (err) {
        console.log(err)
    }
}

const fetchCollection = async (setCollections) => {
    try {
        const result = await axios.get(`http://localhost:8080/collections`)
        const uniqueCollection = new Set()

        result.data.forEach((category) => {
            uniqueCollection.add(category.name)
        })
    
        const uniqueCollectionArray = Array.from(uniqueCollection)
        setCollections(uniqueCollectionArray)
    } catch (err) {
        console.log(err)
    }
}

const fetchBrand = async (setBrands, filterBrands, setSortedItems) => {
    if (filterBrands) {
        try {
            const result = await axios.get(
                `http://localhost:8080/collections/item/${filterBrands}`
            )
            setSortedItems(result.data[0].items)
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            const result = await axios.get(`http://localhost:8080/brands`)
            setBrands(result.data)
        } catch (err) {
            console.log(err)
        }
    }
}

const fetchCategory = async (setCollections) => {
    try {
        const result = await axios.get('http://localhost:8080/items')
        setCollections(result.data)
    } catch (err) {
        console.log(err)
    }
}
