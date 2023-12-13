const db = require("./index.js")

module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define('basket', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: 'id'
      }
    },
    itemId: {
      type: DataTypes.INTEGER,
      references: {
        model: "items",
        key: 'id'
      }
    }
  }, { timestamps: false }
  );
  return Basket
}
