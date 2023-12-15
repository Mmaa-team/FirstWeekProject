import React, { useContext, useEffect, useState } from 'react'
import { storage } from '../firebase/firebaseImg'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UploadImage = ({ change, setUploaded, uploaded }) => {
    const navigate = useNavigate()
    const [imageUpload, setImageUpload] = useState(null)

    const changeBgImage = async (e) => {
        e.preventDefault()
        const imageRef = ref(storage, `img/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload)

        const downloadurl = await getDownloadURL(imageRef)
        await axios
            .put(`http://localhost:8080/creators/bgimage/1`, {
                bgImage: downloadurl,
            })
            .then(() => {
                setUploaded(!uploaded)
            })
    }

    const changePfImage = async (e) => {
        e.preventDefault()
        const imageRef = ref(storage, `img/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload)

        const downloadurl = await getDownloadURL(imageRef)
        await axios.put(`http://localhost:8080/creators/pfimage/1`, {
            pfImage: downloadurl,
        })
        .then(() => {
            setUploaded(!uploaded)
        })
    }

    const changebio = (bio) => {
        axios
            .put(`http://localhost:8080/creators/bio/1`, { bio })
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
    }

    const changestatus = (bio) => {
        axios
            .put(`http://localhost:8080/creators/status/1`, { bio })
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
    }

    const changeaddress = (bio) => {
        axios
            .put(`http://localhost:8080/creators/address/1`, { bio })
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
    }

    if (change === 'bgimage')
        return (
            <div className="flex items-center justify-center p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="px-9 py-6">
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setImageUpload(e.target.files[0])
                                    }
                                />
                                <label
                                    for="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>

                            
                        </div>

                        <div>
                            <button
                                onClick={async (e) => {
                                    console.log('test')
                                    changeBgImage(e)
                                }}
                                className="hover:shadow-form w-full rounded-md bg-VanDyke px-8 py-3 text-center text-base font-semibold text-white outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    else if (change === 'pfimage')
        return (
            <div className="flex items-center justify-center p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="px-9 py-6">
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setImageUpload(e.target.files[0])
                                    }
                                />
                                <label
                                    for="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>

                            
                        </div>

                        <div>
                            <button
                                onClick={async (e) => {
                                    changePfImage(e)
                                }}
                                className="hover:shadow-form w-full rounded-md bg-VanDyke px-8 py-3 text-center text-base font-semibold text-white outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default UploadImage
