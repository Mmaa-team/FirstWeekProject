import React from "react";

const Posts = ({posts,creator})=> {
 return posts.map(post => {
    return (<div>
        <div className="flex flex-col md:flex-row">
        <img className="w-[43px] h-[43px] rounded-full" src={creator.pfImage} />
        <div className="text-black text-xl font-semibold font-['SF Pro Display']">{creator.fullName}</div>
        </div>
        <div>
            <p>{post.status}</p>
            <img className="w-[666px] h-[426px] rounded-[5px]" src={posts.image}/>
        </div>
    </div>)
 })


}

export default Posts