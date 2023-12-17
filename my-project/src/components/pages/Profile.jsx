import React, { useEffect, useRef, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { IoIosAddCircleOutline } from "react-icons/io"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UploadImage from '../upladImage.jsx'
import PostsImages from '../PostsImages.jsx'
import Posts from '../Posts.jsx'

const Profile = () => {
    const [creator, setCreator] = useState({})
    const  [view,setView]= useState(false)
    const [change,setChange]=useState("")
    const [uploaded, setUploaded] = useState(false)
    const edit = useRef()
    const [posts,setPosts] = useState([])

    // const id = useParams(id)
    // console.log(creator)

    useEffect(() => {
        getCreator(1)
        getAllPosts(1)
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

    const getAllPosts = (id)=> {
        axios.get(`http://localhost:8080/posts/${id}`)
        .then(response => {setPosts(response.data)})
        .catch(error => console.error(error))
    }

    console.log(posts)
 
    return (
        <>
            <div className="h-fit min-h-full w-full px-12 py-7">
                <div className=" relative flex w-full flex-col items-center justify-center p-10">
                    <div className="relative">
                        <img
                            className="bg-container  md: h-[355px] md: w-[1040px] rounded-[5px] bg-Liver bg-opacity-10 brightness-50"
                            src={creator.bgImage}
                        />
                        <div
                            ref={edit}
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
                    <p className=" font-['SF Pro Display'] bottom-[50px] text-center w-fit text-[28px] font-semibold text-VanDyke md:absolute md:bottom-[67px]">
                        {creator.fullName}
                    </p>

                    <div ref={edit}
                            data-profile="profile"
                            onClick={() => {
                                setView(!view)
                                setChange("profile")
                                console.log(change)
                            }}  className=" absolute   flex h-[45px] w-[164px] items-center justify-center gap-2.5 rounded-[150px] bg-VanDyke p-2.5 md:bottom-[90px] md:right-[00px]">
                        <span className="font-['SF Pro Display'] absolute text-base font-semibold text-white">
                            Edit Profile
                        </span>
                    </div>
                   

                    <span className="font-['SF Pro Display']  w-fit text-center text-base font-normal leading-[25px] text-VanDyke text-opacity-80 md:absolute md:bottom-[-4px] md:w-[896px]">
                        {creator.bio}
                    </span>
                </div>
                <div>
                    {view && <UploadImage uploaded={uploaded} setUploaded={setUploaded} change={change} />}
                  
                </div>
                <IoIosAddCircleOutline onClick={()=>{setChange("post")
            setView(!view)}} className='bg-Liver rounded-[150px] text-white mb-5' size={30}/>
         <div className='flex flex-col md:flex-row'>
         <div className="w-[345px] h-[371px] bg-white bg-opacity-10 rounded-[5px] mr-24 ">
                <PostsImages posts={posts} creator={creator}/>
            </div>
            <div>
                <Posts posts={posts} creator={creator}/>
            </div>
         </div>
            
            </div>
            
        </>
    )
}

export default Profile
