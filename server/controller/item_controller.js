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
      res.status(230).send([]);
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
      res.status(230).send([]);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getItemStatus = async (req, res) => {
  const { status } = req.params;
  console.log(status);
  try {
    const result = await Items.findAll({
      where: { status: status },
    });

    if (!!result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send([]);
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
      res.status(230).send([]);
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
    status,
    image,
  } = req.body;

  try {
    await Items.create({
      name: name,
      status: status,
      gender: gender,
      price: price,
      category: category,
      description: description,
      stock: stock,
      collectionId: collectionId,
      image: image,
    });

    res.status(200).send("Item created successfully");
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateItemStatus = async (req, res) => {
  const { itemId } = req.params;
  const { status } = req.body;
  console.log(itemId, status);
  try {
    await Items.update(
      { status: status },
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
