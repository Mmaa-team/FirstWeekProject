import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { userContext } from '../../Usercontext'
const MyFavorite = () => {
    const { currentUser } = useContext(userContext)
    const id = currentUser.id
    const [data, setData] = useState([])
    const [desplay, setDesplay] = useState(false)
    useEffect(() => {
        axios
            .get(`http://localhost:8080/favoriteItem/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }, [desplay])

    console.log(data)
    const deleteItem = (iditem) => {
        axios
            .delete(`http://localhost:8080/favoriteItem/${iditem}/${id}`)
            .then(() => {
                setDesplay(!desplay)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="mb-6  flex justify-center items-center flex-col  ">
            <h1 className="  flex justify-center font-bold text-Liver text-3xl mb-2 ">
                Your favorite items
            </h1>
            <div className="grid min-h-screen w-full p-10   justify-items-center gap-6 grid-cols-1 lg:grid-cols-3 flex-wrap items-center justify-center bg-PaleDogwood leading-3 md:grid-cols-2">
                {data &&
                    data.map((item) => {
                        return (
                            <div className="  ">
                                <div className="max-w-xs cursor-pointer rounded-lg bg-Liver p-4 shadow duration-150 hover:scale-105 hover:shadow-md">
                                    <img
                                        src={item.image}
                                        className="item-image m-auto h-[200px] w-fit self-center transition-all hover:scale-125"
                                        alt=""
                                    />
                                    <div>
                                        <div className="my-6 flex items-center justify-between px-4">
                                            <p className="font-bold text-Alabaster leading-4 mr-2">
                                                {item.name}
                                            </p>
                                            <p className="rounded-full bg-VanDyke px-2 py-0.5 text-xs font-semibold text-white">
                                                ${item.price}
                                            </p>
                                        </div>

                                        <div className="my-4 flex items-center justify-between px-4">
                                            <p className="text-sm font-semibold text-gray-500">
                                                Delete
                                            </p>
                                            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                                                <MdDelete className='text-xl w-8'
                                                    onClick={() =>
                                                        deleteItem(item.id)
                                                    }
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MyFavorite
