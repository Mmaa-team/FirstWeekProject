import React, { useContext, useEffect, useState } from 'react'
import { storage } from '../firebase/firebase.jsx'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UploadImage = ({ change, setUploaded, uploaded }) => {
    const navigate = useNavigate()
    const [imageUpload, setImageUpload] = useState(null)
    const [chang,setChang]=useState(null)
    const [kind,setKind]=useState('')

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
 const handleChange=(kind,chang,e)=>{
    e.preventDefault();
    var obj={}
    obj[kind]=chang
    console.log(obj)
    console.log(kind,chang)
    axios
            .put(`http://localhost:8080/creators/${kind}/1`, obj)
            .then((response) => console.log(response))
            .catch((error) => console.error(error))

 }
    // const changebio = (bio) => {
    //     axios
    //         .put(`http://localhost:8080/creators/bio/1`, { bio })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.error(error))
    // }

    // const changestatus = (bio) => {
    //     axios
    //         .put(`http://localhost:8080/creators/status/1`, { bio })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.error(error))
    // }

    // const changeaddress = (bio) => {
    //     axios
    //         .put(`http://localhost:8080/creators/address/1`, { bio })
    //         .then((response) => console.log(response))
    //         .catch((error) => console.error(error))
    // }

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
        else if (change === 'profile')
        return (
            <div className="flex items-center justify-center p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                <div className="flex flex-col items-center justify-center h-screen light">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profil </h2>
    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value="status" name="bordered-radio" className="w-4 h-4 text-Liver bg-gray-100 border-gray-300 focus:ring-Liver dark:focus:ring-Liver dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e)=> setKind('status')}/>
    <label for="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Status</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input checked id="bordered-radio-2" type="radio" value="bio" name="bordered-radio" className="w-4 h-4 text-Liver bg-gray-100  border-gray-300 focus:ring-Liver dark:focus:ring-Liver dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e)=> setKind('bio')}/>
    <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Bio</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input checked id="bordered-radio-2" type="radio" value="adress" onClick={(e)=> setKind('adress')} name="bordered-radio" className="w-4 h-4 text-Liver bg-gray-100 border-gray-300 focus:ring-Liver dark:focus:ring-Liver dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
</div>
    </div>
    <form className="flex flex-col">
      <input placeholder="Enter your edit here" className="bg-gray-100 text-gray-800 border-0 rounded-md mt-2 p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-Liver transition ease-in-out duration-150" onChange={(e)=>{setChang(e.target.value)}} type="text"/>

      <button className="bg-gradient-to-r bg-VanDyke to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-Liver hover:to-PaleDogwood transition ease-in-out duration-150" onClick={(e)=>{handleChange(kind,chang,e)}} type="submit">Edit</button>
    </form>


  </div>
</div>

                </div>
            </div>
        )
}

export default UploadImage
