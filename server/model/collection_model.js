const db = require("./index.js");

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define("collection", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creatorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "creators",
        key: "id",
      },
      allowNull:true
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: "brands",
        key: "id",
      },
      allowNull:true
    },
  },{ timestamps: false }
  );
  return Collection;
};
