import React, { useContext, useEffect, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../MyContext.jsx'

const Item = ({ collectionId, status, gender, name, price, image }) => {
    const [like, setLike] = useState(false)
    const [likeAnimation, setLikeAnimation] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLikeAnimation(false)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [likeAnimation])

    const slideIn = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: config.wobbly,
        reset: true,
    })

    return (
        <animated.div
            style={slideIn}
            className="item-box relative flex flex-col items-center justify-start rounded-md border border-gray-300 bg-white p-4 font-medium shadow-md"
        >
            <Link to={`/${collectionId}/${name.replaceAll(' ', '-')}`}>
                <img
                    src={image}
                    className="item-image m-auto h-[200px] w-fit self-center transition-all hover:scale-125"
                    alt=""
                />
                <div className="item-info mt-3 flex justify-start gap-7 font-normal">
                    <p className="tracking-widest">{status}</p>
                    <p>{gender}</p>
                </div>
                <div className="item-description mt-3 self-start">
                    <p className="item-name">{name}</p>
                    <p className="item-price mt-3 text-lg">$ {price}</p>
                </div>
            </Link>

            <FaHeart
                className={`heart-icon ${like ? 'text-red-500 ' : ''} ${
                    likeAnimation
                        ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 transform transition-all'
                        : 'relative self-end'
                } cursor-pointer text-3xl`}
                onClick={() => {
                    setLike(!like)
                    setLikeAnimation(!likeAnimation)
                }}
            />
        </animated.div>
    )
}

function AllProducts() {
    const { setHandleFilter, sortedItems } = useContext(MyContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timeoutId)
    }, [])

    const slideIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: config.molasses,
        reset: true,
    })

    const handleSortChange = (e) => {
        const sortBy = e.target.value
        let toFilter
        if (sortBy === 'Available') {
            toFilter = 'available'
        } else if (sortBy === 'Incoming') {
            toFilter = 'Incoming'
        } else if (sortBy === 'OnSale') {
            toFilter = 'On Sale'
        } else {
            toFilter = 'All'
        }

        setHandleFilter(toFilter)
    }

    return (
        <animated.div style={slideIn} className="all-products w-full px-6">
            <div className="container">
                <div className="header flex items-center justify-between">
                    <p>
                        {loading ? 'Loading...' : `${sortedItems.length} Items`}
                    </p>
                    <select
                        className="sort-select w-40 rounded-md border bg-transparent px-4 py-2 text-white outline-none transition-all focus:outline-none"
                        onChange={handleSortChange}
                    >
                        <option
                            value=""
                            disabled
                            hidden
                            defaultValue
                            className="sort-option bg-[#d3a48974] text-black"
                        >
                            Sort By
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="All"
                        >
                            All
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="Available"
                        >
                            Available
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="Incoming"
                        >
                            Incoming
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="OnSale"
                        >
                            On Sale
                        </option>
                    </select>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-16 md:grid-cols-2 xl:grid-cols-3">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        sortedItems.length > 0 &&
                        sortedItems.map((item) => (
                            <Item key={item.collectionId} {...item} />
                        ))
                    )}
                </div>
            </div>
        </animated.div>
    )
}

export default AllProducts