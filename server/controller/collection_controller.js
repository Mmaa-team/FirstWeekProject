const db = require("../model/index.js");
const Collection = db.Collection;
const Creator = db.Creator;
const Brand = db.Brand;

exports.getAll = async (req, res) => {
  try {
    const result = await Collection.findAll({
      include: [{ model: Brand, model: Creator }],
    });

    if (result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("this Collection not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBrandCollections = async (req, res) => {
  const { brand, creator } = req.params;

  try {
    const result = await Collection.findAll({
      include: [
        {
          model: Creator,
          where: { id: creator },
        },
        {
          model: Brand,
          where: { brandName: brand },
        },
      ],
    });
    if (result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("Collections not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllBrandsCollections = async (req, res) => {
  const { creator } = req.params;
  try {
    const result = await Collection.findAll({
      where: {
        creatorId: creator,
      },
      include: [{ model: Brand }],
    });

    if (result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("this Collection not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getOneBrandsCollection = async (req, res) => {
  const { creator, collection_name, brand } = req.params;
  try {
    const result = await Collection.findOne({
      where: {
        name: collection_name,
      },
      include: [
        {
          model: Creator,
          where: {
            id: creator,
          },
        },

        {
          model: Brand,
          where: {
            brandName: brand,
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (Object.keys(result).length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("this Collection not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addCollection = async (req, res) => {
  const { creator, brand } = req.params;
  const { name } = req.body;
  try {
    const result = await Collection.create({
      name: name,
      creatorId: +creator,
      brandId: +brand,
    });
    res.status(200).send("collection Added");
  } catch (err) {
    res.status(400).send(err);
  }
};
