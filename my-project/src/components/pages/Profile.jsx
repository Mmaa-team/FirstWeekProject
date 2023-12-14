import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axios from "axios"
import UploadImage from '../upladImage.jsx'
import { useContext } from 'react'
import { MyContext } from '../../MyContext.jsx'

const Profile = () => {
    const [creator,setCreator]=useState({})
    const [bgImage,setBgImage]= useState("")
    const [view,setView]= useState(false)
    const {url} = useContext(MyContext)
    // const id = useParams(id)
    // console.log(creator)
    useEffect(()=>{
        getCreator(1)
    },[])


    /////////////////////////////////////////getCreator/////////////////////////////////////////////////////////////////
    const getCreator = (id)=>{
        axios.get(`http://localhost:8080/creators/${id}`)
        .then(response => {
            setCreator(response.data)
        })
        .catch(error=> {
            console.error(error)
        })
    }

    /////////////////////////////////////////change background image/////////////////////////////////////////////////////////////////
    const changeBgImage = (url)=> {
        axios.put(`http://localhost:8080/creators//bgimage/${id}`,{bgImage:url})
        .then(response=>console.log(response))
        .catch(error=>console.error(error))
    }

 



    return (
        <>
            <div className="h-screen min-h-full w-full  ">
                <div className=" relative flex w-full flex-col items-center justify-center p-10">
                    <div className="relative">
                        <img
                            className="bg-container  h-[355px] w-[1040px] rounded-[5px] bg-black bg-opacity-50 brightness-50"
                            src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1703462400&Signature=b1CIpZokYicUNZaE0sb5b1olPuVE31PHgUGGTRSk9rxu9fymSlvlPQsgpa-yBFVQcfJelRF5aSPIcI3KeVCAMckiK4KdI5dFtI~qV9Rmh~XJJ0y82x4qFENGmCE7uRC66b4u6KpF~AhtGmBQEO3dRWnRtVb6KaEE20DWSKzY-EdgM8uRKNMRCTTZ8IBSFTwiUKnj~sbf3lhyF8YpyqWMHfYSogY36rBqa2xJUVG5eTEqLQ-HlWXD-Y1rt3Q~9m0--KlCfvzccvQArU13h8nUd0x7g3wI~2d9LbPbdFUesfHeN-eIMctEFsxXSxlDB~xfDTYrObRw9v3BClNFAnouog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />
                        <div onClick={()=>{setView(!view)}}  className=" bg-Liver absolute  bottom-2 right-[10px] flex  h-10 w-10 cursor-pointer  items-center justify-center rounded-[150px]">
                            <FaPen className="text-md  bg-[#733709bc}-500  text-BabyPowder absolute " />
                        </div>
                    </div>

                    <div className="relative top-[-70px] flex flex-col items-center justify-center">
                        <img
                            className="  bottom-[-40px] h-[120px] w-[120px] rounded-full border-2 border-white"
                            src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1703462400&Signature=Khr6ZqrA4YbygfFts47scMEctlkYLgl04Zpxn13YRnf0MO8e98-vITgHAghYj-tnhYFczLKPZ41mFBdKQa3aINOgrU16ivWlRcw3K76rmlHuiPYPzWuD2y~Nj8jUdtqNMWx~CxiAy4SDYIhrxYqxgeoV68Q-NMHmB6O4kOOFdGgo33fx~yIHk~ikUTjHKbiTuI6867CnrN-I9ug5MESGKaKJ3xCl4RZL3~OOt6v~bQ31NMeauzFyqQLxO8XxCVESgBSwQaPEF2r7cfIbQ-xH8pG0tOqCEVHwjdWawWjvvBaMo3RhakM~VIG5JWWcGmg5IUe8b-0LuEc5vnMFjxf28Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />

                        <div className=" bg-Liver absolute bottom-0 right-0 flex  h-10 w-10 cursor-pointer  items-center justify-center rounded-[150px]">
                            <FaCamera className="text-md    bg-Liver text-white " />
                        </div>
                    </div>
                    <p className=" font-['SF Pro Display'] text-VanDyke bottom-[50px] md:absolute md:bottom-[67px] w-fit text-[28px] font-semibold">
                        {creator.fullName}
                    </p>

                    <div className=" bg-VanDyke absolute flex bottom-0 h-[45px] w-[164px] items-center justify-center gap-2.5 rounded-[150px] p-2.5 md:bottom-[90px] md:right-[230px]">
                        <span className="font-['SF Pro Display'] absolute text-base font-semibold text-white">
                            Edit Profile
                        </span>
                    </div>
                    <div className="font-['SF Pro Display'] text-VanDyke w-fit text-center text-base font-normal leading-[25px] text-opacity-80 md:absolute md:bottom-[-4px] md:w-[896px]">
                        {creator.bio}
                    </div>
                </div>
                <div>
                    {view && <UploadImage />}
                </div>

                {/* <div className="flex justify-between items-center">
                <div className="h-[371px] w-[345px] rounded-[5px] bg-white bg-opacity-10"></div>

                
                </div> */}
                {/* 
                <div>
                    <div>
                        <img
                            className="h-[426px] w-[666px] rounded-[5px]"
                            src="https://via.placeholder.com/666x426"
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Profile
