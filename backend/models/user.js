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
    user_role: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 1,
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



module.exports = user;
