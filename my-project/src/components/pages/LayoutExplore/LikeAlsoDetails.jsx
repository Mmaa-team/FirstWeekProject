import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../../MyContext.jsx'
import { FaHeart } from 'react-icons/fa'

import { useSpring, animated, config } from 'react-spring'
import { Link } from 'react-router-dom'
const Item = ({ collectionId, status, gender, name, price, image }) => {
    window.scrollTo(0, 100)
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

function LikeAlsoDetails({ data }) {
    const slideIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: config.molasses,
        reset: true,
    })

    const { sortedItems } = useContext(MyContext)

    return (
        <div>
            <div className="container mt-10 border-t-2 py-14 text-center">
                <h3 className="text-white text-3xl  ">YOU WILL LIKE ALSO</h3>
                <animated.div
                    style={slideIn}
                    className="all-products w-full px-6"
                >
                    <div className="grid grid-cols-1 gap-2 pt-16 md:grid-cols-2 xl:grid-cols-3">
                        {sortedItems.length > 0 &&
                            sortedItems
                                .filter(
                                    (item) => item.category === data.category
                                )
                                .map((item) => (
                                    <Item key={item.collectionId} {...item} />
                                ))}
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export default LikeAlsoDetails
