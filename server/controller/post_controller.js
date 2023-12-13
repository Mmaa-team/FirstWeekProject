const db = require("../model/index.js");
const Post = db.Post

const getAllPosts=(req,res)=> {
    Post.findAll({
        where: {
          creatorId:req.params.creatorId
        }
      })
      .then((response)=> {
          res.send(response.data)
      })
      .catch((error)=> {
        res.send(error)
      })
}

const addPost= async(req,res)=>{
    console.log(req.params.creatorId);
    console.log(req.body.status);
    try{

        const post = await Post.create({
            creatorId:req.params.creatorId,
            status:req.body.status ,
            image: req.body.image
        })
        res.status(201).send("successful")
    }
    catch{
        res.status(404).send("error")
    }

}

module.exports = {getAllPosts,addPost}