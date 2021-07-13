const {Sequelize , DataTypes } = require("sequelize");
const sequelize = require("../config/env/development");

const product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  product_code: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_stock: {
    type: Sequelize.INTEGER,
  },
  product_price: {
    type: Sequelize.INTEGER,
  },
  product_active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  product_image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "-",
  },
  createdBy:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  updatedBy:{
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
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
)


module.exports = product;
