module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "post",
    {
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    { timestamps: false }
  );
  return Posts;
};
