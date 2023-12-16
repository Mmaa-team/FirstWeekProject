import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useParams } from 'react-router-dom'

const MyFavorite = () => {
    const {id}=useParams()
    const [data,setData]=useState([])
    const [desplay,setDesplay]=useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8080/favoriteItem/${id}`).then((res)=>{setData(res.data)})
        .catch((err)=>console.log(err))
    },[desplay])
    console.log(data)
    const deleteItem=(iditem)=>{
        axios.delete(`http://localhost:8080/favoriteItem/${iditem}/${id}`).then(()=>{setDesplay(!desplay)})
        .catch((err)=>console.log(err))
    }
  return (
    
     <div>
        <h1 className='  flex justify-center font-bold text-gray-500'>Your favorite items </h1>
       <div className="flex flex-wrap min-h-screen items-center justify-center bg-PaleDogwood"> 
       
       {data.map(item=>{

<div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8">
    <div className="max-w-xs cursor-pointer rounded-lg bg-Liver p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="w-full rounded-lg object-cover object-center" src={item.image} alt="product" />
      <div>
        <div className="my-6 flex items-center justify-between px-4">
          <p className="font-bold text-gray-500">{item.name}</p>
          <p className="rounded-full bg-VanDyke px-2 py-0.5 text-xs font-semibold text-white">${item.price}</p>
        </div>
        
        <div className="my-4 flex items-center justify-between px-4">
          <p className="text-sm font-semibold text-gray-500">Delete</p>
          <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600"><MdDelete  onClick={()=>deleteItem(item.id)}/></p>
        </div>
      </div>
    </div>
  </div>
  
  
}) }
</div>
</div>
    

  )
}

export default MyFavorite
