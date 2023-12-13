module.exports = (sequelize, DataTypes) => {
  const FollowingBrand = sequelize.define("followingBrand", {
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: 'id'
        }
      },
      brandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "brands", 
          key: 'id'
        }
      }
  },{ timestamps: false }
  );
  return FollowingBrand;
};
