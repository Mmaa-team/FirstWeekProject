module.exports = (sequelize, DataTypes) => {
  const FollowingBrand = sequelize.define("followingBrand", {
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: 'id'
        }
      },
      creatorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "creators", 
          key: 'id'
        }
      }
  });
  return FollowingBrand;
};
