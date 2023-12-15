import React, { useEffect, useRef, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UploadImage from '../upladImage.jsx'
import { useContext } from 'react'
import { MyContext } from '../../MyContext.jsx'

const Profile = () => {
    const [creator, setCreator] = useState({})
    const  [view,setView]= useState(false)
    const [change,setChange]=useState("")
    const [fn, setFn] = useState(null)
    const [uploaded, setUploaded] = useState(false)
    const { url } = useContext(MyContext)
    const edit = useRef()

    // const id = useParams(id)
    console.log(creator)

    useEffect(() => {
        getCreator(1)
    }, [uploaded])

    /////////////////////////////////////////getCreator/////////////////////////////////////////////////////////////////
    const getCreator = (id) => {
        axios
            .get(`http://localhost:8080/creators/${id}`)
            .then((response) => {
                setCreator(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
 
    return (
        <>
            <div className="h-screen min-h-full w-full  ">
                <div className=" relative flex w-full flex-col items-center justify-center p-10">
                    <div className="relative">
                        <img
                            className="bg-container  h-[355px] w-[1040px] rounded-[5px] bg-black bg-opacity-50 brightness-50"
                            src={creator.bgImage}
                        />
                        <div
                            ref={edit}
                            data-bgImage="bgimage"
                            onClick={() => {
                                setChange("bgimage")
                                setView(!view)
                            }}
                            
                            className=" absolute bottom-2  right-[10px] flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver"
                        >
                            <FaPen className="text-md  bg-[#733709bc}-500  absolute text-BabyPowder " />
                        </div>
                    </div>

                    <div className="relative top-[-70px] flex flex-col items-center justify-center">
                        <img
                            className="  bottom-[-40px] h-[120px] w-[120px] rounded-full border-2 border-white"
                            src={creator.pfImage}
                        />

                        <div
                            ref={edit}
                            onClick={() => {
                                setChange("pfimage");
                                setView(!view)
                            }}
                            className=" absolute bottom-0 right-0 flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver"
                        >
                            <FaCamera className="text-md    bg-Liver text-white " />
                        </div>
                    </div>
                    <p className=" font-['SF Pro Display'] bottom-[50px] w-fit text-[28px] font-semibold text-VanDyke md:absolute md:bottom-[67px]">
                        {creator.fullName}
                    </p>

                    <div ref={edit}
                            data-profile="profile"
                            onClick={() => {
                                setChange("profile")
                            }}  className=" absolute bottom-0 flex h-[45px] w-[164px] items-center justify-center gap-2.5 rounded-[150px] bg-VanDyke p-2.5 md:bottom-[90px] md:right-[230px]">
                        <span className="font-['SF Pro Display'] absolute text-base font-semibold text-white">
                            Edit Profile
                        </span>
                    </div>

                    <div className="font-['SF Pro Display'] w-fit text-center text-base font-normal leading-[25px] text-VanDyke text-opacity-80 md:absolute md:bottom-[-4px] md:w-[896px]">
                        {creator.bio}
                    </div>
                </div>
                <div>
                    {view && <UploadImage uploaded={uploaded} setUploaded={setUploaded} change={change} />}
                  
                </div>

                {/* <div className="flex justify-between items-center">
                <div className="h-[371px] w-[345px] rounded-[5px] bg-white bg-opacity-10"></div>

                
                </div> */}
            </div>
        </>
    )
}

export default Profile
