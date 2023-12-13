const db = require("./index.js");

module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    "favorite",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: "items",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
  return Favorite;
};
