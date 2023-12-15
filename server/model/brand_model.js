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
    bgImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, { timestamps: false }
  );
  return Brand;
};
