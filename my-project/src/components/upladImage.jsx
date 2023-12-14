import React, { useContext, useState } from "react";
import {storage} from "../firebase/firebaseImg"
import {ref,uploadBytes} from "firebase/storage"
import {v4} from "uuid"
import { MyContext } from "../MyContext";
const UploadImage=({changeBgImage})=> {
const {uploadImage} = useContext(MyContext)
const [imageUpload,setImageUpload]=useState(null)


    return (
        <div>
            <input type="file" onChange={(e)=>setImageUpload(e.target.files[0])} />
            <button onClick={()=>{uploadImage(imageUpload)}}> Upload Image</button>
        </div>
    )
}

export default UploadImage 