const db = require("../model/index.js");
const Creator= db.Creator


const getOneCreator = async (req,res)=> {
try {
  const creator= await Creator.findOne({
     where: { id:req.params.id } 
  })
  res.send(creator)
}
catch {
  res.send("error")
}
}
const getAllCreators = async(req,res)=> {
  try {
    const creators = await Creator.findAll()
    res.send(creators)
  }
  catch {
    res.status(404).send("error")
  }
}
const updatePfImage=async(req,res)=>{
    try {
        const {pfImage}=req.body
        await Creator.update({pfImage}, {
            where: {
              id:req.params.id,
            },
          })
        res.status(200).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}

const updateBgImage=async(req,res)=> {
    try {
        const {bgImage}=req.body
        await Creator.update({bgImage}, {
            where: {
              id:req.params.id,
            },
          })
        res.status(200).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}
const updateAdress=async(req,res)=>{
    try {
        const {adress}=req.body
        await Creator.update({adress}, {
            where: {
              id:req.params.id,
            },
          })
        res.status(200).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}
const updateBio=async(req,res)=>{
    try {
        const {bio}=req.body
        await Creator.update({bio}, {
            where: {
              id:req.params.id,
            },
          })
        res.status(200).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}
const updateStatus=async(req,res)=>{
    try {
        const {status}=req.body
        await Creator.update({status}, {
            where: {
              id:req.params.id,
            },
          })
        res.status(200).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}
module.exports = {updatePfImage,updateBgImage,updateAdress,updateBio,updateStatus,getAllCreators,getOneCreator}