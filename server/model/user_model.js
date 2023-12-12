module.exports=(sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Users;
};
