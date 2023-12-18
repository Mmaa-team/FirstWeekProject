const db = require("../model/index.js");
const Post = db.Post;

const getAllPosts=async (req,res)=> {
    try {

        const posts= await Post.findAll({
            where: {
                creatorId:req.params.creatorId
            }
        })
        console.log(posts)
        res.send(posts)
    }
        
      catch(error) {
        res.send(error)
      }
}

const addPost = async (req, res) => {
  try {
    const post = await Post.create({
      creatorId: req.params.creatorId,
      status: req.body.status,
      like: 0,
      image: req.body.image,
    });
    res.status(201).send("successful");
  } catch (error) {
    res.status(404).send(error);
  }
};

const updatePostStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await Post.update(
      { status },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).send(status);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("post deleted");
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getAllPosts, addPost, updatePostStatus, deletePost };
