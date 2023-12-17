import React from "react";


const PostsImages = ({posts,creator})=> {
    return (
        <div>
        <div className="mt-5 mb-5 ml-5">
        <span className="mr-32 font-['SF Pro Display']">Photos</span>
        <button className="font-['SF Pro Display']">See all photos </button>

        </div>
        <div className="ml-5 mr-5 flex-row">

        {
            posts.map((post)=>{
                return <img className="w-[95px] h-[91px] mr-2 mb-2 rounded" src={post.image}/>
            })
            
        }
        </div>
        </div>
        )
}


export default PostsImages