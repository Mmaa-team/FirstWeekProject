import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import { FaArrowLeftLong } from 'react-icons/fa6'

function Productdetails() {
    const { collectionId, name } = useParams()
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:8080/items/brand/collections/${collectionId}/${name.replaceAll(
                        '-',
                        ' '
                    )}`
                )
                setData(result.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [collectionId, name])

    return (
        <div>
            <div className="constainer grid grid-flow-col  items-center gap-5   rounded-lg bg-white  p-10">
                <div className="desc flex flex-col gap-8">
                    <NavLink className={'  w-fit'} to="/explore/allProducts">
                        <FaArrowLeftLong className="text-lg transition-all hover:translate-x-[-8px] " />
                    </NavLink>
                    <div className="info">
                        <p className="text-lg font-thin uppercase">
                            {data.status}
                        </p>
                        <p className="uppercase">{data.name}</p>
                        <p>$ {data.price}</p>
                    </div>
                    <div className="description">
                        <h2 className="mb-3 text-lg font-bold uppercase">
                            Description
                        </h2>
                        <p className="capitalize">{data.description}</p>
                        <p className="mt-10">
                            ID COLLECTION: {data.collectionId}
                        </p>
                    </div>
                </div>
                <div className="image">
                    <img src={data.image} alt="" />
                </div>
                <div className="by flex flex-col gap-3">
                    <button className="flex items-center gap-2 hover:font-semibold bg-VanDyke px-20 py-4 font-medium text-white">
                        ADD TO CART
                        <BsBag className="text-xl" />
                    </button>
                    <button className="flex h-14 items-center hover:font-semibold gap-2 border border-black px-20 font-medium">
                        BY WITH
                        <img
                            className="w-16 "
                            src="https://res.cloudinary.com/dc1cdbirz/image/upload/v1702598778/ck5ibqxmsap3vujrbmhh.png"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Productdetails