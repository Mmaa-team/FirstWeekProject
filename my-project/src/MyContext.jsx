
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [sortedItems, setSortedItems] = useState([])
    const [handleFilter, setHandleFilter] = useState('All')
    const [brands, setBrands] = useState([])
    const [filterBrands, setFilterBrands] = useState('')
    // const [filterCollections, setFilterCollections] = useState([])
    // const [itemCollections, setItemCollections] = useState([])
    const [category, setCategory] = useState([])
    const [filterCategory, setFilterCategory] = useState(null)

    useEffect(() => {
        Filter_W_Status(setSortedItems, handleFilter)
        // fetchCollection(setFilterCollections, itemCollections, setSortedItems)
        fetchBrand(setBrands, filterBrands, setSortedItems)
        fetchCategory(setCategory, filterCategory, setSortedItems)
    }, [handleFilter, filterBrands, filterCategory])
    return (
        <MyContext.Provider
            value={{
                setHandleFilter,
                sortedItems,
                setBrands,
                brands,
                // filterCollections,
                setFilterBrands,
                filterBrands,
                setCategory,
                category,
                filterCategory,
                setFilterCategory,
                // setItemCollections,
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

const Filter_W_Status = async (setSortedItems, handleFilter) => {
    setSortedItems([])
    try {
        if (handleFilter === 'All') {
            const result = await axios.get('http://localhost:8080/items')
            setSortedItems(result.data)
        } else {
            const result = await axios.get(
                `http://localhost:8080/items/item/status/${handleFilter}`
            )
            setSortedItems(result.data)
        }
    } catch (err) {
        console.log(err)
    }
}

// const fetchCollection = async (
//     setFilterCollections,
//     itemCollections,
//     setSortedItems
// ) => {
//     try {
//         const result = await axios.get(`http://localhost:8080/collections`)

//         setFilterCollections(result.data)

//         if (itemCollections) {
//             const result = await axios.get(
//                 `http://localhost:8080/item/collections/${itemCollections}`
//             )
//             setSortedItems(result.data)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

const fetchBrand = async (setBrands, filterBrands, setSortedItems) => {
    setSortedItems([])

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
    setSortedItems([])

    try {
        const result = await axios.get('http://localhost:8080/items')
        const uniqueCategories = new Set()
        result.data.forEach((item) => {
            uniqueCategories.add(item.category)
        })
        const uniqueCategoriesArray = Array.from(uniqueCategories)
        setCategory(uniqueCategoriesArray)
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