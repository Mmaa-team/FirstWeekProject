module.exports=(sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userName: {
      type: DataTypes.STRING,
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
    dateBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },{ timestamps: false }
  );
  return Users;
};
