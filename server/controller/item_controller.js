const db = require("../model/index.js");
const Items = db.Items;
exports.getAllItems = async (req, res) => {
  try {
    const result = await Items.findAll();
    if (!!result.length) {
      res.status(200).send(result);
    } else {
      res.status(230).send("Empty Items");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// exports.getBrandItem = async (req, res) => {
//   const {brand}=req.params
//   try {
//     const result = await Items.findAll({where:{}});
//     if (!!result.length) {
//       res.status(200).send(result);
//     } else {
//       res.status(230).send("Empty Items");
//     }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };

// exports.getOne = async (req, res) => {
//   const { name } = req.params;
//   try {
//     const result = await Items.findOne({ where: { name: name } });
//     if (!!result.length) {
//       res.status(200).send(result);
//     } else {
//       res.status(230).send("Item Not found ");
//     }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };
