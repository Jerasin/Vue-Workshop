const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/env/development");

const user = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!',
        fields: [sequelize.fn('lower', sequelize.col('email'))]
    },
      validate: {
        isEmail:true
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_role: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    updatedAt: false,
  }
);

(async () => {
  await sequelize.authenticate();
})();

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;
