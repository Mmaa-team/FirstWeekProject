import React from 'react'

const Posts = ({ posts, creator }) => {
    return posts.map((post) => {
        return (
            <div className="mb-52">
                <div className="mb-2 flex flex-row">
                    <img
                        className="h-[43px] w-[43px] rounded-full"
                        src={creator.pfImage}
                    />
                    <div className="font-['SF Pro Display'] ml-4 text-xl font-semibold text-black">
                        {creator.fullName}
                    </div>
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
