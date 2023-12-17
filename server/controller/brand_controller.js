const db = require("../model/index.js")
const Brand = db.Brand



exports.getAll = async (req, res) => {
    try {
        let brand = await Brand.findAll({})
        if (brand.length) {
            res.status(200).send(brand)
        }
        else {
            res.status(230).send([])
        }
    } catch (err) {
        res.status(400).json("error happen in getAll Brands", err)
    }
}

exports.getOne = async (req, res) => {
    const { brand } = req.params
    console.log(brand);
    try {
        const oneBrand = await Brand.findOne({ where: { id: brand } })
        res.status(200).send(oneBrand)
    } catch (err) {
        res.status(400).send("error happen in getOne Brand", err)
    }
}

exports.addBrand = async (req, res) => {
    const { brandName, brandImage, bgImage, status } = req.body
    try {
        let newBrand = await Brand.create({ brandName, brandImage, bgImage, status })
        res.status(200).json("added successfully")
    } catch (err) {
        res.status(400).json("error happen in add new Brand")
    }
}

exports.updateStatus = async (req, res) => {
    let idBrand = req.params.id_brand
    const { brandName, brandImage, status } = req.body
    try {
        const newStatus = await Brand.update({ brandName, brandImage, status }, {
            where: {
                id: idBrand
            }
        })
        res.status(200).json("Statust Brand updated successfully")
    } catch (err) {
        res.status(400).json("error happen in update Status Brand", err)
    }
}