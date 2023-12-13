const db = require("./index.js");

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    "collection",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Collection;
};
