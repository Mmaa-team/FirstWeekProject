const db = require("../model/index.js");
const Items = db.Items;
const Creator = db.Creator;
const Collection = db.Collection;

exports.getAllItems = async (req, res) => {
  try {
    const result = await Items.findAll({});

    if (!!result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("Empty Items");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBrandItems = async (req, res) => {
  const { collectionId } = req.params;

  try {
    const result = await Items.findAll({
      where: { collectionId: collectionId },
    });

    if (!!result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("Empty Items");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getOneItem = async (req, res) => {
  const { name, collectionId } = req.params;

  try {
    const result = await Items.findOne({
      where: { collectionId: collectionId, name: name },
    });

    if (!!Object.keys(result).length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("Item Not found");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.postItem = async (req, res) => {
  const {
    name,
    gender,
    price,
    category,
    description,
    stock,
    collectionId,
    collectionCreatorId,
  } = req.body;

  try {
    await Items.create({
      name: name,
      status: true,
      gender: gender,
      price: price,
      category: category,
      description: description,
      stock: stock,
      collectionId: collectionId,
      collectionCreatorId: collectionCreatorId,
    });

    res.status(200).send("Item created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateItemStatus = async (req, res) => {
  const { itemId } = req.params;

  try {
    await Items.update(
      { status: false },
      {
        where: {
          id: itemId,
        },
      }
    );

    res.status(200).send("Item status updated");
  } catch (err) {
    res.status(400).send(err);
  }
};
