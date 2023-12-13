module.exports = (sequelize, DataTypes) => {
  const FollowingCreator = sequelize.define("followingCreator", {
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
  }, { timestamps: false }
  );
  return FollowingCreator;
};
