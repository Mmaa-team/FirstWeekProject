module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{ timestamps: false }
  );
  return Items;
};
