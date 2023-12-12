module.exports = (sequelize, DataTypes) => {
  const Creator = sequelize.define(
    "creator",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bgImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pfImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateBirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Creator;
};
