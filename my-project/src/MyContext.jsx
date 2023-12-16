import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [sortedItems, setSortedItems] = useState([])
    const [handleFilter, setHandleFilter] = useState('')
    const [brands, setBrands] = useState([])
    const [filterBrands, setFilterBrands] = useState('')
    const [collections, setCollections] = useState([])
    const [category, setCategory] = useState([])
    const [filterCategory, setFilterCategory] = useState(null)

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

    const logout = async () => {
        try {
            await axios.post('http://127.0.0.1:8080/auth/logout')
            setCurrentUser({})
        } catch (err) {
            console.log(err)
        }
    }

    const signing = async (input, role) => {
        try {
            const res = await axios.post(
                `http://127.0.0.1:8080/auth/signupgoogle/${role}`,
                input
            )
            setCurrentUser(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Filter_W_Status(setSortedItems, handleFilter)
        fetchCollection(setCollections, setSortedItems)
        fetchBrand(setBrands, filterBrands, setSortedItems)
        fetchCategory(setCategory, filterCategory, setSortedItems)
    }, [handleFilter, filterBrands])
    return (
        <MyContext.Provider
            value={{
                login,
                logout,
                signing,
                currentUser,
                setHandleFilter,
                sortedItems,
                setBrands,
                brands,
                collections,
                setFilterBrands,
                filterBrands,
                setCategory,
                category,
                filterCategory,
                setFilterCategory,
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

const Filter_W_Status = async (setSortedItems, handleFilter) => {
    console.log(handleFilter)
    try {
        if (handleFilter === "") {
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

const fetchCollection = async (setCollections, setSortedItems) => {
    try {
        const result = await axios.get(`http://localhost:8080/collections`)
        const uniqueCollection = new Set()

        result.data.forEach((collection) => {
            uniqueCollection.add(collection.name)
        })

        const uniqueCollectionArray = Array.from(uniqueCollection)
        setCollections(uniqueCollectionArray)
    } catch (err) {
        console.log(err)
    }
}
const fetchBrand = async (setBrands, filterBrands, setSortedItems) => {
    try {
        const result = await axios.get(`http://localhost:8080/brands`)
        setBrands(result.data)

        if (filterBrands) {
            const result = await axios.get(
                `http://localhost:8080/collections/item/${filterBrands}`
            )
            setSortedItems(result.data[0].items)
        }
    } catch (err) {
        console.log(err)
    }
}

const fetchCategory = async (setCategory, filterCategory, setSortedItems) => {
    try {
        const result = await axios.get('http://localhost:8080/items')
        setCategory(result.data)
        if (filterCategory) {
            const result = await axios.get(
                `http://localhost:8080/items/brands/${filterCategory}`
            )
            setSortedItems(result.data)
        }
    } catch (err) {
        console.log(err)
    }
}