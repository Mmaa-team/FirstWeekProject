module.exports = (sequelize, DataTypes) => {
  const Creator = sequelize.define(
    "creator",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bgImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pfImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:false
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
  return Creator;
};
