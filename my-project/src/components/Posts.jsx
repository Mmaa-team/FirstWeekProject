import React from "react";

const Posts = ({posts,creator})=> {
 return posts.map(post => {
    return (<div className="mb-52">
        <div className="flex flex-row mb-2">
        <img className="w-[43px] h-[43px] rounded-full" src={creator.pfImage} />
        <div className="text-black ml-4 text-xl font-semibold font-['SF Pro Display']">{creator.fullName}</div>
        </div>
        <div>
            <p className="font-['SF Pro Display'] mb-2">{post.status}</p>
            <img className="w-[666px] h-[426px] rounded-[5px]" src={post.image}/>
        </div>
    </div>)
 })


}

export default Posts