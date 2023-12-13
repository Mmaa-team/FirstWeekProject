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
      },
      like: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Posts;
};
