const db = require("../model/index.js");
const Creator= db.Creator
const createCreator=async(req,res)=>{
    try {
        const {fullName,pfImage,status,bio,email,password,adress}=req.body
        const creator= await Creator.create(
            {
                fullName,
                pfImage,
                status,
                bio,
                email,
                password,
                adress
            }
        )
        res.status(201).send("successful")
    }
    catch {
        res.status(404).send("error")
    }
}
module.exports = {createCreator}