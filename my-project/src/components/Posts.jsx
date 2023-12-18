import axios from 'axios'
import React from 'react'
import { GoTrash } from "react-icons/go";

const deletePost = async (idPost) => {
    await axios.delete(`http://localhost:8080/posts/${idPost}`)
  window.location.reload()
}
const Posts = ({ posts, creator }) => {
    return posts.map((post) => {
        return (
            <div className="mb-52">
             
                <div className="mb-2 flex flex-row items-center w-full gap-5 ">
                    <img
                        className="h-[43px] w-[43px] rounded-full"
                        src={creator.pfImage}
                    />
                    <div className="font-['SF Pro Display'] ml-4 text-xl font-semibold text-black">
                        {creator.fullName}
                    </div>
                    <GoTrash
                    className=" flex-auto  cursor-pointer text-xl"
                    onClick={() => deletePost(post.id)}
                />
                </div>
                <div>
                    <p className="font-['SF Pro Display'] mb-2">
                        {post.status}
                    </p>
                    <img
                        className="h-[426px] w-[666px] rounded-[5px]"
                        src={post.image}
                    />
                </div>
            </div>
        )
    })
}

export default Posts
