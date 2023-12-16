import React from "react";


const PostsImages = ({posts,creator})=> {
 return posts.map((post)=>{
return <img className="w-[95px] h-[91px] rounded" src={post.image}/>
 })
}


export default PostsImages