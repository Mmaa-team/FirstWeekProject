module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define("brand", {
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  });
  return Brand;
};
