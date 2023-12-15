const db = require("../model/index.js");
const Collection = db.Collection;
const Creator = db.Creator;
const Brand = db.Brand;
const Items = db.Items;

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
          where: { id: brand },
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

exports.getOneBrandsWithCreaterCollection = async (req, res) => {
  console.log(req.params);
  const { creator, collection_id, brand } = req.params;
  try {
    const result = await Collection.findOne({
      where: {
        id: collection_id,
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
            id: brand,
          },
        },
      ],
    
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
exports.getOneBrandsCollection = async (req, res) => {
  const {   brand } = req.params;
  try {
    const result = await Collection.findAll({
      where: {
        brandId: brand,
      },
      include: [
        {
          model: Items,
         
        },

        {
          model: Brand,
          where: {
            id: brand,
          },
        },
      ],
    
    });

      res.status(200).send(result);
    // if (Object.keys(result).length) {
    // } else {
    //   res.status(230).send("this Collection not found");
    // }
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
